import { motion } from "motion/react";
import { Compass, ArrowRight, FolderKanban, PhoneCall, LayoutGrid } from "lucide-react";
import Logo from "./Logo";

interface NotFoundProps {
  setCurrentPage: (page: any) => void;
}

export default function NotFound({ setCurrentPage }: NotFoundProps) {
  return (
    <div 
      id="not_found_page_container" 
      className="min-h-screen bg-[#faf9f6] text-[#1c1c1c] pt-24 pb-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative architectural grid background lines to reinforce luxury interior design firm */}
      <div className="absolute inset-0 pointer-events-none md:block hidden select-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#b2946c]/5"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-[#b2946c]/5"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-[#b2946c]/5"></div>
        <div className="absolute left-0 top-1/3 w-full h-[1px] bg-[#b2946c]/5"></div>
        <div className="absolute left-0 top-2/3 w-full h-[1px] bg-[#b2946c]/5"></div>
      </div>

      <div className="max-w-3xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Modernist Outline Icon / Architectural Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-48 h-48 mb-8 flex items-center justify-center"
        >
          {/* Floor Plan Blueprint Layout Outline (Custom Brand Element) */}
          <svg className="absolute inset-0 w-full h-full text-[#b2946c]/15" viewBox="0 0 100 100">
            <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </svg>
          
          <div className="relative z-10 bg-[#faf9f6] p-6 rounded-full border border-[#b2946c]/20 shadow-xs">
            <Compass className="w-14 h-14 text-[#b2946c] animate-[spin_4s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Large "404" heading done in high-contrast editorial typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="not_found_error_code"
          className="text-7xl md:text-9xl font-sans font-black tracking-tight text-[#1c1c1c] mb-4 selection:bg-[#b2946c] selection:text-white"
        >
          4<span className="text-[#b2946c] font-serif italic font-normal">0</span>4
        </motion.h1>

        {/* Brand identity caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3 flex items-center space-x-2 bg-[#b2946c]/5 border border-[#b2946c]/10 px-4 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b2946c] animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#b2946c]">
            Spatial Frame Interrupted
          </span>
        </motion.div>

        {/* Error text and descriptive luxury message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-stone-600 font-sans max-w-lg mb-10 leading-relaxed font-normal"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Custom Actions Bento Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-xl px-4"
        >
          <button
            onClick={() => setCurrentPage("home")}
            className="flex-1 flex items-center justify-center space-x-2.5 px-6 py-4 bg-[#1c1c1c] text-white hover:bg-[#b2946c] hover:text-stone-900 font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-md cursor-pointer border border-[#1c1c1c] hover:border-[#b2946c]"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setCurrentPage("portfolio")}
            className="flex-1 flex items-center justify-center space-x-2.5 px-6 py-4 bg-white text-[#1c1c1c] hover:bg-stone-50 border border-stone-200/80 hover:border-stone-400 font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#b2946c]" />
            <span>Browse Portfolio</span>
          </button>

          <button
            onClick={() => setCurrentPage("contact")}
            className="flex-1 flex items-center justify-center space-x-2.5 px-6 py-4 bg-transparent text-[#b2946c] hover:text-[#a08159] hover:bg-[#b2946c]/5 border border-[#b2946c]/30 hover:border-[#b2946c] font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
