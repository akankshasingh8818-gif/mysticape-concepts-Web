import { Project, Page } from "../types";
import { ArrowLeft, Check, Compass, Sparkles, Building, Calendar, Minimize, MapPin, MessageSquare } from "lucide-react";
import { ProjectImage } from "./ProjectImage";

interface ProjectDetailViewProps {
  project: Project;
  setCurrentPage: (page: Page) => void;
  onBack: () => void;
}

export default function ProjectDetailView({ project, setCurrentPage, onBack }: ProjectDetailViewProps) {
  
  return (
    <div id={`project_detail_${project.id}`} className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Return Navigation */}
      <section className="relative py-12 px-6 max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-stone-500 hover:text-[#b2946c] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio Gallery</span>
        </button>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Context Narrative (Col 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold block">
              Bespoke Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-stone-900 leading-tight">
              {project.title}
            </h1>
            <p className="text-stone-700 text-xs md:text-sm leading-relaxed font-sans italic border-l-2 border-[#b2946c] pl-4">
              {project.description}
            </p>

            {/* Standard structural details list */}
            <div className="pt-4 border-t border-stone-200">
              <h4 className="font-sans font-extrabold text-[#1c1c1c] text-xs uppercase tracking-widest mb-3">
                Architectural Detailing Specifications
              </h4>
              <ul className="space-y-2 text-stone-600 text-[11px] font-mono">
                {project.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b2946c] mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Stats Sidebar (Col 5) */}
          <div className="lg:col-span-5 bg-white border border-stone-200/40 p-6 flex flex-col space-y-5">
            <h3 className="text-stone-950 font-sans font-black text-xs uppercase tracking-wider border-b border-stone-100 pb-2">
              Commission Specifications
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-stone-400 font-mono text-[9px] uppercase">Location</span>
                <span className="block text-[#1c1c1c] font-sans text-xs font-semibold mt-0.5">{project.location}</span>
              </div>
              <div>
                <span className="text-stone-400 font-mono text-[9px] uppercase">Year Completed</span>
                <span className="block text-[#1c1c1c] font-sans text-xs font-semibold mt-0.5">{project.year}</span>
              </div>
              <div>
                <span className="text-stone-400 font-mono text-[9px] uppercase">Physical Footprint</span>
                <span className="block text-[#1c1c1c] font-sans text-xs font-semibold mt-0.5">{project.area}</span>
              </div>
              <div>
                <span className="text-stone-400 font-mono text-[9px] uppercase">Category Type</span>
                <span className="block text-[#1c1c1c] font-sans text-xs font-semibold mt-0.5 capitalize">{project.category}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Hero Visual Banner Frame */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-96 md:h-[500px] w-full overflow-hidden border border-stone-200/45 shadow-sm">
          <ProjectImage
            id={project.id}
            alt={project.title}
            src={project.image}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Case Study Deep Dive Sections */}
      <section className="py-16 bg-white border-y border-stone-200/35">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Challenge */}
          {project.challenge && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-stone-100">
              <div className="md:col-span-4">
                <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-1 font-bold">
                  Phase I Challenge
                </span>
                <h3 className="font-sans font-black text-xs uppercase text-stone-950 tracking-wider">
                  The Friction Index
                </h3>
              </div>
              <div className="md:col-span-8 text-stone-600 text-xs md:text-sm leading-relaxed font-sans">
                {project.challenge}
              </div>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-stone-100">
              <div className="md:col-span-4">
                <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-1 font-bold">
                  Phase II Solution
                </span>
                <h3 className="font-sans font-black text-xs uppercase text-stone-950 tracking-wider">
                  Engineered Blueprint
                </h3>
              </div>
              <div className="md:col-span-8 text-stone-600 text-xs md:text-sm leading-relaxed font-sans">
                {project.solution}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8">
              <div className="md:col-span-4">
                <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block mb-1 font-bold">
                  Phase III Results
                </span>
                <h3 className="font-sans font-black text-xs uppercase text-stone-950 tracking-wider">
                  Audited Outcomes
                </h3>
              </div>
              <div className="md:col-span-8 text-stone-600 text-xs md:text-sm leading-relaxed font-sans font-semibold text-stone-855">
                {project.results}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Client Feedback section */}
      {project.feedback && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
            <MessageSquare className="w-8 h-8 text-[#b2946c] opacity-40 mb-4" />
            <h4 className="text-stone-400 font-mono text-[8px] tracking-widest uppercase block mb-4 font-bold">
              Client Commendation Feedback
            </h4>
            <blockquote className="text-stone-800 font-sans italic text-base md:text-lg leading-relaxed max-w-2xl mb-6">
              "{project.feedback.quote}"
            </blockquote>
            <cite className="font-sans font-bold text-xs uppercase tracking-wider text-stone-950 not-italic">
              — {project.feedback.client}
            </cite>
          </div>
        </section>
      )}

      {/* Visual CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-[#1c1c1c] text-white p-8 md:p-12 border border-stone-800 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-xl mb-4 md:mb-0">
            <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-white mb-2">
              Interested in planning a similar luxury project?
            </h3>
            <p className="text-stone-400 text-xs leading-relaxed">
              Contact our Gurugram drafting studio to schedule a direct, private workshop with senior spatial planners.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[#b2946c] text-stone-900 px-6 py-4 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-white"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
