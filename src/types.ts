export type Page = 
  | "home" 
  | "about" 
  | "services" 
  | "portfolio" 
  | "portfolio-residential"
  | "portfolio-commercial"
  | "founder" 
  | "testimonials" 
  | "careers" 
  | "contact" 
  | "privacy" 
  | "terms"
  | "advisor"
  | "blog"
  | "faqs"
  | "service-detail"
  | "project-detail"
  | "blog-detail"
  | "404";

export interface BlogArticle {
  id: string;
  title: string;
  category: "Architecture" | "Interior Design" | "Industry Focus";
  publishedAt: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[]; // multi-paragraph editorial structure
  image: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "residential" | "commercial" | "interior" | "architecture";
  location: string;
  year: string;
  area: string;
  description: string;
  image: string;
  details: string[];
  challenge?: string;
  solution?: string;
  results?: string;
  feedback?: {
    client: string;
    quote: string;
  };
  residentialSubtype?: "Apartments" | "Villas" | "Luxury Homes" | "Renovations";
  commercialSubtype?: "Offices" | "Retail" | "Hospitality" | "Showrooms" | "Corporate Spaces";
  images?: string[];
  captions?: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  project: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}
