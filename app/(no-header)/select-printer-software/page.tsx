"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Laptop,
  Printer,
  Wifi,
  Link,
} from "lucide-react";
import ScannerCarousel from "@/components/ScannerCarousel";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SelectPrinterSoftware() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Auto-populate the search box on initial load if present in the URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");

    if (model) {
      setSearchQuery(decodeURIComponent(model));
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const slug = searchQuery.trim().replace(/\s+/g, "-");

    router.push(`/select-printer-software/${slug}`);
  };

  const benefitsListOne = [
    "Works with a wide range of printers and compatible devices.",
    "Gives you better control over print settings and output quality.",
    "Simple and easy-to-use tools designed for everyday printing tasks.",
    "Supports multiple file types for greater flexibility.",
    "Helps reduce printing errors, saving both time and resources.",
    "Regular updates help improve performance, stability, and compatibility.",
  ];

  const benefitsListTwo = [
    "Works with many printer models and operating systems.",
    "Makes it easier to adjust print settings and manage print jobs.",
    "Helps simplify printer setup and device connections.",
    "Provides useful tools for handling everyday printing tasks.",
    "Can help save time and improve productivity.",
    "Regular updates help keep the software compatible and running reliably.",
  ];

  return (
    <div className="w-full font-sans antialiased text-slate-800 bg-white relative">
      {/* 1. HERO SEARCH BANNER SECTION */}
      <section
        className="relative w-full text-white py-16 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg2.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Hero Text Controls */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-relaxed">
              We&apos;re here to help you get your <br />
              printer up and running.
            </h1>

            <div className="space-y-3">
              <p className="text-sm md:text-base text-slate-200 font-medium">
                To begin, please select how you&apos;d like to connect your
                printer:
              </p>
              <ul className="space-y-1.5 text-xs md:text-base text-slate-100 font-light list-disc list-inside pl-1">
                <li>Wi-Fi Network</li>
                <li>Wired Network (Ethernet)</li>
                <li>USB Cable Connection</li>
              </ul>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-sm md:text-base text-slate-200">
                First, enter or select your printer model so we can provide the
                correct setup instructions.
              </p>

              {/* Functional Dynamic Search Component */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex w-full max-w-xl bg-white rounded-md shadow-lg overflow-hidden border border-transparent focus-within:border-purple-300 transition-all"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Enter your printer model number. Ex: "LaserJet Pro 400..."'
                  className="w-full px-4 py-3.5 text-slate-800 placeholder-slate-400 text-xs md:text-sm outline-none font-normal"
                />
                <button
                  type="submit"
                  className="bg-[#1B75F2] hover:bg-[#1460ca] text-white px-6 font-semibold text-xs md:text-sm tracking-wide transition shrink-0"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Hero Visual Right Display */}
          <div className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0">
            <div className="relative max-w-lg md:max-w-2xl">
              <img
                src="/printersoftware.png"
                alt="Printer Image"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: WHY GOOD PRINTING SOFTWARE MATTERS */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1762c0] tracking-tight">
            Why Good Printing Software Matters
          </h2>
          <p className="text-slate-900 text-sm md:text-base leading-relaxed">
            Reliable printing software can make everyday printing simpler and
            more efficient. Whether you&apos;re printing at home, in a small
            office, or for business use, the right software helps you manage
            print jobs smoothly and achieve consistent results.
          </p>

          {/* Checklist items dynamic mapping */}
          <ul className="space-y-3">
            {benefitsListOne.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-[#1762c0] shrink-0 fill-blue-100 mt-0.5" />
                <span className="text-xs md:text-base text-slate-900 font-medium">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-slate-900 text-sm md:text-base leading-relaxed pt-2 font-normal">
            With the right printing software, you can enjoy a smoother printing
            experience and focus on getting your work done without unnecessary
            complications.
          </p>
        </div>

        {/* Right Side Application Workspace Vector Mockup */}
        <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-4 shadow-sm">
          <img src="/selectprintersoft1.jpg" alt="" />
        </div>
      </section>

      {/* 3. SECTION: FIND THE RIGHT SOFTWARE FOR YOUR PRINTING NEEDS */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-100">
        {/* Left Side Active App Panel Mockup view */}
        <div className="lg:col-span-6 order-2 lg:order-1 bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-4 shadow-sm">
          <img src="/selectprintersoft2.jpg" alt="" />
        </div>

        {/* Right Side Text Block Panel Content */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1762c0] tracking-tight">
            Find the Right Software for Your Printing Needs
          </h2>
          <div className="space-y-4 text-slate-900 text-xs md:text-base leading-relaxed font-normal">
            <p>
              The right printing software can make managing your printer easier
              and more efficient. Whether you&apos;re printing everyday
              documents, photos, or work-related files, good software helps
              ensure a smooth and reliable printing experience.
            </p>
            <p>
              With easy-to-use tools, you can adjust print settings, improve
              print quality, and manage print jobs with greater control. It also
              helps connect your printer to compatible devices and supports a
              variety of file formats, making printing more convenient.
            </p>
            <p>
              Designed for both home and office use, the software offers a
              simple interface that makes it easy to navigate and customize
              settings when needed. From basic printing tasks to more advanced
              options, everything is organized to help save time and reduce
              hassle.
            </p>
            <p className="font-medium text-slate-900">
              Choose a solution that helps you stay productive, improves
              printing efficiency, and gives you greater confidence in every
              print job.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION: WHY IS CHOOSING THE RIGHT PRINTER SOFTWARE IMPORTANT? */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-100">
        {/* Left Side Content Text Area */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1762c0] tracking-tight">
            Why Is Choosing the Right Printer Software Important?
          </h2>
          <p className="text-slate-900 text-xs md:text-base leading-relaxed">
            Using the right printer software can make printing easier and help
            your printer work more smoothly. It gives you better control over
            your printer settings and can help simplify everyday tasks, whether
            you&apos;re printing at home, in a small office, or in a larger
            workplace.
          </p>

          <ul className="space-y-3">
            {benefitsListTwo.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-[#1762c0] shrink-0 fill-blue-100 mt-0.5" />
                <span className="text-sm md:text-base text-slate-900 font-medium">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-slate-900 text-sm md:text-base leading-relaxed pt-2">
            Choosing software that works well with your printer can help create
            a more convenient and efficient printing experience from start to
            finish.
          </p>
        </div>

        {/* Right Side OS Dynamic Dialog Box Mockup */}
        <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-4 shadow-sm">
          <img src="/selectprintersoft3.jpg" alt="" />
        </div>
      </section>

      {/* 5. CAROUSEL PROMO SLIDER CARD SECTION */}
      <ScannerCarousel />

      <div className="max-w-5xl mx-auto bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 px-6 md:px-16 shadow-2xl shadow-black/30 mb-10">
        <h3 className="text-2xl font-bold text-slate-900 text-center tracking-wide mb-6 uppercase">
          Important Disclaimer
        </h3>
        <div className="space-y-4 text-slate-900 text-sm md:text-sm leading-relaxed text-justify ">
          <p>
            <span className="text-[#1762C0]">All About Driver</span> is an
            independent business and is not affiliated with, endorsed by,
            sponsored by, authorized by, or associated with HP Inc.,
            Hewlett-Packard (HP), Canon, Epson, Brother, Dell, Microsoft, Apple,
            Lenovo, Samsung, or any other manufacturer, brand, or trademark
            owner unless expressly stated.
          </p>
          <p>
            The name &quot;All About Driver&quot; is the legal name of an
            independent company and has no connection to Hewlett-Packard (HP
            Inc.) or any of its subsidiaries, affiliates, products, services,
            support channels, or websites. Any references to third-party brand
            names, product names, trademarks, or logos are used solely for
            identification and compatibility purposes. All trademarks, logos,
            product names, and brand names are the property of their respective
            owners. Customers seeking official manufacturer support, warranty
            services, product registration, or services directly from a brand
            should contact the respective manufacturer through their official
            website or official support channels.
          </p>
          <p>
            All About Driver provides independent products and services and does
            not claim to represent or act on behalf of any manufacturer or brand
            unless specifically disclosed in writing.
          </p>
        </div>
      </div>

      
    </div>
  );
}
