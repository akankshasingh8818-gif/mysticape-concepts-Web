import { useState } from "react";
import { SERVICES_DATA } from "../data";
import { ArrowLeft, Check, Compass, Plus, Minus } from "lucide-react";
import { Page } from "../types";

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
  onSelectService: (id: string) => void;
}

export default function Services({ setCurrentPage, onSelectService }: ServicesProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <div id="services_page_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Services Context Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Our Capabilites / Services
        </span>
        <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-900 max-w-2xl mb-4">
          Bespoke Atelier Specializations
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl">
          We operate across architecture, structural layouts, and interior details, carrying out full turnkeys with extreme precision and white-glove material staging.
        </p>
      </section>

      {/* Interactive Expandable Services Grid (Perfect for Core Web Vitals structural layouts) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                id={`expanded_service_${service.id}`}
                className={`flex flex-col bg-white border ${
                  isExpanded ? "border-[#b2946c] shadow-md ring-1 ring-[#b2946c]/10" : "border-stone-200/40 hover:border-stone-300"
                } transition-all duration-300 overflow-hidden relative`}
              >
                
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-[#faf9f6] font-sans font-bold text-lg tracking-wide uppercase">
                    {service.title}
                  </h3>
                </div>

                {/* Body details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-stone-500 text-xs leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Expandable Inner Block */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col space-y-4 animate-fade-in">
                        <p className="text-[#1c1c1c] text-xs leading-relaxed tracking-wide font-sans">
                          {service.extendedDescription}
                        </p>
                        <div className="flex flex-col space-y-2 pt-2">
                          <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest block font-bold">
                            Operational features
                          </span>
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start space-x-2 text-[11px] text-stone-600">
                              <Check className="w-3.5 h-3.5 text-[#b2946c] mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle Expander Button */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col space-y-2 w-full">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center justify-between text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-[#1c1c1c]/70 hover:text-[#b2946c] focus:outline-none transition-colors w-full"
                    >
                      <span>{isExpanded ? "Conceal features" : "Analyze features"}</span>
                      {isExpanded ? <Minus className="w-3 h-3 text-[#b2946c]" /> : <Plus className="w-3 h-3 text-[#b2946c]" />}
                    </button>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className="flex items-center justify-between text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-[#b2946c] hover:text-[#1c1c1c] focus:outline-none transition-colors w-full"
                    >
                      <span>Open Dedicated Page</span>
                      <Compass className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA block referencing our unique design quiz */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-[#1c1c1c] text-white my-10 relative">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center p-8 md:p-12 border border-stone-800">
          <div className="max-w-xl mb-6 lg:mb-0">
            <span className="text-[#b2946c] font-sans font-extrabold text-[10px] uppercase tracking-widest inline-flex items-center space-x-1 mb-2">
              <Compass className="w-3.5 h-3.5 animate-pulse" />
              <span>Direct Studio Walkthrough</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-2">
              Review Your Vision with an Architect
            </h2>
            <p className="text-stone-400 text-xs leading-relaxed">
              Unsure whether your project fits an organic minimalist concept or requires custom turnkey fit-outs? Connect directly with our Gurugram principals for an expansive feasibility review.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 bg-[#b2946c] text-stone-900 hover:text-white hover:bg-[#a08159] px-6 py-4.5 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
          >
            <span>Book Showroom Session</span>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
          </button>
        </div>
      </section>

    </div>
  );
}
