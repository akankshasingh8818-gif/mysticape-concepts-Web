import React, { useState } from "react";
import { CAREER_OPPORTUNITIES } from "../data";
import { Page, CareerOpportunity } from "../types";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, ShieldAlert, X } from "lucide-react";

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<CareerOpportunity | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    coverLetter: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleApplyClick = (role: CareerOpportunity) => {
    setSelectedRole(role);
    setTrackingId(null);
    setErrorMsg(null);
  };

  const handleCloseModal = () => {
    setSelectedRole(null);
    setFormData({ name: "", email: "", portfolio: "", coverLetter: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.coverLetter) {
      setErrorMsg("Please complete all required fields to submit application.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: selectedRole?.title,
          portfolio: formData.portfolio,
          coverLetter: formData.coverLetter
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setTrackingId(data.trackingId);
      } else {
        setErrorMsg(data.error || "A connection error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Unable to transmit application payload to the atelier server. Verify your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="careers_page_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Careers Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Join Mysticape / Careers
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-stone-900 leading-tight mb-4 uppercase">
          Build Silence With Us
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
          We gather forward-thinking designers, detail-obsessed space architects, and precision draftsmen. Explore our open commissions.
        </p>
      </section>

      {/* Main Roles List */}
      <section className="py-16 px-6 max-w-5xl mx-auto flex flex-col space-y-8">
        {CAREER_OPPORTUNITIES.map((role) => (
          <div
            key={role.id}
            id={`career_role_${role.id}`}
            className="bg-white border border-stone-200/40 p-8 rounded-xs hover:border-[#b2946c]/30 hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <h3 className="font-sans font-bold text-stone-900 text-lg tracking-tight">
                  {role.title}
                </h3>
                <div className="flex space-x-2 text-[9px] font-mono text-[#b2946c] uppercase tracking-wider">
                  <span className="bg-[#b2946c]/5 border border-[#b2946c]/10 px-2.5 py-1">
                    {role.department}
                  </span>
                  <span className="bg-[#b2946c]/5 border border-[#b2946c]/10 px-2.5 py-1">
                    {role.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-stone-400 text-xs">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>{role.location}</span>
                <span className="text-stone-300">|</span>
                <Clock className="w-4 h-4 text-stone-400" />
                <span>Posted June 2026</span>
              </div>

              <p className="text-stone-500 text-xs leading-relaxed font-sans max-w-2xl">
                {role.description}
              </p>

              {/* Requirements block */}
              <div className="flex flex-col space-y-1.5 pt-4">
                <span className="text-stone-400 font-mono text-[8px] uppercase tracking-widest block font-bold">
                  Credentials Highlight
                </span>
                {role.requirements.slice(0, 2).map((req, rIdx) => (
                  <div key={rIdx} className="text-stone-600 text-[11px] flex items-center space-x-2">
                    <span className="h-1 w-1 bg-[#b2946c] rounded-full"></span>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="lg:col-span-4 flex items-center justify-end self-center h-full">
              <button
                id={`apply_btn_${role.id}`}
                onClick={() => handleApplyClick(role)}
                className="w-full lg:w-auto px-6 py-4 bg-[#1c1c1c] text-[#faf9f6] text-[10px] font-sans font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Initialize application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#b2946c]" />
              </button>
            </div>

          </div>
        ))}
      </section>

      {/* APPLICATION PORTAL DIALOG POPUP */}
      {selectedRole && (
        <div
          id="career_application_modal"
          className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div
            className="w-full max-w-lg bg-[#faf9f6] p-8 md:p-10 shadow-2xl relative rounded-xs border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal close */}
            <button
              id="close_apply_modal_btn"
              onClick={handleCloseModal}
              className="absolute top-6 right-6 p-2 border border-stone-200 hover:bg-stone-250/20 transition-colors focus:outline-none"
              aria-label="Dismiss applicant portal"
            >
              <X className="w-4 h-4 text-stone-600" />
            </button>

            {!trackingId ? (
              // Stage 1 - Fill applicant information
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="border-b border-stone-200/50 pb-4">
                  <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase block">
                    Atelier Candidate Portal
                  </span>
                  <h3 className="font-sans font-extrabold text-[#1c1c1c] text-lg uppercase mt-1">
                    Apply: {selectedRole.title}
                  </h3>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-650 border border-red-100 flex items-start space-x-2 text-[11px]">
                    <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="flex flex-col space-y-1">
                  <label htmlFor="applicant_name" className="text-stone-400 font-mono text-[8px] uppercase tracking-widest font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="applicant_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-200 outline-none text-xs text-stone-800 focus:border-[#b2946c] focus:ring-1 focus:ring-[#b2946c]/10"
                    placeholder="Enter candidate name"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="applicant_email" className="text-stone-400 font-mono text-[8px] uppercase tracking-widest font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="applicant_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-200 outline-none text-xs text-stone-800 focus:border-[#b2946c] focus:ring-1 focus:ring-[#b2946c]/10"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="applicant_portfolio" className="text-stone-400 font-mono text-[8px] uppercase tracking-widest font-bold">
                    Portfolio / Website Link
                  </label>
                  <input
                    type="url"
                    id="applicant_portfolio"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-200 outline-none text-xs text-stone-800 focus:border-[#b2946c] focus:ring-1 focus:ring-[#b2946c]/10"
                    placeholder="https://behance.net/portfolio"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="applicant_cover" className="text-stone-400 font-mono text-[8px] uppercase tracking-widest font-bold">
                    Cover Letter & Background *
                  </label>
                  <textarea
                    id="applicant_cover"
                    required
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-200 outline-none text-xs text-stone-800 focus:border-[#b2946c] focus:ring-1 focus:ring-[#b2946c]/10 resize-none"
                    placeholder="Explain your approach to raw concrete or material symmetry..."
                  />
                </div>

                <button
                  type="submit"
                  id="submit_application_btn"
                  disabled={submitting}
                  className="w-full py-4 bg-[#1c1c1c] text-white text-[10px] uppercase font-sans font-bold tracking-[0.2em] hover:bg-stone-800 disabled:bg-stone-400 transition-colors"
                >
                  {submitting ? "Transmitting file..." : "Transmit application form"}
                </button>
              </form>
            ) : (
              // Stage 2 - Application Transmitted successfully
              <div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
                <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-[#1c1c1c] text-lg uppercase tracking-tight">
                    Application Logged
                  </h3>
                  <p className="text-stone-500 text-xs mt-2 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you, {formData.name}. Your details have been transmitted to our design recruitment officer. Your custom tracking index is:
                  </p>
                </div>
                <div className="bg-white border border-stone-200 px-5 py-3 text-[#b2946c] font-mono text-xs font-bold uppercase tracking-widest rounded-xs">
                  {trackingId}
                </div>
                <p className="text-stone-400 text-[10px] max-w-xs leading-relaxed font-sans">
                  Keep this index reference for further design validation. We evaluate candidate books every Tuesday morning.
                </p>
                <button
                  id="application_close_success_btn"
                  onClick={handleCloseModal}
                  className="w-full py-3.5 border border-stone-200 hover:bg-stone-100 text-[#1c1c1c] text-[10px] font-sans font-bold tracking-widest uppercase"
                >
                  Conceal applicant view
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
