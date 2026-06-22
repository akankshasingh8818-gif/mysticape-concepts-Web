import { Page } from "../types";
import { ArrowRight, CheckCircle, Flame, Eye, Landmark, Instagram, Linkedin } from "lucide-react";
// @ts-ignore
import aboutVisualImage from "../assets/images/regenerated_image_1782110808602.png";

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const pillars = [
    {
      icon: <Landmark className="w-6 h-6 text-[#b2946c]" />,
      title: "Monolithic Honesty",
      desc: "Our materials behave as they are. We do not plaster over high-grade exposed raw concrete; we do not glaze over organic textured timber. Integrity of form is structural peace."
    },
    {
      icon: <Eye className="w-6 h-6 text-[#b2946c]" />,
      title: "Shadow & Luminance Dialogue",
      desc: "Daylight is an active construction material. By carefully orienting vistas around micro seasonal sun movements, we produce natural shade gradients that transform interiors throughout the clock."
    },
    {
      icon: <Flame className="w-6 h-6 text-[#b2946c]" />,
      title: "Quiet Luxury Aesthetics",
      desc: "We completely reject loud patterns, high-gloss finishes, or excessive decoration. We celebrate wide neutral plane, rich textures (such as open-pore travertine and raw steel) and silence."
    }
  ];

  return (
    <div id="about_page_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen">
      
      {/* Editorial Header Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block animate-pulse">
          About The Studio / Philosophy
        </span>
        <h1 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight text-stone-900 leading-[1.08] max-w-4xl mb-6">
          Constructing Timeless <span className="text-[#b2946c] italic font-serif">Sanctuaries</span> For Mind & Sight
        </h1>
        <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-2xl font-sans">
          Mysticape Concepts Pvt. Ltd. represents a forward-thinking interior design and contracting firm specializing in immersive, functional spaces. Founded by Ashish Juneja, we seamlessly blend innovation, aesthetics, and precision to transform blueprints into bold, purposeful environments across commercial, residential, and hospitality sectors.
        </p>
      </section>

      {/* Two and Two layout - Narrative Content & Visual Panel */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="order-2 lg:order-1 flex flex-col space-y-6 lg:sticky lg:top-24">
          <h2 className="text-3xl font-sans font-bold tracking-tight text-[#1c1c1c]">
            Our Vision & Mission
          </h2>
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
            <strong>Our Mission:</strong> At Mysticape Concepts, our mission is to deliver thoughtfully designed, functional, and sustainable interior and facility solutions that enhance everyday living and working environments. We combine aesthetic excellence with practical efficiency through quality execution, reliable maintenance, and integrated safety systems, ensuring that every space we create or manage meets the highest standards of comfort, performance, and compliance.
          </p>
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
            <strong>Our Vision:</strong> To be a trusted partner in transforming and maintaining spaces through innovative interior solutions, efficient facility management, and integrated safety systems, delivering environments that are not only visually refined but also secure, compliant, and built for long-term performance.
          </p>
          <div className="flex space-x-4 pt-4 border-t border-stone-200/40">
            <div>
              <span className="text-[#b2946c] font-sans text-3xl font-extrabold block">100+</span>
              <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest mt-1 block">Corporate Clients</span>
            </div>
            <div className="pl-6 border-l border-stone-200">
              <span className="text-[#b2946c] font-sans text-3xl font-extrabold block">Millions</span>
              <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest mt-1 block">Sq. Ft. Handed Over</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2.5 pt-4 border-t border-stone-200/40">
            <a
              href="https://www.instagram.com/mysticape.concepts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Mysticape Concepts on Instagram in a new browser tab"
              className="flex items-center space-x-2 px-3 py-2 bg-white/70 border border-stone-200 hover:border-[#b2946c] hover:bg-white text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#1c1c1c] transition-all duration-300 rounded-sm"
            >
              <Instagram className="w-3.5 h-3.5 text-[#b2946c]" />
              <span>@mysticape.concepts</span>
            </a>
            <a
              href="https://www.linkedin.com/company/mysticape-concepts-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Mysticape Concepts on LinkedIn in a new browser tab"
              className="flex items-center space-x-2 px-3 py-2 bg-white/70 border border-stone-200 hover:border-[#b2946c] hover:bg-white text-[9px] font-sans font-bold tracking-[0.1em] uppercase text-[#1c1c1c] transition-all duration-300 rounded-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#b2946c]" />
              <span>Mysticape Concepts Pvt. Ltd.</span>
            </a>
          </div>
        </div>

        {/* Framing Image of the Creative Principle & Founder */}
        <div className="order-1 lg:order-2 flex flex-col items-center w-full max-w-md mx-auto">
          <img
            src={aboutVisualImage}
            alt="Ashish Juneja, Creative Principle & Founder of Mysticape Concepts"
            className="w-full h-[500px] object-cover object-center shadow-xl rounded-sm"
            referrerPolicy="no-referrer"
          />
          <div className="w-16 h-[2px] bg-[#b2946c]/40 my-6"></div>
          <div className="w-full bg-[#1c1c1c] text-[#faf9f6]/95 p-6 border-l-4 border-[#b2946c] shadow-md rounded-sm">
            <span className="font-mono text-[9px] tracking-widest text-[#b2946c] uppercase block mb-1 font-bold">
              Creative Principle
            </span>
            <p className="text-stone-300 text-xs italic leading-relaxed">
              "We reject spatial noise. In the absence of excessive decoration, materials express their deepest truth."
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars Section */}
      <section className="bg-white py-20 px-6 border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase block mb-2 font-bold">
              Architectural Manifestos
            </span>
            <h2 className="text-3xl font-sans font-bold text-[#1c1c1c]">
              Our Structural Pillars
            </h2>
            <div className="w-12 h-0.5 bg-[#b2946c] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#faf9f6]/40 border border-stone-100 p-8 hover:border-[#b2946c]/20 hover:shadow-md transition-all">
                <div className="bg-[#faf9f6] p-3 rounded-xs inline-block mb-6 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-sans font-semibold text-stone-900 text-base mb-3">
                  {pillar.title}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section for team briefing */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1c1c1c] mb-4">
          Ready to experience space planning precision?
        </h2>
        <p className="text-stone-400 text-xs mb-8 max-w-xl mx-auto">
          Schedule an introduction meeting with our design directors. We review project scales, zoning criteria, and material cravings.
        </p>
        <button
          onClick={() => setCurrentPage("contact")}
          className="px-8 py-4 bg-[#1c1c1c] text-white hover:bg-stone-800 text-xs font-sans font-bold tracking-widest uppercase transition-colors inline-flex items-center space-x-2"
        >
          <span>Request Spatial Interview</span>
          <ArrowRight className="w-4 h-4 text-[#b2946c]" />
        </button>
      </section>

    </div>
  );
}
