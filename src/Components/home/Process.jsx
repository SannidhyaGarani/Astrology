import React from 'react';
import { motion } from 'framer-motion';
import { Radar, BarChart3, Wind, ShieldCheck, Activity, Radio } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProcessSection = () => {
  const steps = [
    {
      title: "Scan",
      icon: Radar,
      desc: "Comprehensive mapping of subterranean water veins and celestial alignments.",
      delay: 0.2
    },
    {
      title: "Analyze",
      icon: BarChart3,
      desc: "Quantifying frequency distortions using Lecher resonance protocols.",
      delay: 0.4
    },
    {
      title: "Harmonize",
      icon: Wind,
      desc: "Neutralizing stress knots and restoring the property's natural golden ratio.",
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-[#FDFCF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Cinzel'] text-[10px] tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5"
          >
            The Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] font-medium italic"
          >
            From Resonance <span className="not-italic font-light text-[#C9A14A]">to Realignment</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-16 h-[1px] bg-[#C9A14A] mx-auto mt-8 origin-center"
          />
        </div>

        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#C9A14A]/20 hidden lg:block -translate-y-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent shadow-[0_0_15px_#C9A14A]"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: step.delay, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center text-center max-w-[280px]"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-[#C9A14A]/30 flex items-center justify-center mb-8 shadow-xl group hover:border-[#C9A14A] transition-colors duration-500">
                <div className="absolute inset-2 rounded-full border border-dashed border-[#C9A14A]/20 animate-[spin_10s_linear_infinite]" />
                <step.icon className="w-8 h-8 text-[#C9A14A]" />
              </div>
              <h3 className="font-['Cinzel'] text-lg text-[#1A1A1A] tracking-widest font-bold mb-4">{step.title}</h3>
              <p className="font-['Inter'] text-sm text-gray-500 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    {
      name: "Lecher Antenna",
      role: "Vibrational Measurement",
      desc: "High-precision German-engineered instrument used to detect subtle earth frequencies and geopathic stress lines at the 7.83Hz resonance.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070",
      icon: Activity
    },
    {
      name: "Universal Aura Scanner",
      role: "Bio-Field Visualization",
      desc: "Digital resonance scanner used to quantify the energetic integrity of residential and industrial land imprints.",
      image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2070",
      icon: ShieldCheck
    },
    {
      name: "Esmog Quantifier",
      role: "EMF Synchronization",
      desc: "Advanced sensor array for detecting electromagnetic interference and high-tension grid stress in modern corporate environments.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
      icon: Radio
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-[#FBF9F5] text-[#1A1A1A] relative overflow-hidden">

      {/* Background Subtle Grid - The "Earth Matrix" */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C9A14A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Cinzel'] text-[10px] tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5"
          >
            Scientific Diagnostic Suite
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] font-medium italic"
          >
            Proprietary <span className="not-italic font-light text-[#C9A14A]">Instrumentation</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-16 h-[1px] bg-[#C9A14A] mx-auto mt-8 origin-center"
          />
        </div>

        {/* SWIPER COMPONENT */}
        <div className="tools-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1.2}
            centeredSlides={false}   // ❌ remove center mode
            initialSlide={0}         // ✅ force start from first
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 }
            }}
            className="!overflow-visible"
          >
            {tools.map((tool, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1 : 0.9,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group pb-12"
                  >
                    {/* Minimalist Image Card */}
                    <div className="relative h-[400px] sm:h-[360px] bg-white border border-[#C9A14A]/10 shadow-[0_15px_45px_rgba(201,161,74,0.08)] overflow-hidden transition-all duration-500 hover:border-[#C9A14A]/40 hover:shadow-[0_25px_60px_rgba(201,161,74,0.15)] group/card">
                      {/* Image Container with Desaturate to Color Effect */}
                      <div className="h-full w-full overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover/card:scale-110 grayscale-[0.8] group-hover/card:grayscale-0"
                          style={{ backgroundImage: `url(${tool.image})` }}
                        />
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                        
                        {/* Role Badge (Optional, keeps some context but minimalist) */}
                       
                      </div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Global Verification Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 sm:mt-24 pt-12 border-t border-[#C9A14A]/10 flex flex-wrap justify-center gap-x-16 gap-y-6"
        >
          {["Precision Verified", "Resonance Certified", "Quantum Standard"].map((tag, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#C9A14A]" />
              <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 uppercase font-['Inter']">{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Inline styles for Swiper Customization */}
      <style jsx global>{`
        .tools-swiper-container .swiper-pagination-bullet {
          background: #C9A14A !important;
          opacity: 0.2;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .tools-swiper-container .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        .tools-swiper-container .swiper-button-next,
        .tools-swiper-container .swiper-button-prev {
          color: #C9A14A !important;
          transform: scale(0.6);
          background: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(201,161,74,0.1);
        }
        .tools-swiper-container .swiper-button-next:after,
        .tools-swiper-container .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};
export { ProcessSection, ToolsSection };