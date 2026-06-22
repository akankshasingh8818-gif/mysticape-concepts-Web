import { Project, ServiceDetail, Testimonial, CareerOpportunity, BlogArticle } from "./types";

export const COMPANY_STATS = [
  { label: "Years of Fit-Out Experience", value: "12+" },
  { label: "Corporate Clients Supported", value: "100+" },
  { label: "Delivered Space", value: "Millions of Sq.Ft." },
  { label: "Turnkey Execution Rate", value: "100%" }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "interior-division",
    title: "Interior Division",
    description: "Creating functional, elegant, and personalized spaces, from concepts to completion across commercial, residential, and hospitality sectors.",
    extendedDescription: "Our Interior Division specializes in designing and executing immersive, functional environments. From workspace planning to high-end hospitality fittings, we blend aesthetic excellence with practical efficiency for absolute precision, managing every phase from concept to handover.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Bespoke workspace design & turnkey fit-out delivery",
      "Seamless conceptualization to execution frameworks",
      "Corporate office, premium housing, and retail layout design",
      "Carefully integrated MEP, lighting, and civil works alignment"
    ]
  },
  {
    id: "general-maintenance",
    title: "General Maintenance & Office Upkeep",
    description: "Smooth functioning and premium upkeep through regular inspections, timely minor repairs, plumbing support, and routine cleaning.",
    extendedDescription: "Our General Maintenance services ensure the continuous, smooth functioning and premium upkeep of your commercial or residential property. We focus on preventive care and rapid response to maintain a safe, clean, and comfortable environment for everyday operations.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Routine facility walkthroughs & safety audit checklists",
      "Professional plumbing diagnostic audits and repair support",
      "Minor masonry, plaster, painting, and structural repairs",
      "Proactive response systems to handle service request backlogs"
    ]
  },
  {
    id: "electrical-work",
    title: "Maintenance Electrical Works",
    description: "Safe and efficient operation of electrical systems through regular inspections, timely repairs, custom wiring, and fixtures.",
    extendedDescription: "Our Electrical work services ensure the safe and highly efficient functioning of all electrical infrastructure and panels. With strict adherence to safety codes, we provide regular inspections, preventive cabling tune-ups, wiring solution layouts, and emergency fault remedies.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Regular inspections of main panel boards and circuit breakers",
      "Custom wiring solutions and safe cable routing installations",
      "Efficient lighting fixture, switches, and socket repair",
      "Preventive insulation test audits and leakage remediation"
    ]
  },
  {
    id: "hvac-mechanical",
    title: "HVAC & Mechanical Systems",
    description: "Ensuring top performance of heating, ventilation, air conditioning, and essential machine groups through scheduled audits.",
    extendedDescription: "Our HVAC and Mechanical system services guarantee the efficient, quiet, and reliable performance of heating, ventilation, air conditioning flow, and essential mechanical equipment. We execute strategic scheduled inspections, filter replacements, and duct audits to secure fresh indoor air indexes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Air filter cleaning, replacement, and evaporator descaling",
      "Comprehensive air conditioning refrigerant gas charge level checks",
      "Exhaust fan ventilation systems and blower motor analysis",
      "Thermostat calibration and energy-saving operational auditing"
    ]
  },
  {
    id: "carpentry-fixtures",
    title: "Carpentry & Fixtures",
    description: "Precision carpentry and seamless fixture setup, custom furniture, modular units, doors, and storage.",
    extendedDescription: "We supply peerless carpentry expertise and flawless fixture installations. Specializing in bespoke cabinetry, custom wooden frames, modular office furniture systems, partition setups, flush doors, and storage layouts, we guarantee long-term durability and refined surface finish.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom furniture repair, wood polishing, and structural fixing",
      "Seamless modular desk assemblies and modular partition blocks",
      "Artisanal door framing, hinge replacement, and hardware alignment",
      "High-durability locker, shelf, and storage unit installations"
    ]
  },
  {
    id: "safety-compliance",
    title: "Safety & Compliance",
    description: "Fire alarm networks, smoke detectors, emergency lighting, CCTV, access control, and occupancy safety metrics.",
    extendedDescription: "We install and certify fully integrated, state-of-the-art spatial security and life safety technologies. From addressable fire alarms to smoke detection, exit signs, IP CCTV security matrices, and biometric access controls, we ensure complete compliance with local fire safety and building regularities.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Fire alarm systems calibration and sounder audibility checks",
      "Periodic testing of battery-backed emergency exit lighting and signage",
      "Smoke detector sensor cleansing and central panel reporting drills",
      "IP-CCTV systems and secure server backup loop analysis"
    ]
  },
  {
    id: "emergency-services",
    title: "On Call Emergency Services",
    description: "Rapid response support for urgent maintenance: electrical faults, pipe breaks, alarm triggers, and critical breakdown.",
    extendedDescription: "We extend 24/7 Rapid Response support for critical facility breakdowns and safety distresses. Our standby technician crew takes command of sudden power shorts, fire alarm sensor failures, water pipe bursts, or doors deadlock issues to avert operational downtimes.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "24/7 client hotline with immediate technical crew dispatching",
      "Rapid isolation of broken plumbing mains and pressure relief",
      "Electrical fault detection, insulation fix, and power recovery",
      "Swift resolution for critical office access loop failures"
    ]
  },
  {
    id: "housekeeping-support",
    title: "Housekeeping & Support",
    description: "Professional housekeeping, specialized sanitization, and daily upkeep across residential & commercial spaces.",
    extendedDescription: "We coordinate expert housekeeping regimes and facility support plans that champion immaculate cleanliness, safety sanitization, and workplace pride. We protect physical assets through calibrated eco-safe materials and premium trained cleaning resources.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Deep floor treatment, carpet dry-vacuuming, and surface dusting",
      "Daily workspace sanitization, trash clearance, and floor wet-mopping",
      "High-grade eco-responsible detergents and specialized tools",
      "Support systems keeping public lounges clean, crisp, and hygienic"
    ]
  },
  {
    id: "corporate-leasing",
    title: "Corporate Leasing",
    description: "Assisting brands in leasing premier office spaces and logistic warehouses suited perfectly to active operations.",
    extendedDescription: "We help enterprises source, evaluate, and lease the ideal corporate workspace or shipping warehouse space. Leveraging profound commercial market insight, we handle property identification, commercial negotiations, and ensure a smooth transit and contracting process.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Bespoke commercial property scouting mapping logistical demands",
      "Lease commercial terms tuning, legal clauses, and rent optimization",
      "Detailed visual inspection and corporate space audits before sign-off",
      "Coordination of design-and-build layouts from lease signing to move"
    ]
  },
  {
    id: "documentation-reporting",
    title: "Documentation & Reporting",
    description: "Audit-ready management of statutory records, compliance certifications, and scheduled inspection logs.",
    extendedDescription: "We provide comprehensive administrative and reporting transparency, keeping and archiving critical spatial compliance logs, fire safety certificates, elevator clearances, and scheduled servicing records. We keep your enterprise audit-ready at all times.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Rigorous archiving of statutory safety, fire, and municipal compliance",
      "Periodic safety audits & testing logs compiled for authority review",
      "Comprehensive transparent digital maintenance sheets and schedules",
      "Automatic triggers for upcoming equipment warranties and renewals"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Ashish Juneja and his team delivered our digital workspace with masterful scheduling and superior craftsmanship. The turnkey integration of civil, MEP, and design is truly commendable.",
    author: "Director of Real Estate",
    role: "Accenture India",
    location: "Accenture Digital Center, Bangalore",
    rating: 5,
    project: "Accenture Digital Center"
  },
  {
    id: "test-2",
    quote: "Mysticape Concepts turned our luxury retail flagship into an urban sanctuary of absolute contemplation. Their absolute command over heritage preservation, safety rules, and modern MEP is astonishing.",
    author: "Store Development Manager",
    role: "Starbucks India Coffee",
    location: "Kala Ghoda, Mumbai",
    rating: 5,
    project: "Starbucks Premium Lounge"
  },
  {
    id: "test-3",
    quote: "Their multi-disciplinary team executed an extremely complex blueprint flawlessly. Mysticape Concepts Pvt. Ltd. managed the construction and compliance risks with absolute precision, keeping us audit-ready.",
    author: "Head of Infrastructure",
    role: "Cipla Lifesciences",
    location: "Peninsula Business Park, Mumbai",
    rating: 5,
    project: "Cipla Lifesciences Headquarters"
  }
];

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [
  {
    id: "fitout-pm",
    title: "Project Manager - Interior Fit-Outs",
    department: "Project Management",
    location: "Gurugram Office (HQ)",
    type: "Full-Time",
    description: "We are seeking an experienced Project Manager to orchestrate end-to-end turnkey commercial and hospitality fit-out commissions, managing schedules, civil teams, and MEP execution.",
    requirements: [
      "5+ years of experience leading site operations for premium corporate fit-outs",
      "Comprehensive understanding of MEP systems, safety codes, and drywall structures",
      "Exceptional skill in managing sub-contractor teams, quality controls, and daily client reporting",
      "Degree in Civil Engineering, construction management, or equivalent"
    ],
    responsibilities: [
      "Manage daily site progress matching strict modular scheduling sheets",
      "Audit raw material deliveries, verifying masonry, carpentry, and electrical alignment",
      "Serve as primary liaison with clients, landlords, and statutory inspectors to secure certifications"
    ]
  },
  {
    id: "mep-coord",
    title: "Senior MEP Coordinator",
    department: "Engineering",
    location: "Gurugram Office (HQ)",
    type: "Full-Time",
    description: "Lead the design review, on-site supervision, testing, and commissioning of electrical, HVAC, plumbing, and fire safety systems across corporate portfolios.",
    requirements: [
      "6+ years in commercial or high-end building services (MEP)",
      "Deep understanding of electrical codes, fire alarm standards, and HVAC specifications",
      "B.Tech/B.E. in Electrical or Mechanical Engineering",
      "Proficient in reviewing CAD layouts, wiring flowcharts, and load calculations"
    ],
    responsibilities: [
      "Validate MEP layout drafts to ensure absolute alignment with spatial interior plans",
      "Supervise electrical wiring runs, panel terminations, duct insulation, and fire safety setups",
      "Validate testing and commissioning procedures, compiling transparent compliance documentation"
    ]
  },
  {
    id: "interior-architect",
    title: "Interior Space Architect",
    department: "Design Division",
    location: "Gurugram Office (HQ)",
    type: "Full-Time",
    description: "Craft detailed spatial designs, bespoke carpentry frames, furniture layouts, and finish plans for luxury commercial and hospitality interiors.",
    requirements: [
      "4+ years in premium corporate workspace and retail showroom interiors",
      "Pristine eye for texture pairings, color palettes, and ergonomic scale",
      "B.Arch or degree in Interior Architecture from a leading drafting institute",
      "Proficient in AutoCAD, SketchUp, and Photoshop"
    ],
    responsibilities: [
      "Develop conceptual plans, layout presentations, and custom woodwork drawings",
      "Support material sourcing audits, curating rich timber, natural stone, and metal samples",
      "Inquire on-site joinery adjustments to verify details flow perfectly flush with wall stucco"
    ]
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "turnkey-fitouts-excellence",
    title: "Decoding Turnkey Office Fit-Outs: MEP, Civil, and Aesthetic Balance",
    category: "Industry Focus",
    publishedAt: "June 12, 2026",
    readTime: "6 min read",
    author: "Ashish Juneja",
    summary: "How integrating general contracting, civil works, and mechanical services under a single turnkey mandate prevents budget overruns and operational delays.",
    content: [
      "In the commercial real estate world, a corporate office fit-out is often treated as a highly fragmented series of independent tasks. Developers hand over a concrete shell, followed by independent electrical contractors, partition carpenters, HVAC installers, and spatial designers all working in silos. This fragmentation usually leads to delayed handovers, misaligned ventilation runs, and budget blowouts.",
      "At Mysticape Concepts, we advocate for the absolute integration of fit-out operations under a single, turnkey general contracting framework. When design, civil works, and MEP services are run by a unified supervisor deck, we gain cohesive spatial scaling. Electrical conduits align cleanly behind carpentry panels, HVAC grills sit flush with ceiling curves, and lighting controls are calibrated precisely in advance.",
      "Successfully executing a 40,000 square foot fit-out in under 12 weeks demands high-intensity scheduling, strict material supply loops, and continuous testing. By centralizing management, we not only secure elegant visual finishes but also safeguard absolute energy and acoustic performance of systems."
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Turnkey Fit-Out", "MEP Engineering", "General Contracting", "Office Space"]
  },
  {
    id: "facility-maintenance-safety",
    title: "The Silent Architecture: Regulatory Safety and Facility Maintenance",
    category: "Architecture",
    publishedAt: "June 18, 2026",
    readTime: "5 min read",
    author: "Ashish Juneja",
    summary: "Exploring the critical importance of addressable smoke detection, IP CCTV, and preventive electrical maintenance in safeguarding corporate workspace environments.",
    content: [
      "We often admire the visual statements of architecture—the soaring glass facades, travertine columns, and custom furniture. Yet, the true life of any workspace is governed silently by its infrastructure systems: the wire harnesses behind drywall sheets, the refrigerant lines in air ducts, and the fire safety loops in ceilings.",
      "Comprehensive general maintenance and office upkeep are not merely tasks of fixing leaky taps; they represent the rigorous care that guarantees occupant safety and legal statutory compliance. Regular diagnostic testing of addressable fire panel alarms, battery capacities in emergency lighting, and earth-resistance tests in electrical panels keep workplaces fully prepared for contingencies.",
      "By establishing structured compliance reporting and preventative cycles, brands completely eliminate unexpected downtime and liability actions. In our Gurugram studio, we prioritize audit-ready documentation, tracking every inspection report alongside design blueprints so safety and luxury support each other perfectly."
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: ["Safety Compliance", "Facility Care", "Electrical Auditing", "Office Operations"]
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Design Process" | "Budget & Sourcing" | "Technical Specifications" | "Turnkey Management";
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-turnkey-time",
    question: "What is the typical timeline for a Mysticape turnkey commercial fit-out?",
    answer: "A standard corporate office fit-out between 15,000 and 50,000 sq.ft. typically requires 10 to 14 weeks from structural draft sign-off to certified white-glove handover. High-end custom residential or flagship retail spaces range between 4 and 8 months.",
    category: "Design Process"
  },
  {
    id: "faq-mep-integration",
    question: "Do you manage MEP engineering, fire safety, and municipal clearances?",
    answer: "Yes, fully. As a licensed general contracting firm, our in-house engineering team designs and executes all electrical panels, custom HVAC ventilation, plumbing lines, addressable fire alarm infrastructure, and biometric access codes in complete compliance with regional building bylaws.",
    category: "Turnkey Management"
  },
  {
    id: "faq-corporate-clients",
    question: "Which major corporate brands have you supported?",
    answer: "Under the leadership of our Founder & Director Ashish Juneja, our team has successfully delivered milioni of square feet area and supported premium portfolios for top-tier clients including Amazon, Accenture, Cipla, Starbucks, DLF, and Hilton, satisfying all stringent safety and facility standards.",
    category: "Turnkey Management"
  },
  {
    id: "faq-hvac-maintenance",
    question: "Do you offer post-occupation facility maintenance and support contracts?",
    answer: "Absolutely. Mysticape provides custom General and Office Maintenance Contracts (SLA). This includes scheduled HVAC air quality audits, thermal load diagnostics, routine electrical panel checks, carpentry upkeep, housekeeping support, and comprehensive documentation for statutory audits.",
    category: "Technical Specifications"
  },
  {
    id: "faq-regulatory-docs",
    question: "How do you handle statutory documentation and reporting?",
    answer: "We keep absolute records of all system testing logs, structural integrity checklists, electrical safety clearances, and fire system mock drills. These are delivered as digital, audit-ready operational manuals during project handover, enabling smooth asset management audits.",
    category: "Technical Specifications"
  }
];
