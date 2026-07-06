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
import ScannerCarouselTwo from "@/components/ScannerCarouseltwo";
import CustomerReviews from "@/components/CustomerReviews";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SelectPrinterSoftware() {
  const [searchQuery, setSearchQuery] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
  
  
    // Auto-populate the search box on initial load if present in the URL
    useEffect(() => {
      const modelFromUrl = searchParams.get("model");
      if (modelFromUrl) {
        setSearchQuery(decodeURIComponent(modelFromUrl));
      }
    }, [searchParams]);
  
    const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!searchQuery.trim()) return;
  
    const slug = searchQuery
      .trim()
      .replace(/\s+/g, "-");
  
    router.push(`/select-printer-offline/${slug}`);
  };
  
  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  const benefitsListOne = [
    "Finds problems with Wi-Fi or USB connections",
    "Shows you how to restart the print spooler services",
    "Offers remedial steps that are specific to your printer model",
    "Make sure that your software and drivers are up to date",
    "Provides tools to restart or change printer settings",
    "Works with both Windows and macOS",
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

      {/* 2. SECTION: Why Is Your Printer Configuration Failing? */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1762c0] tracking-tight">
            Printer Not Working? Here is How to Get Back in Touch
          </h2>
          <p className="text-slate-900 text-sm md:text-lg leading-relaxed">
            Seeing that your printer isn't working can be annoying and stop you from working, especially if you need to print quickly. The good news? If you know what the most common problems are and how to fix them, you can get back online quickly and avoid them in the future.
          </p>

          {/* Checklist items dynamic mapping */}
          <ul className="space-y-3">
            {benefitsListOne.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-[#1762c0] shrink-0 fill-blue-100 mt-0.5" />
                <span className="text-xs md:text-lg text-slate-900 font-medium">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Application Workspace Vector Mockup */}
        <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-4 shadow-sm">
          <img src="/pissue-1.jpg" alt="" />
        </div>
      </section>

      {/* 3. SECTION: FIND THE RIGHT SOFTWARE FOR YOUR PRINTING NEEDS */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-100">
        {/* Left Side Active App Panel Mockup view */}
        <div className="lg:col-span-6 order-2 lg:order-1 bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-4 shadow-sm">
          <img src="/pissue-2.jpg" alt="" />
        </div>

        {/* Right Side Text Block Panel Content */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1762c0] tracking-tight">
            Start Fixing Your Printer's Problems Right Away
          </h2>
          <div className="space-y-4 text-slate-900 text-xs md:text-lg leading-relaxed font-normal">
            <p>
              Does "offline" mean that your printer is not linked, even though it is? Not to worry, this common issue can be solved with a few simple steps most of the time. No matter if you're printing at home or at the office, we can help you quickly and easily reconnect your printer.
            </p>
            <p>
              Our tips and tools are made to help you get your printer back online with as little work as possible. They include things like checking the network settings, updating drivers, and restarting the print spooler. These methods work with a lot of different printers and computer systems.
            </p>
            <p>
              Not sure how to start? The problem can be found with our help tools, which can then give you real-time, custom fixes for your printer. You shouldn't let offline mistakes stop you; let's print again right away.
            </p>
            <button onClick={openChat} className="px-8 py-3 bg-[#3cb4ff] text-white font-medium rounded-sm shadow-md hover:bg-[#2fa3ee] transition-all">
              Chat With Us
            </button>
          </div>
        </div>
      </section>

      {/* 5. CAROUSEL PROMO SLIDER CARD SECTION */}
      <ScannerCarouselTwo />
      <CustomerReviews/>

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

      {/* FIXED SCROLL TO TOP FLOATING COMPONENT BUTTON MOCK */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#00BCD4] hover:bg-[#0097A7] text-white p-3 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
