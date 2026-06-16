'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, Calendar, ChevronDown, Terminal, 
  Cpu, HardDrive, RefreshCw, AlertTriangle, ShieldCheck, Mail, MapPin
} from 'lucide-react';


const faqConfig = {
  companyName: "All About Driver",
  email: "info@allaboutdriver",
  url: "http://allaboutdriver.com/",
  corporateAddress: {
    name: "All About Driver",
    building: "Room 123, XYZ",
    footerUSAddress: "Anywhere, USA",
  },
};

const faqSections = [
  {
    category: "Core Driver Concepts",
    icon: <Cpu size={16} className="text-[#1464D8]" />,
    items: [
      {
        id: "q1",
        question: "What exactly is a device driver and why is it needed?",
        answer: "A device driver is an essential architectural software component that allows your operating system to communicate effectively with physical hardware peripherals (such as graphics processing units, network interface cards, and audio chipsets). Without the proper driver configuration, the operating system cannot send correct operational instructions to the physical hardware module."
      },
      {
        id: "q2",
        question: "Does your website distribute or install automated driver installer software?",
        answer: "No. Mad About Drivers is strictly an educational resource and informational portal. We do not distribute, package, or execute software binary installations, driver management utilities, or third-party executable updates directly from our servers. All references are for structural and diagnostic insights only."
      }
    ]
  },
  {
    category: "System Stability & Integrity",
    icon: <ShieldCheck size={16} className="text-[#1464D8]" />,
    items: [
      {
        id: "q3",
        question: "How do I recognize if a peripheral driver has become unstable or corrupted?",
        answer: "Common telemetry indicators of driver failure include persistent system crashes (such as Kernel Panics or Blue Screen of Death incidents referencing specific .sys files), sudden loss of hardware response metrics, rendering artifacts in graphics environments, or unexpected drops in network throughput profiles."
      },
      {
        id: "q4",
        question: "What is a WHQL-certified driver file?",
        answer: "WHQL stands for Windows Hardware Quality Labs. A WHQL-certified driver has undergone exhaustive compatibility diagnostic matrices by operating system providers to ensure fundamental system safety, mathematical precision under load metrics, and robust stability standards before deployment."
      }
    ]
  },
  {
    category: "Diagnostics & Resolution",
    icon: <RefreshCw size={16} className="text-[#1464D8]" />,
    items: [
      {
        id: "q5",
        question: "What is the standard procedure for performing a clean driver roll-back?",
        answer: "When a newly configured driver interface displays degradation in platform responsiveness, a clean roll-back can be completed via your operating system's hardware management node. By accessing the properties grid of the targeted device, you can select 'Roll Back Driver' to restore the previous validated operational firmware link."
      },
      {
        id: "q6",
        question: "Why do generic hardware drivers sometimes lack OEM specific features?",
        answer: "Generic driver profiles are engineered by chip manufacturers to fit broad universal specifications across many brands. Original Equipment Manufacturers (OEMs) often modify these baseline architectures to match custom thermal limits, unique macro keys, power management profiles, or proprietary motherboard features."
      }
    ]
  }
];

const BlueprintGridLines = () => (
  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] -z-10 px-6">
    <div className="w-full h-full border-x border-slate-900 grid grid-cols-4 gap-0">
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
      <div className="border-r border-slate-900 h-full" />
    </div>
  </div>
);

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>("q1");

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <BlueprintGridLines />

      
      <header className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto text-center space-y-4 border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-blue-50/40 rounded-full blur-[140px] -z-10 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1464D8] border border-blue-100/60 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mx-auto">
          <HelpCircle size={13} /> Information Desk
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 uppercase">
          Frequently Asked Questions
        </h1>
        
      </header>

      
      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        
        {/* Left Side Static Support Alert Module */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 lg:h-[calc(100vh-160px)]">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-[#1464D8]" /> System Support
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              Can't pinpoint your specific hardware configuration problem or architecture anomaly within this standardized telemetry index?
            </p>
            <div className="pt-2">
              <a 
                href={`mailto:${faqConfig.email}`}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
              >
                Submit Technical Inquiry
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/30 flex gap-3 text-xs text-amber-800 leading-relaxed">
            <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Disclaimer Notice:</strong> Educational contents are provided for high-level system architectural diagnosis only. Always create a clean system backup state before modifying hardware telemetry parameters.</span>
          </div>
        </aside>

        {/* Right Side Framer Motion Accordion Engine */}
        <article className="lg:col-span-8 space-y-10">
          {faqSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              
              {/* Category Subhead */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">
                {section.icon}
                <span>{section.category}</span>
              </div>

              {/* Accordion List Loop */}
              <div className="space-y-3">
                {section.items.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <div 
                      key={item.id}
                      className={`border rounded-2xl transition-all duration-200 bg-white ${
                        isExpanded ? "border-slate-200 shadow-xs" : "border-slate-100 hover:border-slate-200"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                      >
                        <span className={`text-base md:text-lg font-normal tracking-tight transition-colors ${isExpanded ? "text-[#1464D8]" : "text-slate-900 group-hover:text-[#1464D8]"}`}>
                          {item.question}
                        </span>
                        <div className={`p-1 rounded-md border border-slate-100 transition-transform duration-200 ${isExpanded ? "rotate-180 bg-slate-50 text-[#1464D8]" : "text-slate-400"}`}>
                          <ChevronDown size={16} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-1 text-sm md:text-base text-slate-500 font-light border-t border-slate-50/60 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </article>
      </main>

    </div>
  );
}