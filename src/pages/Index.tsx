import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Symptoms } from "@/components/Symptoms";
import { Causes } from "@/components/Causes";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Symptoms />
      <Causes />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;