import React from "react";
import { ThumbsUp, ShieldAlert, ShieldCheck, CreditCard } from "lucide-react";

export default function CompatibilityAndOrder() {
  const compatibilityData = [
    {
      title: "Requirements",
      desc: "Intel or AMD Processor, 4 GB RAM, 100 MB Free Disk Space",
    },
    {
      title: "Operating System",
      desc: "Windows 8, Windows 10, Windows 11, Windows 12",
    },
    {
      title: "Supported Browsers",
      desc: "Google Chrome, Mozilla Firefox, Microsoft Edge",
    },
  ];

  const confidenceData = [
    {
      icon: ThumbsUp,
      title: "Assured Satisfaction",
      desc: "Enjoy our money-back help and 30-day risk-free trial.",
    },
    {
      icon: ThumbsUp, // Using matching icon template from screenshot layout
      title: "Premium Help",
      desc: "Get client support to assist with any problems or queries.",
    },
    {
      icon: ShieldAlert,
      title: "Trusted Security",
      desc: "Our software is 100% safe, secure, and free from adware.",
    },
    {
      icon: CreditCard,
      title: "Secure Transactions",
      desc: "Quick and fast downloads with encrypted connections.",
    },
  ];

  return (
    <div className="w-full font-sans antialiased text-slate-800">
      {/* Compatibility Details Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-black">
            Compatibility <span className="text-[#1762C0]">Details</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compatibilityData.map((item, idx) => (
              <div key={idx} className="bg-[#F5F5F5] rounded-sm p-8 pt-0 flex flex-col items-center">
                {/* Ribbon Heading */}
                <div className="relative w-[105%] bg-[#1762C0] text-white font-semibold py-3 px-6 my-4 shadow-md flex items-center justify-center">
                  {/* Left Chevron Ribbon Cut */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#F3F4F6]" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }} />
                  <span className="text-xl tracking-wide">{item.title}</span>
                </div>
                <p className="text-slate-900 text-base leading-relaxed mt-6 px-4 max-w-[240px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order with Confidence Section */}
      <section className="bg-[#F8FAFC] py-16 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-black">
            Order <span className="text-[#1762C0]">with Confidence</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {confidenceData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-[#F9FAFB] border border-slate-100/80 rounded-xl p-8 flex flex-col items-center text-center shadow-sm">
                  {/* Circular Badge Container */}
                  <div className="w-18 h-18 rounded-full bg-[#A80000] flex items-center justify-center text-white mb-6 shadow-[0_4px_12px_rgba(168,0,0,0.3)]">
                    <Icon className="w-9 h-9" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed max-w-[200px]">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}