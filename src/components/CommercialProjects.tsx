import { useState, useEffect } from "react";
import { X, ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
// @ts-ignore
import image_biophilic_new from "../assets/images/regenerated_image_1783147206872.jpg";
// @ts-ignore
import image_lobby_new from "../assets/images/regenerated_image_1783147209026.jpg";
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
// @ts-ignore
import concept_lighting_study from "../assets/images/regenerated_image_1783163476674.jpg";
// @ts-ignore
import concept_material_board from "../assets/images/regenerated_image_1781792692149.jpg";
// @ts-ignore
import concept_raw_concrete from "../assets/images/regenerated_image_1781792694499.jpg";
// @ts-ignore
import concept_acoustic_panels from "../assets/images/regenerated_image_1781792857486.jpg";
// @ts-ignore
import concept_executive_suite from "../assets/images/regenerated_image_1781792864248.jpg";
// @ts-ignore
import concept_atrium_lounge from "../assets/images/regenerated_image_1783163614967.jpg";
// @ts-ignore
import image_linear_suites from "../assets/images/regenerated_image_1783163614967.jpg";
// @ts-ignore
import image_executive_boardroom_new from "../assets/images/regenerated_image_1783163343989.jpg";
// @ts-ignore
import image_ambient_corridor from "../assets/images/regenerated_image_1781792689724.jpg";
// @ts-ignore
import image_elysian_hub from "../assets/images/regenerated_image_1784378342320.jpg";
// @ts-ignore
import image_verdant_lounge from "../assets/images/regenerated_image_1784378344572.jpg";
// @ts-ignore
import image_aether_lightwell from "../assets/images/regenerated_image_1784378346559.jpg";
// @ts-ignore
import image_sovereign_office from "../assets/images/regenerated_image_1784378349558.jpg";

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
    id: "comm-img-elysian-hub",
    title: "Elysian Executive Hub",
    client: "Summit Chambers Noida",
    src: image_elysian_hub,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-verdant-lounge",
    title: "Verdant Lounge & Co-Working Atrium",
    client: "Greenfield Capital Office",
    src: image_verdant_lounge,
    categories: ["Offices", "Corporate Spaces", "Hospitality"]
  },
  {
    id: "comm-img-aether-lightwell",
    title: "Aether Light-Well Meeting Lounge",
    client: "Nexus Workspace Delhi",
    src: image_aether_lightwell,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-sovereign-office",
    title: "Sovereign Executive Office & Boardroom",
    client: "Sovereign Wealth Delhi",
    src: image_sovereign_office,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-linear-suites",
    title: "Linear Modular Hot Desking & Agile Suites",
    client: "Evolve Ventures Noida",
    src: image_linear_suites,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-executive-boardroom-new",
    title: "Vanguard Executive Boardroom Suite",
    client: "Mystic Ape Corporate Headquarters",
    src: image_executive_boardroom_new,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-ambient-corridor",
    title: "Linear Shadow-Path Gallery & Gallery Corridor",
    client: "Capital Art Foundation Delhi",
    src: image_ambient_corridor,
    categories: ["Offices", "Corporate Spaces", "Showrooms"]
  },
  {
    id: "comm-img-biophilic",
    title: "Biophilic Forest Nook",
    client: "WorldQuant Headquarters",
    src: image_biophilic_new,
    categories: ["Showrooms", "Retail", "Hospitality"]
  },
  {
    id: "comm-img-lobby",
    title: "Plenum Swivel Lobby Suite",
    client: "Grant Thornton Noida",
    src: image_lobby_new,
    categories: ["Showrooms", "Retail", "Corporate Spaces"]
  },
  {
    id: "comm-img-unsplash-atrium",
    title: "Plenum Open-Volume Collaborative Atrium",
    client: "Vanguard Co-working Bangalore",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    categories: ["Offices", "Corporate Spaces"]
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
    id: "comm-img-unsplash-boardroom",
    title: "Minimalist Walnut Conference Suite",
    client: "Ascent Financials Mumbai",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    categories: ["Offices", "Corporate Spaces"]
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
    id: "comm-img-unsplash-apparel",
    title: "Luxe Avant-Garde Apparel Showcase",
    client: "Bespoke Threads Gurugram",
    src: "https://images.unsplash.com/photo-1567401893930-79072f53b494?auto=format&fit=crop&w=1200&q=80",
    categories: ["Showrooms", "Retail"]
  },
  {
    id: "comm-img-brainstorm",
    title: "Signature Glass Boardroom",
    client: "Evolve Ventures Noida",
    src: image_brainstorm_new,
    categories: ["Offices", "Corporate Spaces"]
  },
  {
    id: "comm-img-unsplash-zenith",
    title: "The Zenith Double-Height Corporate Foyer",
    client: "Zenith Realty Aerocity",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
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
    id: "comm-img-unsplash-terrazzo",
    title: "Drape & Loom Terrazzo Flagship Boutique",
    client: "Drape & Loom Delhi",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    categories: ["Showrooms", "Retail"]
  },
  {
    id: "comm-img-retail-atelier",
    title: "Atelier Curated Lounge",
    client: "Ethereal Apparel Group",
    src: image_retail_atelier,
    categories: ["Showrooms", "Retail"]
  },
  {
    id: "comm-img-unsplash-hive",
    title: "The Hive Agile Lounge & Creative Corner",
    client: "Hive Collective Bengaluru",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    categories: ["Offices", "Corporate Spaces"]
  }
];

const CONCEPT_STUDY_IMAGES = [
  {
    id: "concept-lighting",
    title: "Chiaroscuro & Sculptural Lighting",
    desc: "A simulation analyzing natural shadow paths and custom recessed ambient warm LEDs within fluted partition columns.",
    src: concept_lighting_study,
    type: "Lighting Simulation"
  },
  {
    id: "concept-material",
    title: "Organic Travertine & Cast Brass",
    desc: "Tactile moodboard exploring pairings of open-pore Italian travertine with raw acid-etched industrial brass accents.",
    src: concept_material_board,
    type: "Material Moodboard"
  },
  {
    id: "concept-brutalist",
    title: "Monolithic Structural Columns",
    desc: "A brutalist study celebrating exposed high-strength raw concrete textures contrasting with elegant minimalist frames.",
    src: concept_raw_concrete,
    type: "Structural Rendering"
  },
  {
    id: "concept-acoustic",
    title: "Micro-Slat Timber Acoustics",
    desc: "Computational model for sound absorption wall structures integrating warm red oak timber slatted layouts.",
    src: concept_acoustic_panels,
    type: "Acoustic Architecture"
  },
  {
    id: "concept-executive",
    title: "Vanguard Executive Lounge",
    desc: "Proposed layout detailing custom floating walnut wood desks, concealed storage drawers, and hand-woven wool rugs.",
    src: concept_executive_suite,
    type: "Spatial Layout"
  },
  {
    id: "concept-workspace-layout",
    title: "Turnkey Modular Workstation Draft",
    desc: "Drafting plan layout for dense, comfortable hot desking suites featuring noise-dampening acoustic partition screens and integrated digital cable highways.",
    src: concept_atrium_lounge,
    type: "Workspace Layout Study"
  }
];

export default function CommercialProjects({ setCurrentPage }: CommercialProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(COMMERCIAL_GALLERY_IMAGES);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [conceptLightboxIndex, setConceptLightboxIndex] = useState<number | null>(null);

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

  // Keyboard navigation for Concept Lightbox modal
  useEffect(() => {
    if (conceptLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setConceptLightboxIndex((prev) => (prev !== null ? (prev + 1) % CONCEPT_STUDY_IMAGES.length : null));
      } else if (e.key === "ArrowLeft") {
        setConceptLightboxIndex((prev) => (prev !== null ? (prev - 1 + CONCEPT_STUDY_IMAGES.length) % CONCEPT_STUDY_IMAGES.length : null));
      } else if (e.key === "Escape") {
        setConceptLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [conceptLightboxIndex]);

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

      {/* Concept Renderings & Spatial Studies Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200/50 mt-12">
        <div className="flex flex-col items-start mb-12">
          <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block animate-pulse">
            Atelier Concept Archives / Behind the Blueprint
          </span>
          <h2 className="text-clamp-section font-sans font-black tracking-tight text-stone-900 mb-4 uppercase">
            Concept Studies & Material Moodboards
          </h2>
          <p className="text-[#1c1c1c]/70 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
            In our turnkey process, every structure begins as an in-depth spatial study. Explore our archive of digital lighting simulations, experimental acoustic patterns, and physical material palettes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONCEPT_STUDY_IMAGES.map((concept, index) => (
            <div
              key={concept.id}
              id={`concept_gallery_item_${index}`}
              className="group relative bg-white border border-stone-200/60 rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setConceptLightboxIndex(index)}
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={concept.src}
                  alt={`${concept.title} - ${concept.type} by Mysticape Concepts`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1c1c1c] text-white text-[8px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-xs">
                    {concept.type}
                  </span>
                </div>
                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-stone-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 p-2.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-stone-900" />
                  </div>
                </div>
              </div>

              {/* Text info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-sans font-extrabold text-stone-900 text-sm tracking-tight mb-2 group-hover:text-[#b2946c] transition-colors">
                  {concept.title}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed font-sans flex-grow">
                  {concept.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
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

      {/* Concept Lightbox Modal */}
      {conceptLightboxIndex !== null && (
        <div
          id="concept_lightbox_modal"
          className="fixed inset-0 z-50 bg-[#1c1c1c]/95 backdrop-blur-md flex items-center justify-center select-none"
          onClick={() => setConceptLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            id="close_concept_lightbox_btn"
            onClick={() => setConceptLightboxIndex(null)}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50"
            aria-label="Close concept lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button
            id="prev_concept_lightbox_btn"
            onClick={(e) => {
              e.stopPropagation();
              setConceptLightboxIndex((prev) => (prev !== null ? (prev - 1 + CONCEPT_STUDY_IMAGES.length) % CONCEPT_STUDY_IMAGES.length : null));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50 active:scale-95"
            aria-label="Previous concept"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            id="next_concept_lightbox_btn"
            onClick={(e) => {
              e.stopPropagation();
              setConceptLightboxIndex((prev) => (prev !== null ? (prev + 1) % CONCEPT_STUDY_IMAGES.length : null));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50 z-50 active:scale-95"
            aria-label="Next concept"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Viewport */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={CONCEPT_STUDY_IMAGES[conceptLightboxIndex].src}
              alt={CONCEPT_STUDY_IMAGES[conceptLightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl transition-all duration-300 animate-fadeIn"
              referrerPolicy="no-referrer"
            />

            {/* Captions */}
            <div className="mt-4 text-center max-w-xl px-4">
              <span className="text-[#b2946c] text-[9px] font-mono tracking-widest uppercase block mb-1 font-bold">
                {CONCEPT_STUDY_IMAGES[conceptLightboxIndex].type}
              </span>
              <h4 className="text-white font-sans font-bold text-sm tracking-tight mb-1">
                {CONCEPT_STUDY_IMAGES[conceptLightboxIndex].title}
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed font-sans">
                {CONCEPT_STUDY_IMAGES[conceptLightboxIndex].desc}
              </p>
            </div>
            
            {/* Index Counter */}
            <span className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xs text-stone-300 text-[10px] font-mono tracking-widest px-3 py-1.5 uppercase select-none rounded-xs">
              {conceptLightboxIndex + 1} / {CONCEPT_STUDY_IMAGES.length}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
