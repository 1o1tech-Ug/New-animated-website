"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { type MouseEvent, type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function MagneticButton({
  children,
  variant = "primary",
  className,
  onClick,
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.35);
    y.set(offsetY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
    onClick?.(e);
  }

  const base =
    "relative isolate overflow-hidden rounded-full px-8 py-3.5 font-sans text-sm font-medium tracking-wide transition-colors duration-300 inline-flex items-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-medblue to-emerald text-white shadow-glow hover:shadow-glow-blue",
    ghost:
      "border border-white/20 text-white hover:border-emerald/50 hover:bg-white/5",
  };

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            animation: "ripple 650ms ease-out forwards",
          }}
        />
      ))}
    </motion.button>
  );
}
