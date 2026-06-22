import { Project } from "../types";
import { ExternalLink } from "lucide-react";

interface PortfolioProps {
  selectedProject: Project | null;
  setSelectedProject: (proj: Project | null) => void;
  onSelectProject: (proj: Project) => void;
  setCurrentPage?: (page: any) => void;
}

export default function Portfolio({ setCurrentPage }: PortfolioProps) {
  return (
    <div id="portfolio_page_container" className="bg-[#faf9f6]/95 text-[#1c1c1c] pt-24 min-h-screen pb-20 select-none">
      
      {/* Portfolio Header */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block animate-pulse">
          Project Archives / Portfolios
        </span>
        <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-900 mb-6 uppercase">
          Finished Works
        </h1>
        <p className="text-[#1c1c1c]/70 text-xs md:text-sm leading-relaxed max-w-2xl font-sans font-normal opacity-90 mb-12">
          Explore our completed residential and commercial fit-out portfolios across India, with strict material standards and meticulous planning.
        </p>

        {/* Specialized Divisions quick links */}
        {setCurrentPage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left">
            
            {/* Division I Button */}
            <button
              onClick={() => {
                setCurrentPage("portfolio-residential");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-between p-6 bg-white border border-stone-200/45 rounded-xs hover:border-[#b2946c] group transition-all duration-300 text-left cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <div>
                <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-1">Division I</span>
                <h4 className="font-sans font-bold text-sm text-[#1c1c1c] uppercase tracking-wide group-hover:text-[#b2946c] transition-colors">Residential Projects</h4>
                <p className="text-stone-400 text-[11px] font-sans mt-1">Villas, high-end apartments, and private luxury homes.</p>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-[#b2946c] transition-colors flex-shrink-0 ml-4" />
            </button>

            {/* Division II Button */}
            <button
              onClick={() => {
                setCurrentPage("portfolio-commercial");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-between p-6 bg-white border border-stone-200/45 rounded-xs hover:border-[#b2946c] group transition-all duration-300 text-left cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <div>
                <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-1">Division II</span>
                <h4 className="font-sans font-bold text-sm text-[#1c1c1c] uppercase tracking-wide group-hover:text-[#b2946c] transition-colors">Commercial Gallery</h4>
                <p className="text-stone-400 text-[11px] font-sans mt-1">Modular spaces, detailed layout and signature workspace architecture.</p>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-[#b2946c] transition-colors flex-shrink-0 ml-4" />
            </button>

          </div>
        )}
      </section>

    </div>
  );
}
