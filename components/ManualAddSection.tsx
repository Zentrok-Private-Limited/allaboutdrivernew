import Image from "next/image";
import React from "react";

export default function ManualAddSection() {
  const steps = [
    'Open the "Add Printer" or "Add Device" settings and click "The device I want isn\'t listed."',
    'If you know the device IP address or hostname, choose "Add a printer using an IP address or hostname" and enter the required information.',
    'If the device is shared from another computer, choose "Select a shared printer by name" and enter the shared printer path.',
    'For older devices, select "My printer is a little older. Help me find it." Windows will search for compatible devices.',
    'You can also choose "Add a local printer or network printer with manual settings" if you want to install it using a specific port or driver.',
    'Follow the on-screen instructions, choose the correct printer driver, and complete the installation.',
    'Print a test page to verify that the printer has been installed successfully.'
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
      {/* Left Image */}
      <div className="lg:col-span-6 flex justify-center">
        <Image
          src="/manual-printer-setup.jpg"
          alt="Manual Printer Setup"
          width={650}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="lg:col-span-6">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-[#1762C0] leading-tight">
          How Do You Add a Device Manually?
        </h2>

        <p className="mt-6 text-slate-700 text-lg leading-8">
          Sometimes Windows may not automatically detect your printer or
          another device during setup. In that case, you can manually add
          the device by following these simple steps.
        </p>

        <ol className="mt-8 space-y-2 list-decimal pl-6 text-base text-slate-800 marker:text-[#1762C0] marker:font-bold">
          {steps.map((step, index) => (
            <li key={index} className="leading-8">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}