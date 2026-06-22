import { ServiceDetail, Page } from "../types";
import { ArrowLeft, Check, Shield, RefreshCw, Calendar, ArrowRight, Clock, MapPin } from "lucide-react";

interface ServiceDetailViewProps {
  service: ServiceDetail;
  setCurrentPage: (page: Page) => void;
  onBack: () => void;
}

export default function ServiceDetailView({ service, setCurrentPage, onBack }: ServiceDetailViewProps) {
  
  // Custom mapping of premium benefits by service category
  const getBenefits = () => {
    switch (service.id) {
      case "interior-design":
        return [
          { title: "Bespoke Furnishing Networks", desc: "Unmatched direct access to legacy Italian weavers and custom marble fabricators globally." },
          { title: "Sound Damping Acoustics", desc: "Integrated organic micro-pads and plaster layers that absorb up to 35% more ambient resonance." },
          { title: "Daylight Microtemperature Balancing", desc: "Spatially matching textile density with window sunlight orientations." },
        ];
      case "architecture-design":
        return [
          { title: "Monolithic Envelopes", desc: "Honest concrete formwork framing daylight in perfect geographic orientation." },
          { title: "Thermal Performance", desc: "Engineered heat-deflecting triple-glazing facades coupled with natural airflow tunnels." },
          { title: "Structural Longevity", desc: "Reinforced structures calculated for dual-stability margin tolerances." },
        ];
      default:
        return [
          { title: "Bespoke Detail Fidelity", desc: "Exact alignment matching your specific cultural taste parameters." },
          { title: "Turnkey Artisan Sourcing", desc: "We hire and coordinate only certified local stonemasons and structural carpenters." },
          { title: "Material Longevity Guarantee", desc: "Rigorous stress tests conducted on all natural stone blocks and structural veneers." },
        ];
    }
  };

  // 4-Step Process for premium turnkey delivery
  const processSteps = [
    { num: "01", label: "Sensory Briefing", desc: "We deploy a personal curated consultation process to map your spatial preference, followed by a one-on-one session at our Gurugram salon." },
    { num: "02", label: "Volumetric Modeling & Sunlight Tracing", desc: "We draft absolute core layouts, performing physics studies mapping shadows on Solstice and Equinox coordinates." },
    { num: "03", label: "Artisan Material Audits", desc: "Our team travels to Carrara or Denizli quarries to physically inspect and greenlight marble blocks on site." },
    { num: "04", label: "Turnkey Implementation & Styling", desc: "End-to-end artisan site supervision, concrete testings, custom joinery fits, and final white-glove staging." }
  ];

  // Specific FAQs matching this service page
  const serviceFAQs = [
    { q: `How does Mysticape validate the materials used in ${service.title}?`, a: "Every marble slate, custom veneer, and concrete aggregates mixture undergoes a rigorous multi-stage inspection on site to guarantee correct book-matching and longevity." },
    { q: "What is the typical design fee structure?", a: "We calculate client fees based on overall physical footprint square footage or as a 12-15% margin on execution scope, providing absolute transparent billing." }
  ];

  const benefits = getBenefits();

  return (
    <div id={`service_detail_${service.id}`} className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Header and Back Button */}
      <section className="relative py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-stone-500 hover:text-[#b2946c] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Capabilities Overview</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Text Title (Col 7) */}
          <div className="lg:col-span-7">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block animate-pulse">
              Dedicated Service Page — SEO Certified
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-stone-900 mb-6">
              {service.title} Portfolio
            </h1>
            <p className="text-[#1c1c1c] text-sm md:text-base leading-relaxed max-w-2xl mb-6">
              {service.description}
            </p>
            <div className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
              {service.extendedDescription}
            </div>
          </div>

          {/* Core Info Bullet card (Col 5) */}
          <div className="lg:col-span-5 bg-white border border-stone-200/40 p-6 flex flex-col space-y-4">
            <h3 className="font-sans font-black text-xs uppercase text-stone-900 tracking-wider">
              Atelier Technical Standards
            </h3>
            <div className="space-y-3.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-stone-600">
                  <Check className="w-4 h-4 text-[#b2946c] mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Hero Visual Image */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-96 md:h-[480px] w-full overflow-hidden border border-stone-200/45">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Section 2: Service Benefits */}
      <section className="py-16 bg-white border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-3 font-semibold">
              Distinctive Advantages
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-black tracking-tight text-stone-950">
              Why commission {service.title} with Mysticape?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, bIdx) => (
              <div key={bIdx} className="bg-[#faf9f6] border border-stone-200/40 p-6 flex flex-col space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#b2946c]/10 flex items-center justify-center text-[#b2946c]">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-bold text-sm tracking-tight text-stone-950 uppercase">
                  {benefit.title}
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Process */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-3 font-semibold">
            Chronological Workflow
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-black tracking-tight text-stone-950">
            Our Turnkey Realization Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-stone-200/40 p-6 relative flex flex-col justify-between h-56 transition-all duration-300 hover:border-[#b2946c]/40">
              <span className="text-[#b2946c] font-mono text-3xl font-black block text-right tracking-tighter">
                {step.num}
              </span>
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-stone-900 mb-2">
                  {step.label}
                </h4>
                <p className="text-stone-500 text-[11px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Specific Service FAQs */}
      <section className="py-16 bg-stone-50 border-t border-stone-200/30">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-center font-sans font-black text-xl text-stone-900 mb-8 uppercase tracking-wide">
            Frequently Asked Questions regarding {service.title}
          </h3>
          <div className="space-y-6">
            {serviceFAQs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-white border border-stone-200/40 p-6">
                <h5 className="font-sans font-bold text-sm text-stone-900 mb-2">
                  {faq.q}
                </h5>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Standard High-End Bureau CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-[#1c1c1c] text-white p-8 md:p-12 border border-stone-800 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="max-w-2xl mb-6 lg:mb-0">
            <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase mb-2 block font-extrabold flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Turnkey Commission Desk</span>
            </span>
            <h2 className="text-xl md:text-3xl font-sans font-bold tracking-tight mb-3">
              Ready to construct your sanctuary?
            </h2>
            <p className="text-stone-400 text-xs leading-relaxed">
              We accept a highly limited number of custom commissions annually. Secure personal drafting calendars with senior designers today.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 bg-[#b2946c] text-stone-950 px-6 py-4 text-xs tracking-widest uppercase font-black hover:text-[#1c1c1c] hover:bg-white transition-all duration-300"
          >
            <span>Book Design Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
