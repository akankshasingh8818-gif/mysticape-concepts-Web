import { useState, useEffect } from "react";
import { X, ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
// @ts-ignore
import image_focus from "../assets/images/regenerated_image_1781792862175.jpg";
// @ts-ignore
import image_meeting from "../assets/images/regenerated_image_1781792859792.jpg";
// @ts-ignore
import image_creative_new from "../assets/images/regenerated_image_1781793185925.jpg";
// @ts-ignore
import image_agile_new from "../assets/images/regenerated_image_1781793188613.jpg";
// @ts-ignore
import image_brainstorm_new from "../assets/images/regenerated_image_1781793190732.jpg";
// @ts-ignore
import image_retail_aura from "../assets/images/regenerated_image_1781793397599.jpg";
// @ts-ignore
import image_retail_concept from "../assets/images/regenerated_image_1781793399995.jpg";
// @ts-ignore
import image_retail_atelier from "../assets/images/regenerated_image_1781793402136.jpg";

interface CommercialProjectsProps {
  setCurrentPage?: (page: any) => void;
  selectedProject?: any;
  setSelectedProject?: any;
  onSelectProject?: any;
}

interface GalleryImage {
  id: string;
  src: string;
  categories: string[];
  title: string;
  client: string;
}

const COMMERCIAL_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "comm-img-biophilic",
    title: "Biophilic Forest Nook",
    client: "WorldQuant Headquarters",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    categories: ["Showrooms", "Retail", "Hospitality"]
  },
  {
    id: "comm-img-lobby",
    title: "Plenum Swivel Lobby Suite",
    client: "Grant Thornton Noida",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    categories: ["Showrooms", "Retail", "Corporate Spaces"]
  },
  {
    id: "comm-img-focus",
    title: "Terracotta Focus Pods",
    client: "Ampire Aerocity",
    src: image_focus,
    categories: ["Showrooms", "Retail", "Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-meeting",
    title: "Continuous Ring Meeting Suite",
    client: "Grant Thornton Delhi",
    src: image_meeting,
    categories: ["Showrooms", "Retail", "Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-creative-studio",
    title: "Biophilic Co-Working Lounge",
    client: "Innovate Hub Delhi",
    src: image_creative_new,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-agile-space",
    title: "Modern Agile Workspace",
    client: "TechVantage Gurugram",
    src: image_agile_new,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-brainstorm",
    title: "Signature Glass Boardroom",
    client: "Evolve Ventures Noida",
    src: image_brainstorm_new,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-retail-aura",
    title: "Aura Flagship Boutique",
    client: "Aura Luxury Retail",
    src: image_retail_aura,
    categories: ["Showrooms", "Retail"]
  },
  {
    id: "comm-img-retail-concept",
    title: "Avant-Garde Concept Store",
    client: "Linea Fashion Studio",
    src: image_retail_concept,
    categories: ["Showrooms", "Retail"]
  },
  {
    id: "comm-img-retail-atelier",
    title: "Atelier Curated Lounge",
    client: "Ethereal Apparel Group",
    src: image_retail_atelier,
    categories: ["Showrooms", "Retail"]
  }
];

export default function CommercialProjects({ setCurrentPage }: CommercialProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(COMMERCIAL_GALLERY_IMAGES);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on active category
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredImages(COMMERCIAL_GALLERY_IMAGES);
    } else {
      setFilteredImages(
        COMMERCIAL_GALLERY_IMAGES.filter((img) => img.categories.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const filters = [
    { label: "All Commercial", value: "all" },
    { label: "Offices", value: "Offices" },
    { label: "Retail", value: "Retail" },
    { label: "Hospitality", value: "Hospitality" },
    { label: "Showrooms", value: "Showrooms" },
    { label: "Corporate Spaces", value: "Corporate Spaces" }
  ];

  return (
    <div id="commercial_portfolio_container" className="bg-[#faf9f6]/95 text-[#1c1c1c] pt-24 min-h-screen pb-20 select-none">
      
      {/* Portfolio Header */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50 flex flex-col items-start">
        
        {/* Back navigation */}
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
          Commercial Division / Corporate Landmarks
        </span>
        <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-900 mb-4 uppercase">
          Commercial Portfolio
        </h1>
        <p className="text-[#1c1c1c]/70 text-xs md:text-sm leading-relaxed max-w-2xl font-sans mb-6">
          Explore our completed portfolio of award-winning corporate offices, premium workspaces, high-concept visual showrooms, and luxury hospitality spaces designed and built by Mysticape Concepts.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mt-4 w-full pt-4">
          {filters.map((tab) => (
            <button
               key={tab.value}
               id={`commercial_filter_tab_${tab.value}`}
               onClick={() => {
                 setActiveFilter(tab.value);
                 setLightboxIndex(null);
               }}
               className={`px-5 py-2.5 text-[9px] font-sans font-bold tracking-[0.25em] uppercase border transition-all duration-300 cursor-pointer ${
                 activeFilter === tab.value
                   ? "bg-[#1c1c1c] text-[#faf9f6] border-[#1c1c1c]"
                   : "bg-white text-stone-500 border-stone-250/20 hover:text-[#1c1c1c]"
               }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-stone-200 bg-white">
            <p className="text-stone-400 font-sans text-xs uppercase tracking-widest">No commercial landmarks found in active archive.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                id={`commercial_gallery_item_${index}`}
                className="break-inside-avoid relative overflow-hidden bg-stone-100 rounded-xs cursor-pointer border border-stone-200/30 shadow-xs hover:shadow-md transition-all duration-500 mb-6"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={img.src}
                  alt={`${img.title} at ${img.client} - Custom Turnkey Office, Showroom, and Commercial Interior Design by Mysticape Concepts India`}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual Hover Overlay */}
                <div className="absolute inset-0 bg-[#1c1c1c]/25 opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-xs transform translate-y-2 hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-4 h-4 text-stone-850" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="commercial_lightbox_modal"
          className="fixed inset-0 z-50 bg-[#1c1c1c]/95 backdrop-blur-md flex items-center justify-center select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            id="close_lightbox_btn"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            id="prev_lightbox_btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50 active:scale-95"
            aria-label="Previous view"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            id="next_lightbox_btn"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50 active:scale-95"
            aria-label="Next view"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Viewport */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={`Commercial View ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl transition-all duration-300 animate-fadeIn"
              referrerPolicy="no-referrer"
            />
            
            {/* Index Counter */}
            <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xs text-stone-300 text-[10px] font-mono tracking-widest px-3 py-1.5 uppercase select-none rounded-xs">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
