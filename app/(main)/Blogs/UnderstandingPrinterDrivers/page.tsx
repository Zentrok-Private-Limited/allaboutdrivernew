'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Printer, Wifi, AlertCircle,
} from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const articleContent = {
  meta: {
    category: "Hardware",
    date: "March 20, 2026",
    readTime: "5 Min Read",
    tags: ["Hardware", "Printers", "Communication"]
  },
  title: "Understanding Printer Driver Communication",
  author: {
    name: "The Support Team",
    role: "Tech Specialists",
    organization: "Mad About Drivers",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  },
  media: {
    mainImage: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1200&auto=format&fit=crop",
    inlineImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop"
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
    title: "Common Signs Your Device May Have a Driver Issue",
    category: "Troubleshooting",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&q=80",
    slug: "/Blogs/CommonDriverIssues"
  },
  {
    title: "How to Understand Driver Compatibility with Your System",
    category: "Basics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    slug: "/Blogs/UnderstandingDriverCompatibility"
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

export default function PrinterDriversArticlePage() {
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

        {/* Author Data Profile row */}
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
            <p className="text-xs text-slate-400">{articleContent.author.role} • {articleContent.author.organization}</p>
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
            alt="Printer Connectivity Overview" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

     
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 pb-24 relative">
        
        {/* Left Side: Layout Anchors */}
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

        {/* Center Content Column: Precise data preservation */}
        <div className="lg:col-span-6 space-y-8 text-slate-600 font-light text-base md:text-lg leading-relaxed">
          
          <p className="text-slate-900 font-normal text-lg md:text-xl leading-relaxed">
            Printers are notoriously complex when it comes to software. Understanding how your computer sends data to a printer can save hours of frustration.
          </p>

          {/* Block Section 1: The Spooling Process */}
          <div className="space-y-4 pt-2">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Printer size={22} className="text-[#1464D8]" /> 1. The Spooling Process
            </h3>
            <p>
              When you click "Print", your document isn't sent directly to the printer. It's first placed in a "spooler" - a software queue that manages print jobs. The driver's job is to take this queued data and convert it into a language the printer hardware understands, like PCL or PostScript.
            </p>
          </div>

          {/* Section 2: Wired vs. Wireless Connectivity */}
          <div className="space-y-4 pt-2">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Wifi size={22} className="text-indigo-600" /> 2. Wired vs. Wireless Connectivity
            </h3>
            <p>
              A common misconception is that if your computer is on Wi-Fi and the printer is too, they will "just talk". In reality, the driver must maintain a steady TCP/IP connection to the printer's specific internal IP address.
            </p>
          </div>

          {/* Interactive Highlight/Notice Alert Layout Block */}
          <div className="p-6 md:p-8 rounded-3xl bg-amber-50/50 border border-amber-100 my-8 space-y-3">
            <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
              <AlertCircle size={16} className="text-amber-600" /> Why Printers Go Offline:
            </h4>
            <p className="text-slate-700 font-light text-sm md:text-base leading-relaxed">
              Often, it's not the hardware. It's the driver losing its communication port or a conflict between the generic Windows driver and the manufacturer's specific driver.
            </p>
          </div>

          {/* Elegant Structural Graphic Inlay */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 p-2 bg-slate-50/50">
            <div className="rounded-xl overflow-hidden aspect-21/10 bg-slate-950 relative">
              <img 
                src={articleContent.media.inlineImage} 
                alt="System Port Layout Grid Line" 
                className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-indigo-400">SPOOLER_PORT_MAPPING // OVERVIEW</span>
            </div>
          </div>

          {/* Mobile Only Tags Metadata */}
          <div className="flex flex-wrap items-center gap-2 pt-6 lg:hidden border-t border-slate-100">
            {articleContent.meta.tags.map(tag => (
              <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

        </div>

        {/* Right Side Spacer layout column */}
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