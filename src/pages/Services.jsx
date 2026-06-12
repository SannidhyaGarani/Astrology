import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Briefcase, 
  Home, 
  Radar, 
  RefreshCw, 
  Microscope, 
  ArrowRight 
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Breadcrumbs from '../Components/Breadcrumbs';

const services = [
  {
    title: "Industrial Earth Energetics",
    desc: "Optimizing machinery longevity and structural safety through tectonic stress neutralization.",
    icon: Factory,
    focus: "Productivity • Safety • Longevity"
  },
  {
    title: "Commercial & Corporate Vastu",
    desc: "Aligning executive workspaces to enhance decision clarity and sustainable financial flow.",
    icon: Briefcase,
    focus: "Leadership • Growth • Clarity"
  },
  {
    title: "Residential Energy Healing",
    desc: "Transforming living spaces into high-vibrational sanctuaries for health and family harmony.",
    icon: Home,
    focus: "Wellness • Peace • Vitality"
  },
  {
    title: "Geopathic Stress Detection",
    desc: "Scientific mapping of harmful earth radiations, fault lines, and underground water veins.",
    icon: Radar,
    focus: "Detection • Shielding • Health"
  },
  {
    title: "Land Healing & Balancing",
    desc: "Clearing historical land memory and etheric imprints to prepare sites for new construction.",
    icon: RefreshCw,
    focus: "Cleansing • Reset • Harmony"
  },
  {
    title: "Vastu Map Planning",
    desc: "Scientific architectural layout design based on 16 directions and zonal energy distribution for optimal life-flow.",
    icon: Microscope,
    focus: "Planning • Precision • Mapping"
  }
];

const MicroGridPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:5rem_5rem]" />
);

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="relative h-full"
    >
      {/* High-Contrast Luxury Panel Architecture */}
      <div className="relative h-full bg-white border border-[#C9A14A]/15 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#C9A14A] hover:shadow-[0_20px_40px_rgba(201,161,74,0.05)] group">
        
        {/* Micro Layout Indicator */}
        <div className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-zinc-300 group-hover:text-[#C9A14A] transition-colors">
          // SYS_MOD_0{index + 1}
        </div>

        <div>
          {/* Flat Premium Icon Frame */}
          <div className="w-14 h-14 bg-[#111111] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-105">
            <service.icon className="text-[#C9A14A]" size={24} strokeWidth={1.2} />
          </div>

          <span className="font-['Inter'] text-[10px] tracking-[0.35em] text-[#C9A14A] font-bold uppercase block mb-3">
            {service.focus}
          </span>

          <h3 className="text-2xl sm:text-3xl font-['Cormorant_Garamond'] font-light text-[#111111] mb-4 leading-tight tracking-tight">
            {service.title}
          </h3>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-light mb-8">
            {service.desc}
          </p>
        </div>

        <Link to="/contact" className="inline-block">
          <button className="inline-flex items-center gap-2.5 text-[#111111] text-xs font-bold tracking-[0.3em] uppercase group/btn">
            Request Matrix Analysis
            <ArrowRight size={14} className="text-[#C9A14A] transform transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const VrihadVastuServices = () => {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      <Breadcrumbs 
        title="Scientific Expertise" 
        subtitle="From heavy industrial architecture matrices to high-end residential parameters, we calibrate built environments to synchronize perfectly with telluric radiation grids."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />
      <section className="pb-16 bg-transparent relative overflow-hidden">
      <MicroGridPattern />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#FAF8F4_85%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* RESPONSIVE STRUCTURE: GRID FOR DESKTOP / TABLET */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* RESPONSIVE STRUCTURE: MOBILE NATIVE SLIDER */}
        <div className="md:hidden mb-12 services-mobile-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.05}
            centeredSlides={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i} className="h-auto">
                <ServiceCard service={service} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* HIGH-END INSTITUTIONAL CTA CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] text-white py-14 px-6 sm:px-12 lg:px-16 relative overflow-hidden shadow-2xl border border-zinc-800"
        >
          {/* Structural Radiance Vector */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 max-w-6xl mx-auto">
            <div className="max-w-xl">
              <span className="text-[#C9A14A] font-['Inter'] text-[10px] tracking-[0.4em] font-bold uppercase block mb-2">
                // System Diagnosis Advisory
              </span>
              <h4 className="text-white text-3xl sm:text-4xl font-['Cormorant_Garamond'] font-light tracking-tight">
                Require Custom Architectural Mapping?
              </h4>
              <p className="text-zinc-400 font-light text-sm sm:text-base mt-2">
                Connect directly with our engineering core to isolate custom telemetry layouts for commercial setups or corporate ground operations.
              </p>
            </div>
            
            <div className="shrink-0">
              <Link to="/contact" className="block w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#C9A14A] hover:bg-[#b8913f] text-[#111111] font-bold font-['Cinzel'] tracking-[0.25em] text-xs transition-colors duration-300">
                  Acquire Guidance Matrix
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Customized Pagination Accents */}
      <style jsx global>{`
        .services-mobile-slider .swiper-pagination-bullet {
          background: #C9A14A !important;
          opacity: 0.25;
        }
        .services-mobile-slider .swiper-pagination-bullet-active {
          opacity: 1;
          width: 16px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
    </div>
  );
};

export default VrihadVastuServices;