"use client";

import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  CalendarDays,
  ShieldCheck,
  Headphones,
  Wrench,
  Wifi,
  Usb,
  Network,
} from "lucide-react";

 const openChat = () => {
    if (typeof window !== "undefined" && window.jivo_api) {
      window.jivo_api.open();
    }
  };

const steps = [
  {
    number: "1",
    title: "Check and Reconnect the USB Cable",
    description:
      "Make sure your printer is properly connected to your computer using the USB cable.",
    points: [
      "Disconnect the USB cable from both the printer and the computer.",
      "Wait for a few moments before reconnecting it.",
      "Securely plug the cable into both devices.",
      "Restart the printer setup or installation process.",
    ],
    image: "/step-1.jpg",
    alt: "USB connection",
  },
  {
    number: "2",
    title: "Check the USB Connection",
    description:
      "Ensure the USB connection is working properly before continuing.",
    points: [
      "Connect the printer to a different USB port on your computer.",
      "You can also test the current USB port by plugging in another USB device to verify that it functions correctly.",
    ],
    image: "/step-2.jpg",
    alt: "USB port",
  },
  {
    number: "3",
    title: "Replace the USB Cable",
    description:
      "A damaged or faulty USB cable can prevent your printer from connecting properly.",
    points: [
      "Replace the current cable with a new or known working USB cable.",
      "Reconnect the printer to your computer and restart the printer setup to check if the issue is resolved.",
    ],
    image: "/step-3.jpg",
    alt: "Printer cable",
  },
  {
    number: "4",
    title: "Disconnect Unnecessary USB Devices",
    description:
      "Too many connected USB devices can sometimes interfere with printer detection.",
    points: [
      "Disconnect any non-essential USB devices, such as external drives, webcams, or USB hubs.",
      "Leave only your keyboard, mouse, and printer connected, then try the printer installation again.",
    ],
    image: "/step-4.jpg",
    alt: "Computer and printer",
  },
  {
    number: "5",
    title: "Restart the Printer",
    description:
      "Restarting the printer can help restore a stable USB connection.",
    points: [
      "Turn off the printer and unplug the power cord from the wall outlet.",
      "Wait for about 60 seconds, then plug it back into a direct wall outlet.",
      "Turn the printer back on and check if the setup continues. If not, repeat the printer setup software and try the installation again.",
    ],
    image: "/step-5.jpg",
    alt: "Printer",
  },
  {
    number: "6",
    title: "Update Printer Drivers",
    description:
      "Updating your printer driver can help resolve connection and installation issues.",
    points: [
      "Open Device Manager from the Windows Start menu.",
      "Expand Printers or Universal Serial Bus controllers.",
      "Right-click your printer, select Update driver, and choose Search automatically for drivers.",
    ],
    image: "/step-6.jpg",
    alt: "Laptop driver update",
  },
  {
    number: "7",
    title: "Remove Existing Printer Software",
    description:
      "Old or conflicting printer software can prevent a successful installation.",
    points: [
      "Open Control Panel and go to Programs > Uninstall a Program.",
      "Locate your printer software, then uninstall it completely.",
      "Restart your computer before installing the latest printer software again.",
    ],
    image: "/step-7.jpg",
    alt: "Computer software",
  },
  {
    number: "8",
    title: "Clear Temporary Files",
    description:
      "Removing temporary files can help prevent installation issues and improve system performance.",
    points: [
      "Open Disk Cleanup from the Windows Start menu.",
      "Select your system drive (usually C:).",
      "Check the temporary files categories you want to remove, then click OK to clean up the files.",
    ],
    image: "/step-8.jpg",
    alt: "Windows computer",
  },
  {
    number: "9",
    title: "Perform a Clean Boot",
    description:
      "A clean boot helps prevent background programs from interfering with printer installation.",
    points: [
      "Open System Configuration by searching for msconfig in the Start menu.",
      "On the General tab, select Selective startup and clear Load startup items.",
      "Go to the Services tab, check Hide all Microsoft Services, then click Disable all.",
      "Restart your computer and run the printer setup again.",
    ],
    image: "/step-9.jpg",
    alt: "Computer clean boot",
  },
];

function Feature({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Icon size={20} />
      </div>

      <span className="text-sm font-semibold text-gray-800">{title}</span>
    </div>
  );
}

export default function SetupPrinterPage() {
  const searchParams = useSearchParams();

  const printer =
    searchParams.get("printer") || "LaserJet Pro 400";

  const chatLink = "https://wa.me/15307917775";
  const bookingLink = "/ContactUs";

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f7f9fc]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 shadow-sm">
                <ShieldCheck size={15} />
                Reliable Printer Support
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Printer Setup & Software{" "}
                <span className="text-blue-600">Made Simple</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Get your printer up and running with easy-to-follow setup
                guides for Wi-Fi, USB, and Ethernet connections. Whether
                you're installing a new printer, updating software, or
                troubleshooting connection issues, our guides help you
                complete the process with confidence.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Simple Step-by-Step Setup Instructions",
                  "Works with Windows & macOS",
                  "Printer Installation & Connectivity Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-600"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={openChat}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  <MessageCircle size={18} />
                  Click for Chat Assistance
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl">
                <img
                  src="/printer-setup-error.jpg"
                  alt="Printer support workspace"
                  className="h-[380px] w-full rounded-[1.5rem] object-cover lg:h-[460px]"
                />
              </div>
            </div>

          </div>

          {/* FEATURES */}
          <div className="mt-16 grid gap-5 border-t border-gray-200 pt-8 sm:grid-cols-3">
            <Feature
              icon={Wrench}
              title="Easy Setup"
            />

            <Feature
              icon={CheckCircle2}
              title="Step-by-Step Guides"
            />

            <Feature
              icon={Headphones}
              title="Expert Assistance"
            />
          </div>

        </div>
      </section>

      {/* ================= PRINTER INFO ================= */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col gap-5 rounded-2xl bg-[#f7f9fc] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Printer Ready Setup Assistance
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-950">
                {printer}
              </h2>
            </div>

            <div className="flex flex-wrap gap-5 text-sm font-semibold text-gray-600">
              <span className="flex items-center gap-2">
                <Wifi size={17} className="text-blue-600" />
                Wi-Fi
              </span>

              <span className="flex items-center gap-2">
                <Usb size={17} className="text-blue-600" />
                USB
              </span>

              <span className="flex items-center gap-2">
                <Network size={17} className="text-blue-600" />
                Ethernet
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Step-by-Step Guide
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Get Your Printer Connected
            </h2>

            <p className="mt-4 text-gray-600">
              Follow these simple troubleshooting steps to resolve common
              printer connection and installation issues.
            </p>
          </div>

          <div className="space-y-24">

            {steps.map((step, index) => (

              <article
                key={step.number}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >

                {/* TEXT */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>

                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                      {step.number}
                    </div>

                    <div className="h-px flex-1 bg-gray-200" />
                  </div>

                  <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
                    Step {step.number}: {step.title}
                  </h2>

                  <p className="mt-4 leading-7 text-gray-600">
                    {step.description}
                  </p>

                  <ol className="mt-6 space-y-3">
                    {step.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-6 text-gray-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ol>

                </div>

                {/* IMAGE */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-xl shadow-gray-200/50">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="h-[320px] w-full object-contain transition duration-500 hover:scale-[1.02] sm:h-[380px]"
                    />
                  </div>
                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ================= HELP CTA ================= */}
      <section className="bg-[#f7f9fc]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Need Assistance?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
              Need Help with Your Printer?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Get expert assistance with printer setup, software installation,
              connectivity, and troubleshooting—all in one place.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* BOOK */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CalendarDays size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Book appointment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Choose a convenient time, and our experts will contact you to
                assist with your printer needs.
              </p>

              <a
                href={bookingLink}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                BOOK NOW
                <ChevronRight size={16} />
              </a>
            </div>

            {/* CHAT */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <MessageCircle size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Chat With Us
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Connect with our printer support experts for quick answers,
                setup guidance, and troubleshooting assistance.
              </p>

              <button
                onClick={openChat}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                CHAT NOW
                <MessageCircle size={16} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Printer Support
              </p>

              <h2 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Print More.
                <br />
                Worry Less.
                <br />
                We’re Here to Help.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-gray-300">
                From setup to troubleshooting, get expert assistance for all
                your printer needs and keep everything running perfectly.
              </p>

              <button
                onClick={openChat}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-gray-950 transition hover:bg-blue-50"
              >
                Chat Now
                <MessageCircle size={17} />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="/print-more-banner.jpg"
                alt="Printer support office"
                className="h-[350px] w-full object-cover lg:h-[430px]"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
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

    </main>
  );
}