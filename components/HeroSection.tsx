"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  Wrench,
  WifiOff,
  Wifi,
  FileWarning,
  AlertTriangle,
  Scan,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HeroSection() {
  const issues = [
    { icon: Wrench, title: "Printer Set Up Issue" , link:"/select-printer-setup" },
    { icon: WifiOff, title: "Printer Offline" , link:"/select-printer-offline" },
    { icon: Wifi, title: "Wireless printer issue" , link:"/select-wireless-printer" },
    { icon: FileWarning, title: "Paper jam issue" , link:"/select-paper-jam" },
    { icon: AlertTriangle, title: "Printer Job Stuck In Queue" , link:"/select-printer-job-stuck-in-queue" },
    { icon: Scan, title: "Scanner issues" , link:"/select-scanner" },
  ];

  // Change these to your images
  const slides = ["/hero1.png", "/hero2.png", "/hero3.png"];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="w-full bg-white pb-12">
      {/* Top Bar */}
      <div className="w-full h-8 bg-[#1A66DB]" />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#1A66DB]">
            Print, Copy, Scan & Fax
          </h1>

          <h2 className="text-xl lg:text-3xl font-bold text-slate-800">
            Connect one-on-one with an Expert
          </h2>

          <p className="text-slate-700 text-lg max-w-xl leading-8">
            Follow an easy, step-by-step method to connect your device, adjust
            settings, and learn the basics for daily printing at home or work.
          </p>

          <a
            href="/select-printer-software"
            className="inline-block bg-[#1965D9] hover:bg-blue-700 text-white text-xl px-8 py-4 shadow-lg transition"
          >
            Click Here For Printer Setup
          </a>
        </div>

        {/* Right Side Carousel */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[520px]">
            {/* Purple Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-full h-full bg-no-repeat bg-center bg-contain"
                style={{
                  backgroundImage: "url('bg-line.png')",
                }}
              />
            </div>

            {/* Carousel */}
            <div className="relative z-10">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {slides.map((src, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] flex justify-center"
                    >
                      <div className="relative w-105 h-80">
                        <Image
                          src={src}
                          alt={`Printer ${index + 1}`}
                          fill
                          priority={index === 0}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-gray-400 w-10 h-10 rounded flex items-center justify-center shadow"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next */}
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 hover:bg-gray-400 w-10 h-10 rounded flex items-center justify-center shadow"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {issues.map((issue, idx) => {
          const Icon = issue.icon;

          return (
            <a 
              href={issue.link}
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center flex flex-col items-center"
            >
              <Icon className="w-12 h-12 text-[#1A66DB] mb-4 stroke-[1.5]" />

              <span className="font-bold text-[#174ea0] leading-6">
                {issue.title}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
