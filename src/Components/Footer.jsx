import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight
} from 'lucide-react';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "Our Story", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    expertise: [
      { name: "Industrial Analytics", path: "/services" },
      { name: "Commercial Vastu", path: "/services" },
      { name: "Residential Healing", path: "/services" },
      { name: "Earth Energetics", path: "/services" },
    ]
  };

  return (
    <footer className="relative bg-[#0A0A0A] pt-32 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A14A]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link to="/" className="inline-block">
              <img 
                src="img/1-1.webp" 
                alt="VrihadVastu Logo" 
                className="h-16 w-auto brightness-110"
              />
            </Link>
            <p className="font-['Inter'] text-gray-500 text-sm leading-loose tracking-wide max-w-sm">
              We blend ancient geometry with modern physics to create harmony in your architecture. Experience the science of energetic balance.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="group">
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:border-[#C9A14A]/50 group-hover:bg-[#C9A14A]/5">
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-[#C9A14A] transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-[#C9A14A] text-[10px] tracking-[0.3em] uppercase font-bold mb-10">Directory</h4>
            <ul className="space-y-5">
              {footerLinks.navigation.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 text-xs hover:text-white transition-all tracking-widest uppercase flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#C9A14A] transition-all group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[#C9A14A] text-[10px] tracking-[0.3em] uppercase font-bold mb-10">Solutions</h4>
            <ul className="space-y-5">
              {footerLinks.expertise.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 text-xs hover:text-white transition-all tracking-widest uppercase flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#C9A14A] transition-all group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Teaser */}
          <div className="lg:col-span-3">
            <h4 className="text-[#C9A14A] text-[10px] tracking-[0.3em] uppercase font-bold mb-10">Global Presence</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-default">
                <MapPin className="w-4 h-4 text-[#C9A14A] mt-1" />
                <p className="text-gray-400 text-[11px] leading-relaxed tracking-widest uppercase">
                  Studio Centers in<br/>Indore • Katni • Dubai
                </p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-white text-[10px] tracking-[0.2em] uppercase border-b border-[#C9A14A] pb-2 hover:gap-4 transition-all">
                Request Consultation <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[9px] text-gray-600 tracking-[0.4em] uppercase">
            © {currentYear} VrihadVastu Portfolio. Site by Design Studio.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[9px] text-gray-600 hover:text-[#C9A14A] transition-colors tracking-[0.3em] uppercase">Privacy</a>
            <a href="#" className="text-[9px] text-gray-600 hover:text-[#C9A14A] transition-colors tracking-[0.3em] uppercase">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;