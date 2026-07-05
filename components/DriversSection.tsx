import React from "react";
import { Zap, HelpCircle, Ban, CreditCard } from "lucide-react";

export default function DriversSection() {
  const values = [
    { icon: Zap, label: "Immediate Activation" },
    { icon: HelpCircle, label: "30-day money-back guarantee" },
    { icon: Ban, label: "Effortless subscription cancellation" },
    { icon: CreditCard, label: "Protected payment encryption" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Wireframe Mockup Illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <img src="/driversectionimg.png" alt="" />
        </div>

        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-black text-[#1762C0] leading-tight">
            Print Anywhere and Anytime
          </h2>
          <h3 className="text-3xl font-light text-slate-800">
            Maximize Your Printer with Updated Drivers
          </h3>
          <p className="text-slate-900 text-base leading-relaxed">
            Smart Printer Setup is your all-in-one solution for fast, smooth printing from any desktop, laptop, or mobile device to any printer, no significance the network in between. It is created to cater to homes and organizations of all sizes. Our software delivers centralized management and is ideal for both simple and complex workflows. Via Smart Printer Setup, you acquire the flexibility to operate your printing services on-premise or in the cloud, guaranteeing your printing demands are met now and in the future.
          </p>
          <button className="bg-[#1762C0] text-white text-xs font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#0d3f8c] transition">
            CONTACT US
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t pt-10">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center space-y-3">
              <div className="w-15 h-15 rounded-full border-2 border-[#1a60b6] flex items-center justify-center text-[#1762C0]">
                <Icon className="w-12 h-12 stroke-[2]" />
              </div>
              <span className="text-[15px] font-bold text-slate-800 leading-snug pt-2">{v.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}