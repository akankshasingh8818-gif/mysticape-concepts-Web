import { useState, useEffect } from "react";
import { Page, Project, BlogArticle } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ResidentialProjects from "./components/ResidentialProjects";
import CommercialProjects from "./components/CommercialProjects";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Blog from "./components/Blog";
import FAQPage from "./components/FAQPage";
import ServiceDetailView from "./components/ServiceDetailView";
import ProjectDetailView from "./components/ProjectDetailView";
import NotFound from "./components/NotFound";
import { PROJECTS_DATA, SERVICES_DATA} from "./data";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  
  // Custom deep route states to manage full individual pages
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState<Project | null>(null);
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogArticle | null>(null);

  // Helper to parse pathname to page state
  const getPageFromPathname = (pathStr: string): {
    page: Page;
    serviceId: string | null;
    project: Project | null;
    blog: BlogArticle | null;
  } => {
    // Decode URI and remove ending trailing slash if exists
    const pathname = decodeURIComponent(pathStr).replace(/\/$/, "");

    if (pathname === "" || pathname === "/home" || pathname === "/") {
      return { page: "home", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/about") {
      return { page: "about", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/services") {
      return { page: "services", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/portfolio") {
      return { page: "portfolio", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/residential-projects") {
      return { page: "portfolio-residential", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/commercial-projects") {
      return { page: "portfolio-commercial", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/founder") {
      return { page: "founder", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/testimonials") {
      return { page: "testimonials", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/careers") {
      return { page: "careers", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/contact" || pathname === "/advisor") {
      return { page: "contact", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/privacy") {
      return { page: "privacy", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/terms") {
      return { page: "terms", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/blog") {
      return { page: "blog", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/faqs") {
      return { page: "faqs", serviceId: null, project: null, blog: null };
    }
    if (pathname === "/404") {
      return { page: "404", serviceId: null, project: null, blog: null };
    }
    
    if (pathname.startsWith("/service/")) {
      const id = pathname.substring("/service/".length);
      return { page: "service-detail", serviceId: id, project: null, blog: null };
    }
    if (pathname.startsWith("/project/")) {
      const id = pathname.substring("/project/".length);
      const proj = PROJECTS_DATA.find((p) => p.id === id);
      return { page: "project-detail", serviceId: null, project: proj || null, blog: null };
    }

    return { page: "404", serviceId: null, project: null, blog: null };
  };

  // Synchronize history routes on mount & popstate
  useEffect(() => {
    const handlePopState = () => {
      const { page, serviceId, project, blog } = getPageFromPathname(window.location.pathname);
      setCurrentPage(page);
      setSelectedServiceId(serviceId);
      setSelectedProjectDetail(project);
      setSelectedBlogArticle(blog);
    };

    window.addEventListener("popstate", handlePopState);
    
    // Initial direct-load support
    const { page, serviceId, project, blog } = getPageFromPathname(window.location.pathname);
    
    // Any invalid URL should automatically redirect to the custom 404 page
    if (page === "404" && window.location.pathname !== "/404") {
      window.history.replaceState(null, "", "/404");
    }

    setCurrentPage(page);
    setSelectedServiceId(serviceId);
    setSelectedProjectDetail(project);
    setSelectedBlogArticle(blog);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update URL state programmatically with clean path representation
  const changePageIdx = (page: Page) => {
    let path = "/";
    if (page === "home") path = "/";
    else if (page === "portfolio-residential") path = "/residential-projects";
    else if (page === "portfolio-commercial") path = "/commercial-projects";
    else if (page === "service-detail" && selectedServiceId) path = `/service/${selectedServiceId}`;
    else if (page === "project-detail" && selectedProjectDetail) path = `/project/${selectedProjectDetail.id}`;
    else path = `/${page}`;

    window.history.pushState(null, "", path);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigates directly to a service page
  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentPage("service-detail");
    window.history.pushState(null, "", `/service/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigates directly to a project detail case study
  const handleSelectProject = (proj: Project) => {
    setSelectedProjectDetail(proj);
    setCurrentPage("project-detail");
    window.history.pushState(null, "", `/project/${proj.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamic SEO Page Metadata Synchronization
  useEffect(() => {
    let title = "Mysticape Concepts | Luxury Interior Design & Interior Contracting Company";
    let desc = "Mysticape Concepts creates luxury residential and commercial interiors with timeless design, premium craftsmanship, and turnkey execution. Explore our portfolio of villas, apartments, offices, and bespoke interior projects.";

    switch (currentPage) {
      case "about":
        title = "About Our Interior Design Company | Mysticape Concepts India";
        desc = "Discover our story, mission, core values, and our uncompromising dedication to luxury interior design and contracting solutions in Noida, Gurugram, and Delhi NCR under designer Ashish Juneja.";
        break;
      case "services":
        title = "Turnkey Interior Solutions & Services | Interior Contractors Delhi NCR";
        desc = "Explore our luxury interior design services and turnkey interior solutions, including elite villa interior design, apartment planning, and office general contracting across India.";
        break;
      case "service-detail":
        if (selectedServiceId) {
          const capitalized = selectedServiceId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
          title = `${capitalized} | Luxury Interior Design & Contracting Services India`;
          desc = `Unlock bespoke high-end ${capitalized} designed with premium materials, flawless structural grids, and turnkey interior contracting execution by Mysticape Concepts.`;
        }
        break;
      case "portfolio":
        title = "Our Projects Portfolio | Luxury Residential & Commercial Interior Design";
        desc = "Browse our selection of premium residential and commercial interior design projects. Explore completed luxury home interiors, private villas, duplex apartments, and modern offices in Delhi NCR.";
        break;
      case "portfolio-residential":
        title = "Residential Interior Design Portfolio | Luxury Home Interiors & Villas";
        desc = "Browse our signature residential design portfolio of luxury home interiors, private villas, modular apartments, and custom home renovations in Gurugram, Noida, and across India.";
        break;
      case "portfolio-commercial":
        title = "Commercial Interior Design Portfolio | Luxury Office & Retail Spaces";
        desc = "Discover elite commercial layout designs, turnkey corporate offices, high-concept showrooms, and premium retail interiors designed for performance and compliance in Delhi NCR, India.";
        break;
      case "project-detail":
        if (selectedProjectDetail) {
          title = `${selectedProjectDetail.title} | Luxury Interior Project Case Study`;
          desc = `Discover the detailed process, turnkey contracting solutions, and outstanding outcomes achieved for the ${selectedProjectDetail.title} project in India.`;
        }
        break;
      case "founder":
        title = "Founder Ashish Juneja | Luxury Interior Designer & Contractor India";
        desc = "Meet Ashish Juneja, Founder and Design Director of Mysticape Concepts, leading luxury residential and commercial fit-outs and interior contracting for over 12+ years.";
        break;
      case "testimonials":
        title = "Client Testimonials & Reviews | Top Interior Design Company India";
        desc = "Read reviews, client testimonials, and design endorsements from our luxury residential clients and global corporate companies enjoying our premium turnkey interior solutions.";
        break;
      case "careers":
        title = "Careers | Join Our Luxury Interior Design Company in Gurugram";
        desc = "Build your career with India's leading luxury design firm. We are hiring talented space architects, luxury interior designers, and veteran general contracting partners.";
        break;
      case "contact":
        title = "Contact Our Luxury Interior Designers | Gurugram, Noida, Delhi NCR";
        desc = "Get in touch with Mysticape Concepts for premium home interiors and turnkey general contracting. Visit our Gurugram show atelier or submit your brief today.";
        break;
      case "blog":
        title = "Luxury Interior Design Blog & Industry Insights | Mysticape Concepts";
        desc = "Explore our latest blog posts on luxury home interiors, villa space planning, office layout parameters, general contracting guidelines, and design trends across India.";
        break;
      case "blog-detail":
        if (selectedBlogArticle) {
          title = `${selectedBlogArticle.title} | Luxury Interior Design & Architecture Insights`;
          desc = `${selectedBlogArticle.summary} — Expert design ideas from Mysticape Concepts.`;
        }
        break;
      case "faqs":
        title = "FAQs | Luxury Home & Commercial Interior Design & Contracting";
        desc = "Find answers regarding our turnkey interior design budgets, MEP engineering compliance, material sourcing, and localized execution timelines in Noida & Gurugram.";
        break;
      case "privacy":
        title = "Privacy Policy | Mysticape Concepts Studio";
        desc = "Read our strict client confidentiality protocols regarding personal design brief processing, secure metrics, and high-end curation discretion.";
        break;
      case "terms":
        title = "Terms of Service & Conditions | Mysticape Concepts";
        desc = "Review the general terms of service, architectural engineering, site inspection contracts, and design drawing ownership parameters with Mysticape Concepts.";
        break;
      case "404":
        title = "Page Not Found | Mysticape Concepts";
        desc = "The page you're looking for doesn't exist or has been moved. Explore our luxury interior portfolio or contact our design studio.";
        break;
      case "home":
      default:
        title = "Mysticape Concepts | Luxury Interior Design & Interior Contracting Company";
        desc = "Mysticape Concepts creates luxury residential and commercial interiors with timeless design, premium craftsmanship, and turnkey execution. Explore our portfolio of villas, apartments, offices, and bespoke interior projects.";
        break;
    }

    document.title = title;
    
    // Sync canonical link tag
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const currentPath = window.location.pathname === "/" ? "" : window.location.pathname;
    canonical.setAttribute("href", `https://mysticapeconcepts.com${currentPath}`);

    // Sync Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);

    // Sync Open Graph Title & Description to boost SEO indexation
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", desc);
  }, [currentPage, selectedServiceId, selectedProjectDetail, selectedBlogArticle]);

  const renderActivePage = () => {
    switch (currentPage) {
      case "about":
        return <About setCurrentPage={changePageIdx} />;
      case "services":
        return <Services setCurrentPage={changePageIdx} onSelectService={handleSelectService} />;
      case "service-detail":
        const serviceNode = SERVICES_DATA.find((s) => s.id === selectedServiceId);
        if (serviceNode) {
          return (
            <ServiceDetailView
              service={serviceNode}
              setCurrentPage={changePageIdx}
              onBack={() => changePageIdx("services")}
            />
          );
        }
        return <Services setCurrentPage={changePageIdx} onSelectService={handleSelectService} />;
      case "portfolio":
        return (
          <Portfolio
            selectedProject={selectedProjectDetail}
            setSelectedProject={setSelectedProjectDetail}
            onSelectProject={handleSelectProject}
            setCurrentPage={changePageIdx}
          />
        );
      case "portfolio-residential":
        return (
          <ResidentialProjects
            selectedProject={selectedProjectDetail}
            setSelectedProject={setSelectedProjectDetail}
            onSelectProject={handleSelectProject}
            setCurrentPage={changePageIdx}
          />
        );
      case "portfolio-commercial":
        return (
          <CommercialProjects
            selectedProject={selectedProjectDetail}
            setSelectedProject={setSelectedProjectDetail}
            onSelectProject={handleSelectProject}
            setCurrentPage={changePageIdx}
          />
        );
      case "project-detail":
        if (selectedProjectDetail) {
          return (
            <ProjectDetailView
              project={selectedProjectDetail}
              setCurrentPage={changePageIdx}
              onBack={() => {
                if (selectedProjectDetail.category === "residential" || selectedProjectDetail.residentialSubtype) {
                  changePageIdx("portfolio-residential");
                } else if (selectedProjectDetail.category === "commercial" || selectedProjectDetail.commercialSubtype) {
                  changePageIdx("portfolio-commercial");
                } else {
                  changePageIdx("portfolio");
                }
              }}
            />
          );
        }
        return (
          <Portfolio
            selectedProject={selectedProjectDetail}
            setSelectedProject={setSelectedProjectDetail}
            onSelectProject={handleSelectProject}
          />
        );
      case "founder":
        return <Founder setCurrentPage={changePageIdx} />;
      case "testimonials":
        return <Testimonials setCurrentPage={changePageIdx} />;
      case "careers":
        return <Careers />;
      case "contact":
        return <Contact />;
      case "privacy":
        return <Privacy />;
      case "terms":
        return <Terms />;
      case "advisor":
        return <Contact />;
      case "blog":
      case "blog-detail":
        return (
          <Blog
            setCurrentPage={changePageIdx}
            selectedBlogArticle={selectedBlogArticle}
            setSelectedBlogArticle={setSelectedBlogArticle}
          />
        );
      case "faqs":
        return <FAQPage setCurrentPage={changePageIdx} />;
      case "404":
        return <NotFound setCurrentPage={changePageIdx} />;
      case "home":
      default:
        return (
          <Home
            setCurrentPage={changePageIdx}
            setSelectedProject={setSelectedProjectDetail}
          />
        );
    }
  };

  return (
    <div id="mystic_ape_root_layout" className="min-h-screen flex flex-col justify-between bg-[#faf9f6]">
      <Header currentPage={currentPage} setCurrentPage={changePageIdx} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={changePageIdx} />
    </div>
  );
}
