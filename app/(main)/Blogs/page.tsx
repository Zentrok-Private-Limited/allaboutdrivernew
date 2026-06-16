'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, User, ArrowUpRight, 
  Search, Mail, ArrowRight, Layers3 
} from 'lucide-react';


const featuredPost = {
  title: "What Are Device Drivers and Why Are They Important",
  desc: "Explore how drivers act as essential translators between your operating system and hardware, and why they are critical for system stability.",
  date: "March 31, 2026",
  category: "Featured",
  author: "The Editorial Team",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  image: "/blog1.jpg",
  slug: "/Blogs/DeviceDriverImportance"
};

const latestArticles = [
  {
    title: "Common Signs of Driver-Related Issues.",
    desc: "Learn how to identify when a hardware problem is actually a driver issue and what you can do about it.",
    category: "Basics",
    readTime: "6 Min Read",
    author: "By Nikhil Verma",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    slug: "/Blogs/CommonDriverIssues"
  },
  {
    title: "Understanding Printer Driver Communication.",
    desc: "Printers can be finicky. Discover how drivers bridge the gap between your document and the physical page.",
    category: "Hardware",
    readTime: "8 Min Read",
    author: "By Technical Support Team",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=600&auto=format&fit=crop",
    slug: "Blogs/UnderstandingPrinterDrivers"
  },
  {
    title: "Why Driver Updates Matter for Performance and Compatibility.",
    desc: "Not every update is mandatory. Learn how to decide when it's time to update your drivers for better stability.",
    category: "Updates",
    readTime: "5 Min Read",
    author: "By Hardware Experts",
    image: "/blog4.jpg",
    slug: "Blogs/WhenToUpdateDrivers"
  },
  {
    title: "How to Understand Driver Compatibility with Your System.",
    desc: "Learn how your operating system, hardware model, and driver version work together for a smooth experience.",
    category: "Basics",
    readTime: "7 Min Read",
    author: "By Hardware Experts",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
    slug: "/Blogs/UnderstandingDriverCompatibility"
  }
];

// SVG Wireframe Grid Texture
const VectorGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="blogGrid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#blogGrid)" className="text-slate-900" />
  </svg>
);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Basics', 'Updates', 'Hardware'];

  const filteredArticles = latestArticles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* HERO & HEADER BANNER */}
      <section className="relative pt-10 pb-16 px-6 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-150 h-125 bg-blue-50/70 rounded-full blur-[140px] -z-10 pointer-events-none translate-x-1/4 -translate-y-1/4" />
        
        <div className="grid lg:grid-cols-12 gap-12 items-end pb-12 border-b border-slate-100">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-base tracking-[0.25em] text-white uppercase bg-[#0367DF] px-4 py-2 rounded-full border border-blue-100/50 inline-flex items-center gap-2 shadow-sm">
                <BookOpen size={14} /> Insights & Perspectives
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.05]"
            >
              The driver
              <span className="bg-linear-to-r from-[#1464D8] via-blue-700 to-indigo-600 bg-clip-text text-transparent relative inline-block">
                resource hub
              </span>
            </motion.h1>
          </div>
          
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 font-light text-lg md:text-xl leading-relaxed"
            >
              Explore our latest thoughts on device drivers, hardware compatibility, and the journey toward better system performance and communication.
            </motion.p>
          </div>
        </div>
      </section>

     
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[40px] overflow-hidden border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-slate-50 group grid lg:grid-cols-12 gap-0 items-stretch"
        >
          {/* Image Side */}
          <div className="lg:col-span-7 relative min-h-87.5 overflow-hidden">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#1464D8] border border-white/20 shadow-sm">
              {featuredPost.category}
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white relative">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {featuredPost.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> 6 Min Read
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight group-hover:text-[#1464D8] transition-colors duration-300">
                <a href={featuredPost.slug}>{featuredPost.title}</a>
              </h2>

              <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg">
                {featuredPost.desc}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={featuredPost.avatar} alt={featuredPost.author} className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{featuredPost.author}</h4>
                  <p className="text-xs text-slate-400">Contributor</p>
                </div>
              </div>

              <a 
                href={featuredPost.slug}
                className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-[#1464D8] border border-slate-100 group-hover:border-transparent flex items-center justify-center text-slate-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LATEST ARTICLES FEED */}
      <section className="py-24 relative border-t border-slate-100 bg-slate-50/40">
        <VectorGrid />
        <div className="px-6 max-w-7xl mx-auto relative z-10">
          
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-slate-200/60">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Latest Articles</h2>
              <p className="text-sm text-slate-400 font-light mt-1">Expert guidance and updates on the evolving landscape of hardware support.</p>
            </div>

            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex bg-white p-1 rounded-full border border-slate-200 shadow-inner">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                      activeCategory === cat 
                        ? 'bg-[#1464D8] text-white shadow-md' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Functional Search input */}
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-4 py-2.5 w-60 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#1464D8] shadow-sm transition-all"
                />
              </div>
            </div>
          </div>

          
          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  key={article.title}
                  className="group bg-white rounded-4xl overflow-hidden border border-slate-200/60 hover:border-blue-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_-15px_rgba(20,100,216,0.08)] flex flex-col md:flex-row h-full transition-all duration-300"
                >
                  {/* Card Media Wrapper */}
                  <div className="md:w-2/5 relative min-h-50 md:min-h-full overflow-hidden bg-slate-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold text-[#1464D8] uppercase tracking-wider border border-slate-100">
                      {article.category}
                    </div>
                  </div>

                  {/* Context Prose Block */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl text-slate-900 tracking-tight leading-snug group-hover:text-[#1464D8] transition-colors duration-300">
                        <a href={article.slug}>{article.title}</a>
                      </h3>
                      
                      <p className="text-slate-500 font-light text-sm line-clamp-3 leading-relaxed">
                        {article.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                        <User size={12} className="text-[#1464D8]" /> {article.author}
                      </span>
                      
                      <a href={article.slug} className="inline-flex items-center gap-1 text-[#1464D8] font-bold group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty Fallback State handling searches with 0 results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 p-8 rounded-3xl bg-white border border-slate-100 max-w-md mx-auto shadow-sm">
               <Layers3 size={40} className="mx-auto text-slate-300 mb-4" />
               <h3 className="text-lg font-semibold text-slate-800">No Articles Found</h3>
               <p className="text-slate-400 text-sm font-light mt-1">We couldn't find matches for "{searchQuery}". Try updating your active filters.</p>
            </div>
          )}

        </div>
      </section>

      {/* NEWSLETTER SUBSCRIBE COMPONENT  */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="relative rounded-[40px] bg-linear-to-br from-slate-950 via-indigo-950 to-[#1464D8] text-white p-10 md:p-16 shadow-[0_40px_80px_-20px_rgba(20,100,216,0.2)] overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300 mx-auto shadow-sm">
              <Mail size={22} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Subscribe to Our <span className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-cyan-200">Tech Insights</span>
            </h2>
            
            <p className="text-slate-300 font-light max-w-xl mx-auto text-base md:text-lg">
              Monthly updates on driver news, compatibility tips, and hardware support strategies delivered directly to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
              <input 
                type="email" 
                required
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:bg-white/10 transition-all backdrop-blur-md"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1464D8] hover:bg-blue-600 font-bold text-sm text-white shadow-lg shadow-blue-500/20 transition-all active:scale-95 whitespace-nowrap"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}