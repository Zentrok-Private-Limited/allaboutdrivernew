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
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"download" | "install" | "error">(
    "download",
  );

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

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

    setShowPopup(true);
    setStatus("download");
    setProgress(0);

    startDownloadAnimation();
  };

  const startDownloadAnimation = () => {
    let download = 0;

    const downloadInterval = setInterval(() => {
      download += 1;
      setProgress(download);

      if (download >= 100) {
        clearInterval(downloadInterval);

        // Wait 2 seconds before starting installation
        setTimeout(() => {
          setStatus("install");
          setProgress(0);

          let install = 0;

          const installInterval = setInterval(() => {
            install += 1;
            setProgress(install);

            if (install >= 100) {
              clearInterval(installInterval);

              // Stay at 100% for 2 seconds before showing the error
              setTimeout(() => {
                setStatus("error");
              }, 2000);
            }
          }, 80); // Slower installation
        }, 2000);
      }
    }, 80); // Slower download
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

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center">
          {status !== "error" ? (
            <div className="bg-white rounded-lg shadow-2xl w-[280px] p-6">
              {/* Loader */}
              <div className="flex justify-center mb-5">
                <img src="/loading.gif" alt="Loading" className="w-20" />
              </div>

              <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">
                {status === "download"
                  ? "Downloading Driver..."
                  : "Installing Driver..."}
              </h2>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6A1BFF] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-center text-sm text-gray-500 mt-3">
                {progress}%
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-md shadow-2xl w-[480px] overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center px-6 pt-6">
               <div>
                 <h2 className="text-2xl font-bold text-[#24365F]">
                  Installing
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Fatal error occurred during installation.
                </p>
               </div>

                <button
                  onClick={() => {
                    setShowPopup(false);
                    setStatus("download");
                    setProgress(0);
                  }}
                  className="w-10 h-10 hover:bg-red-600 hover:text-white text-lg"
                >
                  ✕
                </button>
              </div>

              {/* Icon */}
              <div className="flex flex-col items-center mt-6">
                <img src="/error.png" alt="Error" className="w-45" />

                <h3 className="text-2xl font-bold text-[#24365F] mt-4">
                  2 Issues Found
                </h3>

                <div className="w-44 h-px bg-gray-300 my-5"></div>
              </div>

              {/* Errors */}
              <div className="px-8 text-[14px] leading-7 text-[#24365F]">
                <p>
                  <strong>1.</strong> Network Error <strong>0x00000709</strong>:
                  Download could not be completed!
                </p>

                <p className="mt-4">
                  <strong>2.</strong> Printer driver installation failed due to
                  error <strong>"C0000022"</strong>, preventing product driver
                  installation.
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center py-8">
                <button
                  onClick={() => {
                    setShowPopup(false);
                    openChat();
                  }}
                  className="bg-[#2F7CE8] hover:bg-[#2367c7] text-white px-8 py-2 rounded-md text-base font-medium transition"
                >
                  Live Chat Support
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
