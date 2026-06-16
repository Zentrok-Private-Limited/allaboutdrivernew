"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cookie,
  Calendar,
  FileText,
  ChevronRight,
  Terminal,
  CheckCircle2,
  Info,
  HelpCircle,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const cookieConfig = {
  companyName: "All About Driver",
  email: "info@allaboutdriver",
  url: "http://allaboutdriver.com/",
  corporateAddress: {
    name: "All About Driver",
    building: "30 N GOULD ST STER,",
    Address: "SHERIDAN WY, 82801",
  },
};

const tableOfContents = [
  { id: "what-is", label: "1. What Are Cookies?" },
  { id: "how-use", label: "2. How We Use Cookies" },
  { id: "types", label: "3. Types of Cookies We Use" },
  { id: "third-party", label: "4. Third-Party Tracking Technologies" },
  { id: "choices", label: "5. Your Cookie Choices and Controls" },
  { id: "dnt", label: "6. Do Not Track Signals" },
  { id: "updates", label: "7. Updates to This Cookie Policy" },
  { id: "contact", label: "8. Contact Us" },
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

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState("");

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-white text-slate-700 min-h-screen font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <BlueprintGridLines />

      <header className="relative pt-32 pb-16 px-6 max-w-5xl mx-auto text-center space-y-4 border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-blue-50/40 rounded-full blur-[140px] -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1464D8] border border-blue-100/60 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mx-auto">
          <Cookie size={13} /> Browser Data Parameters
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 uppercase">
          Cookie Policy
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        {/* Left Interactive Side Navigation Console */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 lg:h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={14} className="text-[#1464D8]" /> Policy Outline
            </h4>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full text-left text-xs py-2 px-3 rounded-lg border transition-all duration-200 flex items-start gap-2 group ${
                    activeSection === item.id
                      ? "bg-white border-slate-200 text-[#1464D8] font-semibold shadow-xs"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <ChevronRight
                    size={14}
                    className={`mt-0.5 shrink-0 transition-transform ${activeSection === item.id ? "text-[#1464D8] translate-x-0.5" : "text-slate-300 group-hover:text-slate-400"}`}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Legal Links Box */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
            <h5 className="text-sm font-semibold text-slate-900">
              Legal Directives
            </h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              This notice delineates boundaries governing information processing
              across all local modules.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href="/PrivacyPolicy"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Privacy Policy
              </a>
              <a
                href="/TermsofService"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Terms of Service
              </a>
              <a
                href="/Cookies"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Cookie Policy
              </a>
              <a
                href="/Disclaimer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1464D8] font-medium hover:underline"
              >
                <FileText size={12} /> Disclaimer
              </a>
            </div>
          </div>
        </aside>

        {/* Right Flow Content Column */}
        <article className="lg:col-span-8 space-y-12 text-slate-600 font-light text-base md:text-lg leading-relaxed">
          {/* Context Intro Abstract */}
          <section className="space-y-4">
            <p className="text-slate-900 font-normal text-lg md:text-xl leading-relaxed">
              This Cookie Policy explains how {cookieConfig.companyName} (“
              <strong className="font-semibold">Company</strong>,” “
              <strong className="font-semibold">we</strong>,” “
              <strong className="font-semibold">us</strong>,” or “
              <strong className="font-semibold">our</strong>”) uses cookies and
              similar tracking technologies when you visit our website{" "}
              <a
                href={cookieConfig.url}
                className="text-[#1464D8] hover:underline inline-flex items-center gap-0.5"
              >
                {cookieConfig.url}
                <ExternalLink size={12} />
              </a>{" "}
              (the “<strong className="font-semibold">Website</strong>”). This
              policy should be read together with our{" "}
              <a
                href="/PrivacyPolicy"
                className="text-[#1464D8] font-normal hover:underline"
              >
                PRIVACY POLICY
              </a>{" "}
              and{" "}
              <a
                href="/TermsofService"
                className="text-[#1464D8] font-normal hover:underline"
              >
                TERMS OF SERVICE
              </a>
              .
            </p>
          </section>

          {/* Section 1 */}
          <section id="what-is" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              1. What Are Cookies?
            </h3>
            <p className="text-base">
              Cookies are small text files that are placed on your device
              (computer, smartphone, tablet) when you visit a website. Cookies
              help websites function efficiently, enhance user experience, and
              provide information to website owners about how visitors interact
              with the site.
            </p>
            <p className="text-base font-normal text-slate-900 p-4 rounded-xl bg-blue-50/40 border border-blue-100/40 flex gap-3">
              <Info size={18} className="text-[#1464D8] shrink-0 mt-0.5" />
              <span>
                Cookies do not give us access to your device or personal files.
              </span>
            </p>
          </section>

          {/* Section 2 */}
          <section id="how-use" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              2. How We Use Cookies
            </h3>
            <p className="text-base">
              {cookieConfig.companyName} uses cookies and similar technologies
              to:
            </p>
            <ul className="space-y-2 text-base pl-2">
              {[
                "Ensure the Website functions properly",
                "Maintain security and prevent fraudulent activity",
                "Remember user preferences and settings",
                "Analyze Website performance and usage patterns",
                "Improve our services and user experience",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[#1464D8] mt-1 shrink-0"
                  />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base pt-2">
              Cookies may collect technical information such as IP address,
              browser type, device information, and browsing behavior, as
              described in our{" "}
              <a
                href="/PrivacyPolicy"
                className="text-[#1464D8] font-normal hover:underline"
              >
                PRIVACY POLICY
              </a>
              .
            </p>
          </section>

          {/* Section 3 */}
          <section id="types" className="space-y-6 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2 mb-4">
              3. Types of Cookies We Use
            </h3>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-slate-800">
                a) Essential Cookies
              </h4>
              <p className="text-base">
                These cookies are strictly necessary for the Website to operate
                correctly. They enable core functionality such as security, page
                navigation, and access to essential features. Without these
                cookies, the Website may not function properly.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-slate-800">
                b) Performance and Analytics Cookies
              </h4>
              <p className="text-base">
                These cookies help us understand how visitors interact with our
                Website by collecting aggregated and anonymized information.
                This allows us to measure performance, identify errors, and
                improve Website functionality.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-slate-800">
                c) Functional Cookies
              </h4>
              <p className="text-base">
                Functional cookies allow the Website to remember choices you
                make, such as language preferences or region, to provide a more
                personalized experience.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-slate-800">
                d) Advertising and Third-Party Cookies
              </h4>
              <p className="text-base">
                We may allow trusted third-party service providers to place
                cookies on our Website for analytics or advertising purposes.
                These cookies may be used to deliver relevant advertisements and
                measure campaign effectiveness, subject to applicable laws and
                user consent where required{" "}
                <a
                  href="/PrivacyPolicy"
                  className="text-[#1464D8] font-normal hover:underline"
                >
                  PRIVACY POLICY
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="third-party" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              4. Third-Party Tracking Technologies
            </h3>
            <p className="text-base">
              We may use third-party services such as Google Analytics to
              analyze Website usage and traffic patterns. These third parties
              may use cookies or similar technologies to collect information
              about your online activities across different websites.
            </p>
            <p className="text-base">
              You can learn more about Google’s data practices by visiting
              Google’s Privacy & Terms page or opt out using Google’s opt-out
              tools, as referenced in our{" "}
              <a
                href="/PrivacyPolicy"
                className="text-[#1464D8] font-normal hover:underline"
              >
                PRIVACY POLICY
              </a>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section id="choices" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              5. Your Cookie Choices and Controls
            </h3>
            <p className="text-base">
              You have the right to accept or reject cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser settings to decline cookies or alert you when cookies are
              being sent.
            </p>
            <p className="text-base">
              Please note that disabling cookies may affect certain features or
              functionality of the Website.
            </p>
            <p className="text-sm italic text-slate-400">
              For more information on managing cookies, visit your browser’s
              help section.
            </p>
          </section>

          {/* Section 6 */}
          <section id="dnt" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              6. Do Not Track Signals
            </h3>
            <p className="text-base">
              Some browsers offer a “Do Not Track” (DNT) feature. At this time,
              there is no uniform industry standard for recognizing DNT signals,
              and {cookieConfig.companyName} does not currently respond to such
              signals{" "}
              <a
                href="/PrivacyPolicy"
                className="text-[#1464D8] font-normal hover:underline"
              >
                PRIVACY POLICY
              </a>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section id="updates" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              7. Updates to This Cookie Policy
            </h3>
            <p className="text-base">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legal requirements, or our practices. Any
              updates will be indicated by a revised “Last Updated” date at the
              top of this policy.
            </p>
          </section>

          {/* Section 8 */}
          <section id="contact" className="space-y-4 scroll-mt-24">
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              8. Contact Us
            </h3>
            <p className="text-base">
              If you have questions or concerns about this Cookie Policy or our
              use of cookies, you may contact us at:
            </p>
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/40 text-sm space-y-1 font-normal text-slate-800 font-mono">
              <p className="font-bold text-slate-900 mb-2 flex items-center gap-1.5 text-xs tracking-wide uppercase">
                <MapPin size={14} className="text-[#1464D8]" /> Registered Mailing Address 
              </p>
              <p>{cookieConfig.corporateAddress.name}</p>
              <p>{cookieConfig.corporateAddress.building}</p>
              <p>{cookieConfig.corporateAddress.Address}</p>
              <p className="pt-2 text-sm text-slate-800 font-sans font-light">
                Email Support: {cookieConfig.email}
              </p>
              <p className="pt-4 text-base text-slate-800 font-sans font-bold">
                Brand owned by <a className="text-[#1464D8] hover:underline" href="https://www.printerservicellc.com">printerservicellc.com</a>
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
