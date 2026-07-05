import HeroSection from "@/components/HeroSection";
import ScannerCarousel from "@/components/ScannerCarousel";
import SetupSection from "@/components/SetupSection";
import OfflineSection from "@/components/OfflineSection";
import ManualAddSection from "@/components/ManualAddSection";
import StreamlineSection from "@/components/StreamlineSection";
import OutsourcingSection from "@/components/OutsourcingSection";
import DriversSection from "@/components/DriversSection";
import ElementsSection from "@/components/ElementsSection";
import ScrollToTop from "@/components/ScrollToTop";
import CompatibilityAndOrder from "@/components/CompatibilityAndOrder";
import CustomerReviews from "@/components/CustomerReviews";
import ScannerCarouselTwo from "@/components/ScannerCarouseltwo";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-700 antialiased font-sans selection:bg-purple-200">
      <HeroSection />
      <ScannerCarousel />
      <SetupSection />
      <OfflineSection />
      <ManualAddSection />
      <ScannerCarouselTwo />
      <StreamlineSection />
      <OutsourcingSection />
      <DriversSection />
      <ElementsSection />
      <ScrollToTop />
      <CompatibilityAndOrder />
      <CustomerReviews />
      
      <div className="max-w-5xl mx-auto bg-white border border-slate-200/70 rounded-3xl p-8 md:p-12 px-6 md:px-16 shadow-2xl shadow-black/30 mb-10">
        <h3 className="text-2xl font-bold text-slate-900 text-center tracking-wide mb-6 uppercase">
          Important Disclaimer
        </h3>
        <div className="space-y-4 text-slate-900 text-sm md:text-sm leading-relaxed text-justify ">
          <p>
            <span className="text-[#1762C0]">All About Driver</span> is an independent business and is not affiliated with, endorsed by, sponsored by, authorized by, or associated with HP Inc., Hewlett-Packard (HP), Canon, Epson, Brother, Dell, Microsoft, Apple, Lenovo, Samsung, or any other manufacturer, brand, or trademark owner unless expressly stated.
          </p>
          <p>
            The name &quot;All About Driver&quot; is the legal name of an independent company and has no connection to Hewlett-Packard (HP Inc.) or any of its subsidiaries, affiliates, products, services, support channels, or websites. Any references to third-party brand names, product names, trademarks, or logos are used solely for identification and compatibility purposes. All trademarks, logos, product names, and brand names are the property of their respective owners. Customers seeking official manufacturer support, warranty services, product registration, or services directly from a brand should contact the respective manufacturer through their official website or official support channels.
          </p>
          <p>
            All About Driver provides independent products and services and does not claim to represent or act on behalf of any manufacturer or brand unless specifically disclosed in writing.
          </p>
        </div>
      </div>

      

    </main>
  );
}