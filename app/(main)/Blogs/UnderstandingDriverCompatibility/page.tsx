'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Terminal, Layers, Cpu, CheckCircle2
} from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const articleContent = {
  meta: {
    category: "Basics",
    date: "March 10, 2026",
    readTime: "6 Min Read",
    tags: ["Basics", "Compatibility", "Drivers"]
  },
  title: "How to Understand Driver Compatibility with Your System",
  author: {
    name: "Hardware Experts",
    organization: "All About Driver",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  },
  media: {
    mainImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    inlineImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
  }
};

const relatedArticles = [
  {
    title: "What Are Device Drivers and Why Are They Important",
    category: "Basics",
    image: "/blog1.jpg",
    slug: "/Blogs/DeviceDriverImportance"
  },
  {
    title: "Why Driver Updates Matter for Performance and Compatibility",
    category: "Updates",
    image: "/blog4.jpg",
    slug: "/Blogs/WhenToUpdateDrivers"
  },
  {
    title: "Common Signs Your Device May Have a Driver Issue",
    category: "Troubleshooting",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    slug: "/Blogs/CommonDriverIssues"
  }
];

const TechGridOverlay = () => (
  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] -z-10 px-6">
    <div className="w-full h-full border-x border-slate-900 grid grid-cols-4 gap-0">
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
    </div>
  </div>
);

export default function DriverCompatibilityArticlePage() {
  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-500 selection:text-white relative">
      <TechGridOverlay />

      <header className="relative pt-32 pb-12 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-100 bg-blue-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 text-xs font-bold text-[#1464D8] uppercase tracking-widest"
        >
          <span className="bg-blue-50 px-3 py-1 rounded-md border border-blue-100/50">{articleContent.meta.category}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1"><Calendar size={13} /> {articleContent.meta.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1"><Clock size={13} /> {articleContent.meta.readTime}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-[1.12]"
        >
          {articleContent.title}
        </motion.h1>

        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="pt-4 flex items-center justify-center gap-3"
        >
          <img 
            src={articleContent.author.avatar} 
            alt={articleContent.author.name} 
            className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
          />
          <div className="text-left">
            <h4 className="text-sm font-semibold text-slate-800 leading-tight">{articleContent.author.name}</h4>
            <p className="text-xs text-slate-400">{articleContent.author.organization}</p>
          </div>
        </motion.div>
      </header>

      
      <section className="px-6 max-w-5xl mx-auto pb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-4xl overflow-hidden border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] aspect-21/9 bg-slate-50"
        >
          <img 
            src={articleContent.media.mainImage} 
            alt="Driver Compatibility Framework" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 pb-24 relative">
        
        {/* Left Side Static Info Block */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 space-y-8 justify-self-end text-right pr-6">
          <div className="space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Share Resource</h5>
            <div className="flex items-center justify-end gap-2 pt-1">
              <button className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors"><FaXTwitter size={14} /></button>
              <button className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors"><FaFacebook size={14} /></button>
              <button className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-800 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors"><FaLinkedin size={14} /></button>
            </div>
          </div>
          <div className="w-full h-px bg-slate-100" />
          <div className="space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Taxonomy Tags</h5>
            <div className="flex flex-col items-end gap-1.5 pt-1">
              {articleContent.meta.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Text Body Column: Exact prose preservation */}
        <div className="lg:col-span-6 space-y-8 text-slate-600 font-light text-base md:text-lg leading-relaxed">
          
          <p className="text-slate-900 font-normal text-lg md:text-xl leading-relaxed">
            Driver compatibility is an important part of making sure your computer and hardware devices work properly together. A device driver is the software that allows your operating system to communicate with hardware such as printers, graphics cards, and other peripherals.
          </p>

          <p>
            If the driver is not compatible with your system, the device may not work correctly, may lose features, or may not work at all. Understanding driver compatibility can help users avoid confusion and better support overall device performance.
          </p>

          {/* Section 1: Operating System Requirements */}
          <div className="space-y-4 pt-2">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Layers size={20} className="text-[#1464D8]" /> Operating System Requirements
            </h3>
            <p>
              The first thing to understand is that drivers are designed for specific operating systems and hardware models. A driver that works for one version of Windows, for example, may not work the same way on another version. Different operating systems have different technical requirements, and drivers are usually developed to support specific versions.
            </p>
            <p>
              A system update can sometimes change how the operating system communicates with hardware, which is why manufacturers may release updated drivers over time. If the system is newer but the driver is older, compatibility problems may appear.
            </p>
          </div>

          {/* Section 2: Hardware Model Matching */}
          <div className="space-y-4 pt-2">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Cpu size={20} className="text-indigo-600" /> Hardware Model Matching
            </h3>
            <p>
              Hardware model matching is another key factor. Even devices that look similar may require different drivers based on their exact model number, series, or generation. For example, one printer family may include several models, but each may have its own driver requirements. Installing the wrong driver can cause communication problems or stop the device from performing as expected.
            </p>
          </div>

          {/* Exact Blockquote Extraction */}
          <blockquote className="border-l-4 border-[#1464D8] bg-blue-50/40 px-6 py-4 rounded-r-2xl my-6">
            <p className="text-base font-normal text-slate-800 italic leading-relaxed">
              "Compatibility depends on the match between the operating system, the device model, and the driver version."
            </p>
          </blockquote>

          {/* Section 3: System Architecture and Feature Support */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">System Architecture and Feature Support</h3>
            <p>
              Many computers use either 32-bit or 64-bit operating system architecture, and drivers are often built to match one or the other. A driver that is intended for a different system type may not install correctly or may not work properly.
            </p>
            <p>
              Another important part of compatibility is feature support. Sometimes a device may work on a system with a basic or generic driver, but not all features will be available. For example, a printer may print basic documents, but scanning or wireless features may not function as intended without the proper compatible driver.
            </p>
          </div>

          {/* Core Interactive Bullet Layout Block */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 my-8 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Terminal size={16} className="text-[#1464D8]" /> Key Compatibility Factors:
            </h4>
            <ul className="space-y-3.5">
              {[
                "Operating System Version (e.g., Windows 10 vs Windows 11).",
                "Exact Hardware Model Number and Series.",
                "System Architecture (32-bit vs 64-bit).",
                "Driver Version Number and Release Date."
              ].map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm md:text-base text-slate-700 font-medium items-start">
                  <CheckCircle2 size={18} className="text-[#1464D8] mt-0.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Context Section */}
          <p>
            Learning about driver compatibility can also help users understand common device issues. Problems such as missing features, hardware not being detected, poor display output, sound issues, or unstable connections may sometimes be linked to compatibility gaps between the system and the installed driver.
          </p>

          {/* Conclusion */}
          <p className="pt-4 border-t border-slate-100 font-normal text-slate-800">
            In conclusion, understanding driver compatibility means recognizing how your operating system, hardware model, system type, and driver version work together. When these elements match correctly, devices are more likely to perform smoothly and reliably.
          </p>

          {/* Mobile Only Metadata Tags layout */}
          <div className="flex flex-wrap items-center gap-2 pt-6 lg:hidden border-t border-slate-100">
            {articleContent.meta.tags.map(tag => (
              <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

        </div>

        {/* Right Side Column Spacer */}
        <div className="lg:col-span-3" />
      </section>

     
      <footer className="py-20 border-t border-slate-100 bg-slate-50/40">
        <div className="px-6 max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Continue Reading</h2>
            <a href="/Blogs" className="text-sm font-bold text-[#1464D8] hover:underline inline-flex items-center gap-1">
              View All Posts <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <article 
                key={article.title}
                className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-[#1464D8] uppercase tracking-wider border border-slate-100">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-5 flex flex-col justify-between grow">
                  <h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-[#1464D8] transition-colors line-clamp-2">
                    <a href={article.slug}>{article.title}</a>
                  </h3>
                  
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>By Hardware Experts</span>
                    <a href={article.slug} className="text-[#1464D8] font-bold inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Read <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}