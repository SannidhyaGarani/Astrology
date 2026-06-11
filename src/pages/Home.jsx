import React from 'react';
import HeroSection from '../Components/home/HeroSection';
import About from '../Components/home/About';
import ServicesSection from '../Components/home/ServicesSection';
import CTA from '../Components/home/TrustSection';
import { BenefitsSection, TestimonialSection } from '../Components/home/Testemonials';
import EarthEnergeticsLab from '../Components/home/EarthLab';
import { ProcessSection, ToolsSection } from '../Components/home/Process';

const Home = () => {
  return (
    <main className="bg-[#f7f7f5] text-[#111827]">
      <HeroSection />
      <About />
      <ServicesSection />
      <EarthEnergeticsLab/>
      <ToolsSection/>
      <ProcessSection/>
      <BenefitsSection/>
      <TestimonialSection/>
      <CTA /> 
    </main>
  );
};

export default Home;

