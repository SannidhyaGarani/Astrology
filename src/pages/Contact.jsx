import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Globe, 
  Instagram, 
  Linkedin, 
  Facebook 
} from 'lucide-react';

const ContactField = ({ label, type = "text", placeholder, name, value, onChange, required = true }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[10px] tracking-[0.2em] uppercase text-[#C9A14A] font-bold font-['Inter']">
      {label}
    </label>
    <input 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="bg-white/50 border-b border-[#C9A14A]/20 py-4 focus:border-[#C9A14A] outline-none transition-all duration-300 font-light text-[#1A1A1A] placeholder:text-gray-300"
    />
  </div>
);

const VrihadVastuContact = () => {
  const [activeTab, setActiveTab] = useState('industrial');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    concerns: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Vrihad Vastu Energy Audit Request*%0A%0A` +
      `*Full Name:* ${formData.name}%0A` +
      `*Address:* ${formData.address}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Audit Type:* ${activeTab.toUpperCase()}%0A` +
      `*Concerns:* ${formData.concerns}`;
    
    window.open(`https://wa.me/919312437037?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#FDFCF9] min-h-screen pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FBF9F5] -z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(201,161,74,0.05),transparent_70%)] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#C9A14A] tracking-[0.5em] text-[10px] font-bold mb-4 block uppercase"
          >
            Connect with the Source
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-['Cinzel'] text-[#1A1A1A] leading-tight"
          >
            Request an <br />
            <span className="italic font-light text-[#C9A14A]">Energy Audit</span>
          </motion.h1 >
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/30 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#C9A14A]" />
                </div>
                <div>
                  <h4 className="font-['Cinzel'] text-lg text-[#1A1A1A] mb-2">Corporate HQ</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Vrihad Vastu Center, <br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/30 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#C9A14A]" />
                </div>
                <div>
                  <h4 className="font-['Cinzel'] text-lg text-[#1A1A1A] mb-2">Direct Line</h4>
                  <a href="tel:+919312437037" className="text-gray-500 font-light hover:text-[#C9A14A] transition-colors">+91 9312437037</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[#C9A14A]/30 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#C9A14A]" />
                </div>
                <div>
                  <h4 className="font-['Cinzel'] text-lg text-[#1A1A1A] mb-2">Digital Inquiry</h4>
                  <a href="mailto:info@vrihadvastu.com" className="text-gray-500 font-light hover:text-[#C9A14A] transition-colors">info@vrihadvastu.com</a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-12 border-t border-[#C9A14A]/10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold mb-6">Social Resonance</p>
              <div className="flex gap-6">
                {[Instagram, Linkedin, Facebook, Globe].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ y: -5, color: "#C9A14A" }}
                    className="text-[#1A1A1A] transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: The Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-white p-8 lg:p-12 shadow-[0_40px_100px_rgba(201,161,74,0.08)] border border-[#C9A14A]/5 relative"
          >
            {/* Form Type Selector */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
              {['industrial', 'commercial', 'residential'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all duration-500 whitespace-nowrap ${
                    activeTab === tab 
                    ? 'bg-[#1A1A1A] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-400 hover:bg-[#C9A14A]/10'
                  }`}
                >
                  {tab} Audit
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <ContactField 
                  label="Full Name" 
                  placeholder="e.g. Ashish Singhai" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <ContactField 
                  label="Address" 
                  placeholder="Enter your address" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <ContactField 
                  label="Email Address" 
                  type="email" 
                  placeholder="name@domain.com" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <ContactField 
                  label="Phone Number" 
                  type="tel" 
                  placeholder="+91 ..." 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#C9A14A] font-bold font-['Inter']">
                  Specific Concerns
                </label>
                <textarea 
                  rows="4"
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about the geopathic stress or architectural challenges you are facing..."
                  className="bg-white/50 border-b border-[#C9A14A]/20 py-4 focus:border-[#C9A14A] outline-none transition-all duration-300 font-light text-[#1A1A1A] placeholder:text-gray-300 resize-none"
                />
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-[#1A1A1A] text-white font-['Cinzel'] tracking-[0.4em] text-xs uppercase flex items-center justify-center gap-4 group overflow-hidden relative shadow-2xl"
              >
                <span className="relative z-10">Initialize Consultation</span>
                <Send size={14} className="relative z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                <motion.div 
                  className="absolute inset-0 bg-[#C9A14A] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
              </motion.button>
            </form>

            {/* Form Footer Note */}
            <p className="mt-8 text-center text-gray-400 text-[10px] tracking-widest font-light">
              *All energy audits are handled with strict NDA protocols for industrial safety.
            </p>
          </motion.div>

        </div>

        {/* Bottom Decorative Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 h-96 w-full grayscale border border-[#C9A14A]/20 relative group overflow-hidden"
        >
          {/* Use a real Google Maps iframe here later */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033')] bg-cover bg-center opacity-40 transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF9] via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-6 border border-[#C9A14A]/40 shadow-2xl text-center">
              <h3 className="font-['Cinzel'] text-[#1A1A1A] mb-2 tracking-widest">Global Reach</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Consulting across Asia, Europe & the Middle East</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VrihadVastuContact;