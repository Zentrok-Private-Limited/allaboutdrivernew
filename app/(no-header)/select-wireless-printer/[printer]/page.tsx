"use client";
import ScannerCarouseltwo from "@/components/ScannerCarouseltwo";
import CustomerReviews from "@/components/CustomerReviews";

export default function PrinterGuide() {

  const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#1762C0] selection:bg-[#87B3F6] selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-b from-[#87B3F6] via-indigo-200 to-slate-50 px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Hero Left Card */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1762C0] leading-tight mb-4">
              Print and Scan Doctor for PC: Made Easy
            </h1>
            <p className="text-sm md:text-base text-slate-900 mb-6 leading-relaxed">
              Follow our step-by-step printer guides to connect your printer to
              Wi-Fi, USB, or Ethernet and start printing quickly. Whether you're
              installing a new printer or resolving a setup issue, we've got you
              covered.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Easy Step-by-Step Instructions",
                "Compatible with Windows & macOS",
                "Printer Setup and Connectivity Guides",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-base font-medium text-indigo-950"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-[#1e7edd] rounded flex items-center justify-center text-white">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <button onClick={openChat} className="w-full sm:w-auto bg-[#2571F2] hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-colors duration-200 text-sm md:text-base">
              Click for Chat Assistance
            </button>
          </div>

          {/* Hero Right Image Placeholder */}
          <div className="md:col-span-5 flex justify-center ">
            <img src="/finalimge.jpg" alt="" />
          </div>
        </div>
      </section>

      {/* --- STEP-BY-STEP GUIDES --- */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        {/* Step 1 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#1762C0] mb-4">
                Step 1: Reconnect the USB Cable Properly
              </h2>
              <p className="text-sm text-slate-900 mb-4">
                Ensure a secure physical connection between your printer and
                computer.
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
                <li>
                  Unplug the USB cable from both the printer and the computer.
                </li>
                <li>Wait a few seconds before reconnecting.</li>
                <li>Firmly plug the cable into both ends.</li>
                <li>Restart the printer installation process.</li>
              </ol>
            </div>
            {/* Embedded vector diagram layout mockup */}
            <div className="mt-6 p-4 border  max-w-sm flex gap-4 items-center justify-center text-xs text-slate-400">
              <img src="/fpagedia1.png" alt="" />
            </div>
          </div>
          <div className="md:col-span-5 aspect-[4/3]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage1.jpg" alt="" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#1762C0] mb-4">
                Step 2: Test the USB Port Functionality
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Make sure the USB port you're using is working correctly.
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
                <li>Try connecting the printer to a different USB port.</li>
                <li>
                  Alternatively, test the current port by connecting another USB
                  device.
                </li>
              </ol>
            </div>
            <div className="mt-6 p-4 border border-slate-200 rounded-xl bg-slate-50 max-w-sm flex gap-4 items-center justify-center text-xs text-slate-400">
              <img src="/fpagedia2.png" alt="" />
            </div>
          </div>
          <div className="md:col-span-5 aspect-[4/3]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage2.jpg" alt="" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 3: Use a Different USB Cable
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              A faulty cable might be the problem.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
              <li>
                Swap the existing cable with a known working or new USB cable.
              </li>
              <li>
                Reconnect the printer and computer, then restart the setup.
              </li>
            </ol>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage3.jpg" alt="" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 4: Disconnect Unnecessary USB Devices
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Too many connected devices can cause conflicts.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
              <li>
                Unplug all non-essential USB devices (e.g., external drives,
                cameras).
              </li>
              <li>Keep only the mouse, keyboard, and printer connected.</li>
              <li>Retry the installation.</li>
            </ol>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage4.jpg" alt="" />
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 5: Perform a Printer Power Reset
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              A quick reset can restore USB communication.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal mb-4">
              <li>Turn off the printer and unplug it from the wall.</li>
              <li>Wait at least 60 seconds.</li>
              <li>Plug it back into a direct wall outlet and power it on.</li>
            </ol>
            <p className="text-xs text-slate-500 italic  p-2.5 rounded-lg border border-slate-100">
              If the setup resumes automatically, proceed with installation.
              Otherwise, run the installer manually.
            </p>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage5.jpg" alt="" />
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 6: Update Drivers via Device Manager
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Ensure the correct drivers are in place.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
              <li>Open Device Manager from the Start menu.</li>
              <li>
                Expand &quot;Printers&quot; or &quot;USB Controllers&quot;.
              </li>
              <li>
                Locate your printer, right-click it, and choose Update driver
                &rarr; Search automatically for drivers.
              </li>
            </ol>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage6.jpg" alt="" />
          </div>
        </div>

        {/* Step 7 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 7: Uninstall Previous Printer Software
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Old or conflicting installations may block setup.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
              <li>
                Go to Control Panel &gt; Programs &gt; Uninstall a Program.
              </li>
              <li>Find and uninstall your printer software.</li>
              <li>Reboot your computer before reinstalling.</li>
            </ol>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage7.jpg" alt="" />
          </div>
        </div>

        {/* Step 8 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 8: Clear Temporary Files
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Clean out junk files that might interfere with installation.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
              <li>Search for and open Disk Cleanup.</li>
              <li>Choose your system drive (usually C:).</li>
              <li>
                Select appropriate file categories and click OK to remove them.
              </li>
            </ol>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage8.jpg" alt="" />
          </div>
        </div>

        {/* Step 9 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 border-l-indigo-600 border-y border-r border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <h2 className="text-xl font-bold text-[#1762C0] mb-4">
              Step 9: Perform a Clean Boot to Disable Interference
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Eliminate background software conflicts.
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs md:text-sm text-slate-700 font-normal">
              <li>Open System Configuration (search &quot;msconfig&quot;).</li>
              <li>
                Under the &quot;General&quot; tab, select Selective Startup and
                uncheck Load startup items.
              </li>
              <li>
                Go to the &quot;Services&quot; tab, check Hide all Microsoft
                services, and then disable the remaining services.
              </li>
              <li>Restart your computer and run the printer setup again.</li>
            </ol>
          </div>
          <div className="md:col-span-5 aspect-[16/9]  rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
            <img src="/fpage9.jpg" alt="" />
          </div>
        </div>

        {/* Bottom Mid-Page Anchor CTA */}
        <div className="w-full max-w-5xl mx-auto px-4 pt-6 pb-4">
          <div className="border border-dashed border-indigo-300 rounded-md p-6 flex justify-center items-center bg-transparent">
            <button onClick={openChat} className="bg-[#296EEC] hover:bg-[#4900CC] text-white font-medium px-10 py-3.5 rounded-xl shadow-sm transition-all duration-200 text-base md:text-lg tracking-wide">
              Click for Chat Assistant
            </button>
          </div>
        </div>
      </main>

      {/* --- FOOTER CTA SECTION --- */}
      <footer className="bg-[#296EEC] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Looking for Perfect Printer Solution?
            </h2>
            <p className="text-indigo-100 text-base md:text-lg mt-2">
              Our experts are here to help you find the right partner that fits
              your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto pt-4">
            {/* Card 1 - Appointment */}
            <div className="bg-[#296EEC] border border-indigo-500/30 rounded-2xl p-6 flex flex-col items-center text-center justify-between space-y-4 shadow-xl">
              <div className="space-y-3">
                {/* Embedded Calendar Custom SVG Icon */}
                <svg
                  className="w-15 h-15 text-white mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zM14.25 15h.008v.008H14.25V15zm0 2.25h.008v.008H14.25v-.008zM16.5 15h.008v.008H16.5V15zm0 2.25h.008v.008H16.5v-.008z"
                  />
                </svg>
                <h3 className="text-xl font-bold">Schedule an appointment</h3>
                <p className="text-base text-indigo-100">
                  Tell us when you&apos;re available and we&apos;ll have an
                  expert call you.
                </p>
              </div>
              <a href="/ContactUs" className="w-full bg-white text-indigo-700 font-semibold py-2.5 rounded-xl hover:bg-indigo-50 transition-colors duration-200 text-base">
                Schedule Now
              </a>
            </div>

            {/* Card 2 - Chat */}
            <div className="bg-[#296EEC] border border-indigo-500/30 rounded-2xl p-6 flex flex-col items-center text-center justify-between space-y-4 shadow-xl">
              <div className="space-y-3">
                {/* Embedded Chat Custom SVG Icon */}
                <svg
                  className="w-15 h-15 text-white mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.33 0 .618.117.843.342.225.225.338.513.338.865V18.25a.75.75 0 01-1.076.67l-3.611-1.805a.75.75 0 00-.335-.08h-7.659c-.352 0-.64-.113-.865-.338a1.18 1.18 0 01-.342-.843v-7.25c0-.352.117-.64.342-.865.225-.225.513-.338.865-.338h11.743zM3.75 15.5H5.25v1.5H3.75a1.25 1.25 0 01-1.25-1.25v-8.5C2.5 6.425 3.175 5.75 4 5.75h11.5a1.25 1.25 0 011.25 1.25V8.5h-1.5V7.25H4v8.25h1.25v-1.5z"
                  />
                </svg>
                <h3 className="text-xl font-bold">Chat with us</h3>
                <p className="text-base text-indigo-100">Chat with our expert</p>
              </div>
              <button onClick={openChat} className="w-full bg-white text-indigo-700 font-semibold py-2.5 rounded-xl hover:bg-indigo-50 transition-colors duration-200 text-base">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ScannerCarouseltwo />
      <CustomerReviews />

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
    </div>
  );
}
