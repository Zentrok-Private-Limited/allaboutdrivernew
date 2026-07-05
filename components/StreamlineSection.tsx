import React from "react";

export default function StreamlineSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 text-center">
      <div className="max-w-6xl mx-auto px-6 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
          Streamline <span className="text-[#1762c0]">Daily Printing Tasks</span>
        </h2>
        <p className="text-slate-600 text-lg font-light leading-relaxed">
          <span className="text-[#1762c0] font-semibold">All About Driver</span> Smart Printer Setup helps you handle frequent work-site printing issues. Whether you're dealing with numerous network configurations, arranging home printing access, or connecting devices across locations, the platform offers organized help to make the process easier and more streamlined.
        </p>

        <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-6 opacity-90">
         <img src="/streamlinesectionimg.webp" alt="" />
        </div>
      </div>
    </section>
  );
}