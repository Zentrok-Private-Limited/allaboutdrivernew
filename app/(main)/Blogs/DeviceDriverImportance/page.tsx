'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Terminal,
} from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const articleContent = {
  meta: {
    category: "Basics",
    date: "March 31, 2026",
    readTime: "6 Min Read",
    tags: ["Basics", "Hardware", "Education"]
  },
  title: "What Are Device Drivers and Why Are They Important",
  author: {
    name: "The Editorial Team",
    organization: "All About Driver",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  media: {
    mainImage: "/blog1.jpg",
    inlineImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
  }
};

const relatedArticles = [
  {
    title: "Common Signs Your Device May Have a Driver Issue",
    category: "Troubleshooting",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    slug: "/Blogs/CommonDriverIssues"
  },
  {
    title: "How to Understand Driver Compatibility with Your System",
    category: "Basics",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
    slug: "/Blogs/UnderstandingDriverCompatibility"
  },
  {
    title: "Why Driver Updates Matter for Performance and Compatibility",
    category: "Updates",
    image: "/blog4.jpg",
    slug: "/Blogs/WhenToUpdateDrivers"
  }
];


const TechLineGrid = () => (
  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] -z-10 px-6">
    <div className="w-full h-full border-x border-slate-900 grid grid-cols-4 gap-0">
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
    </div>
  </div>
);

export default function ArticleDetailPage() {
  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-500 selection:text-white relative">
      <TechLineGrid />

      
      <header className="relative pt-32 pb-12 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-100 bg-blue-50/60 rounded-full blur-[120px] -z-10 pointer-events-none" />

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

        {/* Author Bylines */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="pt-4 flex items-center justify-center gap-3"
        >
          <img 
            src={articleContent.author.avatar} 
            alt={articleContent.author.name} 
            className="w-11 h-11 rounded-full object-cover border border-slate-200"
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
            alt="Device Drivers Overview" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 pb-24 relative">
        
        {/* Left Side: Sticky Meta Interaction Options */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 space-y-8 justify-self-end text-right pr-6">
          <div className="space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Share Article</h5>
            <div className="flex items-center justify-end gap-2 pt-1">
              <button className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors"><FaXTwitter size={14} /></button>
              <button className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors"><FaFacebook size={14} /></button>
              <button className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-800 border border-slate-200/60 flex items-center justify-center text-slate-500 transition-colors"><FaLinkedin size={14} /></button> 
            </div>
          </div>
          <div className="w-full h-px bg-slate-100" />
          <div className="space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Subject Focus</h5>
            <div className="flex flex-col items-end gap-1.5 pt-1">
              {articleContent.meta.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Exact Content Text Processing */}
        <div className="lg:col-span-6 space-y-8 text-slate-600 font-light text-base md:text-lg leading-relaxed">
          
          <p className="text-slate-900 font-normal text-lg md:text-xl leading-relaxed">
            Device drivers are small but essential software components that help your computer’s operating system communicate with hardware devices. In simple terms, a driver acts like a translator between the system and the device.
          </p>

          <p>
            Without this communication bridge, your computer may not understand how to properly use connected hardware such as printers, graphics cards, keyboards, mice, audio devices, scanners, or network adapters. Every hardware device needs instructions so it can function correctly with the operating system.
          </p>

          {/* Section: The Communication Bridge */}
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <Terminal size={18} className="text-[#1464D8]" /> The Communication Bridge
            </h3>
            <p>
              When you connect a device to your computer, the operating system relies on the correct driver to recognize the hardware, send commands, and receive responses. For example, when you print a document, the printer driver helps the system convert that digital file into instructions the printer can understand. In the same way, a graphics driver helps your monitor display visuals properly, and an audio driver helps your speakers produce sound.
            </p>
          </div>

          {/* Core Embedded Visual Asset Grid */}
          <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 p-2 bg-slate-50/50">
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-950 relative">
              <img 
                src={articleContent.media.inlineImage} 
                alt="Hardware Communication System Schematic" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono tracking-widest text-cyan-400">BUS LAYOUT GRAPHIC // INFO_ONLY</span>
            </div>
          </div>

          {/* Section: Why Drivers Matter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Why Drivers Matter</h3>
            <p>
              Device drivers are important because they directly affect the performance, compatibility, and functionality of your hardware. If a driver is missing, outdated, incompatible, or corrupted, the related device may stop working properly or fail to work at all. This can lead to common issues such as no sound, poor display quality, printer communication errors, unstable internet connections, or devices not being recognized by the computer.
            </p>
          </div>

          {/* Exact Blockquote Extraction */}
          <blockquote className="border-l-4 border-[#1464D8] bg-blue-50/40 px-6 py-4 rounded-r-2xl my-6">
            <p className="text-base font-normal text-slate-800 italic leading-relaxed">
              "Drivers also help improve compatibility between hardware and software, ensuring your devices continue working smoothly as operating systems receive updates."
            </p>
          </blockquote>

          <p>
            Updated drivers may help support system stability, improve communication between devices and software, and reduce the chances of certain technical issues. However, it is also important to understand that not every update is always necessary for every user, which is why learning about drivers can be helpful.
          </p>

          {/* Section: Impact on Everyday Users */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Impact on Everyday Users</h3>
            <p>
              For everyday users, drivers often remain unnoticed until a problem appears. A device may suddenly stop responding, an external accessory may not be detected, or a system feature may not perform as expected. In many of these cases, the issue may be related to the driver. Having a basic understanding of drivers can make it easier to identify the possible cause of a problem and better understand how hardware and software work together.
            </p>
            <p>
              Whether you use your system for work, study, entertainment, printing, browsing, or communication, drivers play a quiet but valuable role in making that experience smoother.
            </p>
          </div>

          <p className="pt-4 border-t border-slate-100 font-normal text-slate-800">
            In conclusion, device drivers are a key part of modern computing. They allow hardware devices and operating systems to work together efficiently, helping users get the most from their computers and connected devices. Understanding what drivers are and why they matter can help users become more informed, more confident, and more aware of how their systems function in everyday use.
          </p>

          {/* Mobile Only Meta Block Options */}
          <div className="flex flex-wrap items-center gap-2 pt-6 lg:hidden border-t border-slate-100">
            {articleContent.meta.tags.map(tag => (
              <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

        </div>

        {/* Right Side Fill Spacer */}
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
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