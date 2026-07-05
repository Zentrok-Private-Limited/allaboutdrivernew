import React from "react";
import { Users, Cpu, ShieldAlert, Headphones, CircleDollarSign, ShieldCheck } from "lucide-react";

export default function OutsourcingSection() {
  const cards = [
    { icon: Users, title: "Specialised Team", desc: "Highly skilled PC Packard experts provide support. We resolve issues, answer enquiries, and keep your business productive and secure daily." },
    { icon: Cpu, title: "Innovation-Driven Technology", desc: "In order to avoid downtime and speed up resolution times, we employ intelligent, data-driven technologies to identify any problems in their early stages." },
    { icon: ShieldAlert, title: "Hyper Service Automation", desc: "To ensure consistency in quality across all IT processes, increase response speed, and improve accuracy, PC Packard uses intelligent automation." },
    { icon: Headphones, title: "Fast, Reliable Help", desc: "If your team ever needs assistance, our specialists are always there to help via email with prompt guidance and reliable support." },
    { icon: CircleDollarSign, title: "Clear and Simple Pricing", desc: "Dependable IT assistance tailored to your company's specific requirements, with transparent, predictable pricing and zero surprises." },
    { icon: ShieldCheck, title: "Total Safety Assured", desc: "Our comprehensive security approach includes encryption, testing, monitoring, and IT environment protection for every client." }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-12">
          Importance of All About Driver Support Outsourcing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="mx-auto w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-[#1762c0]">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-xl text-slate-800">{card.title}</h3>
                <p className=" text-base leading-relaxed text-slate-900">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}