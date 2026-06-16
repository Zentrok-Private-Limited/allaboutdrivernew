"use client";
import { useState, useEffect } from "react";
import {
  Monitor,
  Cpu,
  HelpCircle,
  ArrowRight,
  Printer,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Mail,
  Volume2,
  Quote,
} from "lucide-react";
import { CheckCircle2, BookOpen, Bell, ShieldAlert } from "lucide-react";
import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { Sparkles, Shield, Layers } from "lucide-react";
import Services from "@/components/Services";
import ServicesTwo from "@/components/ServicesTwo";

type Slide = {
  id: number;
  image: string;
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: "/FinalSlider1.png",
    },
    {
      id: 2,
      image: "/FinalSlider2.png",
    },
  ];

  const features = [
    {
      num: "01",
      title: "Easy-to-understand educational content",
      desc: "Simplifying complex technical jargon for everyone."
    },
    {
      num: "02",
      title: "Informational resources for everyday users",
      desc: "Practical advice for daily computing needs."
    },
    {
      num: "03",
      title: "Clear explanations without technical language",
      desc: "Focused on clarity and user accessibility."
    },
    {
      num: "04",
      title: "Helpful blog-based learning",
      desc: "Continuously updated knowledge base."
    },
    {
      num: "05",
      title: "General awareness about drivers",
      desc: "Providing insights into updates and compatibility."
    }
  ];

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 ">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out border"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-40 md:h-145 object-containmd:object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="bg-slate-50">
        <Services />
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50">
        <ServicesTwo />
      </section>

      {/* SECTION 1: WELCOME INTRO */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100 relative">
        {/* Soft, beautiful blue background ambient glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Vibrant Blue Badge */}
          <div className="lg:col-span-3 flex lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
            >
              <Sparkles size={14} className="text-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                What We Do?
              </span>
            </motion.div>
          </div>

          {/* Right Column: High-contrast rich text */}
          <div className="lg:col-span-9 space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-3xl">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              We focus on providing{" "}
              <span className="text-slate-900 font-medium underline decoration-blue-500/40 underline-offset-4">
                clear and useful information
              </span>{" "}
              about drivers and driver-related topics. Many users hear about
              drivers only when something stops working properly, but these
              small software components are essential to the overall performance
              and communication between your operating system and hardware
              devices.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Our goal is to make technical topics easier to understand. From
              basic driver concepts to update-related information and general
              troubleshooting guidance, we aim to create content that helps
              users feel more confident while learning about their devices.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-sm md:text-base border-l-2 border-blue-500 pl-4 bg-blue-50/40 py-3 rounded-r-xl"
            >
              Whether you are trying to understand a printer driver, display
              driver, sound driver, USB device driver, or network adapter
              driver, our platform is here to support your knowledge journey
              with simple and informative content.
            </motion.p>
          </div>
        </div>
      </section>

      {/* WHAT ARE DEVICE DRIVERS */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative">
        
        <div className="absolute right-10 bottom-10 w-112.5 h-112.5 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-600 font-bold tracking-[0.25em] text-xs uppercase"
              >
                Core Architecture
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight"
              >
                What are{" "}
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 italic bg-clip-text text-transparent drop-shadow-sm pr-2">
                  device drivers?
                </span>
              </motion.h2>
            </div>

            <div className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
              <p>
                Device drivers are specialized software components that allow
                your operating system and hardware devices to communicate with
                each other safely. Without the correct driver support,
                high-performance hardware such as{" "}
                <span className="text-blue-600 font-normal">
                  graphics cards, printers, and wireless adapters
                </span>{" "}
                may not function properly or may offer limited capabilities.
              </p>
              <p>
                Drivers help the system securely recognize internal and
                peripheral hardware, process operational commands smoothly, and
                ensure that all connected components work efficiently as
                intended. Updated and compatible drivers contribute to faster
                communication, improved hardware stability, and better support
                for new operating system updates.
              </p>
            </div>
          </div>

          
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "System Translation",
                desc: "Acts as a universal translator between OS protocols and raw electronics.",
                icon: <Layers size={20} className="text-blue-600" />,
                shadow:
                  "hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] hover:border-blue-200",
              },
              {
                title: "Hardware Control",
                desc: "Allows precision control over advanced features like GPU clocks.",
                icon: <Cpu size={20} className="text-emerald-600" />,
                shadow:
                  "hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] hover:border-emerald-200",
              },
              {
                title: "Error Prevention",
                desc: "Mitigates common stability system crashes like fatal failures.",
                icon: <Shield size={20} className="text-amber-600" />,
                shadow:
                  "hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)] hover:border-amber-200",
              },
              {
                title: "Legacy Support",
                desc: "Maintains reverse backward compatibility for older accessories.",
                icon: <HelpCircle size={20} className="text-purple-600" />,
                shadow:
                  "hover:shadow-[0_20px_40px_rgba(168,85,247,0.08)] hover:border-purple-200",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl bg-slate-50/50 border border-slate-100 backdrop-blur-md transition-all duration-300 cursor-pointer ${card.shadow}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 border border-slate-100 shadow-sm">
                  {card.icon}
                </div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DRIVER KNOWLEDGE MATTERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#1464D8] uppercase block">
                System Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                Why driver knowledge{" "}
                <span className="font-medium italic bg-linear-to-r from-[#1464D8] to-indigo-600 bg-clip-text text-transparent pr-2">
                  matters
                </span>
              </h2>
            </div>

            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              Understanding drivers can help users make better decisions about
              their systems and connected hardware. While many users overlook
              drivers, they often play a key role in:
            </p>

            
            <ul className="space-y-3 pt-2">
              {[
                "Hardware recognition",
                "Device performance",
                "System stability",
                "Compatibility with software and operating systems",
                "Troubleshooting device-related issues",
              ].map((text, idx) => (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#1464D8] shrink-0"
                  />
                  {text}
                </motion.li>
              ))}
            </ul>

            <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed pt-2">
              Learning about drivers can be especially helpful when users face
              issues such as devices not being detected, printing errors, sound
              problems, display glitches, connectivity failures, or reduced
              hardware performance.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-linear-to-tr from-[#1464D8]/10 to-indigo-500/5 rounded-4xl blur-xl group-hover:scale-105 transition-transform duration-500" />
            <div className="relative overflow-hidden rounded-4xl border border-slate-100 shadow-[0_20px_50px_rgba(20,100,216,0.04)] bg-slate-50 p-2">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt="System Architecture"
                className="rounded-[26px] object-cover w-full h-80 filter grayscale-15 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPLORE SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            What you can explore on{" "}
            <span className="italic bg-linear-to-r bg-blue-600 bg-clip-text text-transparent pr-2">
              all about driver
            </span>
          </h2>
          <div className="w-12 h-px bg-slate-200 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Driver Basics",
              desc: "Understand the purpose of drivers and how they support hardware communication.",
              icon: <BookOpen size={20} />,
            },
            {
              title: "Driver Update Awareness",
              desc: "Learn general information about driver updates, when they may be useful, and what users should know before making changes.",
              icon: <Bell size={20} />,
            },
            {
              title: "Device Troubleshooting",
              desc: "Read informational articles covering common driver-related issues and possible causes.",
              icon: <ShieldAlert size={20} />,
            },
            {
              title: "Compatibility Insights",
              desc: "Discover how operating systems, software environments, and hardware devices interact with drivers.",
              icon: <Cpu size={20} />,
            },
            {
              title: "Educational Blog Content",
              desc: "Browse articles that explain common technical topics in a clear and approachable format. Our blog is constantly updated.",
              icon: <HelpCircle size={20} />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6, backgroundColor: "#ffffff" }}
              className={`p-8 rounded-[28px] bg-slate-50/50 border border-slate-100/80 transition-all duration-300 hover:shadow-[0_24px_48px_-15px_rgba(20,100,216,0.08)] hover:border-blue-100 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/30 flex items-center justify-center text-[#1464D8] mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-800 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HELPFUL TOPICS WE COVER */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            Helpful topics{" "}
            <span className="font-medium italic text-[#1464D8]">we cover</span>
          </h2>
          <div className="w-12 h-px bg-slate-200 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Printer Drivers",
              desc: "Learn about the role of printer drivers, common communication issues, and update-related information.",
              icon: <Printer size={20} />,
              badge: "bg-blue-50 text-blue-600 border-blue-100",
            },
            {
              title: "Graphics Drivers",
              desc: "Explore informational content about display performance, graphics compatibility, and related update topics.",
              icon: <Monitor size={20} />,
              badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
            },
            {
              title: "Audio Drivers",
              desc: "Understand how audio drivers support sound devices and what may affect proper sound output.",
              icon: <Volume2 size={20} />,
              badge: "bg-purple-50 text-purple-600 border-purple-100",
            },
            {
              title: "Network Drivers",
              desc: "Read about drivers that help manage internet and network connectivity across systems.",
              icon: <Wifi size={20} />,
              badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
            },
            {
              title: "USB & Peripherals",
              desc: "Find information about device detection, peripherals, and general communication support.",
              icon: <Cpu size={20} />,
              badge: "bg-amber-50 text-amber-600 border-amber-100",
            },
            {
              title: "System Drivers",
              desc: "Learn about core system drivers and how they support broader hardware functionality.",
              icon: <CheckCircle2 size={20} />,
              badge: "bg-rose-50 text-rose-600 border-rose-100",
            },
          ].map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, backgroundColor: "#ffffff" }}
              className="p-8 rounded-3xl bg-slate-50/50 border border-slate-100 transition-all duration-300 hover:border-slate-200 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex gap-5 items-start"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm shrink-0 ${topic.badge}`}
              >
                {topic.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-base text-slate-800 tracking-tight group-hover:text-[#1464D8]">
                  {topic.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Section: Why Driver Knowledge Matters */}
      <section className="py-24 border border-black px-10 mx-auto bg-[#0D1434] text-slate-300 relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#1464D8] uppercase block">
              Our Core Values
            </span>
            {/* Restored to crisp slate-100 for maximum readability against dark blue */}
            <h2 className="text-4xl md:text-5xl font-light text-slate-100 tracking-normal leading-tight">
              Why visitors choose <br />
              <span className="italic bg-linear-to-r from-[#1464D8] to-indigo-400 bg-clip-text text-transparent pr-4">
                all about driver
              </span>
            </h2>
          </div>

          {/* Structured Feature Items Stack */}
          <div className="space-y-6 max-w-2xl">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
               
                className="flex gap-6 items-start p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 group"
              >
                {/* Dark-mode balanced Numeric Callout Pill */}
                <span className="text-sm font-bold tracking-wider text-[#1464D8] pt-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:bg-[#1464D8] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {item.num}
                </span>
                
                <div className="space-y-1.5">
                  {/* Swapped text-slate-900 back to high-contrast white text */}
                  <h3 className="font-semibold text-base md:text-lg text-slate-100 tracking-tight group-hover:text-[#1464D8] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 relative group"
        >
          {/* Subtle blue accent shadow glow that blends seamlessly into the dark background canvas */}
          <div className="absolute inset-0 bg-linear-to-tr from-[#1464D8]/20 to-indigo-500/10 rounded-[36px] blur-2xl opacity-60 group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
          
          {/* Visual Editorial Card Frame using deep multi-stop gradients */}
          <div className="relative rounded-[36px] bg-linear-to-br from-slate-950 via-indigo-950 to-[#1464D8] text-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden min-h-95 flex flex-col justify-between">
            
            {/* Luminous Ambient Light Flares */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none" />

            {/* Clean Floating Icon Indicator */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-cyan-300">
              <Quote size={22} className="rotate-180 fill-cyan-300/10" />
            </div>

            {/* Editorial Statement Prose Text Content */}
            <div className="relative z-10 my-8 space-y-4">
              <p className="text-lg md:text-xl font-light leading-relaxed tracking-wide text-slate-100 italic">
                "Our website is intended for users who want to better understand their devices, learn common technical concepts, and explore driver-related information in one place."
              </p>
            </div>

            {/* Team Identity Attribution Tag Row */}
            <div className="relative z-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-sm shrink-0">
                ED
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold tracking-tight text-white">
                  The Editorial Team
                </h4>
                <p className="text-xs text-slate-400 font-light tracking-wide">
                  All About Driver
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>

      {/* LATEST FROM OUR BLOG */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#1464D8] uppercase block">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Latest from <span className="font-medium italic text-blue-600">our blog</span>
            </h2>
          </div>

          
          <a href="/Blogs" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-[#1464D8] shadow-sm transition-all duration-300 active:scale-95 group">
            View All Blogs
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Blog Posts Card Array Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "What Are Device Drivers and Why Are They Important",
              desc: "Explore how drivers act as essential translators between your operating system and hardware.",
              img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
              article: "/Blogs/DeviceDriverImportance",
            },
            {
              title: "Common Signs Your Device May Have a Driver Issue",
              desc: "Identify the critical warnings and error systems that signal hardware layer translation conflicts.",
              img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
              article: "/Blogs/CommonDriverIssues",
            },
            {
              title: "Understanding Printer Driver Communication",
              desc: "A structural deep dive exploring how spooling instructions interact with local system accessories.",
              img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop",
              article: "/Blogs/UnderstandingPrinterDrivers",
            },
          ].map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full rounded-[28px] overflow-hidden border border-slate-100 bg-slate-50/30 p-3 transition-all duration-300 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(20,100,216,0.08)] hover:border-blue-100"
            >
              {/* Card Image Area Container */}
              <div className="relative overflow-hidden rounded-[20px] bg-slate-200 aspect-16/10 mb-6">
                <img
                  src={post.img}
                  alt={post.title}
                  className="object-cover w-full h-full filter brightness-96 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Layout */}
              <div className="px-3 pb-4 flex flex-col grow space-y-3">
                <h3 className="font-semibold text-lg text-slate-900 tracking-tight leading-snug group-hover:text-[#1464D8] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed grow">
                  {post.desc}
                </p>

                {/* Text Action element */}
                <a href={post.article} className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1464D8] pt-2">
                  READ MORE
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 1. INFORMATIONAL PURPOSE ONLY NOTICE BOX */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 md:p-8 rounded-3xl bg-amber-50/60 border border-amber-200/70 flex gap-4 items-start max-w-4xl mx-auto"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 shadow-sm">
            <AlertTriangle size={20} />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-950 tracking-tight uppercase">
              Informational Purpose Only
            </h4>
            <p className="text-xs md:text-sm text-amber-900/80 font-light leading-relaxed">
              The content provided on All About Driver is intended for general
              informational and educational purposes only. We aim to share
              simplified knowledge about drivers, updates, compatibility, and
              device-related topics. Visitors should always review official
              manufacturer resources and system-specific guidance before making
              technical changes.
            </p>
          </div>
        </motion.div>

        {/* 2. CONTACT & ENGAGEMENT GRADIENT PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] mx-10 overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950 text-white p-12 md:p-16 text-center shadow-[0_30px_60px_-15px_rgba(20,100,216,0.15)] border border-slate-900"
        >
          {/* Luminous internal background accent glow effect */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-white">
              Have Questions About{" "}
              <span className="font-medium italic bg-linear-to-r from-blue-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm pr-2">
                Driver Topics?
              </span>
            </h2>

            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Feel free to contact us through our contact page. We value reader
              feedback and aim to make our content more useful, clear, and
              user-friendly.
            </p>

            {/* Interactive Button Configuration Setup */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Action Button */}
              <a href="/ContactUs" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg active:scale-98">
                Contact Us
                <Mail size={16} className="text-slate-700" />
              </a>

              {/* Secondary Action Button */}
              <a href="/Blogs" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm active:scale-98">
                Explore More Articles
                <ArrowUpRight size={16} className="text-slate-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;
