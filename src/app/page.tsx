import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ResearchAreas from "@/components/sections/ResearchAreas";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import ResearchProcess from "@/components/sections/ResearchProcess";
import Statistics from "@/components/sections/Statistics";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import News from "@/components/sections/News";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ResearchAreas />
      <WhyChooseUs />
      <FeaturedResearch />
      <ResearchProcess />
      <Statistics />
      <Partners />
      <Testimonials />
      <News />
      <Contact />
    </>
  );
}
