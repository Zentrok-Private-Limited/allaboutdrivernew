import React from "react";
import { Laptop, Smartphone, Radio, Layers, Key, ShieldCheck } from "lucide-react";

export default function ElementsSection() {
  const elements = [
    { icon: Laptop, title: "Printer and Device Agnostic", desc: "We support all varieties of leading printer devices and manufacturers, and are definitive for BYOD setting environments." },
    { icon: Smartphone, title: "Robust Mobile Apps", desc: "Our Desktop application is safe, permitting users to print to public or private printers, which is based on geolocation and authentication." },
    { icon: Radio, title: "Advanced Remote Printing", desc: "Securely attach and print from devices on one single network to printers on a disconnected network, actually to home printers." },
    { icon: Layers, title: "Smart Print Integration", desc: "Secure print submission and rendering for Windows-based devices, which includes Surface tablets, desktops, and laptops." },
    { icon: Key, title: "Secure Print Release", desc: "Flexible pull printing authorizes users to select an output device at the time of print release, reducing waste and improving security." },
    { icon: ShieldCheck, title: "Robust MDM Support", desc: "Smooth integration with directing MDM solutions such as AirWatch, MobileIron, and Good for app behavior management and controlled deployment." }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] my-16 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center text-slate-900 mb-12">
          Class-Leading <span className="text-[#1762C0]">Elements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
                <div className="text-amber-500 flex justify-center items-center">
                  <Icon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-extrabold text-center text-xl text-slate-800 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-base text-center leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}