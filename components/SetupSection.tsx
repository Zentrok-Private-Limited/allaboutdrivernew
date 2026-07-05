import Image from "next/image";

export default function SetupSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
  {/* Left Image */}
  <div className="lg:col-span-6 flex justify-center">
    <Image
      src="/howsettingupprinter.jpg"
      alt="Printer Setup"
      width={650}
      height={500}
      className="shadow-lg w-full h-auto object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="lg:col-span-6 space-y-6">
    <h2 className="text-2xl lg:text-4xl font-extrabold text-[#1762C0] leading-tight">
      How Do You Continue Setting Up Your Printer?
    </h2>

    <p className="text-slate-700 text-lg leading-8">
      Setting up a printer for the first time may seem a little
      overwhelming, but the process is usually straightforward when
      followed step by step. Here are some basic steps to help you get
      started:
    </p>

    <ol className="space-y-2 text-slate-800 text-base list-decimal pl-6 marker:font-bold marker:text-[#1762C0]">
      <li>
        Unpack the printer and place it on a stable surface near a power
        outlet. Connect the power cable and turn the printer on.
      </li>

      <li>
        Install the ink or toner cartridges in the appropriate slots as
        instructed by the printer.
      </li>

      <li>
        Load a stack of compatible paper into the input tray. Make sure
        the paper size and type match the printer's requirements.
      </li>

      <li>
        Complete the initial setup on the printer screen by selecting
        your preferred language, region, date, and time settings.
      </li>

      <li>
        Connect the printer to your computer, laptop, or smartphone by
        installing the required software or using a wireless connection.
      </li>

      <li>
        Once everything is configured, print a test page to confirm that
        the printer is set up correctly and ready to use.
      </li>
    </ol>
  </div>
</section>
  );
}