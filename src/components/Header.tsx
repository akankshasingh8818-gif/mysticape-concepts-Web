import { useState, useEffect } from "react";
import { Page } from "../types";
import { Menu, X, Compass, Globe, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; value: Page; icon?: boolean }[] = [
    { label: "Studio", value: "home" },
    { label: "Philosophy", value: "about" },
    { label: "Bespoke Services", value: "services" },
    { label: "Portfolio", value: "portfolio" },
    { label: "Journal", value: "blog" },
    { label: "Principal", value: "founder" },
    { label: "Laurels", value: "testimonials" },
    { label: "Careers", value: "careers" },
    { label: "FAQ", value: "faqs" },
  ];

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        id="app_header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
          isOpen
            ? "bg-[#faf9f6] border-stone-200/50 py-4 shadow-sm"
            : scrolled 
              ? "bg-[#faf9f6]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(28,28,28,0.03)] border-stone-200/50 py-4" 
              : "bg-[#faf9f6]/80 backdrop-blur-md border-[#b2946c]/10 py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo - Luxury typographic styling */}
          <motion.button
            id="brand_logo_btn"
            onClick={() => handleNav("home")}
            className="group focus:outline-none active:scale-95 origin-left"
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.015 }}
            transition={{ 
               opacity: { duration: 1.2, ease: "easeOut", delay: 0.1 },
               y: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
               scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
            }}
          >
            <Logo layout="horizontal" theme="dark" iconSize={36} />
          </motion.button>

          {/* Desktop Navigation */}
          <nav id="desktop_nav" className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.value || 
                (item.value === "portfolio" && (currentPage === "portfolio-residential" || currentPage === "portfolio-commercial" || currentPage === "project-detail"));
              
              if (item.value === "portfolio") {
                return (
                  <div
                    key={item.value}
                    onMouseEnter={() => setPortfolioDropdownOpen(true)}
                    onMouseLeave={() => setPortfolioDropdownOpen(false)}
                    className="relative"
                  >
                    <button
                      id={`nav_item_${item.value}`}
                      onClick={() => handleNav("portfolio")}
                      className={`relative px-2.5 xl:px-4 py-2 text-[11px] xl:text-xs font-sans font-medium tracking-wider xl:tracking-widest uppercase focus:outline-none transition-all duration-300 ${
                        isActive 
                          ? "text-[#b2946c]" 
                          : "text-[#1c1c1c]/80 hover:text-[#b2946c]"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavBackground"
                          className="absolute bottom-0 left-2.5 xl:left-4 right-2.5 xl:right-4 h-[1.5px] bg-[#b2946c]"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                    
                    {/* Premium Hover Dropdown Panel */}
                    <AnimatePresence>
                      {portfolioDropdownOpen && (
                        <motion.div
                          id="portfolio_hover_dropdown"
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute left-0 mt-0 w-64 bg-white border border-stone-200/50 shadow-lg py-3.5 z-50 flex flex-col items-start origin-top-left"
                        >
                          <button
                            onClick={() => {
                              handleNav("portfolio");
                              setPortfolioDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-2.5 text-[9px] font-sans font-bold tracking-[0.2em] uppercase transition-colors ${
                              currentPage === "portfolio" ? "text-[#b2946c] bg-stone-50" : "text-[#1c1c1c] hover:bg-stone-50 hover:text-[#b2946c]"
                            }`}
                          >
                            All Architectures
                          </button>
                          <hr className="w-full border-stone-100 my-1" />
                          <button
                            onClick={() => {
                              handleNav("portfolio-residential");
                              setPortfolioDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-2.5 text-[9px] font-sans font-bold tracking-[0.2em] uppercase transition-colors ${
                              currentPage === "portfolio-residential" ? "text-[#b2946c] bg-stone-50" : "text-[#1c1c1c] hover:bg-stone-50 hover:text-[#b2946c]"
                            }`}
                          >
                            Residential Division
                          </button>
                          <button
                            onClick={() => {
                              handleNav("portfolio-commercial");
                              setPortfolioDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-2.5 text-[9px] font-sans font-bold tracking-[0.2em] uppercase transition-colors ${
                              currentPage === "portfolio-commercial" ? "text-[#b2946c] bg-stone-50" : "text-[#1c1c1c] hover:bg-stone-50 hover:text-[#b2946c]"
                            }`}
                          >
                            Commercial Division
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

               return (
                <button
                  key={item.value}
                  id={`nav_item_${item.value}`}
                  onClick={() => handleNav(item.value)}
                  className={`relative px-2.5 xl:px-4 py-2 text-[11px] xl:text-xs font-sans font-medium tracking-wider xl:tracking-widest uppercase focus:outline-none transition-all duration-300 ${
                    isActive 
                      ? "text-[#b2946c]" 
                      : "text-[#1c1c1c]/80 hover:text-[#b2946c]"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute bottom-0 left-2.5 xl:left-4 right-2.5 xl:right-4 h-[1.5px] bg-[#b2946c]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Main Contact Link buttons & Social Profile Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3.5 border-r border-stone-200/60 pr-4">
              <a
                href="https://www.instagram.com/mysticape.concepts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mysticape Concepts on Instagram"
                className="text-[#1c1c1c]/70 hover:text-[#b2946c] transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mysticape-concepts-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Mysticape Concepts on LinkedIn"
                className="text-[#1c1c1c]/70 hover:text-[#b2946c] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
            <button
              id="header_cta_btn"
              onClick={() => handleNav("contact")}
              className={`px-5 py-2.5 text-[10px] font-sans font-semibold tracking-widest uppercase transition-all duration-300 border ${
                currentPage === "contact"
                  ? "bg-[#1c1c1c] text-[#faf9f6]/95 border-[#1c1c1c]"
                  : "bg-transparent text-[#1c1c1c] border-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-[#faf9f6]"
              }`}
            >
              Consultations
            </button>
          </div>

          {/* Mobile and Tablet responsive menu trigger */}
          <button
            id="mobile_menu_trigger_unf"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-[#1c1c1c] focus:outline-none transition-transform active:scale-95 hover:bg-stone-100/50 rounded-full"
            aria-label="Toggle Navigation Screen"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Responsive Navigation Overlay with Smooth Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile_nav_overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-[#faf9f6] z-40 border-b border-stone-200/50 shadow-lg flex flex-col items-center justify-center lg:hidden"
          >
            <div className="w-full px-6 flex flex-col space-y-4 text-center mt-2">
              <Logo layout="vertical" theme="dark" iconSize={42} className="mb-4 opacity-90" />
              {navItems.map((item) => {
                const isActive = currentPage === item.value || 
                  (item.value === "portfolio" && (currentPage === "portfolio-residential" || currentPage === "portfolio-commercial" || currentPage === "project-detail"));
                
                if (item.value === "portfolio") {
                  return (
                    <div key={item.value} className="flex flex-col items-center space-y-1">
                      <button
                        id={`mobile_nav_item_${item.value}`}
                        onClick={() => handleNav(item.value)}
                        className={`text-sm font-sans font-medium tracking-[0.2em] uppercase py-3 focus:outline-none transition-colors ${
                          isActive ? "text-[#b2946c]" : "text-[#1c1c1c]"
                        }`}
                      >
                        {item.label}
                      </button>
                      
                      {/* Nested mobile links */}
                      <div className="flex flex-row space-x-2 pb-2">
                        <button
                          onClick={() => handleNav("portfolio-residential")}
                          className={`text-[9px] font-sans font-bold tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-200 rounded-sm transition-colors ${
                            currentPage === "portfolio-residential" ? "bg-[#1c1c1c] text-white border-[#1c1c1c]" : "bg-white/80 text-stone-500"
                          }`}
                        >
                          Residences
                        </button>
                        <button
                          onClick={() => handleNav("portfolio-commercial")}
                          className={`text-[9px] font-sans font-bold tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-200 rounded-sm transition-colors ${
                            currentPage === "portfolio-commercial" ? "bg-[#1c1c1c] text-white border-[#1c1c1c]" : "bg-white/80 text-stone-500"
                          }`}
                        >
                          Commercials
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.value}
                    id={`mobile_nav_item_${item.value}`}
                    onClick={() => handleNav(item.value)}
                    className={`text-sm font-sans font-medium tracking-[0.2em] uppercase py-3 focus:outline-none transition-colors ${
                      isActive ? "text-[#b2946c]" : "text-[#1c1c1c]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <hr className="my-2 border-stone-200" />

              <div className="flex flex-col space-y-4 pt-2">
                <button
                  id="mobile_nav_contact_btn"
                  onClick={() => handleNav("contact")}
                  className="w-full px-6 py-3.5 bg-[#1c1c1c] text-[#faf9f6]/95 hover:text-white text-xs font-sans font-bold tracking-[0.15em] uppercase hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Book consultation
                </button>
                <div className="flex items-center justify-center space-x-6 pt-2">
                  <a
                    href="https://www.instagram.com/mysticape.concepts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Mysticape Concepts on Instagram"
                    className="flex items-center space-x-2 text-[#1c1c1c]/70 hover:text-[#b2946c] transition-all duration-350"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-[10px] font-mono tracking-widest uppercase">Instagram</span>
                  </a>
                  <span className="h-4 w-[1px] bg-stone-200"></span>
                  <a
                    href="https://www.linkedin.com/company/mysticape-concepts-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Mysticape Concepts on LinkedIn"
                    className="flex items-center space-x-2 text-[#1c1c1c]/70 hover:text-[#b2946c] transition-all duration-350"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-[10px] font-mono tracking-widest uppercase">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
