import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Moon, Sun, Star } from 'lucide-react';

const LabTab = ({ id, label, icon: Icon, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-6 px-8 py-8 w-full text-left transition-all duration-700 relative overflow-hidden group ${
      active 
        ? 'bg-white shadow-[0_10px_30px_rgba(201,161,74,0.1)]' 
        : 'hover:bg-[#C9A14A]/5'
    }`}
  >
    {/* Active Indicator Bar */}
    <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500 ${
      active ? 'bg-[#C9A14A] h-full' : 'bg-transparent h-0 group-hover:h-full group-hover:bg-[#C9A14A]/30'
    }`} />
    
    <Icon className={`w-5 h-5 transition-colors duration-500 ${active ? 'text-[#C9A14A]' : 'text-[#1A1A1A]/30'}`} />
    
    <div className="flex flex-col">
      <span className={`font-['Cinzel'] text-[11px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${
        active ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40'
      }`}>
        {label}
      </span>
      {active && (
        <motion.span 
          layoutId="activeSub"
          className="text-[9px] text-[#C9A14A] font-['Inter'] uppercase tracking-widest mt-1"
        >
          Active Diagnostic
        </motion.span>
      )}
    </div>
  </button>
);

const EarthEnergeticsLab = () => {
  const [activeTab, setActiveTab] = useState('gs');

  const content = {
    gs: {
      title: "Geopathic Stress",
      subtitle: "Telluric Frequency Analysis",
      description: "Subterranean anomalies like water veins and fault lines distort the Earth's natural resonance. Our diagnostics identify these 'Black Streams' that disrupt the harmonic balance of your sanctuary.",
      stats: ["Schumann Resonance Alignment", "Shielding Bio-Frequencies", "Field Distortion Mapping"],
      icon: <Moon className="w-12 h-12 text-[#C9A14A]/20 absolute top-4 right-4" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          <motion.path
            d="M 20 100 C 40 80, 60 120, 80 100 S 120 80, 140 100 S 180 120, 200 100"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle cx="100" cy="100" r="70" strokeWidth="0.5" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          <motion.path d="M 100 30 L 100 170 M 30 100 L 170 100" strokeWidth="0.5" opacity="0.3" />
        </svg>
      )
    },
    grids: {
      title: "Celestial Grids",
      subtitle: "Hartmann & Curry Nets",
      description: "The Earth is woven with invisible electromagnetic threads. We map the intersections of these global nets to ensure your living spaces avoid the 'Stress Knots' where energies stagnate.",
      stats: ["Curry Diagonal Mapping", "Hartmann Global Lattice", "Vortex Neutralization"],
      icon: <Compass className="w-12 h-12 text-[#C9A14A]/20 absolute top-4 right-4" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          {[...Array(8)].map((_, i) => (
            <motion.line key={i} x1={i * 25} y1="0" x2={i * 25} y2="200" strokeWidth="0.5" opacity="0.2" />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.line key={`h${i}`} x1="0" y1={i * 25} x2="200" y2={i * 25} strokeWidth="0.5" opacity="0.2" />
          ))}
          <motion.rect x="50" y="50" width="100" height="100" strokeWidth="1" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4 }} />
          <circle cx="100" cy="100" r="3" fill="#C9A14A" />
        </svg>
      )
    },
    healing: {
      title: "Etheric Clearing",
      subtitle: "Vibrational Land Reset",
      description: "Land retains the memory of history. Our clearing rituals perform a 'Celestial Reset,' removing dense imprints and restoring the land's original, high-vibrational state for prosperity.",
      stats: ["Anamnestic Clearing", "Pranic Infusion", "Harmonic Stabilization"],
      icon: <Sparkles className="w-12 h-12 text-[#C9A14A]/20 absolute top-4 right-4" />,
      visual: (
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#C9A14A] fill-none">
          <motion.circle cx="100" cy="100" r="40" strokeWidth="2" animate={{ r: [40, 60, 40], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="100" cy="100" r="20" fill="#C9A14A" opacity="0.3" />
          <path d="M 100 10 L 110 40 L 140 50 L 110 60 L 100 90 L 90 60 L 60 50 L 90 40 Z" fill="#C9A14A" transform="translate(0, 50)" />
        </svg>
      )
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FDFCF9] relative overflow-hidden border-t border-[#C9A14A]/10">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-0 border border-[#C9A14A]/20 shadow-2xl bg-white/50 backdrop-blur-md">
          
          {/* Navigation (Left Sidebar) */}
          <div className="w-full lg:w-1/3 flex flex-col border-r border-[#C9A14A]/20">
            <div className="p-6 sm:p-10 border-b border-[#C9A14A]/20 bg-[#1A1A1A]">
              <span className="font-['Cinzel'] text-[10px] font-bold uppercase tracking-[0.5em] text-[#C9A14A]">
                The Diagnostic Lab
              </span>
              <h2 className="text-white font-['Cormorant_Garamond'] text-3xl mt-2 italic">Celestial Auditing</h2>
            </div>
            
            <div className="flex-1">
              <LabTab id="gs" label="Geopathic Stress" icon={Moon} active={activeTab === 'gs'} onClick={setActiveTab} />
              <LabTab id="grids" label="Earth Grids" icon={Compass} active={activeTab === 'grids'} onClick={setActiveTab} />
              <LabTab id="healing" label="Land Clearing" icon={Sparkles} active={activeTab === 'healing'} onClick={setActiveTab} />
            </div>

            <div className="p-8 bg-[#C9A14A]/5">
               <p className="text-[10px] font-['Inter'] text-[#1A1A1A]/40 uppercase tracking-widest leading-loose">
                 All diagnostics are performed using Lecher Antenna resonance and planetary transit alignment.
               </p>
            </div>
          </div>

          {/* Display (Right Content Area) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 lg:p-16 gap-8 sm:gap-12 items-center relative">
            
            {content[activeTab].icon}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center"
              >
                <h3 className="font-['Cinzel'] text-[#C9A14A] text-xs font-bold tracking-[0.4em] mb-4">
                  {content[activeTab].subtitle}
                </h3>
                <h2 className="font-['Cormorant_Garamond'] text-[#1A1A1A] text-5xl font-medium mb-8 leading-tight">
                  {content[activeTab].title}
                </h2>
                <p className="font-['Inter'] text-[#1A1A1A]/70 text-base leading-relaxed mb-10 font-light">
                  {content[activeTab].description}
                </p>
                
                <div className="space-y-4">
                  {content[activeTab].stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]" />
                      <span className="font-['Cinzel'] text-[10px] uppercase tracking-widest text-[#1A1A1A] font-bold">
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual Frame */}
            <div className="relative flex items-center justify-center aspect-square rounded-full border border-[#C9A14A]/20 bg-[#FDFCF9] shadow-[0_20px_50px_rgba(201,161,74,0.1)] group">
              <div className="absolute inset-4 rounded-full border border-dashed border-[#C9A14A]/20 group-hover:rotate-90 transition-transform duration-1000" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 1.1, opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.8 }}
                  className="w-[70%] h-[70%]"
                >
                  {content[activeTab].visual}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Aesthetic Floating Element */}
      <div className="absolute bottom-10 right-10 flex gap-4 items-center">
        <div className="text-right">
          <p className="font-['Cinzel'] text-[9px] tracking-[0.3em] text-[#C9A14A] font-bold uppercase">Laboratory Standard</p>
          <p className="font-['Cormorant_Garamond'] text-[#1A1A1A] italic text-sm text-opacity-60">ISO-Cosmic Certified</p>
        </div>
        <div className="w-[1px] h-12 bg-[#C9A14A]/30" />
      </div>

    </section>
  );
};

export default EarthEnergeticsLab;