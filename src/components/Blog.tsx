import { useState } from "react";
import { BLOG_ARTICLES } from "../data";
import { BlogArticle, Page } from "../types";
import { ArrowLeft, Clock, User, Calendar, Tag, ChevronRight, Share2, Search } from "lucide-react";

interface BlogProps {
  setCurrentPage: (page: Page) => void;
  selectedBlogArticle: BlogArticle | null;
  setSelectedBlogArticle: (article: BlogArticle | null) => void;
}

export default function Blog({ setCurrentPage, selectedBlogArticle, setSelectedBlogArticle }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Architecture", "Interior Design", "Industry Focus"];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article: BlogArticle) => {
    setSelectedBlogArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = (articleTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: articleTitle,
        text: `Read this stunning editorial article by Mysticape Concepts: ${articleTitle}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert("Article link copied to clipboard for sharing.");
    }
  };

  // Render individual editorial article page
  if (selectedBlogArticle) {
    return (
      <div id="blog_article_detail_view" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
        
        {/* SEO Header metadata update simulation (and visual page indicators) */}
        <section className="relative py-12 px-6 max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedBlogArticle(null)}
            className="group flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-stone-500 hover:text-[#b2946c] mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Journal Index</span>
          </button>

          <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
            {selectedBlogArticle.category} — {selectedBlogArticle.readTime}
          </span>
          <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-950 mb-6">
            {selectedBlogArticle.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-500 font-mono border-y border-stone-200/50 py-4 mb-10">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-[#b2946c]" />
              <span className="text-stone-700 font-medium">By {selectedBlogArticle.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-stone-400" />
              <span>{selectedBlogArticle.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-stone-400" />
              <span>{selectedBlogArticle.readTime}</span>
            </div>
            <button 
              onClick={() => handleShare(selectedBlogArticle.title)}
              className="ml-auto flex items-center space-x-1.5 text-stone-400 hover:text-[#b2946c] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </section>

        {/* Hero visual envelope */}
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <div className="h-96 md:h-[480px] w-full overflow-hidden border border-stone-200/40 shadow-sm relative">
            <img 
              src={selectedBlogArticle.image} 
              alt={selectedBlogArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </section>

        {/* Article Body Content */}
        <section id="article_content_columns" className="max-w-3xl mx-auto px-6">
          <div className="prose prose-stone prose-sm md:prose-base !max-w-none text-stone-700 leading-relaxed font-sans space-y-6 text-xs md:text-sm">
            {selectedBlogArticle.content.map((paragraph, index) => (
              <p key={index} className="first-letter:text-2xl md:first-letter:text-3xl first-letter:font-sans first-letter:float-left first-letter:mr-2.5 first-letter:font-extrabold first-letter:text-[#b2946c]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-stone-200/55 flex flex-wrap gap-2">
            <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest flex items-center mr-2">
              <Tag className="w-3.5 h-3.5 mr-1" /> Tags:
            </span>
            {selectedBlogArticle.tags.map((tag, tIdx) => (
              <span key={tIdx} className="bg-stone-100 hover:bg-stone-200/50 text-stone-600 font-mono text-[9px] px-2.5 py-1 transition-colors">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Author Info Card */}
          <div className="mt-12 bg-white border border-stone-200/40 p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 bg-stone-100 flex items-center justify-center font-sans font-bold text-stone-500 border border-stone-200 tracking-wide uppercase">
              {selectedBlogArticle.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <span className="text-stone-400 font-mono text-[8px] tracking-widest uppercase block font-semibold">
                Contributing Author / Studio Atelier
              </span>
              <h4 className="text-stone-900 font-sans font-bold text-sm uppercase tracking-wide">
                {selectedBlogArticle.author}
              </h4>
              <p className="text-stone-500 text-[11px] leading-relaxed mt-1">
                A senior resident thinker and designer at Mysticape Concepts, committed to architectural concrete, material honesty, and L'art D'espace.
              </p>
            </div>
          </div>

          {/* Bottom CTA block */}
          <div className="mt-12 bg-[#1c1c1c] text-white p-8 border border-stone-800 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-md mb-4 md:mb-0">
              <h3 className="text-xl font-sans font-bold tracking-tight text-white mb-2">
                Begin Your Own Architectural Journey
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Connect directly with our design team in Gurugram to plan your bespoke workspace, luxury residence, or corporate headquarters.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage("contact");
                setSelectedBlogArticle(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-[#b2946c] text-stone-900 px-5 py-3 text-[10px] uppercase font-mono tracking-widest font-bold hover:text-white"
            >
              Consult the Studio
            </button>
          </div>
        </section>

      </div>
    );
  }

  return (
    <div id="blog_journal_container" className="bg-[#faf9f6] text-[#1c1c1c] pt-24 min-h-screen pb-20">
      
      {/* Editorial Journal Intro Header */}
      <section className="relative py-16 px-6 max-w-7xl mx-auto border-b border-stone-200/50">
        <span className="text-[#b2946c] font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">
          The Mysticape Journal
        </span>
        <h1 className="text-clamp-section font-sans font-black tracking-tight text-stone-955 max-w-3xl mb-4">
          Atmospheres / Thoughts / Details
        </h1>
        <p className="text-stone-500 text-xs md:text-sm leading-relaxed max-w-2xl">
          Philosophical musings, architectural details, and spatial case studies in concrete, lime plaster, travertine, and fine cedar veneers.
        </p>
      </section>

      {/* Filter and Search controls */}
      <section className="py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-stone-200/30">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border ${
                selectedCategory === cat
                  ? "border-[#b2946c] bg-[#b2946c] text-stone-900"
                  : "border-stone-200 text-stone-600 hover:border-stone-300 bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles, tags, materials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-stone-200 pl-10 pr-4 py-2.5 text-xs font-sans placeholder-stone-400 focus:outline-none focus:border-[#b2946c] text-[#1c1c1c]"
          />
        </div>
      </section>

      {/* Blog Newspaper Grid Layout */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white border border-stone-200/40 font-sans">
            <p className="text-stone-400 text-xs">No articles aligned with your current search parameters.</p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="mt-4 text-xs font-mono tracking-wider uppercase text-[#b2946c] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="flex flex-col bg-white border border-stone-200/30 hover:border-[#b2946c]/30 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                
                {/* Responsive crop boundary */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#1c1c1c] font-mono text-[8px] tracking-widest uppercase px-2.5 py-1">
                    {article.category}
                  </div>
                </div>

                {/* Body metadata */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center space-x-3 text-[10px] text-stone-400 font-mono mb-3">
                      <span>{article.publishedAt}</span>
                      <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-stone-900 group-hover:text-[#b2946c] transition-colors line-clamp-2 leading-snug mb-3">
                      {article.title}
                    </h3>

                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[9px] font-sans font-black tracking-widest uppercase text-stone-800">
                      Read Editorial
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#b2946c] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}
      </section>

      {/* Featured visual call to launch the consultation */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-stone-950 text-white flex flex-col md:flex-row items-center justify-between border border-stone-800 my-12">
        <div className="max-w-xl mb-6 md:mb-0">
          <span className="text-[#b2946c] font-mono text-[9px] tracking-widest uppercase mb-2 block font-extrabold flex items-center space-x-1.5">
            <span>Direct Studio Consultation</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-2">
            Discuss Your Project Layout With Ashish
          </h2>
          <p className="text-stone-400 text-xs leading-relaxed">
            Our principal meets select patrons weekly in Gurugram to formulate structural orientations, daylighting concepts, and detailed project costing schedules.
          </p>
        </div>
        <button 
          onClick={() => { setCurrentPage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="bg-[#b2946c] text-stone-950 px-6 py-4 text-xs tracking-widest uppercase font-sans font-black hover:text-[#faf9f6] hover:bg-[#a08159] cursor-pointer"
        >
          Book Atelier Session
        </button>
      </section>

    </div>
  );
}
