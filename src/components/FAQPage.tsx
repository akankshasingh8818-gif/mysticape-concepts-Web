import React, { useState } from "react";
import { FAQS_DATA, FAQItem } from "../data";
import { Page } from "../types";
import { Search, ChevronDown, ChevronUp, MessageSquare, ArrowRight, HelpCircle, Phone, Clock, Mail } from "lucide-react";

interface FAQPageProps {
  setCurrentPage: (page: Page) => void;
}

export default function FAQPage({ setCurrentPage }: FAQPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // Inquiry Form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryQuestion, setInquiryQuestion] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ["All", "Design Process", "Budget & Sourcing", "Technical Specifications", "Turnkey Management"];

  const filteredFAQs = FAQS_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleToggleFAQ = (id: string) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryEmail && inquiryQuestion) {
      setFormSubmitted(true);
      setTimeout(() => {
        setInquiryName("");
        setInquiryEmail("");
        setInquiryQuestion("");
      }, 2000);
    }
  };

  return (
    <div id="faq_support_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* FAQ Banner Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          Client Support Atelier
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-stone-950 leading-tight max-w-2xl mb-4">
          Uncompromised Clarity
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl">
          Browse comprehensive guidelines detailing our selection of custom travertine blocks, board-formed concrete standards, and project stage timelines.
        </p>
      </section>

      {/* Grid containing Search/List and Sidebar Inquiry widget */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Area - Filter & Search & list (Col span 8) */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            
            {/* Live Search & Filter buttons */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Categories */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setExpandedFAQ(null);
                    }}
                    className={`px-3 py-1.5 text-[9px] font-sans font-bold tracking-widest uppercase border transition-all duration-300 ${
                      activeCategory === cat
                        ? "border-[#b2946c] bg-[#b2946c] text-stone-900"
                        : "border-stone-200 text-stone-600 bg-white hover:border-stone-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Dynamic Live Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-stone-200 pl-9 pr-4 py-2 text-xs font-sans focus:outline-none focus:border-[#b2946c] text-[#1c1c1c]"
                />
              </div>

            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-20 bg-white border border-stone-200/40 rounded-none p-6">
                  <HelpCircle className="w-8 h-8 text-stone-300 mx-auto mb-3" />
                  <p className="text-stone-400 text-xs">No frequently asked questions match your current query.</p>
                  <p className="text-stone-500 text-[11px] mt-1">Please type a different term or submit an inquiry using the form.</p>
                </div>
              ) : (
                filteredFAQs.map((faq) => {
                  const isOpen = expandedFAQ === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-white border border-stone-200/40 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => handleToggleFAQ(faq.id)}
                        className="w-full text-left p-5 flex justify-between items-center hover:bg-stone-50 transition-colors focus:outline-none"
                      >
                        <div className="pr-4">
                          <span className="text-stone-400 font-mono text-[8px] uppercase tracking-widest block mb-1">
                            {faq.category}
                          </span>
                          <span className="font-sans font-bold text-sm tracking-tight text-stone-900">
                            {faq.question}
                          </span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#b2946c] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#b2946c] flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-stone-100/50 text-stone-600 text-xs md:text-sm leading-relaxed font-sans bg-stone-50/50 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* Right Area - Inquiry sidebar questionnaire (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Quick Contacts Widget */}
            <div className="bg-white border border-stone-200/40 p-6 flex flex-col space-y-4">
              <h3 className="text-stone-900 font-sans font-extrabold text-xs uppercase tracking-widest mb-1">
                Immediate Response Lines
              </h3>
              
              <div className="flex items-center space-x-3 text-xs text-stone-600">
                <Phone className="w-4 h-4 text-[#b2946c]" />
                <div>
                  <span className="block text-stone-400 text-[9px] uppercase font-mono">Bespoke Line</span>
                  <span className="flex flex-col space-y-0.5">
                    <a href="tel:+919560014752" className="hover:text-[#b2946c] transition-colors">+91 95600-14752</a>
                    <a href="tel:+917678358507" className="hover:text-[#b2946c] transition-colors">+91 767-835-8507</a>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-stone-600">
                <Mail className="w-4 h-4 text-[#b2946c]" />
                <div>
                  <span className="block text-stone-400 text-[9px] uppercase font-mono">Email Inquiries</span>
                  <span>
                    <a href="mailto:infomysticapeconcepts@gmail.com" className="hover:text-[#b2946c] transition-colors">infomysticapeconcepts@gmail.com</a>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-[#b2946c]" />
                <div>
                  <span className="block text-stone-400 text-[9px] uppercase font-mono">Atelier Hours</span>
                  <span>Mo - Fr: 9:00 AM - 6:00 PM (GMT+5:30)</span>
                </div>
              </div>
            </div>

            {/* Structured Inquiry Submission Form */}
            <div className="bg-white border border-stone-200/40 p-6">
              <h3 className="text-stone-900 font-sans font-extrabold text-xs uppercase tracking-widest mb-2 flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-[#b2946c]" />
                <span>Submit Custom Query</span>
              </h3>
              <p className="text-stone-400 text-[11px] leading-relaxed mb-4">
                Can't find exact specifics on travertine grades or structural slabs? Message our design desk directly.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 text-emerald-800 p-4 border border-emerald-200 text-center animate-fade-in">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider block">Inquiry Cast Successfully</span>
                  <span className="text-[10px] block mt-1">An architectural planner will reply to your inbox within 12 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="flex flex-col space-y-3.5">
                  <div>
                    <label className="text-stone-400 font-mono text-[9px] uppercase tracking-wide mb-1 block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 py-2 px-3 text-xs font-sans text-[#1c1c1c] focus:outline-none focus:border-[#b2946c]"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 font-mono text-[9px] uppercase tracking-wide mb-1 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 py-2 px-3 text-xs font-sans text-[#1c1c1c] focus:outline-none focus:border-[#b2946c]"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 font-mono text-[9px] uppercase tracking-wide mb-1 block">Your Specific Inquiry</label>
                    <textarea
                      required
                      rows={4}
                      value={inquiryQuestion}
                      onChange={(e) => setInquiryQuestion(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 py-2 px-3 text-xs font-sans text-[#1c1c1c] focus:outline-none focus:border-[#b2946c] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-[#1c1c1c] hover:bg-[#b2946c] text-[#faf9f6] hover:text-[#1c1c1c] text-[10px] font-sans font-bold tracking-[0.15em] uppercase transition-all duration-300"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
