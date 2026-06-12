import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TrendingUp, Heart, Coins, ShieldCheck, Star } from 'lucide-react';

// --- STATS COUNTER COMPONENT ---
const StatCounter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Increased Productivity",
      val: "42",
      suffix: "%",
      icon: TrendingUp,
      desc: "Removal of geopathic interference allows for deeper neural flow states."
    },
    {
      title: "Enhanced Vitality",
      val: "68",
      suffix: "%",
      icon: Heart,
      desc: "Alignment with the Schumann resonance improves circadian sleep cycles."
    },
    {
      title: "Financial Growth",
      val: "35",
      suffix: "x",
      icon: Coins,
      desc: "Harmonized spaces attract abundance by clearing stagnant energy knots."
    },
    {
      title: "Reduced Breakdowns",
      val: "90",
      suffix: "%",
      icon: ShieldCheck,
      desc: "Stabilizing telluric currents minimizes technical and emotional volatility."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0D0D0E] relative overflow-hidden text-[#FAF9F5]">
      {/* 🌌 DISCRETE EDITORIAL GRIDLINES BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#C9A14A_1px,transparent_1px),linear-gradient(to_bottom,#C9A14A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Cinzel'] text-sm tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5"
          >
            The Quantified Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#FAF9F5] leading-[1.1] font-medium italic"
          >
            Numerical <span className="not-italic font-light text-[#C9A14A]">Proof of Alignment</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-16 h-[1px] bg-[#C9A14A]/40 mx-auto mt-8 origin-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-10 bg-[#161618] border border-[#C9A14A]/10 hover:border-[#C9A14A]/30 transition-all duration-500 shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-[#C9A14A]/10 flex items-center justify-center mb-8 border border-[#C9A14A]/20">
                <b.icon className="w-6 h-6 text-[#C9A14A]" />
              </div>
              <h3 className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#FAF9F5] mb-3">
                <StatCounter value={b.val} suffix={b.suffix} />
              </h3>
              <p className="font-['Cinzel'] text-sm tracking-[0.2em] text-[#C9A14A] font-bold uppercase mb-4">{b.title}</p>
              <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed font-light px-2">{b.desc}</p>
              
              <div className="mt-8 w-8 h-[1px] bg-[#C9A14A]/20 group-hover:w-16 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS SECTION ---
const testimonials = [
  {
    quote: "My estate felt 'heavy' for years. Within weeks of the harmonization, the atmosphere shifted. My sleep is deeper and my focus is razor-sharp.",
    author: "Elena Vance",
    role: "Tech Founder",
    rating: 5
  },
  {
    quote: "The Lecher Antenna diagnosis revealed water veins I never knew existed. Fixing these anomalies literally saved my physical health.",
    author: "Julian Thorne",
    role: "Architectural Designer",
    rating: 5
  },
  {
    quote: "We saw a 30% increase in team output after the Vastu alignment of our office. It sounds like magic, but the metrics don't lie.",
    author: "Marcus Aurelius",
    role: "Private Equity",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <section className="py-16 sm:py-32 bg-[#FDFCF9] border-t border-[#C9A14A]/10 relative overflow-hidden">
      {/* Background aesthetic element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.05),transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Cinzel'] text-sm tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5"
        >Voices of the Aligned</motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl text-[#1A1A1A] leading-[1.1] font-medium italic mb-2"
        >
          What Our <span className="not-italic font-light text-[#C9A14A]">Clients Say</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-16 h-[1px] bg-[#C9A14A] mx-auto mt-6 mb-10 origin-center"
        />
        
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative h-[400px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/40 backdrop-blur-xl border border-[#C9A14A]/20 p-8 sm:p-12 lg:p-20 shadow-2xl relative"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A14A] text-[#C9A14A]" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl text-[#1A1A1A] italic leading-relaxed mb-10">
                "{testimonials[index].quote}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="font-['Cinzel'] text-sm tracking-[0.2em] text-[#1A1A1A] font-bold mb-1">
                  {testimonials[index].author}
                </h4>
                <p className="font-['Inter'] text-sm uppercase tracking-widest text-[#C9A14A] font-medium">
                  {testimonials[index].role}
                </p>
              </div>

              {/* Quote Mark Decoration */}
              <div className="absolute top-6 left-10 text-8xl font-serif text-[#C9A14A]/10 pointer-events-none">“</div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === i ? 'bg-[#C9A14A] w-8' : 'bg-[#C9A14A]/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BenefitsSection, TestimonialSection };