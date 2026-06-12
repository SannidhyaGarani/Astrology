import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Factory, Building2, Home, Activity, ShieldCheck, Sparkles } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, delay, features }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full cursor-pointer"
    >
      {/* Outer Card Shell */}
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="h-full p-8 bg-[#141416] border border-[#C9A14A]/15 rounded-none transition-all duration-500 group-hover:border-[#C9A14A]/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group-hover:shadow-[0_30px_70px_rgba(201,161,74,0.06)] flex flex-col justify-between"
      >
        <div>
          {/* Icon & Geometric Aura */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-[#C9A14A]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-12 h-12 border border-[#C9A14A]/20 flex items-center justify-center bg-[#0D0D0E] group-hover:border-[#C9A14A]/50 transition-colors duration-500">
              <Icon className="w-5 h-5 text-[#C9A14A] stroke-[1.25px]" />
            </div>
          </div>

          {/* Heading and Body */}
          <h3 className="font-['Cinzel'] text-xl text-[#FAF9F5] font-bold tracking-wider mb-4 group-hover:text-[#C9A14A] transition-colors duration-300">
            {title}
          </h3>
          <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed mb-8 font-light">
            {description}
          </p>
        </div>

        {/* Technical Sub-features */}
        <div className="space-y-3.5 pt-6 border-t border-[#C9A14A]/10">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1 h-1 bg-[#C9A14A] opacity-60" />
              <span className="font-['Inter'] text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">
                {f}
              </span>
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
      description: "High-stakes diagnostic auditing for heavy manufacturing plants. We isolate and neutralize Geopathic Stress corridors to mitigate machinery fatigue and safeguard labor workflows.",
      icon: Factory,
      features: ["Machinery Longevity Matrices", "Geopathic Reversal Protocols", "Safety Optimization Metrics"]
    },
    {
      title: "Commercial Vastu Solutions",
      description: "Strategic energy mechanics tailored for corporate headquarters. Adjusting leadership layouts and core directional nodes to unlock capital liquidity and cultural equilibrium.",
      icon: Building2,
      features: ["Financial Flow Safeguards", "Executive Command Realignment", "Enterprise System Longevity"]
    },
    {
      title: "Residential Spatial Healing",
      description: "Re-engineering private real estate into high-vibrational sanctuaries. Specialized environmental adjustments targeting sleep architecture and structural memory without structural changes.",
      icon: Home,
      features: ["Sleep Hygiene Enhancements", "Elemental Node Balancing", "Structural Micro-Modifications"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#0D0D0E] relative overflow-hidden text-[#FAF9F5]">
      
      {/* 🌌 DISCRETE EDITORIAL GRIDLINES BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gradient-to-bl from-[#C9A14A]/5 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16 sm:mb-28">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A14A]/70" />
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Cinzel'] text-sm tracking-[0.5em] text-[#C9A14A] font-bold uppercase block"
            >
              Specialized Interventions
            </motion.span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F5] leading-[1.15] font-light max-w-4xl mx-auto"
          >
            Engineering Architectural Harmony <br />
            <span className="italic text-[#C9A14A] font-normal font-serif">Across Corporate Ecosystems</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 h-[1px] bg-[#C9A14A]/40 mx-auto mt-8"
          />
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.15}
            />
          ))}
        </div>
        
        {/* Institutional Trust Footprint */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 pt-10 border-t border-[#C9A14A]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-[#C9A14A]/20 flex items-center justify-center bg-[#141416]">
              <Activity className="text-[#C9A14A] w-3.5 h-3.5" />
            </div>
            <span className="font-['Inter'] text-sm uppercase tracking-[0.2em] text-gray-400 max-w-md leading-relaxed font-light">
              Diagnostic precision driven by calibrated **Lecher Antenna** metrics.
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-[#C9A14A]/20 flex items-center justify-center bg-[#141416]">
              <ShieldCheck className="text-[#C9A14A] w-3.5 h-3.5" />
            </div>
            <span className="font-['Inter'] text-sm uppercase tracking-[0.2em] text-gray-400 max-w-md leading-relaxed font-light">
              Retained assets verified by multi-tier **Industrial Titans**.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;