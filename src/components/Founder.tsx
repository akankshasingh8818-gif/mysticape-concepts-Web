import { Page } from "../types";
import { ArrowRight, Compass, Flame, Mail, Award } from "lucide-react";

interface FounderProps {
  setCurrentPage: (page: Page) => void;
}

export default function Founder({ setCurrentPage }: FounderProps) {
  return (
    <div id="founder_page_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Principal Spotlight Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block animate-pulse">
          Atelier Leadership / Founder
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-stone-900 leading-tight mb-4 uppercase">
          The Principal
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
          Ashish Juneja brings over 12 years of experience in the interior fit-out industry. He drives end-to-end turnkey projects spanning design, civil works, MEP, and general contracting for top-tier corporate clients.
        </p>
      </section>

      {/* Narrative grid with portrait placeholder representing classical drafting look */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Visual Founder representation Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[400px] md:h-[500px] shadow-xl overflow-hidden rounded-xs">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80"
              alt="Ashish Juneja - Founder & Director"
              className="w-full h-full object-cover grayscale-[10%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-[#faf9f6]">
              <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-[#b2946c] block mb-1">
                FOUNDER & DIRECTOR
              </span>
              <h3 className="font-sans font-extrabold text-base uppercase leading-none">
                Ashish Juneja
              </h3>
              <span className="text-stone-400 font-mono text-[9px] mt-1.5 block">
                12+ Years Fit-Out Industry Expertise
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & timeline Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1c1c1c] tracking-tight">
            Seamless Turnkey Environments Spanning India
          </h2>
          
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
            Ashish Juneja has successfully delivered millions of square feet of premium workspace, commercial, and retail area for over 100+ corporate clients. Specializing in integrated design-and-build and high-precision civil engineering, he commands the multi-disciplinary execution required to drive landmarks from initial blueprints to final handovers.
          </p>

          <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
            "We do not simply build offices," Ashish Juneja asserts. "We construct purposeful, highly functional environments that safeguard occupant safety and compliance while amplifying brand identity. By integrating civil structures, MEP engineering, and carpentry under a single turnkey responsibility, we eliminate delays and deliver pristine spaces."
          </p>

          {/* Accolades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-200/40">
            <div className="flex items-start space-x-3">
              <div className="p-2 border border-[#b2946c]/20 bg-white">
                <Award className="w-5 h-5 text-[#b2946c]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase text-stone-900 tracking-wider">
                  Turnkey Excellence, 2024
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5 font-sans leading-relaxed">
                  Bestowed for delivering millions of square feet area under strict scheduling constraints.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 border border-[#b2946c]/20 bg-white">
                <Award className="w-5 h-5 text-[#b2946c]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase text-stone-900 tracking-wider">
                  Best Fit-Out Practice, 2025
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5 font-sans leading-relaxed">
                  Awarded for outstanding safety, mechanical, and interior integration across corporate hubs.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-6 py-3.5 bg-[#1c1c1c] text-[#faf9f6] text-xs font-sans font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors inline-flex items-center space-x-2"
            >
              <span>Schedule introduction brief</span>
              <ArrowRight className="w-4 h-4 text-[#b2946c]" />
            </button>
          </div>

        </div>
      </section>

      {/* Direct Consultation Quote Card */}
      <section className="py-12 px-6 max-w-7xl mx-auto bg-white border border-stone-200/40 mt-10 p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-xl mb-6 md:mb-0">
            <span className="text-[#b2946c] font-sans text-[10px] uppercase tracking-widest block font-bold mb-1">
              Atelier Taste Advice
            </span>
            <h3 className="text-xl font-sans font-bold text-[#1c1c1c] tracking-tight">
              Curious If Your Aesthetic Instincts Align With Ashish's?
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed mt-1">
              "We encourage prospective clients to compile material boards and list their core spatial requirements before our direct briefs. Let's arrange a dedicated curation session."
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 bg-[#b2946c] text-stone-900 font-sans font-bold text-xs uppercase tracking-[0.2em] px-6 py-4 hover:bg-[#a08159] hover:text-white transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>Consult Ashish</span>
          </button>
        </div>
      </section>

    </div>
  );
}
