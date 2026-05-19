'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, Wifi, Printer, ShieldCheck, Mail, Volume2, 
  Tv, Home, Camera, Watch, Lock, MessageSquare,
  Users, Headset, Banknote 
} from 'lucide-react';

const services = [
  { title: "Computers", icon: <Monitor size={22} /> },
  { title: "Wifi Network", icon: <Wifi size={22} /> },
  { title: "Printers", icon: <Printer size={22} /> },
  { title: "Security", icon: <ShieldCheck size={22} /> },
  { title: "Email", icon: <Mail size={22} /> },
  { title: "Audio/Video", icon: <Volume2 size={22} /> },
  { title: "Appliances", icon: <Tv size={22} /> },
  { title: "Smart Home", icon: <Home size={22} /> },
  { title: "Camera", icon: <Camera size={22} /> },
  { title: "Wearable", icon: <Watch size={22} /> },
  { title: "Home Lock", icon: <Lock size={22} /> },
  { title: "Ask Expert", icon: <MessageSquare size={22} /> },
];

export default function ElegantServiceSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Light Mode Friendly Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-50/60 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.25em] text-[#1464D8] uppercase mb-4 block"
          >
            How can we assist you?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight"
          >
            Schedule a <span className="font-medium italic bg-linear-to-r from-[#1464D8] to-indigo-600 bg-clip-text text-transparent pr-2">service</span> now!
          </motion.h2>
          <p className="mt-5 text-slate-500 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Select a category below to book a professional consultation or technical support session.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-24">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, backgroundColor: "#ffffff" }}
              transition={{ delay: index * 0.02, duration: 0.4 }}
              className="group relative bg-slate-50/60 border border-blue-200 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-100 hover:shadow-[0_20px_40px_rgba(20,100,216,0.06)] cursor-pointer"
            >
              {/* Icon Ring Wrapper */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 text-[#1464D8] border border-slate-100/80 shadow-sm group-hover:scale-110 group-hover:bg-blue-50/50 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-950 transition-colors tracking-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Features Section - Clean Light Mode UI */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          {[
            { label: "Expertise", title: "Certified Team", icon: <Users size={20}/> },
            { label: "Availability", title: "Always Active", icon: <Headset size={20}/> },
            { label: "Transparency", title: "Fair Pricing", icon: <Banknote size={20}/> },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center md:items-start group bg-slate-50/30 p-6 rounded-2xl border border-transparent hover:border-slate-100/80 hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1464D8] mb-4 shadow-sm">
                {f.icon}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                {f.label}
              </span>
              <h4 className="text-lg font-semibold text-slate-800 group-hover:text-[#1464D8] transition-colors">{f.title}</h4>
              <p className="mt-2 text-sm text-slate-500 font-light leading-relaxed text-center md:text-left">
                Experience high-quality service tailored specifically to your hardware needs.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}