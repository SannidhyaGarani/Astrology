import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const zodiacSigns = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓"
];

const AstrologyHero = () => {
  const { scrollY } = useScroll();

  // Parallax depths
  const bgY = useTransform(scrollY, [0, 1000], [0, -150]);
  const starsY = useTransform(scrollY, [0, 1000], [0, -80]);
  const astrolabeRotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section className="relative min-h-screen bg-[#FDFCF9] overflow-hidden flex items-center pt-24 font-['Inter']">

      {/* 🌌 ENHANCED BACKGROUND IMAGE + GRADIENTS */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep, more visible astrology/celestial texture */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2070')] bg-cover bg-center opacity-30 mix-blend-multiply"
        />
        {/* Soft radial vignette to keep text readable */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#FDFCF9_80%)]" />
        {/* Golden ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,161,74,0.15),transparent_50%)]" />
      </motion.div>

      {/* ✨ PREMIUM FLOATING PARTICLES (Stardust) */}
      <motion.div style={{ y: starsY }} className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-[#C9A14A] rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center z-10 w-full">

        {/* 🔥 LEFT CONTENT: Typography & CTAs */}
        <div className="flex flex-col gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#C9A14A]"></div>
              <span className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#C9A14A] uppercase font-semibold">
                The Cosmic Intelligence
              </span>
            </div>

            <h1 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#1A1A1A]">
              Discover Your <br />
              <span className="italic text-[#C9A14A] font-light">
                Celestial Path
              </span>
            </h1>

            <p className="mt-8 text-gray-600 text-lg max-w-lg leading-relaxed font-light">
              Experience the wisdom of the universe through personalized astrology,
              cosmic alignments, and deep celestial insights crafted exclusively for your life journey.
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="flex gap-5 flex-wrap mt-4"
          >
            <Link to="/contact">
              <button className="px-10 py-4 bg-[#1A1A1A] text-white font-['Cinzel'] tracking-widest text-sm shadow-2xl shadow-[#1A1A1A]/20 hover:bg-[#C9A14A] hover:shadow-[#C9A14A]/30 transition-all duration-500">
                Get Your Reading
              </button>
            </Link>
            <Link to="/services">
              <button className="px-10 py-4 border border-[#C9A14A] text-[#C9A14A] font-['Cinzel'] tracking-widest text-sm hover:bg-[#C9A14A] hover:text-white transition-all duration-500">
                Explore Zodiac
              </button>
            </Link>
          </motion.div>
        </div>

        {/* 🌙 RIGHT SIDE: PREMIUM ASTROLABE / ZODIAC WHEEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center items-center w-full aspect-square max-w-[550px] mx-auto"
        >
          {/* Main Rotating Container */}
          <motion.div
            style={{ rotate: astrolabeRotate }}
            className="relative w-full h-full rounded-full flex items-center justify-center"
          >
            {/* 1. Outer Ring (Static frame) */}
            <div className="absolute inset-0 rounded-full border border-[#C9A14A]/20 shadow-[inset_0_0_60px_rgba(201,161,74,0.05)] bg-white/10 backdrop-blur-sm" />
            <div className="absolute inset-2 rounded-full border-2 border-[#C9A14A]/30" />

            {/* 2. Middle Rotating Ring (Dashed) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-dashed border-[#C9A14A]/60"
            />

            {/* 3. Inner Rotating Ring (Solid with markers) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 rounded-full border border-[#C9A14A]/40 flex items-center justify-center"
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={`marker-${i}`}
                  className="absolute w-full h-[1px] bg-[#C9A14A]/20"
                  style={{ transform: `rotate(${i * 22.5}deg)` }}
                />
              ))}
            </motion.div>

            {/* ZODIAC SIGNS (Mapped to outer ring) */}
            {zodiacSigns.map((sign, i) => {
              const rotation = i * 30;
              return (
                <div
                  key={`sign-${i}`}
                  className="absolute w-10 h-10 flex items-center justify-center text-[#C9A14A] text-2xl"
                  style={{
                    // Position at center
                    top: "50%",
                    left: "50%",
                    // Translate outward to the ring, then counter-rotate to keep upright
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-235px) rotate(-${rotation}deg)`,
                  }}
                >
                  <span className="hover:scale-125 hover:text-[#1A1A1A] transition-transform cursor-default duration-300 drop-shadow-md">
                    {sign}
                  </span>
                </div>
              );
            })}

            {/* SEGMENT TICKS (Outer Edge) */}
            {[...Array(72)].map((_, i) => (
              <div
                key={`tick-${i}`}
                className="absolute w-[1px] bg-[#C9A14A]/40"
                style={{
                  height: i % 6 === 0 ? '12px' : '6px',
                  top: 0,
                  left: "50%",
                  transformOrigin: "0 275px", // Half of max-w-[550px]
                  transform: `translateX(-50%) rotate(${i * 5}deg)`,
                }}
              />
            ))}

            {/* CENTER: Glowing Sun & Orbit */}
            <div className="absolute w-28 h-28 rounded-full border border-[#C9A14A]/30 flex items-center justify-center bg-white/50 backdrop-blur-md shadow-[0_0_80px_rgba(201,161,74,0.3)]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C9A14A] to-[#E5C77A] shadow-inner" />

              {/* Orbiting Moon/Planet */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
              >
                <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1A1A1A] rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* FLOATING DATA CARDS (Glassmorphism) */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-0 lg:right-[-40px] bg-white/60 backdrop-blur-xl border border-[#C9A14A]/30 px-6 py-4 shadow-2xl z-20"
          >
            <p className="text-[10px] tracking-[0.2em] text-gray-500 font-['Cinzel'] uppercase mb-1">
              Current Transit
            </p>
            <p className="text-xl text-[#1A1A1A] font-['Cormorant_Garamond'] font-semibold flex items-center gap-2">
              Venus in Taurus <span className="text-[#C9A14A]">♀</span>
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-0 lg:left-[-40px] bg-white/60 backdrop-blur-xl border border-[#C9A14A]/30 px-6 py-4 shadow-2xl z-20"
          >
            <p className="text-[10px] tracking-[0.2em] text-gray-500 font-['Cinzel'] uppercase mb-1">
              Moon Phase
            </p>
            <p className="text-xl text-[#1A1A1A] font-['Cormorant_Garamond'] font-semibold flex items-center gap-2">
              Waxing Crescent <span className="text-[#C9A14A]">☽</span>
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AstrologyHero;