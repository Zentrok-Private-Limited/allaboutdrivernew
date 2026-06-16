"use client";

import Image from "next/image";
import { useState, useEffect, use } from "react";

type Props = {
  params: Promise<{
    brand: string;
  }>;
};

type WizardStep =
  | "CLOSED"
  | "GET_STARTED"
  | "CONFIRM_MODEL"
  | "INITIALIZING_SETUP"
  | "SELECT_CONNECTION"
  | "SEARCHING_PORTS"
  | "CHECKING_SPOOLER"
  | "CHECKING_DRIVERS"
  | "CHECKING_FILES"
  | "LOADING_ERROR"
  | "WIFI_FAILED"
  | "DETECTING_PROBLEMS"
  | "ISSUES_FOUND";

export default function PrinterBrandPage({ params }: Props) {
  const unwrappedParams = use(params);
  const rawBrand = unwrappedParams?.brand || "";

  const [modelNumber, setModelNumber] = useState("");
  const [wizardStep, setWizardStep] = useState<WizardStep>("CLOSED");
  const [progressWidth, setProgressWidth] = useState(0);

  const brandData = {
    hp: {
      name: "HP",
      themeBg: "bg-[#2f57a4]",
      logo: "/hp.png",
      heroImage: "/hp1.png",
      modelImage: "/hp3.png",
    },
    canon: {
      name: "Canon",
      themeBg: "bg-[#d60000]",
      logo: "/canon.png",
      heroImage: "/canon1.png",
      modelImage: "/canon2.png",
    },
    epson: {
      name: "Epson",
      themeBg: "bg-[#003399]",
      logo: "/epson.png",
      heroImage: "/epson1.png",
      modelImage: "/epson2.png",
    },
    brother: {
      name: "Brother",
      themeBg: "bg-[#0d4aa2]",
      logo: "/logos/brother-logo.png",
      heroImage: "/printers/brother-printer.png",
      modelImage: "/models/brother-model.png",
    },
  };

  const data = brandData[rawBrand.toLowerCase() as keyof typeof brandData];

  // Automated step loop sequence engine
  useEffect(() => {
    // Automatically transition from the initialization loader to connection screen
    if (wizardStep === "INITIALIZING_SETUP") {
      const timer = setTimeout(() => setWizardStep("SELECT_CONNECTION"), 2000);
      return () => clearTimeout(timer);
    }
    if (wizardStep === "SEARCHING_PORTS") {
      const timer = setTimeout(() => setWizardStep("CHECKING_SPOOLER"), 1500);
      return () => clearTimeout(timer);
    }
    if (wizardStep === "CHECKING_SPOOLER") {
      const timer = setTimeout(() => setWizardStep("CHECKING_DRIVERS"), 1500);
      return () => clearTimeout(timer);
    }
    if (wizardStep === "CHECKING_DRIVERS") {
      const timer = setTimeout(() => setWizardStep("CHECKING_FILES"), 1500);
      return () => clearTimeout(timer);
    }
    if (wizardStep === "CHECKING_FILES") {
      const timer = setTimeout(() => setWizardStep("LOADING_ERROR"), 1500);
      return () => clearTimeout(timer);
    }
    if (wizardStep === "LOADING_ERROR") {
      const timer = setTimeout(() => setWizardStep("WIFI_FAILED"), 1500);
      return () => clearTimeout(timer);
    }
  }, [wizardStep]);

  // Loading progress bar loops into final issues terminal layout
  useEffect(() => {
    if (wizardStep === "DETECTING_PROBLEMS") {
      setProgressWidth(0);
      const interval = setInterval(() => {
        setProgressWidth((old) => {
          if (old >= 100) {
            clearInterval(interval);
            setTimeout(() => setWizardStep("ISSUES_FOUND"), 400);
            return 100;
          }
          return old + 10;
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [wizardStep]);

  if (!data) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2 font-sans bg-gray-50">
        <h1 className="text-xl font-bold text-gray-800">Brand Not Found</h1>
        <p className="text-sm text-gray-500 font-medium">
          The requested manufacturer "{rawBrand}" is currently unconfigured.
        </p>
      </div>
    );
  }

  const isButtonDisabled = !modelNumber.trim();
  const closeWizard = () => {
    setWizardStep("CLOSED");
    setProgressWidth(0);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 antialiased relative">
      {/* HEADER BANNER BLOCK */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="relative h-12 w-28">
            <Image
              src={data.logo}
              alt={`${data.name} logo`}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <nav className="hidden gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              OfficeJet
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              InkJet
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              LaserJet
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Envy
            </a>
          </nav>
        </div>
      </header>

      {/* DYNAMIC BRAND HERO SECTION */}
      <section className={`${data.themeBg} transition-colors duration-300`}>
        <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Download Free {data.name} Printer Drivers
              </h1>
              <ul className="space-y-2 text-sm font-medium text-white/90">
                <li>• Make sure your printer is powered on</li>
                <li>• Click on Download to install the drivers</li>
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep("GET_STARTED")}
                  disabled={isButtonDisabled}
                  className="rounded-full bg-blue-600 px-7 py-3 text-xs font-bold tracking-wide text-white shadow-lg transition hover:bg-blue-700"
                >
                  Download Now ↓
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-5">
              <div className="relative h-64 w-full max-w-md sm:h-80">
                <Image
                  src={data.heroImage}
                  alt={`${data.name} setup`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRIVER DOWNLOAD INTERACTIVE REGISTRATION CONTAINER */}
      <section className="bg-[#f3f4f6] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Quick Download Free Drivers
              </h2>
              <p className="text-xs text-gray-500">
                Fill the form and download your {data.name} printer driver
              </p>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Model Number:
                </label>
                <input
                  type="text"
                  value={modelNumber}
                  onChange={(e) => setModelNumber(e.target.value)}
                  placeholder="Enter printer model"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setWizardStep("GET_STARTED")}
                  disabled={isButtonDisabled}
                  className="rounded-md bg-[#256BE7] px-8 py-3.5 text-xs font-bold text-white transition disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  Download Driver
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900">
                How to find printer model number?
              </h3>
              <p className="text-xs text-gray-400">
                The product name is on the front of your device.
              </p>
              <div className="flex justify-center pt-4">
                <div className="relative h-60 w-full max-w-xs">
                  <Image
                    src={data.modelImage}
                    alt="Model guide label schematic"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIZARD SYSTEM OVERLAY MODAL HOOK */}
      {wizardStep !== "CLOSED" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-4 shadow-2xl transition-all border border-gray-100">
            <button
              onClick={closeWizard}
              className="absolute top-3 right-5 text-gray-400 hover:text-gray-600 transition text-lg font-bold p-1"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-900 pb-3 mb-6">
              Quick Download Free Drivers
            </h3>

            {/* STEP 1: GET STARTED ROUTE */}
            {wizardStep === "GET_STARTED" && (
              <div className="text-center space-y-6 py-4">
                <button
                  onClick={() => setWizardStep("CONFIRM_MODEL")}
                  className="bg-[#256BE7] text-white font-semibold text-xs px-6 py-3 rounded-md transition"
                >
                  Let's Start →
                </button>
                <p className="text-xs text-gray-500 font-medium">
                  Start Printer Setup Wizard
                </p>
                <div className="flex justify-center pt-2">
                  <img src="/printer.png" alt="printer" />
                </div>
              </div>
            )}

            {/* STEP 2: CONFIRM DESIGNATED INPUT VALUE */}
            {wizardStep === "CONFIRM_MODEL" && (
              <div className="space-y-5 py-2">
                <p className="text-xs font-semibold text-gray-600">
                  Fill the form and download your printer driver
                </p>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase">
                    Model Number
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={modelNumber}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm font-semibold text-gray-700 outline-none"
                  />
                </div>
                <button
                  onClick={() => setWizardStep("INITIALIZING_SETUP")} // Updates state trigger point
                  className="w-full bg-[#256BE7] text-white text-xs font-bold py-3.5 rounded-md transition shadow-sm"
                >
                  Quick Download & Install Drivers ↓
                </button>
              </div>
            )}

            {/* NEW STEP 2.5: INITIALIZING LOADER WINDOW MATCHING ATTACHED SCREENSHOT */}
            {wizardStep === "INITIALIZING_SETUP" && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                {/* Custom purple modern partial circle spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-solid border-[#256be7] border-t-transparent" />
                <p className="text-[13px] font-medium text-gray-500 tracking-wide">
                  Initializing printer setup...
                </p>
              </div>
            )}

            {/* STEP 3: CONNECTION TYPING CHOICE */}
            {wizardStep === "SELECT_CONNECTION" && (
              <div className="text-center space-y-6 py-2">
                <h4 className="text-sm font-bold text-gray-700">
                  Select Wi-Fi or USB connection
                </h4>

                <div className="grid grid-cols-2 gap-8 pt-2">
                  <div className="flex flex-col items-center space-y-4 p-4 rounded-xl border border-gray-50 bg-gray-50/50">
                    <img src="/usb.jpg" alt="usb" />
                    <p className="text-xs font-medium text-gray-600">
                      <span className="font-bold">USB:</span> Connect via USB
                    </p>
                    <button
                      onClick={() => setWizardStep("SEARCHING_PORTS")}
                      className="bg-[#256BE7] text-white text-[11px] font-bold px-4 py-2 rounded-md hover:bg-blue-800 transition"
                    >
                      Let's Start →
                    </button>
                  </div>

                  <div className="flex flex-col items-center space-y-4 p-4 rounded-xl border border-gray-50 bg-gray-50/50">
                    <img src="/wifi.png" alt="wifi" />
                    <p className="text-xs font-medium text-gray-600">
                      <span className="font-bold">Wi-Fi:</span> Connect via
                      Wi-Fi
                    </p>
                    <button
                      onClick={() => setWizardStep("SEARCHING_PORTS")}
                      className="bg-[#256BE7] text-white text-[11px] font-bold px-4 py-2 rounded-md hover:bg-blue-800 transition"
                    >
                      Let's Start →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PROCESS PROGRESS BAR DISPLAY PIPELINES */}
            {(wizardStep === "SEARCHING_PORTS" ||
              wizardStep === "CHECKING_SPOOLER" ||
              wizardStep === "CHECKING_DRIVERS" ||
              wizardStep === "CHECKING_FILES" ||
              wizardStep === "LOADING_ERROR") && (
              <div className="text-center py-8 space-y-6">
                <p className="text-xs font-medium text-black max-w-xs mx-auto">
                  Verify your printer's connection channel for a seamless setup
                  process.
                </p>
                <div className="flex items-center justify-center gap-2.5 text-xs font-semibold text-gray-600">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#256be7] border-t-transparent" />
                  {wizardStep === "SEARCHING_PORTS" && (
                    <span>Searching for Ports...</span>
                  )}
                  {wizardStep === "CHECKING_SPOOLER" && (
                    <span>Checking Printer Spooler...</span>
                  )}
                  {wizardStep === "CHECKING_DRIVERS" && (
                    <span>Checking Printer Drivers...</span>
                  )}
                  {wizardStep === "CHECKING_FILES" && (
                    <span>Checking Installation Files...</span>
                  )}
                  {wizardStep === "LOADING_ERROR" && (
                    <span className="text-red-500 font-bold">
                      Loading Error...
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-gray-500 max-w-xs mx-auto">
                  1. Check USB cable connected both side
                </p>
                <p className="text-xs font-medium text-gray-500 max-w-xs mx-auto">
                  2. Check your device driver (USB Port Drivers)
                </p>
              </div>
            )}

            {/* STEP 4: FAILURE FEEDBACK WORKSPACE */}
            {wizardStep === "WIFI_FAILED" && (
              <div className="text-center py-2 space-y-6">
                <div className="flex justify-center">
                  <div className="p-3 bg-red-50 rounded-full text-red-500">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                </div>

                <h4 className="text-base font-extrabold text-gray-800">
                  Connection execution failed.
                </h4>

                <div className="max-w-xs mx-auto space-y-3 text-xs border-y border-gray-100 py-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">
                      Check connection links on both ends.
                    </span>
                    <button
                      onClick={() => setWizardStep("SEARCHING_PORTS")}
                      className="text-[#256be7] font-bold hover:underline"
                    >
                      Retry
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">
                      Check hardware configurations.
                    </span>
                    <button
                      onClick={() => setWizardStep("DETECTING_PROBLEMS")}
                      className="text-[#256be7] font-bold hover:underline"
                    >
                      Check Drivers
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 justify-center pt-2">
                  <button
                    onClick={() => setWizardStep("DETECTING_PROBLEMS")}
                    className=" bg-[#256be7] text-white  text-xs font-bold px-6 py-2.5 rounded-md hover:bg-blue-800 transition"
                  >
                    Fix Issue
                  </button>
                  <button className="bg-[#256be7] text-white text-xs font-bold px-6 py-2.5 rounded-md hover:bg-blue-800 transition">
                    Need Assistance?
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: AUTOMATED DEEP SYSTEM DIAGNOSIS ACTION */}
            {wizardStep === "DETECTING_PROBLEMS" && (
              <div className="py-6 space-y-6 text-center">
                <h4 className="text-sm font-extrabold text-[#256be7] tracking-wide uppercase">
                  Detecting problems
                </h4>

                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#256be7] transition-all duration-300 ease-out"
                    style={{ width: `${progressWidth}%` }}
                  />
                </div>

                <p className="text-xs font-semibold text-gray-500">
                  {progressWidth < 40 && "Checking the spooler service..."}
                  {progressWidth >= 40 &&
                    progressWidth < 80 &&
                    "Analyzing localized device connectivity nodes..."}
                  {progressWidth >= 80 &&
                    progressWidth < 100 &&
                    "Resolving device routing conflict filters..."}
                  {progressWidth === 100 &&
                    "System check complete! Summarizing logs..."}
                </p>
              </div>
            )}

            {/* FINAL ERROR REPORT PANEL */}
            {wizardStep === "ISSUES_FOUND" && (
              <div className="overflow-hidden w-[470px] mx-auto">
                <div className="px-8 py-7 text-center">
                  <div className="flex justify-center mb-5">
                    <div className="relative">
                      <div className="w-[145px] h-[85px] border border-[#a7b0c5] rounded bg-white flex items-center justify-center">
                        <div className="relative w-[58px] h-[58px] rounded-full border-[5px] border-red-600">
                          <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-red-600">
                            ERROR
                          </div>
                          <div className="absolute top-1/2 left-1/2 w-[68px] h-[5px] bg-red-600 rotate-45 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="mx-auto w-12 h-3 bg-[#d8d8d8]" />
                      <div className="mx-auto w-25 h-5 bg-[#efefef] border border-[#bdbdbd]" />
                    </div>
                  </div>

                  <h2 className="text-[22px] font-bold text-[#252944] mb-3">
                    2 Issues Found
                  </h2>
                  <div className="w-57.5 h-px bg-[#b7bccb] mx-auto mb-7" />

                  <div className="max-w-[320px] mx-auto text-center text-[14px] text-[#303030] leading-7">
                    <div className="mb-4">
                      <p>
                        1. Network Error{" "}
                        <span className="font-bold">0x00000709</span>
                      </p>
                      <p>: Download Could Not Be Completed !</p>
                    </div>
                    <div>
                      <p>
                        2. Printer driver installation has been failed due to
                        error
                      </p>
                      <p>
                        "<span className="font-bold">C0000022</span>" preventing
                        product driver installation !
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() =>
                        alert("Connecting to a Live Support agent...")
                      }
                      className="w-51.25 h-10.5 bg-[#3f73c8] hover:bg-[#2d5fb0] text-white font-semibold text-[15px] rounded-md shadow-md"
                    >
                      Live Chat Support
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
