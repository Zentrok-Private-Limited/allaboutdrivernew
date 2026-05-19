'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";
import { 
  Info, Target, Lightbulb, Monitor, Cpu, Printer, Volume2, 
  Wifi, Keyboard, Usb, Scan, HardDrive, CheckCircle2, 
  Users, BookOpen, Layout, Shield, ArrowRight, Quote, Mail 
} from 'lucide-react';


const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const DotGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      </pattern>
    </defs>

    <rect
      width="100%"
      height="100%"
      fill="url(#dotGrid)"
      className="text-slate-900"
    />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      
      <section className="relative pt-10 pb-24 px-6 max-w-7xl mx-auto">
        {/* Soft Background Globs */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-indigo-50/60 rounded-full blur-[100px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="text-xs font-base tracking-[0.25em] text-white uppercase bg-[#0367DF] px-4 py-2 rounded-full border border-blue-100/50 inline-flex items-center gap-2 shadow-sm">
                The Ultimate Driver Hub
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.1]">
              About 
              <span className="bg-linear-to-r from-[#1464D8] to-indigo-600 bg-clip-text text-transparent relative inline-block p-2">
                us
                {/* SVG Vector underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 font-light text-lg md:text-xl leading-relaxed max-w-xl">
              All About Driver is an informational website dedicated to helping users understand drivers, updates, compatibility, and common device-related topics through simple, clear, and educational content.
            </motion.p>
          </motion.div>

          {/* Hero Visual Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl aspect-4/3 bg-slate-50">
              <img 
                src="/about.png" 
                alt="Technology abstract" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-[#1464D8]/20 to-transparent mix-blend-overlay" />
            </div>
            
          </motion.div>
        </div>
      </section>

      
      <section className="py-15 relative border-t border-slate-100 bg-slate-50/30">
        <DotGrid />
        <div className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-4xl overflow-hidden shadow-lg border border-white relative aspect-4/5">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover filter brightness-[0.95]"
              />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-light tracking-[0.25em] text-[#1464D8] uppercase flex items-center gap-2">
                <span className="w-8 h-px bg-[#1464D8]"></span> Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight leading-tight">
                An information-based platform for <br/>
                <span className="pr-2 italic text-[#1464D8]">driver awareness</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
              <motion.p variants={fadeUp}>
                Welcome to All About Driver, an informational website created to help users better understand device drivers, driver updates, hardware compatibility, and common driver-related topics. Our platform is focused on sharing simple, clear, and useful information for people who want to learn more about how drivers support the performance and communication of their devices.
              </motion.p>
              <motion.p variants={fadeUp}>
                All About Driver is dedicated to publishing educational content around drivers and related technology topics. We are focused on building a helpful platform where visitors can explore driver basics, update awareness, compatibility guidance, and general troubleshooting knowledge in a simple and easy-to-read format.
              </motion.p>
              <motion.div variants={fadeUp} className="relative p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <Quote size={32} className="absolute top-4 right-4 text-blue-50 opacity-50" />
                <p className="text-slate-700 italic relative z-10 font-medium">
                  We understand that many users are not looking for overly technical explanations. That is why our content is written to be more approachable, so everyday readers can understand how drivers affect their systems and connected devices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-15 px-6 max-w-7xl mx-auto relative">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <motion.div variants={fadeUp} className="group p-10 rounded-[40px] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(20,100,216,0.12)] hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 group-hover:bg-blue-100/50 transition-colors duration-500" />
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-[#1464D8] text-white rounded-[20px] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
              <Target size={28} />
            </div>
            <h3 className="text-3xl text-slate-900 mb-4 tracking-tight">Our Mission</h3>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
              Our mission is to make driver-related information easier to understand for everyday users. We want to reduce confusion by providing content that explains these topics in a simple and informative way. We believe that better understanding leads to better decision-making and improved awareness when dealing with devices.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeUp} className="group p-10 rounded-[40px] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.12)] hover:border-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -z-10 group-hover:bg-indigo-100/50 transition-colors duration-500" />
            <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-[20px] flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-3xl text-slate-900 mb-4 tracking-tight">Our Vision</h3>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
              Our vision is to become a trusted informational destination for users seeking clear and reliable content about device drivers and related support topics. We aim to build a platform that supports learning, awareness, and digital confidence through consistent, well-structured, and user-focused content.
            </p>
          </motion.div>
        </motion.div>

        {/* What We Do */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="mt-24 p-12 rounded-[40px] bg-slate-50 border border-slate-100"
        >
          <div className="text-center mb-12 max-w-2xl mx-auto">
             <h3 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">Creating resources for <span className="italic text-[#1464D8]">hardware support</span></h3>
             <p className="text-slate-500 font-light mt-4 text-lg">At All About Driver, we create and organize informational content related to:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Device drivers and their role in system communication",
              "General awareness about driver updates",
              "Hardware and software compatibility topics",
              "Common driver-related issues and troubleshooting articles",
              "Educational blogs about connected devices and system support concepts"
            ].map((item, idx) => (
              <motion.div variants={fadeUp} key={idx} className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-blue-200 hover:shadow-[0_15px_30px_-10px_rgba(20,100,216,0.1)] transition-all group">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#1464D8] transition-colors duration-300">
                  <CheckCircle2 size={16} className="text-[#1464D8] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm md:text-base font-medium text-slate-700 leading-snug pt-1">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      
      <section className="py-15 px-6 max-w-7xl mx-auto border-t border-slate-100 relative overflow-hidden">
        
        <motion.div 
          animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-200 h-200 opacity-[0.02] pointer-events-none"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,80.7,-46.1C89.6,-33.1,94.5,-16.6,92.5,-1.1C90.5,14.4,81.6,28.8,71.3,40.9C61,53,49.2,62.8,35.9,70.9C22.6,79,7.7,85.4,-7.1,88.4C-21.9,91.4,-36.8,91,-50.3,84.7C-63.8,78.4,-75.8,66.2,-83.4,52.2C-91,38.2,-94.1,22.4,-93.6,7C-93.1,-8.4,-89,-23.4,-81.4,-36.5C-73.8,-49.6,-62.7,-60.8,-49.7,-68.6C-36.7,-76.4,-21.8,-80.8,-6.4,-77.8C9,-74.8,24.4,-64.4,30.6,-83.5C36.8,-102.6,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-light tracking-[0.25em] text-[#1464D8] uppercase items-center gap-2 text-center flex justify-center">
                <span className="w-8 h-px bg-[#1464D8]"></span> Hardware Connection
              </span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              Why <span className="italic pr-2 bg-linear-to-r from-[#1464D8] to-indigo-500 bg-clip-text text-transparent">drivers matter</span>
            </h2>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
              Drivers are a key part of how computers and devices function. They help operating systems communicate with hardware components, ensuring that devices can perform their intended tasks correctly.
            </p>
          </div>

          {/* Staggered Device Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16 relative z-10">
            {[
              { label: "Printers", icon: <Printer size={24} /> },
              { label: "Graphics cards", icon: <Monitor size={24} /> },
              { label: "Audio devices", icon: <Volume2 size={24} /> },
              { label: "Wi-Fi adapters", icon: <Wifi size={24} /> },
              { label: "Keyboards & Mice", icon: <Keyboard size={24} /> },
              { label: "USB devices", icon: <Usb size={24} /> },
              { label: "Scanners", icon: <Scan size={24} /> },
              { label: "Motherboards", icon: <Cpu size={24} /> },
              { label: "Storage", icon: <HardDrive size={24} /> },
              { label: "And more...", icon: <Layout size={24} /> }
            ].map((device, idx) => (
              <motion.div variants={fadeUp} key={idx} className="flex flex-col items-center justify-center p-6 rounded-[24px] bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-center hover:-translate-y-2 hover:border-[#1464D8]/30 hover:shadow-[0_20px_40px_-15px_rgba(20,100,216,0.15)] transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#1464D8] group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-4 shadow-sm">
                    {device.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 tracking-tight">{device.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="p-10 rounded-4xl bg-linear-to-r from-blue-50 to-indigo-50/50 border border-blue-100/50 text-center max-w-4xl mx-auto relative overflow-hidden shadow-sm">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#1464D8]" />
            <p className="text-slate-700 font-light leading-relaxed text-lg">
              Because drivers are connected to device communication and compatibility, understanding them can help users better recognize the reasons behind certain hardware issues or system behavior. This is why informational awareness around drivers remains important for everyone.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================================
          OUR CONTENT APPROACH
         ========================================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100 bg-white">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">Our Content Approach</h2>
          <p className="text-slate-500 font-light text-lg">We focus on delivering content that is practical, accessible, and easy to understand.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {[
            { title: "Easy to Understand", desc: "Simple and readable explanations for technical topics.", icon: <BookOpen size={24}/> },
            { title: "Informative", desc: "Building knowledge and awareness around drivers.", icon: <Lightbulb size={24}/> },
            { title: "User-Focused", desc: "Written for everyday users without technical backgrounds.", icon: <Users size={24}/> },
            { title: "Organized", desc: "Structured to help you find useful information quickly.", icon: <Layout size={24}/> },
            { title: "General & Accessible", desc: "Broad informational value without unnecessary complexity.", icon: <Shield size={24}/> }
          ].map((pillar, idx) => (
            <motion.div 
              variants={fadeUp}
              key={idx}
              className="p-8 rounded-4xl bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(20,100,216,0.1)] hover:border-blue-100 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#1464D8] group-hover:text-white group-hover:border-[#1464D8] transition-all duration-300">
                {pillar.icon}
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight">{pillar.title}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================================
          WHO IT'S FOR & WHAT MAKES US DIFFERENT
         ========================================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-100 bg-slate-50/50">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-3xl font-light text-slate-900 tracking-tight">Who Our Website Is For</h3>
            <ul className="space-y-4">
              {[
                "Everyday computer users",
                "Home users trying to understand device behavior",
                "Students learning about system functionality",
                "Office users using connected devices",
                "Readers looking for update information"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-600 font-light text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#1464D8]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-3xl font-light text-slate-900 tracking-tight">What Makes Us Different</h3>
            <p className="text-slate-500 font-light text-lg">
              What makes our platform different is our emphasis on clarity, simplicity, and informational value. We aim to create content that:
            </p>
            <ul className="space-y-4">
              {[
                "Avoids unnecessary complexity",
                "Helps readers understand topics step by step",
                "Focuses on awareness rather than confusion",
                "Uses approachable and readable language"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-600 font-light text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          COMMITMENT TO READERS (EDITORIAL QUOTE) & CTA
         ========================================================================= */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-slate-100">
        
        {/* Editorial Quote Panel */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative rounded-[48px] bg-linear-to-br from-slate-950 via-indigo-950 to-[#1464D8] text-white p-12 md:p-20 shadow-[0_40px_80px_-20px_rgba(20,100,216,0.25)] overflow-hidden mb-24 group"
        >
          {/* Parallax Glowing Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none group-hover:translate-x-10 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute -bottom-20 -left-20 w-100 h-100 bg-blue-500/30 rounded-full blur-[120px] pointer-events-none group-hover:-translate-y-10 transition-transform duration-1000" />

          {/* Grid Overlay for Texture */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <span className="text-sm font-bold text-cyan-300 tracking-[0.2em] uppercase border border-cyan-300/30 bg-cyan-900/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Our Commitment to Readers
            </span>
            <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-slate-200">
              We are committed to sharing helpful informational content that supports better understanding of drivers and related topics. At All About Driver, we believe that understanding the basics of device drivers can make technology feel less confusing and more manageable.
            </p>
            <div className="pt-8 w-full">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-cyan-300 mb-8 shadow-inner shadow-white/5">
                 <Quote size={28} className="rotate-180 fill-cyan-300/20" />
              </div>
              <p className="text-2xl md:text-4xl font-light leading-tight text-white italic">
                "Our goal is to help users explore driver-related topics with greater ease and build a stronger understanding of the systems they use every day."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Get In Touch CTA Box */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center max-w-2xl mx-auto space-y-8"
        >
           <h3 className="text-4xl font-light text-slate-900 tracking-tight">Get in Touch</h3>
           <p className="text-slate-500 font-light text-lg leading-relaxed">
             If you would like to connect with us, share feedback, or explore more of our informational content, feel free to visit our contact page.
           </p>
           <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1464D8] text-white font-semibold text-base hover:bg-blue-700 transition-all shadow-[0_10px_20px_rgba(20,100,216,0.2)] hover:shadow-[0_15px_30px_rgba(20,100,216,0.3)] active:scale-95 group">
               Contact Us <Mail size={18} className="group-hover:rotate-12 transition-transform" />
             </button>
             <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 shadow-sm group">
               Back to Home <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </motion.div>
      </section>

    </div>
  );
}