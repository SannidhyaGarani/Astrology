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
    title: "Energy Audit & Consultation",
    desc: "A comprehensive 360° scientific scan of property using proprietary Lecher instrumentation.",
    icon: Microscope,
    focus: "Analysis • Diagnosis • Strategy"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      {/* 3D Tilt Effect Container */}
      <div className="relative h-full bg-white/40 backdrop-blur-xl border border-[#C9A14A]/10 p-10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[#C9A14A]/40 group-hover:shadow-[0_30px_60px_rgba(201,161,74,0.12)]">
        
        {/* Animated Gradient Shimmer */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Glowing Corner Borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9A14A]/0 group-hover:border-[#C9A14A]/60 transition-all duration-500 rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A14A]/0 group-hover:border-[#C9A14A]/60 transition-all duration-500 rounded-br-2xl" />

        {/* Content */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-8 shadow-lg group-hover:rotate-[360deg] transition-transform duration-700">
            <service.icon className="text-[#C9A14A]" size={28} strokeWidth={1.5} />
          </div>

          <p className="text-[#C9A14A] text-[10px] tracking-[0.3em] font-bold mb-4 uppercase font-['Inter']">
            {service.focus}
          </p>

          <h3 className="text-2xl font-['Cinzel'] font-bold text-[#1A1A1A] mb-4 leading-snug">
            {service.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed font-light mb-8 line-clamp-3">
            {service.desc}
          </p>

          <Link to="/contact">
            <button className="flex items-center gap-3 text-[#1A1A1A] text-[11px] font-bold tracking-[0.2em] uppercase group/btn">
              Explore 
              <ArrowRight size={14} className="text-[#C9A14A] transition-transform group-hover/btn:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const VrihadVastuServices = () => {
  return (
    <section className="py-32 bg-[#FDFCF9] relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.03),transparent_70%)] rounded-full" />
        {/* Subtle Sacred Geometry Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ 
               backgroundImage: `radial-gradient(#C9A14A 1px, transparent 1px)`,
               backgroundSize: '60px 60px' 
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C9A14A] tracking-[0.5em] text-[10px] font-bold mb-4 block uppercase font-['Inter']"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-['Cinzel'] font-bold text-[#1A1A1A] mb-8"
          >
            Precision-Driven <br />
            <span className="italic font-light">Energy Solutions</span>
          </motion.h2>

          <div className="w-20 h-[1px] bg-[#C9A14A] mx-auto mb-8 opacity-40" />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg font-light leading-relaxed"
          >
            From industrial plants to personal sanctuaries, we engineer built environments that 
            re-align with the earth’s natural resonance systems.
          </motion.p>
        </div>

        {/* Grid - Desktop & Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Slider - Mobile Only */}
        <div className="md:hidden mb-20 services-mobile-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <ServiceCard service={service} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-[#1A1A1A] py-16 px-8 relative overflow-hidden group rounded-sm"
        >
          {/* Internal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.1),transparent_70%)] pointer-events-none" />
          
          <h4 className="text-white text-2xl font-['Cinzel'] mb-8 relative z-10">
            Not sure which service you need?
          </h4>
          
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,161,74,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-[#C9A14A] to-[#E5C77A] text-[#1A1A1A] font-bold font-['Cinzel'] tracking-[0.3em] text-xs uppercase shadow-2xl relative z-10 transition-all duration-300"
            >
              Get Expert Guidance
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx global>{`
        .services-mobile-slider .swiper-pagination-bullet {
          background: #C9A14A !important;
          opacity: 0.3;
        }
        .services-mobile-slider .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default VrihadVastuServices;