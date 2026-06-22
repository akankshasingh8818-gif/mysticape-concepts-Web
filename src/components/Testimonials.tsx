import { TESTIMONIALS_DATA } from "../data";
import { Star, Quote, ArrowRight, Award, Trophy, Compass } from "lucide-react";
import { Page } from "../types";

interface TestimonialsProps {
  setCurrentPage: (page: Page) => void;
}

export default function Testimonials({ setCurrentPage }: TestimonialsProps) {
  
  const publicationPlacements = [
    { title: "Architectural Digest", issue: "Cover Feature Dec 2024", quote: "Mysticape Concepts sets the new benchmark of high-precision workspace design and corporate office fit-outs in India." },
    { title: "Commercial Spaces", issue: "Global Portfolio Pick 2025", quote: "Ashish Juneja's turnkey execution schedules and multi-disciplinary MEP integrations are spectacular." },
    { title: "Elle Decor", issue: "Premium Spaces Choice 2025", quote: "A masterclass in quiet luxury, spatial durability, and fine carpentry textures." }
  ];

  return (
    <div id="testimonials_page_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Testimonials Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Client Laurels / Kudos
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-stone-900 leading-tight mb-4 uppercase">
          Client Testimonials
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
          Our client partnerships are rooted in deep conceptual alignments, materials vetting, and turnkey delivery commitments.
        </p>
      </section>

      {/* Main Grid showing luxury quotes */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((test) => (
          <div
            key={test.id}
            id={`patron_quote_${test.id}`}
            className="flex flex-col justify-between bg-white border border-stone-200/40 p-8 rounded-xs shadow-xs hover:border-[#b2946c]/30 hover:shadow-md transition-all duration-300 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#b2946c]/10" />
            
            <div>
              {/* Rating stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#b2946c] text-[#b2946c]" />
                ))}
              </div>

              <p className="text-stone-600 text-xs italic leading-relaxed font-serif mb-8 text-[#1c1c1c]/95">
                "{test.quote}"
              </p>
            </div>

            <div className="border-t border-stone-100 pt-6">
              <h4 className="font-sans font-bold text-stone-900 text-xs uppercase tracking-widest">
                {test.author}
              </h4>
              <span className="text-stone-400 text-[10px] block mt-0.5">
                {test.role} — {test.location}
              </span>
              <span className="text-[#b2946c] font-mono text-[8px] tracking-widest uppercase block mt-3 font-semibold">
                Project: {test.project}
              </span>
            </div>

          </div>
        ))}
      </section>

      {/* Specialized Row - Editorial Press Reviews */}
      <section className="bg-white py-20 px-6 border-y border-stone-200/50 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase block mb-2 font-bold animate-pulse">
              Press Cuttings
            </span>
            <h2 className="text-3xl font-sans font-bold text-[#1c1c1c] tracking-tight">
              In The Architectural Press
            </h2>
            <div className="w-12 h-0.5 bg-[#b2946c] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicationPlacements.map((press, idx) => (
              <div key={idx} className="bg-[#faf9f6]/40 p-6 border border-stone-100 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-extrabold text-[#1c1c1c] text-xs uppercase tracking-widest border-l-2 border-[#b2946c] pl-3 mb-2">
                    {press.title}
                  </h3>
                  <span className="text-[#b2946c] font-mono text-[8px] tracking-widest block mb-4 uppercase">
                    {press.issue}
                  </span>
                  <p className="text-stone-500 text-xs italic leading-relaxed font-serif">
                    "{press.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Builders / Delivery Commit */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-sans font-bold text-[#1c1c1c] mb-3">
          Experience Uncompromising Turnkey Delivery
        </h2>
        <p className="text-stone-400 text-xs mb-8">
          Our design atelier limits our calendar to a highly selective number of commissions every season. We prioritize artisanal inspection values over volume.
        </p>
        <button
          onClick={() => setCurrentPage("contact")}
          className="px-8 py-4 bg-[#1c1c1c] text-[#faf9f6] text-xs font-sans font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors inline-flex items-center space-x-2"
        >
          <span>Initiate Design Brief</span>
          <ArrowRight className="w-4 h-4 text-[#b2946c]" />
        </button>
      </section>

    </div>
  );
}
