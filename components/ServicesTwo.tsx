'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, RefreshCw, HelpCircle, Monitor } from 'lucide-react';

const coreServices = [
  { 
    title: 'Hardware and Drivers', 
    icon: <Cpu size={24} />, 
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    hoverGlow: 'hover:shadow-[0_24px_48px_-15px_rgba(59,130,246,0.12)] hover:border-blue-200'
  },
  { 
    title: 'Update Guidance', 
    icon: <RefreshCw size={24} />, 
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    hoverGlow: 'hover:shadow-[0_24px_48px_-15px_rgba(16,185,129,0.12)] hover:border-emerald-200'
  },
  { 
    title: 'Troubleshooting Help', 
    icon: <HelpCircle size={24} />, 
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    hoverGlow: 'hover:shadow-[0_24px_48px_-15px_rgba(245,158,11,0.12)] hover:border-amber-200'
  },
  { 
    title: 'Device Compatibility', 
    icon: <Monitor size={24} />, 
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    hoverGlow: 'hover:shadow-[0_24px_48px_-15px_rgba(79,70,229,0.12)] hover:border-indigo-200'
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative bg-white">
      {/* Soft background radial gradient tuned for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight"
        >
          Explore <span className="font-medium italic bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">our services</span>
        </motion.h2>
        <div className="w-12 h-px bg-slate-200 mx-auto mt-6" />
      </div>

      {/* Grid Container */}
      <div className="grid md:grid-cols-4 gap-6">
        {coreServices.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, backgroundColor: '#ffffff' }}
            className={`group bg-slate-50/70 p-10 rounded-4xl border border-slate-100/80 transition-all duration-300 ${service.hoverGlow}`}
          >
            {/* Icon Container with clear crisp borders */}
            <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-8 border border-white/50 shadow-sm transition-transform duration-500 group-hover:rotate-10`}>
              <div className={service.color}>
                {service.icon}
              </div>
            </div>

            {/* Typography updated to deep high-contrast slate */}
            <h3 className="font-semibold text-lg text-slate-800 mb-3 tracking-tight group-hover:text-slate-950 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Informational resources designed to help you master your system architecture effortlessly.
            </p>

            {/* Interactive Call to Action Line */}
            <div className="mt-8 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors cursor-pointer">
              LEARN MORE
              <div className="w-0 group-hover:w-6 h-px bg-slate-900 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}