import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, Globe, RefreshCw, Award, Quote, ArrowUpRight, 
  Layers, Hammer, Compass, Eye, ShieldAlert, ArrowRight
} from 'lucide-react';

import Breadcrumbs from '../Components/Breadcrumbs';

// --- Reusable Architectural Elements ---

const MicroGridPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
);

const SectionHeader = ({ tag, title, description, aligned = "left", isDark = false }) => (
  <div className={`mb-12 lg:mb-16 max-w-4xl ${aligned === "center" ? "mx-auto text-center" : "text-left"}`}>
    <span className="font-['Inter'] text-sm tracking-[0.5em] text-[#C9A14A] font-bold uppercase block mb-3">
      // {tag}
    </span>
    <h2 className={`font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-5 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
      {title}
    </h2>
    {description && (
      <p className={`font-['Inter'] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl ${aligned === 'center' ? 'mx-auto' : ''} ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
        {description}
      </p>
    )}
    <div className={`w-16 h-[1px] bg-[#C9A14A]/50 mt-6 ${aligned === "center" ? "mx-auto" : ""}`} />
  </div>
);

// --- MAIN ARCHITECTURAL COMPONENT ---

const VrihadVastuAboutPage = () => {
  const { scrollYProgress } = useScroll();
  const heroTranslateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#FCFAF6] text-[#111111] min-h-screen font-['Inter'] selection:bg-[#C9A14A]/20 selection:text-[#111111] overflow-hidden">
      <Breadcrumbs 
        title="Institutional Legacy" 
        subtitle="A twenty-five year trajectory translating architectural Vastu into structural Earth Energetics—calibrating physical landmarks to generate pristine harmonic outputs."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
      />
      
      {/* 2. CHRONICLE & DATA STATS (HIGH DENSITY TEXT) */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-b border-[#C9A14A]/15 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader 
              tag="The Heritage Outline" 
              title="A Twenty-Five Year Legacy" 
              description="For over two decades, Vrihad Vastu has proven that architectural foundations act as living, dynamic energy matrix ecosystems."
            />
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="aspect-[16/9] bg-[url('https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070')] bg-cover bg-center border border-[#C9A14A]/20 p-2.5 bg-white shadow-sm" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#C9A14A]/15">
              <div className="group">
                <span className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl text-[#111111] font-light group-hover:text-[#C9A14A] transition-colors duration-500 block mb-1">25+</span>
                <span className="font-['Inter'] text-sm tracking-widest font-bold uppercase text-zinc-500">Years of Deep Research</span>
              </div>
              <div className="group">
                <span className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl text-[#111111] font-light group-hover:text-[#C9A14A] transition-colors duration-500 block mb-1">10,000+</span>
                <span className="font-['Inter'] text-sm tracking-widest font-bold uppercase text-zinc-500">Environments Harmonized</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FOUNDER FOCUS: DEVENDRA SINGHAI */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-b border-[#C9A14A]/15 relative bg-[#FCFAF6]">
        <MicroGridPattern />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1 max-w-md mx-auto w-full">
            <div className="border border-[#C9A14A]/20 p-3 bg-white aspect-[4/5] overflow-hidden relative group shadow-sm">
              <img 
                src="img/Dv.webp" 
                alt="Vastuvid Devendra Singhai" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-102"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-[#C9A14A]/30 pointer-events-none hidden lg:block" />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <SectionHeader tag="Founder Profile" title="Vastuvid Devendra Singhai" />
            
            <div className="relative mb-8 pl-6 border-l-2 border-[#C9A14A]">
              <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl lg:text-4xl italic text-zinc-800 font-light leading-relaxed">
                "Architecture is not merely structural layout; it is the physical alignment of a custom micro-cosmos with the macro-geometry of the universe."
              </p>
            </div>

            <p className="text-zinc-600 font-light text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              A Gold Medalist Vastu expert and highly sought-after specialist in sacred temple structural geometry, Devendra Singhai has committed decades to decoding foundational energy blueprints. His methodology seamlessly transforms complex Vedic principles into physical equations.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-[#C9A14A]/15 text-zinc-600 shadow-sm">
              <Award className="w-4 h-4 text-[#C9A14A]" />
              <span className="text-sm tracking-[0.2em] font-bold uppercase">Certified Vedic Master Architect</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. EXECUTIVE LINEAGE: ASHISH SINGHAI (HIGH LEGIBILITY CRADLE) */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-b border-[#C9A14A]/15 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <SectionHeader 
                tag="Scientific Evolution" 
                title="Ashish Singhai // Earth Energetics" 
                description="Under the analytical management of Ashish Singhai, the traditional framework evolved into a high-visibility, quantum-certified science structure."
              />
              <p className="text-zinc-600 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
                By pairing precise geobiology loops with modern informational physics, he introduced the proprietary methodology of <strong className="text-zinc-900 font-medium">"Solution Without Demolition"</strong>—nullifying destructive anomalies while preserving structural assets intact.
              </p>
            </div>

            <div className="space-y-4 max-w-xl mb-8 lg:mb-0">
              {[
                { title: "Lecher Spectrum Diagnostics", subtitle: "Tracking micro-vibrational metrics down to Hz outputs." },
                { title: "Quantum Field Realignment", subtitle: "Deploying structural neutralizing resonance panels." },
                { title: "Geopathic Fault Shielding", subtitle: "Isolating high-friction tectonic radiation lines." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border-l-2 border-zinc-200 hover:border-[#C9A14A] bg-[#FCFAF6]/60 transition-colors duration-300">
                  <div className="text-sm font-bold text-[#C9A14A] font-['Cinzel'] mt-0.5">0{idx + 1}</div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#111111] mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 font-light">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#18181B] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden h-full flex flex-col justify-between shadow-lg">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#C9A14A_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <div>
                <Globe className="w-10 h-10 text-[#C9A14A] mb-8 stroke-[1.2px]" />
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl tracking-wide text-[#C9A14A] font-bold mb-4">The Calibration Shift</h3>
                <p className="text-zinc-300 font-light text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-md">
                  Intuition is verified via data. We map environmental vectors utilizing European high-precision laboratory instruments to guarantee industrial, corporate, and real estate assets perform at maximum efficiency.
                </p>
              </div>

              <Link to="/services" className="inline-flex items-center gap-3 text-sm tracking-[0.35em] text-[#C9A14A] font-bold uppercase group mt-auto">
                Discover Infrastructure Matrix 
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PHENOMENON LOG: WHAT IS EARTH ENERGETICS */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#111111] text-white relative">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader 
            tag="Core Science Schema" 
            title="The Physics of Earth Energetics" 
            description="Built environments do not exist in a vacuum. They are continuously influenced by deep subterranean grid structures."
            isDark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {[
              { 
                title: "Geopathic Radiation", 
                icon: ShieldAlert, 
                desc: "Identifying and neutralizing low-frequency energy friction points originating from subterranean water veins and tectonic fault slips." 
              },
              { 
                title: "Telluric Lattice Mapping", 
                icon: Layers, 
                desc: "Plotting Hartmann, Curry, and global grid patterns to prevent stress knots inside processing units and machinery anchors." 
              },
              { 
                title: "Vibrational Land Reset", 
                icon: RefreshCw, 
                desc: "Clearing historical property memory profiles to deliver a neutral, high-capacity baseline ready for expansion." 
              }
            ].map((node, idx) => (
              <div key={idx} className="p-8 lg:p-10 flex flex-col justify-between group hover:bg-zinc-900/40 transition-colors duration-500 min-h-[280px]">
                <div>
                  <node.icon className="text-[#C9A14A] mb-6 w-8 h-8 stroke-[1.2px]" />
                  <h3 className="font-['Cinzel'] text-base sm:text-lg tracking-widest font-bold mb-3 text-[#C9A14A]">{node.title}</h3>
                  <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light">{node.desc}</p>
                </div>
                <div className="text-sm tracking-widest uppercase text-zinc-500 mt-6 font-mono">// NODE_{idx+1}_ACTIVE</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SYSTEM PROTOCOL STEPS */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-b border-[#C9A14A]/15 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader tag="Operational Execution" title="The High-Frequency Protocol" aligned="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-[#C9A14A]/20 pointer-events-none" />

            {[
              { idx: "I", label: "Scan Matrix", text: "Multi-point telemetry analysis using certified Lecher spectrum modules." },
              { idx: "II", label: "Model Grid", text: "Overlaying localized telluric lattice nodes against architectural blueprint files." },
              { idx: "III", label: "Harmonize", text: "Applying specialized wave neutralizing systems to lock the target environment." }
            ].map((step, i) => (
              <div key={i} className="text-center flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full border border-[#C9A14A]/30 bg-[#FCFAF6] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C9A14A] group-hover:border-[#C9A14A] transition-all duration-500">
                  <span className="font-['Cinzel'] text-sm font-bold text-[#C9A14A] group-hover:text-white transition-colors">{step.idx}</span>
                </div>
                <h4 className="font-['Cinzel'] text-sm tracking-[0.25em] font-bold uppercase mb-2 text-[#111111]">{step.label}</h4>
                <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed max-w-[280px]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL METRICS (HIGH READING DENSITY) */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 border-b border-[#C9A14A]/15 bg-[#FCFAF6]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5">
            <SectionHeader tag="Validated Deliverables" title="The Mechanics of Efficiency" />
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <span className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl font-light text-[#111111]">18%</span>
                <span className="block text-sm tracking-widest uppercase text-zinc-500 font-bold mt-1">Human Efficiency Surge</span>
              </div>
              <div>
                <span className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl font-light text-[#111111]">40%</span>
                <span className="block text-sm tracking-widest uppercase text-zinc-500 font-bold mt-1">Mechanical Malfunction Drop</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C9A14A]/20">
              <span className="text-sm tracking-[0.3em] font-bold text-zinc-400 block mb-4 uppercase">// TRUSTED BY INSTITUTIONAL OPERATORS</span>
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-['Cinzel'] font-bold text-sm tracking-[0.2em] text-[#111111]/50">
                <span>JINDAL STEEL</span>
                <span>HALDIRAM'S</span>
                <span>SUZLON</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-[#C9A14A]/15 relative shadow-sm">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C9A14A]/10 stroke-[1px]" />
              <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl lg:text-3xl italic text-zinc-700 leading-relaxed font-light mb-6">
                "Following the complete audit and structural correction for Geopathic Stress patterns executed by Vrihad Vastu, unplanned machinery downtime inside our primary industrial block vanished completely. The spatial atmosphere is noticeably anchored."
              </p>
              <div>
                <span className="block font-['Inter'] text-sm tracking-wider font-bold uppercase text-[#111111]">Director of Engineering Operations</span>
                <span className="block text-sm text-zinc-400 font-light uppercase mt-0.5">Heavy Manufacturing Enterprise Cluster</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. GLOBAL CONSTRUCT STRATEGY */}
      <section className="py-16 sm:py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeader 
            tag="Conscious Architecture" 
            title="The Future of Smart Infrastructure" 
            aligned="center"
          />
          <p className="font-['Inter'] text-base sm:text-xl lg:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl mx-auto">
            Our global mission is to anchor an environment where commercial, industrial, and high-end residential frameworks are pre-calibrated to support human vitality and performance metrics cleanly.
          </p>
        </div>
      </section>

      {/* 9. PREMIUM CALL TO ACTION BLOCK */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto bg-[#111111] text-white py-16 px-6 sm:px-12 lg:px-20 relative overflow-hidden shadow-xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Calibrate Your Asset Into a <br />
              <span className="italic text-[#C9A14A] font-normal">High-Frequency Zone</span>
            </h2>
            <p className="font-['Inter'] text-zinc-400 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Available for complex industrial site telemetry, corporate headquarters configuration, and ultra-premium residential energy consulting contracts worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A14A] hover:bg-[#b8913f] text-[#111111] font-bold font-['Cinzel'] tracking-[0.2em] text-sm transition-colors duration-300">
                  Book Structural Audit
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 border border-zinc-700 hover:border-[#C9A14A] text-white font-bold font-['Cinzel'] tracking-[0.2em] text-sm transition-colors duration-300">
                  Connect With Specialist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-8 border-t border-[#C9A14A]/10 text-center bg-white">
        <p className="font-['Inter'] text-sm tracking-[0.5em] text-zinc-400 font-bold uppercase">
          © 2026 Vrihad Vastu // Engineered Environmental Resonance Matrix
        </p>
      </footer>

    </div>
  );
};

export default VrihadVastuAboutPage;