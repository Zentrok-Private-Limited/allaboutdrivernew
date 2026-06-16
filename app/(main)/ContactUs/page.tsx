'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Send, HelpCircle, MessageSquare, 
  ArrowRight, Sparkles, ShieldCheck 
} from 'lucide-react';

// =========================================================================
// DECORATIVE ABSTRACT CIRCUIT TECH BACKGROUND
// =========================================================================
const SchematicOverlay = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="1.5" fill="currentColor" />
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#contactGrid)" className="text-slate-900" />
    {/* Abstract circuit vector nodes */}
    <path d="M100,80 L180,80 L220,120 L220,200" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#1464D8] opacity-20" />
    <path d="M800,400 L850,450 L950,450" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600 opacity-20" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Driver Basics',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API integration pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', phone: '', subject: 'Driver Basics', message: '' });
    }, 1500);
  };

  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-500 selection:text-white relative overflow-hidden">
      
      {/* =========================================================================
          HERO HEADER LAYER (Luminous Blooms & Typographic Foundation)
         ========================================================================= */}
      <section className="relative pt-15 pb-12 px-6 max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/3 w-125 h-125 bg-blue-50/60 rounded-full blur-[130px] -z-10 pointer-events-none -translate-y-1/3" />
        <div className="absolute top-20 right-0 w-100 h-100 bg-indigo-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[#1464D8] uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100/50 inline-flex items-center gap-2 shadow-sm">
              <MessageSquare size={14} /> Get In Touch
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight"
          >
            Let's Start a <br className="sm:hidden" />
            <span className="pr-2 bg-linear-to-r from-[#1464D8] via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Have questions about device drivers, updates, or compatibility? Our team is here to help you understand the basics and stay informed about your hardware.
          </motion.p>
        </div>
      </section>

      
      <section className="relative py-16 px-6 max-w-7xl mx-auto z-10">
        <SchematicOverlay />
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                We're Here to <br />Help & Inform.
              </h2>
              <p className="text-slate-500 font-light text-sm leading-relaxed max-w-md">
                Whether you're looking for information about a specific driver or want to share feedback about our content, we're ready to connect with you.
              </p>
            </div>

            
            <div className="space-y-4 max-w-md">
              
              
              <div className="group flex items-start gap-4 p-5 bg-slate-50/50 border border-slate-100 hover:border-blue-100 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#1464D8] shrink-0 group-hover:bg-[#1464D8] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</h4>
                  <a href="mailto:info@madaboutdrivers.shop" className="text-sm font-semibold text-slate-800 hover:text-[#1464D8] transition-colors break-all">
                    info@allaboutdriver
                  </a>
                </div>
              </div>

              
              <div className="group flex items-start gap-4 p-5 bg-slate-50/50 border border-slate-100 hover:border-indigo-100 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Visit Us</h4>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    123 Main Street, <br />
                    Anytown, CA 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-4xl border border-slate-300/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1464D8] focus:bg-white transition-all"
                    />
                  </div>

                
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1464D8] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1464D8] focus:bg-white transition-all"
                    />
                  </div>

                 
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">Subject Topic</label>
                    <div className="relative">
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1464D8] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="Driver Basics">Driver Basics</option>
                        <option value="Update Awareness">Update Awareness</option>
                        <option value="Compatibility Questions">Compatibility Questions</option>
                        <option value="Blog Feedback">Blog Feedback</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800 tracking-wide uppercase">How can we help?</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Describe your question or inquiry detail here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1464D8] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1464D8] hover:bg-blue-600 disabled:bg-slate-400 font-bold text-sm text-white shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Message'}
                  <Send size={16} className={`${isSubmitting ? 'animate-ping' : ''}`} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="bg-slate-200/60 border border-slate-300 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#1464D8]">
              <Sparkles size={16} />
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Want to Explore More?</h3>
            </div>
            <p className="text-slate-500 font-light text-sm max-w-xl">
              Check out our latest blog posts for more information on drivers, system metrics, and hardware support.
            </p>
          </div>

          <a 
            href="/Blogs"
            className="group px-6 py-3 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-slate-800 hover:border-[#1464D8] hover:text-[#1464D8] inline-flex items-center gap-2 shadow-xs transition-all shrink-0"
          >
            Read Our Blog 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}