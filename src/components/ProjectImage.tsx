import { FC } from "react";

interface ProjectImageProps {
  id: string;
  alt: string;
  src: string;
  className?: string;
}

export const ProjectImage: FC<ProjectImageProps> = ({ id, alt, src, className = "" }) => {
  // WorldQuant has a beautiful 3-panel vertical layout exactly like Page 2 of the portfolio PDF
  if (id === "world-quant-delhi") {
    return (
      <div className={`relative flex w-full h-full overflow-hidden ${className}`}>
        {/* Panel 1: Round Meeting Table Design */}
        <div className="relative w-1/3 h-full border-r border-white/60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=400&q=80"
            alt="WorldQuant Meeting Room - Luxury Commercial Office Interior Design by Mysticape Concepts"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10"></div>
        </div>
 
        {/* Panel 2: Gaming Zone with Blue and Neon highlights */}
        <div className="relative w-1/3 h-full border-r border-white/60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80"
            alt="WorldQuant Recreation Space - Turnkey Custom Office Layout Design"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0f172a]/20"></div>
          {/* Subtle neon game overlay indicator representing the screenshot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-8 h-8 rounded-full border border-cyan-400/40 animate-pulse flex items-center justify-center bg-cyan-950/20">
              <span className="text-[7px] text-cyan-400 font-mono font-bold tracking-tight">GAME</span>
            </div>
          </div>
        </div>
 
        {/* Panel 3: Tranquil lounge with bamboo/mountain art layout */}
        <div className="relative w-1/3 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
            alt="WorldQuant Focus Lounge - Boutique General Interior Contractors Delhi NCR"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
        </div>
      </div>
    );
  }
 
  // Grant Thornton Noida has a custom reception and workstation combo
  if (id === "grant-thornton-noida") {
    return (
      <div className={`relative flex w-full h-full overflow-hidden ${className}`}>
        {/* Panel 1: Reception / Lounge area with warm illumination */}
        <div className="relative w-1/2 h-full border-r border-white/60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
            alt="Grant Thornton Reception Atrium - Premium Corporate Workplace Design India"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
 
        {/* Panel 2: Open Collaboration Space with Blue Chairs and modern ceilings */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=500&q=80"
            alt="Grant Thornton Noida Open Collaboration Space - Turnkey Interior Solutions NCR"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }
 
  // Ampire Aerocity study pods and study niches layout
  if (id === "ampire-aerocity") {
    return (
      <div className={`relative flex w-full h-full overflow-hidden ${className}`}>
        {/* Panel 1: Modular focus pods / niches */}
        <div className="relative w-1/2 h-full border-r border-white/60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80"
            alt="Ampire Focus Study Pods - Office Layout and Layout Curation Service"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
 
        {/* Panel 2: Elegant workspace setup */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80"
            alt="Ampire Workstations Aerocity - High-End Commercial Office Design"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }
 
  // Coralogix Gurugram fluted green paneling and plush lounges
  if (id === "coralogix-gurugram") {
    return (
      <div className={`relative flex w-full h-full overflow-hidden ${className}`}>
        {/* Panel 1: Boardroom fluted timber accents */}
        <div className="relative w-1/2 h-full border-r border-[#faf9f6]/40 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80"
            alt="Coralogix Executive Suite - Boardroom Layout & Fluted Wood Detailing"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
 
        {/* Panel 2: Plush velvet lounge layout */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=500&q=80"
            alt="Coralogix VIP Lounge Gurugram - Commercial General Contracting Fitout"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // Default fallback image
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};
