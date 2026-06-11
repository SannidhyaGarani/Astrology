import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, ShieldCheck, Radio, Factory, Building2, Home, 
  Zap, Globe, RefreshCw, Microscope, Award, Quote, ArrowRight 
} from 'lucide-react';

// --- Sub-components for internal use ---

const SectionTitle = ({ subtitle, title, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[#C9A14A] tracking-[0.5em] text-[10px] font-bold mb-4 block uppercase font-['Inter']"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl lg:text-5xl font-['Cinzel'] font-bold text-[#1A1A1A] leading-tight"
    >
      {title}
    </motion.h2>
    <div className={`w-20 h-[1px] bg-[#C9A14A] mt-6 opacity-40 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`bg-white/40 backdrop-blur-md border border-[#C9A14A]/10 p-8 shadow-[0_15px_35px_rgba(201,161,74,0.05)] transition-all duration-500 hover:border-[#C9A14A]/40 hover:shadow-[0_25px_50px_rgba(201,161,74,0.12)] ${className}`}
  >
    {children}
  </motion.div>
);

// --- MAIN COMPONENT ---

const VrihadVastuAboutPage = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-[#FDFCF9] min-h-screen font-['Inter'] selection:bg-[#C9A14A]/20 selection:text-[#C9A14A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-26">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Background Grid Pattern */}
           <div className="absolute inset-0" style={{ 
             backgroundImage: `radial-gradient(#C9A14A 0.5px, transparent 0.5px)`,
             backgroundSize: '40px 40px' 
           }} />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#FDFCF9_80%)]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#C9A14A]/10 rounded-full pointer-events-none"
          />
          
          <span className="font-['Cinzel'] text-[#C9A14A] tracking-[0.6em] text-xs font-bold mb-6 block">
            Vrihad Vastu & Earth Energetics
          </span>
          <h1 className="text-6xl lg:text-8xl font-['Cinzel'] text-[#1A1A1A] leading-[1.1] mb-8">
            Engineering Energy.<br />
            <span className="italic text-[#C9A14A] font-light">Designing Destiny.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg lg:text-xl font-light leading-relaxed">
            A legacy of Vedic architecture evolving into scientific Earth Energetics—transforming built environments into high-frequency zones of success.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col items-center"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#C9A14A] to-transparent" />
            <span className="text-[10px] tracking-widest uppercase text-gray-400 mt-4">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. LEGACY SECTION */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle subtitle="Est. 2000" title="A Foundation of Vedic Mastery" centered={false} />
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
              For over two decades, Vrihad Vastu has championed the philosophy that **"A building is a living energy system."** What began as a deep study of sacred geometry and architectural Vastu in Indore has matured into an internationally recognized consultancy.
            </p>
            <div className="flex gap-12 border-t border-[#C9A14A]/20 pt-10">
              <div>
                <p className="text-4xl font-['Cinzel'] text-[#1A1A1A] mb-2">25+</p>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">Years of Research</p>
              </div>
              <div>
                <p className="text-4xl font-['Cinzel'] text-[#1A1A1A] mb-2">10k+</p>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold">Spaces Harmonized</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="aspect-square bg-[url('https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070')] bg-cover bg-center border-[12px] border-white shadow-2xl relative z-10"
             /></div>
        </div>
      </section>

      {/* 3. FOUNDER: DEVENDRA SINGHAI */}
      <section className="py-32 bg-[#FBF9F5] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

    {/* Image Section */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="order-2 lg:order-1 relative"
    >
      {/* Image */}
      <div className="relative z-10 overflow-hidden border border-[#C9A14A]/20">
        <img 
          src="img/Dv.webp" 
          alt="Devendra Singhai" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
        />
      </div>

      {/* Decorative Border */}
      <div className="
        absolute 
        top-0 left-0 
        sm:-top-6 sm:-left-6 
        w-24 h-24 sm:w-32 sm:h-32 
        border-l-2 border-t-2 border-[#C9A14A]
      " />
    </motion.div>

    {/* Content Section */}
    <div className="order-1 lg:order-2">
      <SectionTitle 
        subtitle="Founder & Visionary" 
        title="Vastuvid Devendra Singhai" 
        centered={false} 
      />

      {/* Quote */}
      <div className="space-y-6 text-gray-600 font-light italic text-lg sm:text-xl font-['Playfair_Display'] mb-10 border-l-4 border-[#C9A14A] pl-6 sm:pl-8">
        "Architecture is not just about brick and mortar; it is about aligning the micro-cosmos of a building with the macro-cosmos of the universe."
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
        A Gold Medalist Vastu expert and specialist in Temple Architecture, Devendra Singhai has spent a lifetime decoding the mathematical laws of energy. His work bridges the gap between ancient Sanskrit texts and modern structural needs.
      </p>

      {/* Badge */}
      <div className="flex items-center gap-4 text-[#C9A14A]">
        <Award size={22} className="sm:w-6 sm:h-6" />
        <span className="text-xs sm:text-sm tracking-widest font-bold uppercase">
          Award-Winning Vedic Consultant
        </span>
      </div>
    </div>

  </div>
</section>

      {/* 4. EVOLUTION: ASHISH SINGHAI */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionTitle subtitle="The Evolution" title="Ashish Singhai & Earth Energetics" centered={false} />
            <p className="text-gray-600 text-lg font-light mb-8">
              Under the leadership of **Ashish Singhai**, the legacy has evolved into a high-tech science. By integrating **Geobiology** and **Informational Physics** with Vastu, he introduced the revolutionary concept of "Solution Without Demolition."
            </p>
            <ul className="space-y-4">
               {["Lecher Antenna Diagnostics", "Quantum Field Balancing", "Geopathic Stress Neutralization"].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-[#1A1A1A] font-semibold text-sm tracking-wide">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]" />
                   {item}
                 </li>
               ))}
            </ul>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#1A1A1A] p-12 text-white relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe size={180} className="text-white" />
             </div>
             <h4 className="font-['Cinzel'] text-2xl text-[#C9A14A] mb-6">The Scientific Shift</h4>
             <p className="text-gray-400 font-light leading-relaxed mb-8">
                We no longer rely on intuition alone. We measure land frequencies using European instrumentation to ensure your industrial or residential plot is physically and energetically capable of supporting growth.
             </p>
             <Link to="/services">
               <button className="flex items-center gap-4 text-[#C9A14A] font-bold text-xs tracking-[0.3em] uppercase group">
                 View Methodology <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
               </button>
             </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT IS EARTH ENERGETICS */}
      <section className="py-32 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
             <span className="text-[#C9A14A] tracking-[0.5em] text-[10px] font-bold mb-4 block uppercase">The Core Science</span>
             <h2 className="text-4xl lg:text-5xl font-['Cinzel'] font-bold">Understanding Earth Energetics</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Geopathic Stress", 
                icon: Activity, 
                desc: "Neutralizing harmful radiation from underground water veins and fault lines that drain human vitality." 
              },
              { 
                title: "Energy Grids", 
                icon: Globe, 
                desc: "Mapping Hartmann and Curry lines to avoid electromagnetic knots that trigger machinery failure." 
              },
              { 
                title: "Land Healing", 
                icon: RefreshCw, 
                desc: "Clearing historical land memory and 'etheric imprints' to perform a vibrational factory reset on your property." 
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-white/5 border border-white/10 hover:border-[#C9A14A]/50 transition-all duration-500 group"
              >
                <card.icon className="text-[#C9A14A] mb-8 group-hover:scale-110 transition-transform" size={40} strokeWidth={1} />
                <h3 className="text-xl font-['Cinzel'] mb-4 text-[#C9A14A]">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative">
         <SectionTitle subtitle="Our Process" title="The High-Frequency Protocol" />
         <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A14A]/30 to-transparent -z-10" />
            
            {[
              { step: "01", label: "Scan", text: "Multi-point diagnostic using Lecher Antenna and Aura Scanners." },
              { step: "02", label: "Analyze", text: "Overlaying the energy grid onto architectural blueprints." },
              { step: "03", label: "Harmonize", text: "Applying proprietary bio-resonance tools for correction." }
            ].map((m, i) => (
              <div key={i} className="text-center group">
                 <div className="w-20 h-20 rounded-full border border-[#C9A14A]/30 bg-white mx-auto flex items-center justify-center mb-8 shadow-xl group-hover:bg-[#C9A14A] transition-colors duration-500">
                    <span className="font-['Cinzel'] text-[#C9A14A] group-hover:text-white transition-colors">{m.step}</span>
                 </div>
                 <h4 className="text-xl font-bold font-['Cinzel'] mb-4">{m.label}</h4>
                 <p className="text-gray-500 text-sm font-light max-w-[200px] mx-auto">{m.text}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 7. TECHNOLOGY */}
      

      {/* 8. CLIENT IMPACT */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle subtitle="Trusted by Industry Giants" title="The Impact of Alignment" centered={false} />
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div>
                  <p className="text-3xl font-['Cinzel'] text-[#1A1A1A] font-bold">18%</p>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mt-2">Productivity Increase</p>
               </div>
               <div>
                  <p className="text-3xl font-['Cinzel'] text-[#1A1A1A] font-bold">40%</p>
                  <p className="text-xs tracking-widest text-gray-400 uppercase mt-2">Breakdown Reduction</p>
               </div>
            </div>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale items-center">
               <span className="font-['Cinzel'] font-bold text-xl">JINDAL STEEL</span>
               <span className="font-['Cinzel'] font-bold text-xl">HALDIRAM'S</span>
               <span className="font-['Cinzel'] font-bold text-xl">SUZLON</span>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-[#C9A14A]/5 p-12 border border-[#C9A14A]/20 relative"
          >
             <Quote className="absolute top-10 right-10 text-[#C9A14A] opacity-20" size={60} />
             <p className="text-xl font-['Playfair_Display'] text-[#1A1A1A] leading-relaxed relative z-10 italic">
               "Since our industrial complex was audited and corrected for Geopathic Stress by Vrihad Vastu, our unplanned equipment downtime has vanished, and the work atmosphere is remarkably calm."
             </p>
             <div className="mt-8">
                <p className="font-bold text-sm tracking-widest uppercase">Director of Operations</p>
                <p className="text-gray-400 text-xs">Major Manufacturing Entity</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 9. VISION */}
      <section className="py-40 bg-[#FDFCF9] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.05),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <SectionTitle subtitle="Looking Ahead" title="The Future of Conscious Construction" />
          <p className="text-gray-500 text-xl font-light leading-relaxed">
            Our vision is to witness a world where every skyscraper, factory, and home is "Energy Certified." We are moving toward a future where spiritual wisdom and quantum physics integrate to create smart buildings that heal the people inside them.
          </p>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#1A1A1A] py-20 px-12 text-center relative overflow-hidden group">
          {/* Animated Background Element */}
          <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={{ duration: 10, repeat: Infinity }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A14A] rounded-full blur-[120px] pointer-events-none"
          />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-['Cinzel'] text-white mb-8">
              Transform Your Space Into a <br />
              <span className="text-[#C9A14A]">Power Zone</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12 font-light">
              Available for industrial site audits, corporate headquarters planning, and high-end residential energy consulting worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[#C9A14A] text-[#1A1A1A] font-bold font-['Cinzel'] tracking-widest text-sm shadow-[0_20px_40px_rgba(201,161,74,0.3)]"
                >
                  Book Consultation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 border border-white/20 text-white font-bold font-['Cinzel'] tracking-widest text-sm hover:bg-white hover:text-[#1A1A1A] transition-all"
                >
                  Contact Expert
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="py-10 border-t border-[#C9A14A]/10 text-center">
        <p className="text-[10px] tracking-[0.5em] text-gray-400 font-bold uppercase">
          © 2026 Vrihad Vastu — Scientifically Designed Harmony
        </p>
      </footer>

    </div>
  );
};

export default VrihadVastuAboutPage;