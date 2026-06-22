import { useState, useEffect } from "react";
import { X, ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ResidentialProjectsProps {
  selectedProject?: any;
  setSelectedProject?: (proj: any) => void;
  onSelectProject?: (proj: any) => void;
  setCurrentPage?: (page: any) => void;
}

const RESIDENTIAL_IMAGES = [
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80", // Pooja temple corner
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80", // Curved luxury living room, metallic ceiling
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", // Damask master bedroom
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", // White arch panels with green stools
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", // Beautiful sophisticated master bedroom interior with luxury wood bed and textured wall
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", // Premium luxury modern living room with warm panels and lights
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", // Warm suite with herringbone wood floors
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80", // Temple foyer / entrance timber screen
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", // L-shaped white sofa under fluted wood panel with modular shelves
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", // Living room looking toward U-shaped couch & whiskey bar corner
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80", // Luxury dining room with exquisite modern layout and hanging chandelier
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80", // Ultra-luxury white marble kitchen suite with premium pendant lighting and grand finishes
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", // Warm bedroom suite with crescent moon metal wall art
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"  // Slab wall with white marble shelves and trophies
];

const RESIDENTIAL_ALT_TAGS = [
  "Pooja temple corner with premium wooden partition and warm brass accent lighting by Mysticape Concepts",
  "Curved luxury living room interior design and custom metallic ceiling - Residential Interior Design Delhi NCR",
  "Premium master bedroom with textured wall paneling - Luxury Home Interiors India",
  "White arch wood partition panels with luxury upholstery styling - Turnkey Residential Solutions",
  "Sophisticated master bedroom with custom bed unit and wooden paneling in Delhi Gurugram",
  "Ultra-luxury spacious family living hall with warm timber wall sheets and modern strip lights",
  "Warm guest room suite with real herringbone wooden flooring - Villa Interior Design India",
  "Entrance foyer screen layout designed in traditional brass and wood - Luxury Home Design",
  "Custom white sectional sofa set against architectural vertical timber slats",
  "Luxury home lounge suite displaying built-in personal cocktail dry bar and modern lighting",
  "High-end dining table details featuring natural marble tabletop and structural chandelier",
  "White marble modular kitchen unit featuring luxurious cabinetry and metal hardware",
  "Modern apartment bedroom concept highlighting an illuminated crescent metal decoration piece",
  "Stone wall texture with floating marble display shelves and design trophies"
];

export default function ResidentialProjects({
  setCurrentPage
}: ResidentialProjectsProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % RESIDENTIAL_IMAGES.length : null));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + RESIDENTIAL_IMAGES.length) % RESIDENTIAL_IMAGES.length : null));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div id="residential_portfolio_container" className="bg-[#faf9f6]/95 text-[#1c1c1c] pt-24 min-h-screen pb-20 select-none">
      
      {/* Portfolio Header Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50 flex flex-col items-start">
        
        {/* Navigation Back Link */}
        {setCurrentPage && (
          <button
            onClick={() => {
              setCurrentPage("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center space-x-2 text-stone-500 hover:text-[#b2946c] text-[10px] font-mono tracking-widest uppercase mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Works</span>
          </button>
        )}

        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Residential Division / Private Sanctuaries
        </span>
        <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-900 mb-4 uppercase">
          Residential Portfolio
        </h1>
        <p className="text-[#1c1c1c]/70 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
          A purely visual dynamic archive presenting the handpicked private architectural atmospheres, bespoke layouts, and material sanctuaries designed and executed across India.
        </p>
      </section>

      {/* Pure Gallery Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {RESIDENTIAL_IMAGES.map((imgUrl, index) => (
            <div
              key={index}
              id={`residential_gallery_item_${index}`}
              className="group relative overflow-hidden bg-stone-100 aspect-[4/3] rounded-xs cursor-pointer border border-stone-200/30 shadow-xs hover:shadow-md transition-all duration-500"
              onClick={() => setLightboxIndex(index)}
            >
              {/* Image with no-referrer for privacy */}
              <img
                src={imgUrl}
                alt={RESIDENTIAL_ALT_TAGS[index] || `Residential Portfolio Villa Apartment Design ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-[#1c1c1c]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4 text-stone-850" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="residential_lightbox_modal"
          className="fixed inset-0 z-50 bg-[#1c1c1c]/95 backdrop-blur-md flex items-center justify-center select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Handle Button */}
          <button
            id="close_lightbox_btn"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Navigation arrow handle */}
          <button
            id="prev_lightbox_btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + RESIDENTIAL_IMAGES.length) % RESIDENTIAL_IMAGES.length : null));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50 active:scale-95"
            aria-label="Previous view"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation arrow handle */}
          <button
            id="next_lightbox_btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % RESIDENTIAL_IMAGES.length : null));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50 active:scale-95"
            aria-label="Next view"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Interactive viewport image */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={RESIDENTIAL_IMAGES[lightboxIndex]}
              alt={`Residential Viewroom ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl transition-all duration-300 animate-fadeIn"
              referrerPolicy="no-referrer"
            />
            
            {/* Index Counter Badge */}
            <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xs text-stone-300 text-[10px] font-mono tracking-widest px-3 py-1.5 uppercase select-none rounded-xs">
              {lightboxIndex + 1} / {RESIDENTIAL_IMAGES.length}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
