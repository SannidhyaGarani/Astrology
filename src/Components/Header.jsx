import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // This checks if you have scrolled down the page
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo Section - Now uses your image */}
        <Link to="/" className="relative z-10">
          <img 
            src="img/1-1.webp" 
            alt="Logo" 
            className="h-12 w-auto object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Links - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 hover:text-[#C9A14A] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="px-7 py-2.5 border border-[#C9A14A] text-[#C9A14A] text-[10px] tracking-[0.2em] uppercase hover:bg-[#C9A14A] hover:text-white transition-all duration-500">
              Inquire
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-10 p-2"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#C9A14A] ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-4 h-0.5 bg-black ml-auto transition-all ${isOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Full-Screen Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-['Playfair_Display'] text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default PremiumNavbar;