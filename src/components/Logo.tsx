import React from "react";
// @ts-ignore
import logoImage from "../assets/images/regenerated_image_1782106997097.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  theme?: "dark" | "light"; // dark = dark text for light header backgrounds, light = light/gold text for dark backgrounds
  iconSize?: number;
  layout?: "horizontal" | "vertical";
}

export default function Logo({ className = "", iconOnly = false, theme = "dark", iconSize = 48, layout = "vertical" }: LogoProps) {
  const [logoSrc, setLogoSrc] = React.useState(logoImage);
  
  const textColorClass = theme === "dark" ? "text-stone-950 font-semibold" : "text-white font-medium";
  const subtextColorClass = theme === "dark" ? "text-stone-500/90 font-medium" : "text-stone-400 font-light";
  const conceptColorClass = theme === "dark" ? "text-[#a08159]" : "text-[#dfba7f]";

  const isHorizontal = layout === "horizontal";

  const handleLogoError = () => {
    // If /logo.png is not loaded, fallback to favicon.svg
    setLogoSrc("/favicon.svg");
  };

  return (
    <div className={`flex ${isHorizontal ? "flex-row items-center space-x-4 md:space-x-5 text-left" : "flex-col items-center text-center"} ${className}`}>
      {/* Uploaded logo image displayed directly via an img tag */}
      <img
        src={logoSrc}
        alt="Mysticape Concepts Logo"
        onError={handleLogoError}
        referrerPolicy="no-referrer"
        className={`transition-transform duration-700 ease-out group-hover:rotate-12 flex-shrink-0 object-contain ${
          isHorizontal 
            ? "w-11 h-11 md:w-[72px] md:h-[72px]" 
            : "w-14 h-14 md:w-[84px] md:h-[84px]"
        }`}
        id="mystic_logo_spherical_globe"
      />

      {/* Typography block matching the original logo */}
      {!iconOnly && (
        <div className={`flex flex-col justify-center ${isHorizontal ? "items-start text-left" : "items-center text-center mt-3"}`}>
          {/* Primary Branding Text */}
          <span className={`font-sans tracking-[0.22em] uppercase ${textColorClass} leading-none text-sm md:text-xl lg:text-2xl`}>
            Mysticape
          </span>
          {/* Divider with - CONCEPTS - */}
          <div className="flex items-center justify-center space-x-2 mt-1 md:mt-1.5 w-full">
            <span className="flex-grow h-[1px] bg-[#c5a880]/30 min-w-[8px]"></span>
            <span className={`font-mono text-[7px] md:text-[9.5px] lg:text-[10px] tracking-[0.4em] uppercase font-bold leading-none ${conceptColorClass} flex-shrink-0`}>
              CONCEPTS
            </span>
            <span className="flex-grow h-[1px] bg-[#c5a880]/30 min-w-[8px]"></span>
          </div>
          {/* Slogan */}
          <span className={`font-mono text-[6px] md:text-[8px] tracking-[0.16em] uppercase ${subtextColorClass} mt-1 md:mt-1.5 opacity-90`}>
            An Interior Contracting Company
          </span>
        </div>
      )}
    </div>
  );
}
