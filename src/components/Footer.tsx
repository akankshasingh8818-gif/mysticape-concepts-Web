import { Page } from "../types";
import { Compass, Mail, Phone, MapPin, Globe, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Schema list for search crawlers: JSON-LD ArchitectureOffice
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ArchitectureOffice",
    "name": "Mysticape Concepts",
    "description": "Premium luxury architecture, structural engineering, and modern bespoke space interior planning studio.",
    "url": "https://mysticapeconcepts.com",
    "logo": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80",
    "telephone": "+91 95600-14752, +91 767-835-8507",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "809, The Lighthouse, Sector 82",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122004",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "founders": [
      {
        "@type": "Person",
        "name": "Ashish Juneja"
      }
    ],
    "priceRange": "$$$$"
  };

  return (
    <footer id="app_footer" className="bg-[#1c1c1c] text-stone-400 font-sans border-t border-stone-800 pt-16 pb-8">
      
      {/* Dynamic injection of local JSON-LD Schema markup for Google SEO optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Row 1 - Brand Column */}
        <div className="flex flex-col items-start pr-4">
          <Logo layout="horizontal" theme="light" iconSize={38} className="mb-4" />
          <p className="text-stone-400 text-xs leading-relaxed tracking-wide mb-6">
            An award-winning luxury architecture and interior design practice dedicated to spatial clarity, materials honesty, and silent beauty.
          </p>
          <div className="flex flex-col space-y-2 text-xs text-stone-400">
            <div className="flex items-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#b2946c] mt-0.5 flex-shrink-0" />
              <span>809, The Lighthouse, Sector 82, Gurugram, Haryana, 122004</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#b2946c]" />
              <span>
                <a href="tel:+919560014752" className="hover:text-[#b2946c] transition-colors">+91 95600-14752</a>,{" "}
                <a href="tel:+917678358507" className="hover:text-[#b2946c] transition-colors">+91 767-835-8507</a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#b2946c]" />
              <span>
                <a href="mailto:info@mysticapeconcepts.com" className="hover:text-[#b2946c] transition-colors">info@mysticapeconcepts.com</a>
              </span>
            </div>
          </div>
          <div className="flex space-x-3.5 mt-6 pt-2">
            <a
              href="https://www.instagram.com/mysticape.concepts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Mysticape Concepts on Instagram"
              className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#b2946c] flex items-center justify-center text-stone-400 hover:text-[#b2946c] hover:bg-stone-900/40 transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/mysticape-concepts-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Mysticape Concepts on LinkedIn"
              className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#b2946c] flex items-center justify-center text-stone-400 hover:text-[#b2946c] hover:bg-stone-900/40 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Row 2 - Quick Links (SEO internal linking structure) */}
        <div>
          <h4 className="text-[#faf9f6] font-mono text-[10px] tracking-[0.25em] uppercase mb-4 text-stone-300">
            Navigation Index
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
            <li>
              <button onClick={() => handleNav("home")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                The Studio Front
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("about")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                Core Design Philosophy
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                Bespoke Design Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("portfolio")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                Project Portfolio Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("blog")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                The Editorial Journal (Blog)
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("founder")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                Principal & Founders
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("testimonials")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                Client Laurels & Awards
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("faqs")} className="hover:text-[#b2946c] transition-colors focus:outline-none">
                Studio FAQ Support
              </button>
            </li>
          </ul>
        </div>

        {/* Row 3 - Services Shortcut (SEO density targets) */}
        <div>
          <h4 className="text-[#faf9f6] font-mono text-[10px] tracking-[0.25em] uppercase mb-4 text-stone-300">
            Atelier Focus Areas
          </h4>
          <ul className="space-y-2.5 text-xs text-stone-400">
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#b2946c] text-left transition-colors">
                Premium Residential Architecture
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#b2946c] text-left transition-colors">
                Bespoke Tactile Interior Curation
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#b2946c] text-left transition-colors">
                Specialized Space Planning Audits
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#b2946c] text-left transition-colors">
                Circadian Lighting System Architect
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("services")} className="hover:text-[#b2946c] text-left transition-colors">
                Photorealistic 3D Material Raytracing
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("contact")} className="hover:text-[#b2946c] text-left transition-colors font-semibold">
                <span>Book Direct Private Salon Briefings</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Row 4 - Modern Luxury Context Info */}
        <div className="flex flex-col items-start">
          <h4 className="text-[#faf9f6]/95 font-mono text-[10px] tracking-[0.25em] uppercase mb-4 text-[#b2946c] font-bold">
            Book Briefings
          </h4>
          <p className="text-stone-400 text-xs leading-relaxed mb-4">
            Curious about your bespoke architectural style profile? Schedule a private walkthrough and sensory review at our Gurugram showroom.
          </p>
          <button
            onClick={() => handleNav("contact")}
            className="w-full flex items-center justify-center py-3 bg-[#b2946c] hover:bg-[#a08159] text-stone-900 hover:text-[#faf9f6] text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
          >
            <span>Arrange Curation Session</span>
          </button>
          <div className="mt-4 flex space-x-4 text-xs text-stone-500 w-full justify-between items-center bg-stone-900/30 p-2.5 border border-stone-800">
            <span className="font-mono text-[9px]">GMT+5:30 Studio Live</span>
            <div className="flex items-center space-x-1.5 font-mono text-[9px] text-[#b2946c]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Accepting selective drafts</span>
            </div>
          </div>
        </div>

      </div>

      <hr className="border-stone-800 my-8 w-full max-w-7xl mx-auto px-6" />

      {/* Footer Legal Nodes & SEO attributes */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-wider space-y-4 sm:space-y-0 text-stone-500">
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} Mysticape Concepts. All materials, blueprints, and designs reserved globally.
        </div>
        <div className="flex space-x-6">
          <button onClick={() => handleNav("careers")} className="hover:text-[#b2946c] transition-colors">
            CAREERS
          </button>
          <button onClick={() => handleNav("privacy")} className="hover:text-[#b2946c] transition-colors">
            PRIVACY
          </button>
          <button onClick={() => handleNav("terms")} className="hover:text-[#b2946c] transition-colors">
            TERMS & CONDITIONS
          </button>
        </div>
      </div>

    </footer>
  );
}
