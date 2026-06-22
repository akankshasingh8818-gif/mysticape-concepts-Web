import { useState, useEffect } from "react";
import { Page, Project } from "../types";
import { COMPANY_STATS, PROJECTS_DATA, SERVICES_DATA, TESTIMONIALS_DATA } from "../data";
import { ArrowRight, Compass, Eye, Trophy, ShieldCheck, Milestone, CheckCircle, Mail } from "lucide-react";
import { motion } from "motion/react";
import { ProjectImage } from "./ProjectImage";

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  setSelectedProject: (proj: Project | null) => void;
}

export default function Home({ setCurrentPage, setSelectedProject }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Guarantee Hostinger Reach embed form initialization on Home component mount and prevent duplicate iframes
  useEffect(() => {
    const scriptId = "hostinger-reach-embed-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn-reach.hostinger.com/js/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Proactively target and trim any duplicate iframes from rendering inside the newsletter container
    const container = document.querySelector('[data-reach-form="0d8707e7-fab8-4786-b15b-624008ed9f7a"]');
    let observer: MutationObserver | null = null;

    if (container) {
      // First cleaning pass for existing children
      const existing = container.querySelectorAll("iframe");
      if (existing.length > 1) {
        for (let i = 1; i < existing.length; i++) {
          existing[i].remove();
        }
      }

      // Track future additions to prune any extra iframes injected by parallel loads/re-evaluations
      observer = new MutationObserver(() => {
        const current = container.querySelectorAll("iframe");
        if (current.length > 1) {
          for (let i = 1; i < current.length; i++) {
            current[i].remove();
          }
        }
      });
      observer.observe(container, { childList: true });
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const processSteps = [
    {
      num: "01",
      title: "Atmospheric Alignment",
      description: "We initiate with an immersive taste survey, charting your thermal, light, and material cravings."
    },
    {
      num: "02",
      title: "Planar Circulation Draft",
      description: "Mathematical layout calculations of vistas and corridor structures to ensure dynamic flow."
    },
    {
      num: "03",
      title: "Material & Tracing Ray",
      description: "We construct hyper-realistic 3D representations tracing true sun shadow angles season-by-season."
    },
    {
      num: "04",
      title: "Artisan Material Sourcing",
      description: "Hand-picking specific limestone quarries, rustic timber lots, and brass sheets in advance."
    },
    {
      num: "05",
      title: "Master Guild Execution",
      description: "Supervising elite local stone-masons, custom millworkers, and finishers with clockwork accuracy."
    },
    {
      num: "06",
      title: "Turnkey Staging Handover",
      description: "The pristine reveal. Our directors personally place curated art objects and stage your final habitat."
    }
  ];

  const handleProjectClick = (proj: Project) => {
    setSelectedProject(proj);
    setCurrentPage("portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="homepage_container" className="bg-[#faf9f6] text-[#1c1c1c]">
      
      {/* 1. HERO SECTION WITH STRONG LUXURY VALUE PROPOSITION */}
      <section id="hero_section" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Image with elegant overlay to match gold/charcoal palette */}
        <div className="absolute inset-0 z-0 bg-[#161513]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Bespoke luxury modern architectural villa by Mysticape Concepts"
            className="w-full h-full object-cover grayscale-[10%] opacity-45 scale-102 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Subtle luxury dark plaster/leather texture blend */}
          <div 
            className="absolute inset-0 opacity-15 mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* Modern luxury gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171614]/98 via-[#171614]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-transparent opacity-100"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-16">
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* SEO context heading */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-[#b2946c]/20 to-transparent border-l-2 border-[#b2946c] px-3.5 py-1.5 mb-6">
              <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-semibold">
                Bespoke Atelier / Architecture & Interiors
              </span>
            </div>

            <h1 className="text-clamp-hero font-sans font-extrabold text-[#faf9f6] tracking-tight mb-6">
              Engineering <span className="text-[#b2946c] italic font-serif">Silence</span> & Monumental Beauty
            </h1>

            <p className="text-clamp-body text-stone-300 mb-8 max-w-xl tracking-wide font-sans">
              At Mysticape Concepts, we reject the noisy ordinary. We design monolithic structural spaces, bespoke spatial interiors, and fluid arrangements for those who value quiet luxury and the uncompromising honesty of raw premium materials.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Premium Direct Brand Consultation CTA */}
              <button
                id="hero_contact_btn"
                onClick={() => setCurrentPage("contact")}
                className="flex items-center justify-center bg-[#b2946c] hover:bg-[#a08159] text-stone-900 hover:text-white px-8 py-4 text-xs font-sans font-extrabold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-black/20 cursor-pointer"
              >
                <span>Book Design Briefing</span>
              </button>

              <button
                id="hero_portfolio_btn"
                onClick={() => setCurrentPage("portfolio")}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-transparent hover:bg-[#faf9f6]/10 text-[#faf9f6] border border-[#faf9f6]/40 hover:border-[#faf9f6] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>Browse Portfolios</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Floating Stat Widget on Desktop */}
          <div className="hidden lg:flex lg:col-span-4 flex-col bg-[#1c1c1c]/90 backdrop-blur-md border border-stone-800 p-8 text-[#faf9f6] relative">
            <span className="text-[#b2946c] font-mono text-[8px] tracking-[0.3em] uppercase mb-1">
              Live Studio State
            </span>
            <hr className="border-stone-800 mb-4" />
            <h3 className="font-sans font-bold text-lg tracking-tight mb-2 text-[#faf9f6]">
              Now Accepting selective residential project briefs for Q3 2026.
            </h3>
            <p className="text-stone-400 text-xs mb-6">
              Our principal team designs only eight curated homes annually to preserve materials inspection and precision.
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="text-stone-200 hover:text-[#b2946c] text-[10px] uppercase tracking-widest font-bold font-sans flex items-center space-x-2 self-start"
            >
              <span>Submit A Project Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Scroll down mouse animation indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 opacity-55 z-10 text-[#faf9f6]">
          <span className="text-[9px] font-mono tracking-[0.3em]">EXPLORE</span>
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-[#b2946c] to-transparent"></div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS SECTION */}
      <section id="stats_section" className="bg-[#faf9f6] border-y border-stone-200/50 py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-8">
          {COMPANY_STATS.map((stat, idx) => {
            const isLong = stat.value.length > 5;
            return (
              <div key={idx} id={`stat_item_${idx}`} className="flex flex-col items-center text-center p-4">
                <span className={`font-sans font-extrabold text-[#1c1c1c] tracking-tight mb-2 block ${
                  isLong 
                    ? "text-2xl xs:text-3xl lg:text-[36px] leading-tight" 
                    : "text-clamp-stat"
                }`}>
                  {stat.value}
                </span>
                <span className="text-stone-500 font-mono text-[9px] uppercase tracking-widest max-w-[150px] leading-relaxed">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY CHOOSE US - LUXURY VALUES */}
      <section id="why_choose_us" className="py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase font-bold block mb-2">
              Our Paradigm
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1c1c1c] tracking-tight">
              The Mysticape Concepts Standard
            </h2>
            <div className="w-12 h-0.5 bg-[#b2946c] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-stone-100 hover:border-[#b2946c]/20 hover:shadow-lg transition-all duration-300 bg-[#faf9f6]/40">
              <Trophy className="w-8 h-8 text-[#b2946c] mb-6" />
              <h3 className="text-lg font-sans font-semibold text-[#1c1c1c] mb-3">
                Uncompromising Detailing
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                We design with real architectural plaster, solid limestone book-matching, and custom-rubbed raw brass fittings. We inspect and select every quarry slab personally.
              </p>
            </div>

            <div className="p-8 border border-stone-100 hover:border-[#b2946c]/20 hover:shadow-lg transition-all duration-300 bg-[#faf9f6]/40">
              <ShieldCheck className="w-8 h-8 text-[#b2946c] mb-6" />
              <h3 className="text-lg font-sans font-semibold text-[#1c1c1c] mb-3">
                100% Turnkey Delivery Integrity
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                We handle structural engineering, municipality permits, materials procurement, artisan site audits, and styling staging. You receive the key with zero contractor management headaches.
              </p>
            </div>

            <div className="p-8 border border-stone-100 hover:border-[#b2946c]/20 hover:shadow-lg transition-all duration-300 bg-[#faf9f6]/40">
              <Milestone className="w-8 h-8 text-[#b2946c] mb-6" />
              <h3 className="text-lg font-sans font-semibold text-[#1c1c1c] mb-3">
                Contextual Architecture
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Our layouts are designed strictly oriented around natural solar shadow mappings and circadian wind-path structures to lower energy costs while magnifying peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW PANEL */}
      <section id="services_overview_section" className="py-24 bg-[#faf9f6]">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase block mb-2">
                Atelier Blueprint Services
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1c1c1c] tracking-tight">
                Our Curated Core Specializations
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage("services")}
              className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#1c1c1c] hover:text-[#b2946c] flex items-center space-x-2 mt-4 md:mt-0 transition-colors border-b border-[#1c1c1c] pb-1"
            >
              <span>Explore services breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((serv) => (
              <div
                key={serv.id}
                id={`home_service_${serv.id}`}
                className="group flex flex-col bg-white border border-stone-200/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={serv.image}
                    alt={serv.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute bottom-4 left-4 text-white text-xs font-mono uppercase tracking-[0.2em]">
                    {serv.title}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-stone-500 text-xs leading-relaxed mb-6">
                    {serv.description}
                  </p>
                  <button
                    onClick={() => setCurrentPage("services")}
                    className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-[#1c1c1c] group-hover:text-[#b2946c] flex items-center space-x-1.5 self-start transition-colors"
                  >
                    <span>Analyze Detail features</span>
                    <ArrowRight className="w-3 h-3 text-[#b2946c]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* 6. PROCESS ROADMAP SECTION */}
      <section id="process_roadmap" className="py-24 bg-[#faf9f6] text-[#1c1c1c]">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase font-bold block mb-2">
              Our Blueprint
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1c1c1c] tracking-tight">
              Bespoke Journey: Concept to Turnkey
            </h2>
            <p className="text-stone-400 text-xs mt-3 leading-relaxed">
              We guide clients through a meticulously organized step sequence to satisfy creative risk audits and material matching guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex space-x-4 p-6 bg-white border border-stone-100 hover:shadow-md transition-shadow">
                <span className="text-[#b2946c] font-mono text-xl font-extrabold tracking-widest block self-start">
                  {step.num}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-sans font-semibold text-sm text-stone-900 uppercase tracking-widest mb-2 border-b border-stone-100 pb-1">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS (AMBASSADORS) SLIDER */}
      <section id="testimonials_slider" className="py-24 bg-white border-t border-stone-200/50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase font-bold block mb-2">
              Patrons
            </span>
            <h2 className="text-3xl font-sans font-bold text-[#1c1c1c] tracking-tight">
              Voices of Quiet Luxury
            </h2>
          </div>

          {/* Render active testimonial with simple fade triggers */}
          <div className="max-w-4xl mx-auto bg-[#faf9f6] border border-stone-100 p-8 md:p-12 relative">
            <span className="absolute top-6 left-6 text-7xl font-serif text-[#b2946c]/15 leading-none">“</span>
            
            <p className="text-[#1c1c1c] text-sm md:text-base italic leading-relaxed font-serif relative z-10 mb-8 pt-4">
              {TESTIMONIALS_DATA[activeTestimonial].quote}
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-stone-200/50">
              <div>
                <h4 className="font-sans font-bold text-[#1c1c1c] text-xs uppercase tracking-widest">
                  {TESTIMONIALS_DATA[activeTestimonial].author}
                </h4>
                <span className="text-stone-500 text-[10px] block mt-0.5">
                  {TESTIMONIALS_DATA[activeTestimonial].role} — {TESTIMONIALS_DATA[activeTestimonial].location}
                </span>
              </div>
              <span className="text-[#b2946c] font-mono text-[9px] font-bold uppercase tracking-widest bg-[#b2946c]/5 px-3 py-1.5 border border-[#b2946c]/10 mt-2 sm:mt-0">
                {TESTIMONIALS_DATA[activeTestimonial].project}
              </span>
            </div>

            {/* Testimonial Select Node Indicators */}
            <div className="flex justify-center space-x-2.5 mt-10">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 transition-all duration-300 ${
                    activeTestimonial === idx ? "w-8 bg-[#b2946c]" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                  } rounded-full`}
                  title={`Testimonial slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. STRONG INTERACTIVE CTA ROW */}
      <section id="homepage_cta_row" className="bg-[#1c1c1c] text-[#faf9f6] py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-[300px] h-[300px] rounded-full bg-[#b2946c] blur-[150px] absolute -top-40 -left-40"></div>
          <div className="w-[400px] h-[400px] rounded-full bg-[#b2946c] blur-[200px] absolute -bottom-40 -right-40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center max-w-3xl flex flex-col items-center">
          <Compass className="w-8 h-8 text-[#b2946c] animate-pulse mb-6" />
          
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight mb-4 leading-tight">
            Curious How Your Taste Profiles Architecture?
          </h2>
          
          <p className="text-stone-400 text-xs md:text-sm tracking-wide leading-relaxed mb-10 max-w-xl">
            Book a physical curated design briefing session at our Gurugram Lighthouse salon, where our lead architects outline bespoke layout grids, lighting systems, and custom travertine surfaces for your estate.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
            <button
              onClick={() => setCurrentPage("contact")}
              className="flex items-center justify-center px-8 py-4 bg-[#b2946c] hover:bg-[#a08159] text-stone-900 hover:text-white font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Schedule Direct Consultation</span>
            </button>
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="px-8 py-4 bg-transparent border border-stone-600 hover:border-stone-400 text-[#faf9f6] hover:bg-stone-800 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300"
            >
              Browse Portfolios
            </button>
          </div>
        </div>
      </section>

      {/* 9. STAY INSPIRED NEWSLETTER SECTION */}
      <section id="homepage_newsletter_section" className="py-24 bg-[#faf9f6]/95 border-t border-stone-200/50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase block mb-3 font-bold">
              Bespoke Intel / Quiet Luxury
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-[#1c1c1c] tracking-tight mb-4">
              Stay Inspired
            </h2>
            <div className="w-12 h-0.5 bg-[#b2946c] mx-auto mb-6"></div>
            <p className="text-stone-600 text-xs md:text-sm tracking-wide leading-relaxed mb-10 max-w-lg mx-auto font-sans">
              Subscribe to receive interior design inspiration, project updates, and the latest news from Mysticape Concepts.
            </p>
            
            {/* Hostinger Reach newsletter embed box */}
            <div className="max-w-md mx-auto p-2 bg-white border border-stone-200/50 shadow-[0_2px_8px_rgba(28,28,28,0.015)] rounded-xs overflow-hidden">
              <div data-reach-form="0d8707e7-fab8-4786-b15b-624008ed9f7a"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
