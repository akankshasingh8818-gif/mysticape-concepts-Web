import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, ShieldAlert, Clock, Info, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    timeline: "Medium (3-6 Months)",
    servicesSelected: [] as string[]
  });
  const [submitting, setSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const servicesOptionList = [
    "Interior Architect Design",
    "Monolithic Structure Build",
    "Space Planning Audit",
    "3D Visual Raytracing",
    "Turnkey Commissioning"
  ];

  const handleCheckboxChange = (srv: string) => {
    if (formData.servicesSelected.includes(srv)) {
      setFormData({
        ...formData,
        servicesSelected: formData.servicesSelected.filter((s) => s !== srv)
      });
    } else {
      setFormData({
        ...formData,
        servicesSelected: [...formData.servicesSelected, srv]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setErrorMsg("Please provide your name, email, and spatial details.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.servicesSelected,
          projectTimeline: formData.timeline,
          details: formData.details
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setTrackingId(data.trackingId);
      } else {
        setErrorMsg(data.error || "A connection dispute arose. Please verify details.");
      }
    } catch (err) {
      setErrorMsg("Unable to transmit project brief onto Mysticape atelier servers. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact_page_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20 font-sans">
      
      {/* Contact Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block animate-pulse">
          Book Atelier meeting / Contacts
        </span>
        <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-900 mb-4 uppercase">
          Design Interviews
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-xl font-sans">
          Whether constructing a monolithic seaside pavilion or curating a silent penthouse interior, our directors personally audit every commission inquiry.
        </p>
      </section>

      {/* Grid of details & forms */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Metas Info Side */}
        <div className="lg:col-span-5 flex flex-col space-y-10">
          <div>
            <h3 className="font-sans font-extrabold text-[#1c1c1c] text-sm uppercase tracking-widest mb-4 border-b border-stone-200 pb-2">
              The Gurugram Atelier
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed max-w-sm mb-6 font-sans">
              Our central drafting salon operates strictly on pre-audited schedules, crafting luxury architectural and interior frameworks.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-3.5 items-start">
                <MapPin className="w-5 h-5 text-[#b2946c] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-sans font-semibold text-stone-950 block">Office Address</span>
                  <span className="text-stone-500 block mt-0.5">809, The Lighthouse, Sector 82, Gurugram, Haryana, 122004</span>
                </div>
              </div>

              <div className="flex space-x-3.5 items-start">
                <Phone className="w-5 h-5 text-[#b2946c] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-sans font-semibold text-stone-950 block">Telephone Inquiries</span>
                  <span className="text-stone-500 block mt-0.5">
                    <a href="tel:+919560014752" className="hover:text-[#b2946c] transition-colors">+91 95600-14752</a>,{" "}
                    <a href="tel:+917678358507" className="hover:text-[#b2946c] transition-colors">+91 767-835-8507</a>
                  </span>
                </div>
              </div>

              <div className="flex space-x-3.5 items-start">
                <Mail className="w-5 h-5 text-[#b2946c] mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-sans font-semibold text-stone-950 block">Email</span>
                  <span className="text-stone-500 block mt-0.5">
                    <a href="mailto:info@mysticapeconcepts.com" className="hover:text-[#b2946c] transition-colors">info@mysticapeconcepts.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-stone-200/55 rounded-xs">
            <h4 className="font-sans font-extrabold text-stone-950 text-xs uppercase tracking-widest mb-3 inline-flex items-center space-x-1.5">
              <Info className="w-4 h-4 text-[#b2946c]" />
              <span>Client Selection Criteria</span>
            </h4>
            <p className="text-stone-500 text-[11px] leading-relaxed font-sans">
              We accept exactly eight custom residential plans annually to guarantee materials book-matching, daily architect site presence, and on-time turnkeys. Budget considerations begin at standard high-end tiers.
            </p>
          </div>

          {/* Follow Us Block */}
          <div className="p-6 bg-white border border-stone-200/55 rounded-xs">
            <h4 className="font-sans font-extrabold text-stone-950 text-xs uppercase tracking-widest mb-4 border-b border-stone-100 pb-2">
              Follow Us
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.instagram.com/mysticape.concepts"
                target="_blank"
                rel="noopener noreferrer"
                title="View Mysticape Concepts Instagram Feed"
                className="flex items-center space-x-3.5 text-stone-600 hover:text-[#b2946c] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-sm bg-[#faf9f6] border border-stone-200/80 flex items-center justify-center text-[#b2946c] group-hover:bg-[#b2946c] group-hover:text-white transition-all duration-300">
                  <Instagram className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 font-mono text-[8px] block uppercase tracking-wider">Instagram</span>
                  <span className="font-bold text-[#1c1c1c] block mt-0.5">@mysticape.concepts</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/mysticape-concepts-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Mysticape Concepts LinkedIn Company Page"
                className="flex items-center space-x-3.5 text-stone-600 hover:text-[#b2946c] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-sm bg-[#faf9f6] border border-stone-200/80 flex items-center justify-center text-[#b2946c] group-hover:bg-[#b2946c] group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 font-mono text-[8px] block uppercase tracking-wider">LinkedIn</span>
                  <span className="font-bold text-[#1c1c1c] block mt-0.5">Mysticape Concepts Pvt. Ltd.</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Project Brief Form Side */}
        <div className="lg:col-span-7 bg-white p-8 border border-stone-200/40 shadow-xs relative rounded-xs">
          {!trackingId ? (
            // Stage 1 - Submit Form briefing
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              
              <div className="border-b border-stone-100 pb-3">
                <h3 className="font-sans font-bold text-stone-900 text-base uppercase tracking-tight">
                  Initiate Project Brief
                </h3>
                <p className="text-stone-400 text-[10px] uppercase font-mono tracking-wider mt-1">
                  Draft validation questionnaire rules apply
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-650 border border-red-100 flex items-start space-x-2 text-[11px]">
                  <ShieldAlert className="w-4.5 h-4.5 text-red-650 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="contact_name" className="text-stone-400 font-mono text-[8.5px] uppercase tracking-widest font-bold">
                    Inquirer Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#faf9f6]/40 border border-stone-200 outline-none text-xs text-[#1c1c1c] focus:border-[#b2946c]"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="contact_email" className="text-stone-400 font-mono text-[8.5px] uppercase tracking-widest font-bold">
                    Email Index *
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#faf9f6]/40 border border-stone-200 outline-none text-xs text-[#1c1c1c] focus:border-[#b2946c]"
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="contact_phone" className="text-stone-400 font-mono text-[8.5px] uppercase tracking-widest font-bold">
                    Phone Link
                  </label>
                  <input
                    type="tel"
                    id="contact_phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#faf9f6]/40 border border-stone-200 outline-none text-xs text-[#1c1c1c] focus:border-[#b2946c]"
                    placeholder="+91-00000-00000"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="project_timeline" className="text-stone-400 font-mono text-[8.5px] uppercase tracking-widest font-bold">
                    Desired Delivery Timeline
                  </label>
                  <select
                    id="project_timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-[#faf9f6]/50 border border-stone-200 outline-none text-xs text-[#1c1c1c] focus:border-[#b2946c]"
                  >
                    <option value="Urgent (Under 3 Months)">Urgent (Under 3 Months)</option>
                    <option value="Medium (3-6 Months)">Medium (3-6 Months)</option>
                    <option value="Flexible (6-12 Months)">Flexible (6-12 Months)</option>
                  </select>
                </div>
              </div>

              {/* Service checklist options matching SEO constraints */}
              <div className="flex flex-col space-y-2">
                <span className="text-stone-400 font-mono text-[8.5px] uppercase tracking-widest font-bold mb-1 block">
                  Crave Space Services (Check multi)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesOptionList.map((srv, sIdx) => {
                    const exists = formData.servicesSelected.includes(srv);
                    return (
                      <button
                        key={sIdx}
                        type="button"
                        id={`service_checkbox_${sIdx}`}
                        onClick={() => handleCheckboxChange(srv)}
                        className={`flex items-center space-x-2.5 p-3 text-left transition-all ${
                          exists 
                            ? "border-[#b2946c] bg-[#b2946c]/5 font-semibold text-stone-950" 
                            : "border-stone-200 hover:border-stone-300 bg-white"
                        } border text-[11px]`}
                      >
                        <div className={`h-3.5 w-3.5 border flex items-center justify-center ${exists ? "border-[#b2946c] bg-[#b2946c]" : "border-stone-350"}`}>
                          {exists && <span className="text-white text-[8px] font-bold">✓</span>}
                        </div>
                        <span>{srv}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spatial intent narrative */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="project_details" className="text-stone-400 font-mono text-[8.5px] uppercase tracking-widest font-bold">
                  Description of Site, Scale, and Spatial Intent *
                </label>
                <textarea
                  id="project_details"
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 bg-[#faf9f6]/40 border border-stone-200 outline-none text-xs text-[#1c1c1c] focus:border-[#b2946c] focus:ring-1 focus:ring-[#b2946c]/10 resize-none"
                  placeholder="Tell us about your property footprint, ceiling height limits, materials cravings, or design personas..."
                />
              </div>

              <button
                type="submit"
                id="contact_form_submit_btn"
                disabled={submitting}
                className="w-full py-4 bg-[#1c1c1c] text-white text-[10px] uppercase font-sans font-bold tracking-[0.2em] hover:bg-stone-850 disabled:bg-stone-400 transition-colors"
              >
                {submitting ? "Transmitting brief data..." : "Transmit Project brief"}
              </button>

            </form>
          ) : (
            // Stage 2 - Submission Confirmed Successfully
            <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="max-w-md">
                <h3 className="font-sans font-extrabold text-[#1c1c1c] text-lg uppercase tracking-tight">
                  Brief Logged successfully
                </h3>
                <p className="text-stone-500 text-xs mt-2 font-sans leading-relaxed">
                  Thank you, {formData.name}. Your architectural brief has been successfully committed to our database storage logs. Our Principal Director's office will schedule your spatial interview within 48 hours.
                </p>
              </div>
              <div className="bg-[#faf9f6] border border-stone-200 px-5 py-3.5 text-[#b2946c] font-mono text-xs font-bold uppercase tracking-widest rounded-xs">
                Tracking Index: {trackingId}
              </div>
              <p className="text-stone-400 text-[10px] max-w-xs leading-relaxed font-sans">
                Quote this index reference for upcoming municipal or developer permits validations.
              </p>
              <button
                id="contact_success_clear_btn"
                onClick={() => {
                  setTrackingId(null);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    details: "",
                    timeline: "Medium (3-6 Months)",
                    servicesSelected: []
                  });
                }}
                className="w-full py-3.5 border border-stone-200 hover:bg-stone-50 text-[#1c1c1c] text-[10px] font-sans font-bold tracking-widest uppercase transition-colors"
              >
                Initiate another brief
              </button>
            </div>
          )}
        </div>

      </section>

      {/* Dedicated Connect With Us Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-stone-200/50">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.3em] uppercase block mb-2.5 font-bold">
            Social Echoes / Digital Atelier
          </span>
          <h2 className="text-3xl font-sans font-extrabold text-[#1c1c1c] tracking-tight uppercase">
            Connect With Us
          </h2>
          <div className="w-12 h-0.5 bg-[#b2946c] mx-auto mt-4"></div>
          <p className="text-stone-500 text-xs mt-4 leading-relaxed font-sans max-w-lg mx-auto">
            Follow our daily architectural walkthroughs, site inspection logs, material mood boards, and ongoing boutique commissions in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/mysticape.concepts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Mysticape Concepts' Instagram gallery in a new tab"
            className="group relative bg-white p-8 border border-stone-200/60 hover:border-[#b2946c] shadow-[0_1px_4px_rgba(28,28,28,0.015)] transition-all duration-500 hover:shadow-lg overflow-hidden flex flex-col justify-between h-64 cursor-pointer"
          >
            {/* Background absolute brand element */}
            <div className="absolute top-0 right-0 p-8 text-stone-100 group-hover:text-[#b2946c]/10 transition-colors duration-500 pointer-events-none">
              <Instagram className="w-32 h-32 -mr-10 -mt-10 stroke-[0.5]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xs bg-[#faf9f6]/80 border border-stone-100 flex items-center justify-center text-[#b2946c] mb-6 group-hover:scale-105 group-hover:bg-[#b2946c] group-hover:text-white transition-all duration-500 shadow-xs">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-[#b2946c] font-mono text-[9px] uppercase tracking-widest font-bold block">
                Instagram Feed
              </span>
              <h3 className="text-xl font-sans font-bold text-[#1c1c1c] mt-2 tracking-tight">
                @mysticape.concepts
              </h3>
              <p className="text-stone-500 text-xs mt-2.5 max-w-xs font-sans leading-relaxed">
                Join our visual diary of luxury interior handovers, site videos, and tactile materials matching.
              </p>
            </div>

            <div className="relative z-10 flex items-center text-xs text-[#b2946c] font-bold tracking-widest uppercase mt-4">
              <span>Visit Gallery</span>
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/company/mysticape-concepts-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Mysticape Concepts' corporate team on LinkedIn in a new tab"
            className="group relative bg-white p-8 border border-stone-200/60 hover:border-[#b2946c] shadow-[0_1px_4px_rgba(28,28,28,0.015)] transition-all duration-500 hover:shadow-lg overflow-hidden flex flex-col justify-between h-64 cursor-pointer"
          >
            {/* Background absolute brand element */}
            <div className="absolute top-0 right-0 p-8 text-stone-100 group-hover:text-[#b2946c]/10 transition-colors duration-500 pointer-events-none">
              <Linkedin className="w-32 h-32 -mr-10 -mt-10 stroke-[0.5]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xs bg-[#faf9f6]/80 border border-stone-100 flex items-center justify-center text-[#b2946c] mb-6 group-hover:scale-105 group-hover:bg-[#b2946c] group-hover:text-white transition-all duration-500 shadow-xs">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-[#b2946c] font-mono text-[9px] uppercase tracking-widest font-bold block">
                LinkedIn Network
              </span>
              <h3 className="text-xl font-sans font-bold text-[#1c1c1c] mt-2 tracking-tight">
                Mysticape Concepts Pvt. Ltd.
              </h3>
              <p className="text-stone-500 text-xs mt-2.5 max-w-xs font-sans leading-relaxed">
                Stay updated with our corporate projects, design publications, careers, and studio announcements.
              </p>
            </div>

            <div className="relative z-10 flex items-center text-xs text-[#b2946c] font-bold tracking-widest uppercase mt-4">
              <span>Connect Professional</span>
              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
}
