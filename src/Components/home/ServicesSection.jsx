import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Factory, Building2, Home, Activity, Zap, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, delay, features }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-full p-8 bg-white/40 backdrop-blur-xl border border-[#C9A14A]/20 rounded-none shadow-[0_20px_50px_rgba(201,161,74,0.05)] transition-all duration-500 group-hover:border-[#C9A14A]/50 group-hover:shadow-[0_30px_60px_rgba(201,161,74,0.15)] flex flex-col"
      >
        {/* Icon & Glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#C9A14A]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="relative w-10 h-10 text-[#C9A14A] stroke-[1.25px]" />
        </div>

        {/* Content */}
        <h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] font-bold mb-4">{title}</h3>
        <p className="font-['Inter'] text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* Technical Sub-features */}
        <div className="space-y-3 pt-6 border-t border-[#C9A14A]/10">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#C9A14A] rounded-full" />
              <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#1A1A1A]/70 font-semibold">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Industrial Earth Energetics",
      description: "High-stakes diagnostic auditing for heavy manufacturing. We neutralize Geopathic Stress to prevent machinery fatigue and optimize labor safety.",
      icon: Factory,
      features: ["Machinery Longevity", "Geopathic Reversal", "Safety Optimization"]
    },
    {
      title: "Commercial Vastu",
      description: "Strategic energy mapping for corporate headquarters. Aligning the CEO's power position and North-sector blockages to ensure consistent financial liquidity.",
      icon: Building2,
      features: ["Financial Flow", "Leadership Dynamics", "Corporate Wellness"]
    },
    {
      title: "Residential Energy Healing",
      description: "Transforming homes into bio-energetic sanctuaries. Focused on sleep hygiene, fertility optimization, and Brahmasthan correction without demolition.",
      icon: Home,
      features: ["Sleep Hygiene", "Elemental Balancing", "Land Memory Clearing"]
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C9A14A]/[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Cinzel'] text-[10px] tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5"
          >
            Specialized Interventions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] font-medium italic"
          >
            Engineering Harmony <br />
            <span className="not-italic font-light text-[#C9A14A]">Across Every Built Environment</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-16 h-[1px] bg-[#C9A14A] mx-auto mt-8 origin-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.2}
            />
          ))}
        </div>
        
        {/* Secondary Trust Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-[#C9A14A]/10 flex flex-wrap justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <Activity className="text-[#C9A14A] w-5 h-5" />
            <span className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-gray-400">Diagnostic precision with Lecher Antenna Technology</span>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#C9A14A] w-5 h-5" />
            <span className="font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-gray-400">Trusted by SEBI Registered & Industrial Titans</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;