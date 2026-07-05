import Image from "next/image";
import React from "react";

export default function OfflineSection() {
  const steps = [
    "Start by checking all cable connections. If your printer is connected with a USB cable, make sure it is securely plugged into both the printer and your computer.",
    "If you're using a wireless printer, confirm that it is connected to the correct Wi-Fi network and has a stable connection.",
    "Open the print queue on your computer and clear any pending or stuck print jobs that may be causing the issue.",
    "Check your printer drivers. Outdated or corrupted drivers can prevent the printer from communicating properly with your device. Installing the latest driver version may help restore functionality.",
    "Use the printer's built-in troubleshooting or diagnostic tool to identify and fix common printing problems.",
    "Inspect the printer for any paper jams. Carefully remove any stuck paper to avoid damaging the printer's internal components.",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
      {/* Left Content */}
      <div className="lg:col-span-6 order-2 lg:order-1">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-[#1762C0] leading-tight">
          How Can You Fix a Printer That Shows Offline?
        </h2>

        <p className="mt-6 text-slate-700 text-lg leading-8">
          If your printer suddenly stops printing, it may have gone offline.
          This is a common issue and can often be resolved with a few simple
          troubleshooting steps.
        </p>

        <ol className="mt-8 space-y-2 text-slate-800 text-base list-decimal pl-6 marker:text-[#1762C0] marker:font-bold">
          {steps.map((step, index) => (
            <li key={index} className="leading-8">
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Right Image */}
      <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
        <Image
          src="/printer-offline.jpg"
          alt="Printer Offline"
          width={650}
          height={500}
          className="shadow-xl w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}