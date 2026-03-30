import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Award } from 'lucide-react';

const TimelineNode = ({ year, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="relative pl-12 pb-12 group"
    >
      {/* Vertical Line Segment */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C9A14A]/40 to-transparent group-last:bg-transparent" />

      {/* Glowing Node */}
      <motion.div
        animate={{
          boxShadow: ["0 0 0px rgba(201, 161, 74, 0)", "0 0 20px rgba(201, 161, 74, 0.4)", "0 0 0px rgba(201, 161, 74, 0)"],
          backgroundColor: ["#FDFCF9", "#C9A14A", "#FDFCF9"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1 w-[24px] h-[24px] rounded-full border-2 border-[#C9A14A] bg-white z-10"
      />

      <div className="flex flex-col gap-1">
        <span className="font-['Cinzel'] text-[#C9A14A] text-xs font-bold tracking-[0.3em] uppercase">{year}</span>
        <h4 className="font-['Cinzel'] text-xl text-[#1A1A1A] font-bold tracking-widest">{title}</h4>
        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed max-w-sm mt-3 font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutLegacy = () => {
  // Replace this with your actual founder image URL
  const founderImageUrl = "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071";

  return (
    <section id="about" className="py-16 sm:py-32 bg-[#FDFCF9] overflow-hidden relative border-t border-[#C9A14A]/10">

      {/* Background Watermarks */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

        {/* LEFT SIDE: Founder Portrait (PREMIUM RE-DESIGN) */}
        <div className="lg:col-span-5 relative group">

          {/* Subtle Rotating Mandella Watermark */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -left-16 w-64 h-64 text-[#C9A14A]/10"
          >
            <svg viewBox="0 0 200 200" className="fill-none stroke-currentColor stroke-1">
              <circle cx="100" cy="100" r="90" />
              {[...Array(24)].map((_, i) => (
                <line key={i} x1="100" y1="100" x2={100 + 100 * Math.cos(i * 15 * Math.PI / 180)} y2={100 + 100 * Math.sin(i * 15 * Math.PI / 180)} />
              ))}
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom easeOutExpo
            className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-black/10 p-4 bg-white border border-[#C9A14A]/20"
          >
            {/* The Image */}
            <div
              className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ backgroundImage: "url('/img/Dv.webp')" }}
            />

            {/* Overlay Gradient (stains the grayscale) */}
            <div className="absolute inset-4 bg-gradient-to-t from-[#C9A14A]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Signature Texture (Optional - add signature PNG here if available) */}
            {/* <img src={signatureUrl} className="absolute bottom-10 right-10 w-32 h-auto opacity-50" /> */}

            {/* Hover Frame Glow */}
            <div className="absolute inset-0 border border-[#C9A14A]/0 group-hover:border-[#C9A14A]/30 transition-all duration-700 pointer-events-none" />
          </motion.div>

          {/* Experience Stat Box (Re-styled and positioned on founder card) */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-10 bg-[#1A1A1A] text-white p-6 shadow-2xl flex flex-col gap-1 items-start min-w-[180px]"
          >
            <div className="flex gap-2 items-center">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A14A]" />
              <p className="font-['Inter'] text-[9px] uppercase tracking-widest text-gray-400 font-medium">Years Active</p>
            </div>
            <p className="font-['Cinzel'] text-4xl font-bold text-[#C9A14A]">25+</p>
            <p className="font-['Inter'] text-[8px] uppercase tracking-widest text-gray-300 font-light mt-1">Spatial Engineering Mastery</p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Narrative + Timeline (PREMIUM RE-DESIGN) */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-['Cinzel'] text-[10px] tracking-[0.6em] text-[#C9A14A] font-bold uppercase block mb-5">
              Decades of Alchemy
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] font-medium italic mb-6 sm:mb-8">
              A Legacy Rooted <br />
              <span className="not-italic text-[#C9A14A] font-light">in Golden Resonance</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="w-16 h-[1px] bg-[#C9A14A] origin-left mb-10"
            />

            <div className="space-y-6 font-['Inter'] text-gray-600 leading-relaxed text-base font-light max-w-2xl border-l-2 border-[#C9A14A]/20 pl-8">
              <p>
                Vrihad Vastu was conceived in 2000 as an institution dedicated to the "macro" understanding of spatial dynamics. Founded by <strong className="text-[#1A1A1A] font-medium font-['Cinzel'] tracking-wider text-xs">Vastuvid Devendra Singhai</strong>, a gold-medalist and temple Vastu specialist, the firm established that sacred geometric laws are potent accelerators of industrial and corporate success.
              </p>
              <p>
                Today, the legacy has evolved into a scientific powerhouse. Under the technical leadership of <strong className="text-[#1A1A1A] font-medium font-['Cinzel'] tracking-wider text-xs">Ashish Singhai</strong>, we have transitioned from traditional advisory to **Earth Energetics**—utilizing advanced, aerospace-grade instrumentation to heal land for India's industrial titans, including Jindal Steel and Haldiram’s.
              </p>
            </div>
          </motion.div>

          {/* Timeline and Credibility */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
            <div className="md:col-span-8 relative z-10">
              <TimelineNode
                year="2000"
                title="The Genesis"
                description="Establishment of Vrihad Vastu in Indore, focusing on high-precision Temple Vastu and industrial spatial planning."
                delay={0.2}
              />
              <TimelineNode
                year="Present"
                title="Earth Energetics Era"
                description="Implementation of Lecher Antenna diagnostics and Geopathic Stress remediation for the industrial elite."
                delay={0.4}
              />
            </div>

            {/* Awards Vertical List (New Premium Detail) */}
            <div className="md:col-span-4 flex flex-col gap-6 md:border-l border-[#C9A14A]/20 md:pl-6">
              <p className="font-['Cinzel'] text-[10px] tracking-[0.3em] text-[#C9A14A] font-bold uppercase mb-2">Award-Winning Mastery</p>
              {[
                { text: "Gold Medal ( Temple Architecture )", icon: Award },
                { text: "Best Vastuvid - National Award", icon: Award },
                { text: "Sacred Geometry Specialization", icon: MapPin },
              ].map((item, i) => (
                <motion.div key={i} className="flex items-center gap-3 p-3 bg-white border border-[#C9A14A]/10 rounded-sm">
                  <item.icon className="w-4 h-4 text-[#C9A14A]" />
                  <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#1A1A1A] font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutLegacy;