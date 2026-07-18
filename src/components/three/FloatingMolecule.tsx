"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * Orbiting "atom" nodes connected to the core by thin emissive bonds —
 * a stand-in for a molecular / cellular structure. Purely decorative.
 */
function OrbitNode({
  radius,
  speed,
  offset,
  color,
  size,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const lineRef = useRef<THREE.BufferGeometry>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 1.3) * (radius * 0.35);
    if (ref.current) ref.current.position.set(x, y, z);
    if (lineRef.current) {
      lineRef.current.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)]);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.4}
          roughness={0.3}
        />
      </mesh>
      <line>
        <bufferGeometry ref={lineRef} />
        <lineBasicMaterial color={color} transparent opacity={0.25} />
      </line>
    </group>
  );
}

function Molecule() {
  const group = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  const nodes = useMemo(
    () => [
      { radius: 2.1, speed: 0.4, offset: 0, color: "#00C896", size: 0.14 },
      { radius: 2.6, speed: -0.3, offset: 2, color: "#1E88E5", size: 0.11 },
      { radius: 1.7, speed: 0.55, offset: 4, color: "#4FA6F7", size: 0.09 },
      { radius: 2.9, speed: -0.22, offset: 1, color: "#3EE8B9", size: 0.12 },
    ],
    []
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * 0.3,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -mouse.x * 0.2,
      0.05
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.15, 4]} />
          <MeshDistortMaterial
            color="#0E2A54"
            emissive="#00C896"
            emissiveIntensity={0.25}
            roughness={0.15}
            metalness={0.4}
            distort={0.35}
            speed={1.6}
            transparent
            opacity={0.92}
          />
        </mesh>
        <mesh scale={1.22}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshBasicMaterial color="#4FA6F7" wireframe transparent opacity={0.18} />
        </mesh>
        {nodes.map((n, i) => (
          <OrbitNode key={i} {...n} />
        ))}
      </group>
    </Float>
  );
}

export default function FloatingMolecule() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={40} color="#1E88E5" />
        <pointLight position={[-4, -2, -3]} intensity={25} color="#00C896" />
        <Suspense fallback={null}>
          <Molecule />
        </Suspense>
      </Canvas>
    </div>
  );
}
