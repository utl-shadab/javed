// data/services.ts
export type Testimonial = {
  id: string;
  name: string;
  position: string;
  quote: string;
  avatar?: string;
  rating?: number;
};

export type ServiceSection = {
  id: string;
  title: string;
  content: string;
  icon?: string;
  image?: string;
};

export type SEO = {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  canonical?: string;
};

export type StatsItem = {
  icon: string;
  value: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  heroImage?: string;
  sections: ServiceSection[];
  testimonials: Testimonial[];
  relatedServices: string[];
  seo: SEO;
  stats: StatsItem[];
};

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Litigation Support",
    slug: "litigation-support",
    excerpt: "Comprehensive representation in Civil, Criminal, Constitutional, and Tribunal matters.",
    heroImage: "/images/services/litigation-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>Our litigation team represents clients across all courts and tribunals in India, including District Courts, High Courts, and the Supreme Court. We handle a wide range of cases involving civil disputes, criminal defence, constitutional challenges, and tribunal litigation. Our focus is on delivering result-oriented advocacy with strategic insight and meticulous preparation.</p>
          <p>With a track record of success in high-stakes matters, we combine deep legal knowledge with innovative strategies to protect your interests effectively.</p>
        `,
        image: "/images/services/litigation-overview.jpg",
        icon: "Gavel"
      },
      {
        id: "approach",
        title: "Our Approach to Litigation",
        content: `
          <p>We adopt a client-centric approach, starting with a thorough case assessment to identify the strongest legal pathways. Our team employs advanced research tools and collaborates with experts to build robust arguments. Whether it's negotiating settlements or litigating aggressively, we prioritize efficiency and outcomes.</p>
          <ul className="mt-4 space-y-2">
            <li>• Strategic case planning and risk assessment</li>
            <li>• Expert witness coordination and evidence management</li>
            <li>• Timely filings and compliance with procedural requirements</li>
          </ul>
        `,
        icon: "ShieldCheck"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>We've secured landmark victories, including a multi-crore recovery in a commercial dispute and acquittals in complex criminal trials. Our proactive strategies have reduced litigation timelines by up to 40% for many clients.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Commercial Dispute Resolution</h4>
              <p className="text-sm text-gray-600">Recovered ₹5 Cr. for a corporate client through swift High Court intervention.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Criminal Defence</h4>
              <p className="text-sm text-gray-600">Full acquittal in a white-collar crime case after rigorous evidence challenge.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Choose Us for Litigation?",
        content: `
          <p>Our firm's pan-India network ensures seamless representation across jurisdictions. Backed by 35+ years of collective experience, we deliver not just legal wins but also peace of mind.</p>
          <ul className="mt-4 space-y-2">
            <li>• Proven track record in appellate and trial courts</li>
            <li>• Customized fee structures for accessibility</li>
            <li>• 24/7 client support during critical phases</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is the typical timeline for a litigation case?</h5>
              <p className="text-sm text-gray-600">Timelines vary by complexity, but we aim for resolutions within 6-18 months through strategic motions.</p>
            </div>
            <div>
              <h5 className="font-semibold">Do you handle interim relief applications?</h5>
              <p className="text-sm text-gray-600">Yes, we specialize in urgent injunctions and stay orders to protect your immediate interests.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Rajesh Kumar",
        position: "CEO, TechCorp India",
        quote: "The Indian Legal Associates turned a potential disaster into a decisive victory. Their litigation expertise is unmatched.",
        avatar: "/images/testimonials/rajesh.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Priya Singh",
        position: "Individual Client",
        quote: "Facing a family dispute, their compassionate yet fierce representation gave me justice swiftly.",
        avatar: "/images/testimonials/priya.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "arbitration-and-adr", "property-real-estate"],
    seo: {
      title: "Litigation Support Services | The Indian Legal Associates",
      description: "Expert litigation representation in civil, criminal, constitutional, and tribunal matters across India. Strategic advocacy for optimal results.",
      keywords: ["litigation support", "civil litigation", "criminal defence", "constitutional law", "tribunal matters", "Indian courts"],
      image: "/images/services/litigation-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/litigation-support"
    },
    stats: [
      { icon: "Gavel", value: "500+", label: "Cases Won" },
      { icon: "ShieldCheck", value: "98%", label: "Success Rate" },
      { icon: "Users", value: "300+", label: "Clients Served" },
      { icon: "TrendingUp", value: "40%", label: "Timeline Reduction" }
    ]
  },
  {
    id: "2",
    title: "Corporate & Commercial Advisory",
    slug: "corporate-commercial-advisory",
    excerpt: "End-to-end corporate advisory for compliance, structuring, contracts, and transactions.",
    heroImage: "/images/services/corporate-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We assist companies with formation, structuring, regulatory compliance, contract negotiation, mergers, acquisitions, and joint ventures. Our team provides clear, pragmatic, and business-focused legal solutions that align with corporate objectives and risk frameworks.</p>
          <p>From startups to established enterprises, we ensure seamless growth through proactive legal guidance.</p>
        `,
        image: "/images/services/corporate-overview.jpg",
        icon: "Briefcase"
      },
      {
        id: "approach",
        title: "Our Advisory Approach",
        content: `
          <p>We integrate legal acumen with business strategy, conducting due diligence and risk audits to mitigate potential issues. Our advisory services are tailored to foster innovation while maintaining compliance.</p>
          <ul className="mt-4 space-y-2">
            <li>• Comprehensive due diligence and compliance audits</li>
            <li>• Negotiation and drafting of commercial agreements</li>
            <li>• Guidance on M&A and corporate restructuring</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Facilitated a ₹100 Cr. merger for a fintech firm and structured FDI for international expansions, ensuring zero regulatory hurdles.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">M&A Transaction</h4>
              <p className="text-sm text-gray-600">Seamless ₹100 Cr. merger with full compliance.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Contract Negotiation</h4>
              <p className="text-sm text-gray-600">Saved 25% in vendor costs through strategic clauses.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Partner with Us?",
        content: `
          <p>Our multi-disciplinary team offers holistic solutions, combining corporate law with tax and IP expertise for comprehensive support.</p>
          <ul className="mt-4 space-y-2">
            <li>• Industry-specific knowledge across sectors</li>
            <li>• Flexible engagement models</li>
            <li>• Ongoing compliance monitoring</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">How do you ensure regulatory compliance?</h5>
              <p className="text-sm text-gray-600">Through regular audits and updates aligned with SEBI, RBI, and MCA guidelines.</p>
            </div>
            <div>
              <h5 className="font-semibold">What about cross-border transactions?</h5>
              <p className="text-sm text-gray-600">We handle FEMA/FDI approvals and international contract structuring.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Amit Patel",
        position: "Founder, Innovate Solutions",
        quote: "Their corporate advisory transformed our startup into a compliant powerhouse ready for global scaling.",
        avatar: "/images/testimonials/amit.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Neha Rao",
        position: "CFO, Global Trade Ltd.",
        quote: "Expert handling of our acquisition deal – professional, efficient, and result-driven.",
        avatar: "/images/testimonials/neha.jpg",
        rating: 5
      }
    ],
    relatedServices: ["company-law-and-governance", "mergers-and-acquisitions", "investment-and-collaborations"],
    seo: {
      title: "Corporate & Commercial Advisory | The Indian Legal Associates",
      description: "Strategic corporate advisory services for compliance, contracts, mergers, acquisitions, and business transactions in India.",
      keywords: ["corporate advisory", "commercial law", "mergers acquisitions", "contract negotiation", "regulatory compliance", "joint ventures"],
      image: "/images/services/corporate-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/corporate-commercial-advisory"
    },
    stats: [
      { icon: "Briefcase", value: "100+", label: "M&A Deals" },
      { icon: "TrendingUp", value: "25%", label: "Cost Savings" },
      { icon: "Shield", value: "0", label: "Regulatory Fines" },
      { icon: "Users", value: "150+", label: "Startups Advised" }
    ]
  },
  {
    id: "3",
    title: "Consumer & Motor Accident Claims",
    slug: "consumer-motor-accident-claims",
    excerpt: "Representation in consumer disputes and motor accident compensation cases.",
    heroImage: "/images/services/consumer-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We represent consumers in disputes involving defective goods, unfair trade practices, and service deficiencies before consumer commissions. Our team also assists victims in motor accident claims, ensuring timely and fair compensation through both negotiation and litigation.</p>
          <p>Empowering individuals against corporate giants with accessible justice.</p>
        `,
        image: "/images/services/consumer-overview.jpg",
        icon: "ShieldCheck"
      },
      {
        id: "approach",
        title: "Our Claims Process",
        content: `
          <p>From evidence gathering to tribunal appearances, we streamline the process for maximum recovery. Our no-win-no-fee model makes justice affordable.</p>
          <ul className="mt-4 space-y-2">
            <li>• Detailed case evaluation and evidence compilation</li>
            <li>• Negotiation with insurers for settlements</li>
            <li>• Aggressive litigation for denied claims</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Secured ₹50 Lakh compensation in a motor accident case and resolved consumer fraud claims with full refunds.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Motor Accident Victory</h4>
              <p className="text-sm text-gray-600">₹50 Lakh awarded after insurer denial.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Consumer Dispute</h4>
              <p className="text-sm text-gray-600">Full refund plus damages in product defect case.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Us for Claims?",
        content: `
          <p>Specialized in consumer forums and MACTs, with a 95% success rate in compensation recoveries.</p>
          <ul className="mt-4 space-y-2">
            <li>• Expertise in evidence-based claims</li>
            <li>• Transparent fee structures</li>
            <li>• Rapid response for urgent medical needs</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What documents are needed for a claim?</h5>
              <p className="text-sm text-gray-600">FIR, medical reports, and policy details – we guide you through it.</p>
            </div>
            <div>
              <h5 className="font-semibold">Is there a time limit for filing?</h5>
              <p className="text-sm text-gray-600">Generally 2 years; we act swiftly to meet deadlines.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Suresh Reddy",
        position: "Accident Victim",
        quote: "They fought tirelessly for my family's future – the compensation changed our lives.",
        avatar: "/images/testimonials/suresh.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Lata Mishra",
        position: "Consumer Advocate",
        quote: "Quick resolution of my e-commerce fraud case; highly recommend for consumer rights.",
        avatar: "/images/testimonials/lata.jpg",
        rating: 5
      }
    ],
    relatedServices: ["litigation-support", "insurance-law", "product-liability-laws"],
    seo: {
      title: "Consumer & Motor Accident Claims | The Indian Legal Associates",
      description: "Representation for consumer disputes and motor accident claims, ensuring timely compensation and fair resolutions.",
      keywords: ["consumer protection", "motor accident claims", "consumer disputes", "accident compensation", "insurance claims"],
      image: "/images/services/consumer-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/consumer-motor-accident-claims"
    },
    stats: [
      { icon: "ShieldCheck", value: "95%", label: "Success Rate" },
      { icon: "TrendingUp", value: "₹50L+", label: "Average Compensation" },
      { icon: "Users", value: "1,000+", label: "Claims Handled" },
      { icon: "Clock", value: "6", label: "Months Average Resolution" }
    ]
  },
  {
    id: "4",
    title: "Family & Matrimonial Law",
    slug: "family-matrimonial-law",
    excerpt: "Guidance and representation in divorce, custody, maintenance, and inheritance disputes.",
    heroImage: "/images/services/family-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We provide compassionate and confidential assistance in all family law matters, including divorce, maintenance, domestic violence, adoption, succession, and guardianship. Our aim is to resolve disputes amicably through mediation, or through effective litigation when required.</p>
          <p>Protecting families with empathy and expertise during life's most challenging moments.</p>
        `,
        image: "/images/services/family-overview.jpg",
        icon: "Users"
      },
      {
        id: "approach",
        title: "Our Sensitive Approach",
        content: `
          <p>We prioritize mediation and counseling to minimize emotional distress, while preparing robust legal strategies for court proceedings if needed. Our team ensures child-centric solutions in custody matters.</p>
          <ul className="mt-4 space-y-2">
            <li>• Confidential consultations and mediation sessions</li>
            <li>• Customized settlement agreements</li>
            <li>• Representation in family courts and high courts</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Reunited families through mediated custody agreements and secured fair alimony in contested divorces, achieving 80% amicable resolutions.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Custody Mediation</h4>
              <p className="text-sm text-gray-600">Joint custody arrangement preserving parental bonds.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Inheritance Dispute</h4>
              <p className="text-sm text-gray-600">Equitable division of family assets without prolonged litigation.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Choose Us for Family Matters?",
        content: `
          <p>Our counselors and advocates blend legal prowess with emotional intelligence, ensuring holistic support.</p>
          <ul className="mt-4 space-y-2">
            <li>• Discreet and empathetic handling</li>
            <li>• Expertise in Hindu and Special Marriage Acts</li>
            <li>• Post-resolution support services</li>
          </ul>
        `,
        icon: "Shield"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">Can mediation replace court in divorce?</h5>
              <p className="text-sm text-gray-600">Yes, mutual consent divorces can be settled via mediation for faster closure.</p>
            </div>
            <div>
              <h5 className="font-semibold">How is child custody decided?</h5>
              <p className="text-sm text-gray-600">Based on child's welfare, with joint custody preferred where possible.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Anita Desai",
        position: "Single Mother",
        quote: "Their guidance through my divorce was a lifeline – compassionate and competent.",
        avatar: "/images/testimonials/anita.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Vikram Singh",
        position: "Business Owner",
        quote: "Resolved inheritance issues smoothly, preserving family harmony.",
        avatar: "/images/testimonials/vikram.jpg",
        rating: 5
      }
    ],
    relatedServices: ["litigation-support", "property-real-estate", "legal-drafting-documentation"],
    seo: {
      title: "Family & Matrimonial Law | The Indian Legal Associates",
      description: "Compassionate guidance in divorce, custody, maintenance, and inheritance disputes. Amicable resolutions through mediation and litigation.",
      keywords: ["family law", "matrimonial law", "divorce lawyer", "child custody", "inheritance disputes", "domestic violence"],
      image: "/images/services/family-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/family-matrimonial-law"
    },
    stats: [
      { icon: "Users", value: "80%", label: "Amicable Resolutions" },
      { icon: "Award", value: "95%", label: "Client Satisfaction" },
      { icon: "Shield", value: "100+", label: "Cases Mediated" },
      { icon: "TrendingUp", value: "6", label: "Month Avg Settlement" }
    ]
  },
  {
    id: "5",
    title: "Property & Real Estate",
    slug: "property-real-estate",
    excerpt: "Comprehensive services for property transactions, ownership disputes, and documentation.",
    heroImage: "/images/services/property-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We assist with land acquisition, title verification, sale/purchase transactions, lease agreements, and property litigation. Our real estate experts ensure due diligence and compliance with applicable laws for both residential and commercial properties.</p>
          <p>Securing your real estate investments with precision and foresight.</p>
        `,
        image: "/images/services/property-overview.jpg",
        icon: "MapPin"
      },
      {
        id: "approach",
        title: "Our Transaction Process",
        content: `
          <p>From title searches to stamp duty compliance, we manage end-to-end transactions to avoid pitfalls. Our litigation arm resolves ownership disputes efficiently.</p>
          <ul className="mt-4 space-y-2">
            <li>• Thorough title due diligence and verification</li>
            <li>• Drafting of sale deeds and lease agreements</li>
            <li>• Dispute resolution via negotiation or court</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Facilitated ₹200 Cr. in property deals and resolved boundary disputes saving clients years of litigation.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Commercial Lease</h4>
              <p className="text-sm text-gray-600">Structured ₹10 Cr. annual lease with ironclad clauses.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Ownership Dispute</h4>
              <p className="text-sm text-gray-600">Cleared title for a ₹50 Cr. plot in 6 months.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Us for Real Estate?",
        content: `
          <p>Our advisory leverages local knowledge and national networks for seamless property dealings.</p>
          <ul className="mt-4 space-y-2">
            <li>• RERA compliance expertise</li>
            <li>• Valuation and taxation advisory</li>
            <li>• End-to-end project management</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is due diligence in property?</h5>
              <p className="text-sm text-gray-600">Verifying title, encumbrances, and approvals to prevent future disputes.</p>
            </div>
            <div>
              <h5 className="font-semibold">How long does registration take?</h5>
              <p className="text-sm text-gray-600">Typically 1-2 weeks post-execution, with our facilitation.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Rohan Mehta",
        position: "Real Estate Developer",
        quote: "Their due diligence uncovered issues that saved us millions – true partners.",
        avatar: "/images/testimonials/rohan.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Kavita Joshi",
        position: "Home Buyer",
        quote: "Smooth purchase process; now I own my dream home worry-free.",
        avatar: "/images/testimonials/kavita.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "litigation-support", "legal-drafting-documentation"],
    seo: {
      title: "Property & Real Estate Law | The Indian Legal Associates",
      description: "Full-service property law including transactions, disputes, due diligence, and compliance for residential and commercial real estate.",
      keywords: ["property law", "real estate", "land acquisition", "title verification", "lease agreements", "RERA compliance"],
      image: "/images/services/property-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/property-real-estate"
    },
    stats: [
      { icon: "MapPin", value: "₹200Cr+", label: "Deals Facilitated" },
      { icon: "Shield", value: "100%", label: "Compliance Rate" },
      { icon: "Users", value: "250+", label: "Properties Handled" },
      { icon: "TrendingUp", value: "6", label: "Month Avg Closure" }
    ]
  },
  {
    id: "6",
    title: "Arbitration & ADR",
    slug: "arbitration-and-adr",
    excerpt: "Alternative dispute resolution through arbitration, mediation, and conciliation.",
    heroImage: "/images/services/arbitration-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We promote out-of-court settlements through structured ADR mechanisms, saving clients time and costs. Our lawyers represent clients in both institutional and ad hoc arbitration, domestically and internationally.</p>
          <p>Efficient resolutions without the courtroom battle.</p>
        `,
        image: "/images/services/arbitration-overview.jpg",
        icon: "Balance"
      },
      {
        id: "approach",
        title: "Our ADR Strategy",
        content: `
          <p>We facilitate neutral mediation and enforce arbitration awards swiftly. Our approach emphasizes confidentiality and enforceability under the Arbitration Act.</p>
          <ul className="mt-4 space-y-2">
            <li>• Selection of arbitrators and venue management</li>
            <li>• Drafting arbitration clauses in contracts</li>
            <li>• Enforcement of awards in courts</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Resolved ₹150 Cr. construction dispute via arbitration in 9 months, vs. 3+ years in court.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Commercial Arbitration</h4>
              <p className="text-sm text-gray-600">Full award in favor within 6 months.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Mediation Success</h4>
              <p className="text-sm text-gray-600">Amicable partnership resolution saving relationships.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why ADR with Us?",
        content: `
          <p>Expertise in SIAC, ICC, and domestic institutions for binding, cost-effective outcomes.</p>
          <ul className="mt-4 space-y-2">
            <li>• 90% settlement rate in mediations</li>
            <li>• International arbitration experience</li>
            <li>• Post-award enforcement support</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">Is arbitration binding?</h5>
              <p className="text-sm text-gray-600">Yes, awards are enforceable as court decrees.</p>
            </div>
            <div>
              <h5 className="font-semibold">How does mediation differ?</h5>
              <p className="text-sm text-gray-600">Non-binding facilitation for voluntary agreements.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Deepak Verma",
        position: "Construction Firm MD",
        quote: "Arbitration saved our project timeline and costs – highly efficient.",
        avatar: "/images/testimonials/deepak.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Meera Kapoor",
        position: "Business Partner",
        quote: "Mediation preserved our partnership; grateful for their neutral guidance.",
        avatar: "/images/testimonials/meera.jpg",
        rating: 5
      }
    ],
    relatedServices: ["litigation-support", "corporate-commercial-advisory", "legal-drafting-documentation"],
    seo: {
      title: "Arbitration & ADR Services | The Indian Legal Associates",
      description: "Efficient alternative dispute resolution through arbitration, mediation, and conciliation for faster, cost-effective settlements.",
      keywords: ["arbitration", "ADR", "mediation", "conciliation", "dispute resolution", "out-of-court settlement"],
      image: "/images/services/arbitration-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/arbitration-and-adr"
    },
    stats: [
      { icon: "Balance", value: "90%", label: "Settlement Rate" },
      { icon: "Clock", value: "9", label: "Month Avg Resolution" },
      { icon: "Users", value: "200+", label: "Disputes Resolved" },
      { icon: "TrendingUp", value: "60%", label: "Cost Savings" }
    ]
  },
  {
    id: "7",
    title: "Employment & Labour Law",
    slug: "employment-labour-law",
    excerpt: "Advisory and representation for employers and employees in labour disputes.",
    heroImage: "/images/services/employment-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We advise on employment contracts, workplace policies, industrial disputes, retrenchment, and compliance with labour regulations. Our representation spans labour courts, industrial tribunals, and high courts across India.</p>
          <p>Balancing rights and obligations in the workplace.</p>
        `,
        image: "/images/services/employment-overview.jpg",
        icon: "Users"
      },
      {
        id: "approach",
        title: "Our Labour Strategy",
        content: `
          <p>We conduct compliance audits and draft policies to prevent disputes, while representing in unfair dismissal and wage claims.</p>
          <ul className="mt-4 space-y-2">
            <li>• Employment contract reviews and drafting</li>
            <li>• POSH and grievance redressal mechanisms</li>
            <li>• Tribunal and court representation</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Defended employers in mass retrenchment cases and secured back wages for employees, achieving fair settlements.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Retrenchment Defence</h4>
              <p className="text-sm text-gray-600">Upheld layoffs for 500+ workers with minimal payouts.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Wage Recovery</h4>
              <p className="text-sm text-gray-600">₹2 Cr. awarded to underpaid staff.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Us for Employment Law?",
        content: `
          <p>Navigating the Industrial Disputes Act and Shops Act with balanced advocacy for all parties.</p>
          <ul className="mt-4 space-y-2">
            <li>• HR policy formulation</li>
            <li>• Strike and lockout management</li>
            <li>• Compliance training programs</li>
          </ul>
        `,
        icon: "Shield"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is unfair dismissal?</h5>
              <p className="text-sm text-gray-600">Termination without due process or valid reason under labour laws.</p>
            </div>
            <div>
              <h5 className="font-semibold">Do you represent employees?</h5>
              <p className="text-sm text-gray-600">Yes, we advocate for workers' rights equally.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Sanjay Gupta",
        position: "HR Director",
        quote: "Their compliance audit prevented a major labour unrest – proactive excellence.",
        avatar: "/images/testimonials/sanjay.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Ritu Sharma",
        position: "Former Employee",
        quote: "Recovered my dues swiftly; felt supported throughout.",
        avatar: "/images/testimonials/ritu.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "litigation-support", "legal-drafting-documentation"],
    seo: {
      title: "Employment & Labour Law | The Indian Legal Associates",
      description: "Advisory and representation in employment contracts, workplace policies, industrial disputes, and labour compliance for employers and employees.",
      keywords: ["employment law", "labour law", "industrial disputes", "POSH compliance", "retrenchment", "wage claims"],
      image: "/images/services/employment-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/employment-labour-law"
    },
    stats: [
      { icon: "Users", value: "500+", label: "Policies Drafted" },
      { icon: "Shield", value: "95%", label: "Compliance Rate" },
      { icon: "TrendingUp", value: "70%", label: "Dispute Prevention" },
      { icon: "Award", value: "₹2Cr+", label: "Wage Recoveries" }
    ]
  },
  {
    id: "8",
    title: "Legal Drafting & Documentation",
    slug: "legal-drafting-documentation",
    excerpt: "Expert drafting of contracts, agreements, notices, and legal opinions.",
    heroImage: "/images/services/drafting-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>Our drafting services include MoUs, partnership deeds, commercial contracts, NDAs, and legal opinions tailored to client needs. We ensure every document is legally sound, enforceable, and aligned with the client's objectives.</p>
          <p>Precision in words, protection in law.</p>
        `,
        image: "/images/services/drafting-overview.jpg",
        icon: "FileText"
      },
      {
        id: "approach",
        title: "Our Drafting Process",
        content: `
          <p>We collaborate closely to understand intent, then craft documents with clear language and risk mitigation clauses.</p>
          <ul className="mt-4 space-y-2">
            <li>• Initial consultation and requirement analysis</li>
            <li>• Iterative drafting and review cycles</li>
            <li>• Final vetting for enforceability</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Drafted agreements that withstood court scrutiny, saving clients in breach disputes.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Joint Venture MoU</h4>
              <p className="text-sm text-gray-600">Enabled ₹80 Cr. collaboration without hitches.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">NDA Enforcement</h4>
              <p className="text-sm text-gray-600">Protected IP in a trade secret leak case.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Our Drafting?",
        content: `
          <p>Specialized templates customized for Indian laws, ensuring bulletproof documentation.</p>
          <ul className="mt-4 space-y-2">
            <li>• Sector-specific clauses</li>
            <li>• Multilingual drafting options</li>
            <li>• Opinion letters for complex matters</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">How long for a contract draft?</h5>
              <p className="text-sm text-gray-600">3-7 days, depending on complexity.</p>
            </div>
            <div>
              <h5 className="font-semibold">Do you handle amendments?</h5>
              <p className="text-sm text-gray-600">Yes, with revision history tracking.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Nisha Reddy",
        position: "Startup Founder",
        quote: "Their contracts are watertight – no ambiguities, all protections.",
        avatar: "/images/testimonials/nisha.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Arjun Bose",
        position: "Corporate Counsel",
        quote: "Efficient opinions that clarified our regulatory path forward.",
        avatar: "/images/testimonials/arjun.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "litigation-support", "arbitration-and-adr"],
    seo: {
      title: "Legal Drafting & Documentation | The Indian Legal Associates",
      description: "Expert drafting of contracts, agreements, NDAs, MoUs, and legal opinions, ensuring enforceability and alignment with client objectives.",
      keywords: ["legal drafting", "contract drafting", "NDA", "MoU", "legal opinions", "agreements"],
      image: "/images/services/drafting-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/legal-drafting-documentation"
    },
    stats: [
      { icon: "FileText", value: "1,000+", label: "Documents Drafted" },
      { icon: "Shield", value: "100%", label: "Enforceability Rate" },
      { icon: "TrendingUp", value: "3-7", label: "Day Avg Turnaround" },
      { icon: "Users", value: "95%", label: "Client Approval" }
    ]
  },
  {
    id: "9",
    title: "Banking & Finance",
    slug: "banking-and-finance",
    excerpt: "Comprehensive legal advisory for banking, lending, and financial transactions.",
    heroImage: "/images/services/banking-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We advise banks, NBFCs, and borrowers on loan documentation, project financing, recovery actions, and regulatory compliance. Our services also cover SARFAESI proceedings and debt restructuring.</p>
          <p>Navigating financial complexities with regulatory precision.</p>
        `,
        image: "/images/services/banking-overview.jpg",
        icon: "DollarSign"
      },
      {
        id: "approach",
        title: "Our Finance Strategy",
        content: `
          <p>We structure secure lending agreements and defend in NPA recoveries, ensuring RBI compliance.</p>
          <ul className="mt-4 space-y-2">
            <li>• Loan agreement drafting and syndication</li>
            <li>• Insolvency proceedings under SARFAESI</li>
            <li>• Debt resolution plans</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Recovered ₹300 Cr. in NPAs and structured ₹500 Cr. project finance deals.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">NPA Recovery</h4>
              <p className="text-sm text-gray-600">SARFAESI auction yielding 80% recovery.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Project Finance</h4>
              <p className="text-sm text-gray-600">Secured funding for infra project with covenants.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Us for Banking?",
        content: `
          <p>Deep knowledge of Basel norms and DRT proceedings for optimal financial outcomes.</p>
          <ul className="mt-4 space-y-2">
            <li>• Cross-border financing expertise</li>
            <li>• Risk assessment and mitigation</li>
            <li>• Regulatory filing support</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is SARFAESI?</h5>
              <p className="text-sm text-gray-600">Act for enforcement of security interests without court intervention.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to restructure debt?</h5>
              <p className="text-sm text-gray-600">Via CDR or IBC mechanisms for viable plans.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Vijay Malhotra",
        position: "Bank Executive",
        quote: "Their recovery strategies maximized our portfolio health.",
        avatar: "/images/testimonials/vijay.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Pooja Nair",
        position: "Borrower",
        quote: "Restructured our debt sustainably – saved our business.",
        avatar: "/images/testimonials/pooja.jpg",
        rating: 5
      }
    ],
    relatedServices: ["insolvency-and-bankruptcy", "corporate-commercial-advisory", "legal-drafting-documentation"],
    seo: {
      title: "Banking & Finance Law | The Indian Legal Associates",
      description: "Legal advisory for banking, lending, NPA recovery, SARFAESI, and debt restructuring, ensuring regulatory compliance and financial security.",
      keywords: ["banking law", "finance advisory", "NPA recovery", "SARFAESI", "loan documentation", "debt restructuring"],
      image: "/images/services/banking-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/banking-and-finance"
    },
    stats: [
      { icon: "DollarSign", value: "₹300Cr+", label: "NPAs Recovered" },
      { icon: "Shield", value: "100%", label: "RBI Compliance" },
      { icon: "Users", value: "50+", label: "Banks Advised" },
      { icon: "TrendingUp", value: "80%", label: "Recovery Rate" }
    ]
  },
  {
    id: "10",
    title: "Company Law & Governance",
    slug: "company-law-and-governance",
    excerpt: "Corporate law compliance, governance, and board advisory services.",
    heroImage: "/images/services/company-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We assist companies in complying with the Companies Act, corporate governance frameworks, and ROC filings. We also handle shareholder disputes and director liability issues.</p>
          <p>Building resilient corporate structures for sustainable growth.</p>
        `,
        image: "/images/services/company-overview.jpg",
        icon: "Building"
      },
      {
        id: "approach",
        title: "Our Governance Framework",
        content: `
          <p>We implement board policies, conduct secretarial audits, and advise on ESG compliance.</p>
          <ul className="mt-4 space-y-2">
            <li>• Incorporation and alteration filings</li>
            <li>• Board meeting compliance</li>
            <li>• Oppression and mismanagement remedies</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Streamlined governance for 50+ startups, averting SEBI penalties.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Startup Incorporation</h4>
              <p className="text-sm text-gray-600">ESOP scheme compliant with tax benefits.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Shareholder Dispute</h4>
              <p className="text-sm text-gray-600">Mediated buyout preserving company value.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Our Corporate Expertise?",
        content: `
          <p>From private to listed companies, we ensure seamless compliance and ethical governance.</p>
          <ul className="mt-4 space-y-2">
            <li>• Annual return preparations</li>
            <li>• Director KYC and disqualifications</li>
            <li>• CSR policy implementation</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is ROC compliance?</h5>
              <p className="text-sm text-gray-600">Timely filings to maintain good standing.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to handle director liability?</h5>
              <p className="text-sm text-gray-600">Through indemnity clauses and D&O insurance.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Kiran Desai",
        position: "Company Secretary",
        quote: "Their filings are flawless – no penalties, ever.",
        avatar: "/images/testimonials/kiran.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Rahul Iyer",
        position: "Shareholder",
        quote: "Resolved governance issues equitably for all parties.",
        avatar: "/images/testimonials/rahul.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "mergers-and-acquisitions", "legal-drafting-documentation"],
    seo: {
      title: "Company Law & Governance | The Indian Legal Associates",
      description: "Compliance with Companies Act, corporate governance, ROC filings, and board advisory for seamless corporate operations.",
      keywords: ["company law", "corporate governance", "ROC filings", "shareholder disputes", "board advisory", "Companies Act"],
      image: "/images/services/company-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/company-law-and-governance"
    },
    stats: [
      { icon: "Building", value: "50+", label: "Startups Incorporated" },
      { icon: "Shield", value: "100%", label: "Compliance Rate" },
      { icon: "Users", value: "0", label: "SEBI Penalties" },
      { icon: "TrendingUp", value: "24", label: "Hour Filing Support" }
    ]
  },
  {
    id: "11",
    title: "Insolvency & Bankruptcy (IBC)",
    slug: "insolvency-and-bankruptcy",
    excerpt: "Representation under IBC for creditors, debtors, and resolution professionals.",
    heroImage: "/images/services/insolvency-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>Our team provides advisory and litigation services under the Insolvency and Bankruptcy Code, 2016. We represent clients before NCLT/NCLAT in corporate insolvency resolution processes and liquidation proceedings.</p>
          <p>Reviving businesses or maximizing recoveries in distress.</p>
        `,
        image: "/images/services/insolvency-overview.jpg",
        icon: "AlertTriangle"
      },
      {
        id: "approach",
        title: "Our IBC Process",
        content: `
          <p>We file admissions, draft resolution plans, and challenge valuations for optimal outcomes.</p>
          <ul className="mt-4 space-y-2">
            <li>• CIRP initiation and moratorium advice</li>
            <li>• CoC representation and voting</li>
            <li>• Liquidation and asset distribution</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Approved ₹1,200 Cr. resolution plan and recovered 60% for creditors in a steel plant case.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Resolution Approval</h4>
              <p className="text-sm text-gray-600">Revived ₹800 Cr. asset base.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Creditor Recovery</h4>
              <p className="text-sm text-gray-600">Maximized payouts in liquidation.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why IBC with Us?",
        content: `
          <p>Proven track in NCLT benches, blending insolvency law with sector insights.</p>
          <ul className="mt-4 space-y-2">
            <li>• RP appointment and oversight</li>
            <li>• Cross-border insolvency filings</li>
            <li>• Post-resolution compliance</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What triggers CIRP?</h5>
              <p className="text-sm text-gray-600">Default over ₹1 Cr. for 90 days.</p>
            </div>
            <div>
              <h5 className="font-semibold">Who can file IBC?</h5>
              <p className="text-sm text-gray-600">Financial/operational creditors or corporate debtors.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Anil Kapoor",
        position: "Resolution Professional",
        quote: "Their CoC strategy led to a viable turnaround plan.",
        avatar: "/images/testimonials/anil.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Geeta Pillai",
        position: "Creditor Representative",
        quote: "Recovered more than expected in a tough liquidation.",
        avatar: "/images/testimonials/geeta.jpg",
        rating: 5
      }
    ],
    relatedServices: ["banking-and-finance", "litigation-support", "corporate-commercial-advisory"],
    seo: {
      title: "Insolvency & Bankruptcy (IBC) | The Indian Legal Associates",
      description: "Expert representation in IBC proceedings, CIRP, resolution plans, and liquidation for creditors and debtors.",
      keywords: ["insolvency", "bankruptcy", "IBC", "CIRP", "NCLT", "resolution professionals"],
      image: "/images/services/insolvency-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/insolvency-and-bankruptcy"
    },
    stats: [
      { icon: "AlertTriangle", value: "₹1,200Cr+", label: "Resolution Plans" },
      { icon: "Shield", value: "60%", label: "Creditor Recovery" },
      { icon: "Users", value: "100+", label: "IBC Cases" },
      { icon: "TrendingUp", value: "12", label: "Month Avg Process" }
    ]
  },
  {
    id: "12",
    title: "Intellectual Property Law",
    slug: "intellectual-property-law",
    excerpt: "Protection of creative and commercial IP rights including trademarks, patents, and copyrights.",
    heroImage: "/images/services/ip-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We handle registration, enforcement, and infringement actions for trademarks, patents, and copyrights. Our services also cover brand strategy, licensing, and IP portfolio management.</p>
          <p>Safeguarding your innovations and brands in a competitive world.</p>
        `,
        image: "/images/services/ip-overview.jpg",
        icon: "Copyright"
      },
      {
        id: "approach",
        title: "Our IP Protection Strategy",
        content: `
          <p>From search to prosecution, we secure rights globally via WIPO and national offices.</p>
          <ul className="mt-4 space-y-2">
            <li>• Trademark opposition and rectification</li>
            <li>• Patent drafting and examination</li>
            <li>• Infringement suits and cease-desist</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Defended ₹100 Cr. brand against counterfeiting and secured 50+ patents for tech firms.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Trademark Defence</h4>
              <p className="text-sm text-gray-600">Injunction against copycats in 3 months.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Patent Grant</h4>
              <p className="text-sm text-gray-600">Accelerated approval for pharma innovation.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Our IP Practice?",
        content: `
          <p>Integrated with litigation for robust enforcement, covering designs to geographical indications.</p>
          <ul className="mt-4 space-y-2">
            <li>• Licensing and technology transfer</li>
            <li>• Portfolio audits</li>
            <li>• International filings</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">How long for trademark registration?</h5>
              <p className="text-sm text-gray-600">12-18 months, with expedited options.</p>
            </div>
            <div>
              <h5 className="font-semibold">What if IP is infringed?</h5>
              <p className="text-sm text-gray-600">Immediate notice and suit for damages/injunction.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Sonia Verma",
        position: "IP Manager, Pharma Co.",
        quote: "Secured our patent portfolio globally – invaluable asset protection.",
        avatar: "/images/testimonials/sonia.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Tarun Bhatia",
        position: "Brand Owner",
        quote: "Stopped counterfeiters cold; brand integrity restored.",
        avatar: "/images/testimonials/tarun.jpg",
        rating: 5
      }
    ],
    relatedServices: ["litigation-support", "information-technology-data-protection", "corporate-commercial-advisory"],
    seo: {
      title: "Intellectual Property Law | The Indian Legal Associates",
      description: "Protection of trademarks, patents, copyrights, and IP enforcement with registration, licensing, and portfolio management.",
      keywords: ["intellectual property", "IP law", "trademarks", "patents", "copyrights", "IP licensing"],
      image: "/images/services/ip-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/intellectual-property-law"
    },
    stats: [
      { icon: "Copyright", value: "50+", label: "Patents Secured" },
      { icon: "Award", value: "100+", label: "Trademarks Registered" },
      { icon: "Shield", value: "95%", label: "Enforcement Success" },
      { icon: "Users", value: "200+", label: "IP Portfolios Managed" }
    ]
  },
  {
    id: "13",
    title: "Information Technology & Data Protection",
    slug: "information-technology-data-protection",
    excerpt: "Advisory on IT contracts, data privacy, and digital compliance frameworks.",
    heroImage: "/images/services/it-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We assist clients in navigating technology regulations, drafting software agreements, and ensuring compliance with the IT Act and data privacy laws. Our team advises on cybersecurity, online liability, and emerging digital policy.</p>
          <p>Securing your digital future in an evolving landscape.</p>
        `,
        image: "/images/services/it-overview.jpg",
        icon: "Globe"
      },
      {
        id: "approach",
        title: "Our Digital Compliance Approach",
        content: `
          <p>We conduct DPDP audits and implement GDPR-like frameworks for Indian entities.</p>
          <ul className="mt-4 space-y-2">
            <li>• Data processing agreements</li>
            <li>• Cybersecurity incident response</li>
            <li>• E-commerce liability advisory</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Developed privacy policies for 100+ apps, averting CERT-In penalties.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Data Breach Response</h4>
              <p className="text-sm text-gray-600">Mitigated fines through swift reporting.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">IT Contract</h4>
              <p className="text-sm text-gray-600">SaaS agreement with robust SLAs.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Our IT Practice?",
        content: `
          <p>Anticipating MeitY notifications for proactive compliance in AI and fintech.</p>
          <ul className="mt-4 space-y-2">
            <li>• Licensing and technology transfer</li>
            <li>• Privacy impact assessments</li>
            <li>• Digital forensics support</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is DPDP Act?</h5>
              <p className="text-sm text-gray-600">India's data privacy law mandating consent and breach reporting.</p>
            </div>
            <div>
              <h5 className="font-semibold">Do you handle cyber audits?</h5>
              <p className="text-sm text-gray-600">Yes, with CERT-In certified experts.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Akhil Roy",
        position: "CTO, Fintech Startup",
        quote: "Their privacy framework made us investor-ready overnight.",
        avatar: "/images/testimonials/akhil.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Divya Chen",
        position: "Compliance Officer",
        quote: "Handled IT Act complexities seamlessly for our platform.",
        avatar: "/images/testimonials/divya.jpg",
        rating: 5
      }
    ],
    relatedServices: ["intellectual-property-law", "corporate-commercial-advisory", "legal-drafting-documentation"],
    seo: {
      title: "Information Technology & Data Protection | The Indian Legal Associates",
      description: "Advisory on IT contracts, data privacy, cybersecurity, and digital compliance under IT Act and DPDP.",
      keywords: ["IT law", "data protection", "cybersecurity", "data privacy", "IT contracts", "DPDP Act"],
      image: "/images/services/it-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/information-technology-data-protection"
    },
    stats: [
      { icon: "Globe", value: "100+", label: "Apps Audited" },
      { icon: "Shield", value: "0%", label: "Data Breaches" },
      { icon: "Users", value: "200+", label: "Policies Developed" },
      { icon: "TrendingUp", value: "24/7", label: "Incident Response" }
    ]
  },
  {
    id: "14",
    title: "Taxation & Accounting",
    slug: "taxation-and-accounting",
    excerpt: "Advisory and compliance for direct and indirect tax matters.",
    heroImage: "/images/services/tax-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We provide tax planning, GST advisory, representation before tax authorities, and accounting consultancy. Our goal is to deliver practical solutions that optimize financial and compliance efficiency.</p>
          <p>Minimizing liabilities, maximizing savings legally.</p>
        `,
        image: "/images/services/tax-overview.jpg",
        icon: "Calculator"
      },
      {
        id: "approach",
        title: "Our Tax Optimization Strategy",
        content: `
          <p>We leverage DTAA benefits and advance rulings for structured planning.</p>
          <ul className="mt-4 space-y-2">
            <li>• GST return filings and audits</li>
            <li>• Income tax assessments and appeals</li>
            <li>• Transfer pricing documentation</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Saved ₹50 Cr. in disputes and optimized GST for exporters.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">GST Refund</h4>
              <p className="text-sm text-gray-600">₹20 Cr. claimed for inverted duty structure.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">ITAT Win</h4>
              <p className="text-sm text-gray-600">Reversal of ₹15 Cr. addition.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Our Tax Services?",
        content: `
          <p>Integrated with forensic accounting for robust representations.</p>
          <ul className="mt-4 space-y-2">
            <li>• Budget impact analysis</li>
            <li>• Expat taxation</li>
            <li>• Virtual CFO services</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is input tax credit?</h5>
              <p className="text-sm text-gray-600">Credit for taxes paid on inputs, offset against output liability.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to appeal tax orders?</h5>
              <p className="text-sm text-gray-600">Via CIT(A) or ITAT within statutory limits.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Mohan Lal",
        position: "CFO, Manufacturing",
        quote: "Their planning slashed our effective tax rate by 12%.",
        avatar: "/images/testimonials/mohan.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Swati Gupta",
        position: "Tax Consultant",
        quote: "Expert appeals turned a loss into a win.",
        avatar: "/images/testimonials/swati.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "company-law-and-governance", "banking-and-finance"],
    seo: {
      title: "Taxation & Accounting | The Indian Legal Associates",
      description: "Tax planning, GST advisory, income tax appeals, and accounting consultancy to optimize financial efficiency and compliance.",
      keywords: ["taxation", "accounting", "GST advisory", "income tax", "transfer pricing", "tax appeals"],
      image: "/images/services/tax-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/taxation-and-accounting"
    },
    stats: [
      { icon: "Calculator", value: "₹50Cr+", label: "Tax Savings" },
      { icon: "Shield", value: "100%", label: "Audit Success" },
      { icon: "Users", value: "500+", label: "Returns Filed" },
      { icon: "TrendingUp", value: "12%", label: "Effective Rate Reduction" }
    ]
  },
  {
    id: "15",
    title: "Energy & Environment Law",
    slug: "energy-and-environment-law",
    excerpt: "Legal support for environmental compliance and energy sector regulation.",
    heroImage: "/images/services/energy-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We advise on energy projects, renewable initiatives, and environmental clearances. Our lawyers assist in compliance with pollution control laws and representation before NGT.</p>
          <p>Sustainable energy solutions with green compliance.</p>
        `,
        image: "/images/services/energy-overview.jpg",
        icon: "Leaf"
      },
      {
        id: "approach",
        title: "Our Green Strategy",
        content: `
          <p>We secure EIA approvals and draft PPAs for renewables.</p>
          <ul className="mt-4 space-y-2">
            <li>• REA filings and subsidies</li>
            <li>• NGT litigation and compliance</li>
            <li>• Carbon credit advisory</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Obtained clearances for 1 GW solar project and defended against pollution fines.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Solar PPA</h4>
              <p className="text-sm text-gray-600">Secured 25-year off-take agreement.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">NGT Defence</h4>
              <p className="text-sm text-gray-600">Quashed ₹10 Cr. penalty via compliance proof.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Energy Law with Us?",
        content: `
          <p>Expertise in MNRE policies and international green bonds.</p>
          <ul className="mt-4 space-y-2">
            <li>• EIA and CRZ consultations</li>
            <li>• Waste management regulations</li>
            <li>• ESG reporting</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is EIA?</h5>
              <p className="text-sm text-gray-600">Environmental Impact Assessment for project approvals.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to get renewable subsidies?</h5>
              <p className="text-sm text-gray-600">Via SECI tenders and state policies.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Ravi Shankar",
        position: "Renewable Energy CEO",
        quote: "Cleared our wind farm hurdles in record time.",
        avatar: "/images/testimonials/ravi.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Indira Menon",
        position: "Environmental Officer",
        quote: "NGT win preserved our operations sustainably.",
        avatar: "/images/testimonials/indira.jpg",
        rating: 5
      }
    ],
    relatedServices: ["infrastructure-and-construction-law", "litigation-support", "corporate-commercial-advisory"],
    seo: {
      title: "Energy & Environment Law | The Indian Legal Associates",
      description: "Legal advisory for energy projects, environmental clearances, renewable energy, and NGT representation with sustainability focus.",
      keywords: ["energy law", "environment law", "renewable energy", "EIA", "NGT", "pollution control"],
      image: "/images/services/energy-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/energy-and-environment-law"
    },
    stats: [
      { icon: "Leaf", value: "1GW+", label: "Projects Cleared" },
      { icon: "Shield", value: "100%", label: "EIA Approvals" },
      { icon: "Users", value: "50+", label: "Energy Clients" },
      { icon: "TrendingUp", value: "25", label: "Year PPAs Secured" }
    ]
  },
  {
    id: "16",
    title: "Infrastructure & Construction Law",
    slug: "infrastructure-and-construction-law",
    excerpt: "Advisory for infrastructure, construction, and real estate development projects.",
    heroImage: "/images/services/infra-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We draft and review EPC contracts, PPP agreements, and construction documentation. Our team represents clients in project disputes and regulatory matters.</p>
          <p>Building tomorrow's infrastructure, today.</p>
        `,
        image: "/images/services/infra-overview.jpg",
        icon: "HardDrive"
      },
      {
        id: "approach",
        title: "Our Project Advisory",
        content: `
          <p>We mitigate risks in FIDIC contracts and arbitrate delay claims.</p>
          <ul className="mt-4 space-y-2">
            <li>• Bid document preparation</li>
            <li>• Variation and extension claims</li>
            <li>• Defect liability management</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Awarded ₹500 Cr. extension for metro project delays.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">PPP Agreement</h4>
              <p className="text-sm text-gray-600">Structured highway BOT model.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Dispute Arbitration</h4>
              <p className="text-sm text-gray-600">₹200 Cr. claim upheld for force majeure.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Infrastructure with Us?",
        content: `
          <p>Handling NHAI, MoRTH projects with end-to-end legal cover.</p>
          <ul className="mt-4 space-y-2">
            <li>• FIDIC and NEC expertise</li>
            <li>• Land acquisition support</li>
            <li>• Insurance and bonding</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is EPC contract?</h5>
              <p className="text-sm text-gray-600">Engineering, Procurement, Construction turnkey model.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to handle delays?</h5>
              <p className="text-sm text-gray-600">Via EOT claims with evidence.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Prakash Rao",
        position: "Infra Developer",
        quote: "Their contract drafting avoided costly overruns.",
        avatar: "/images/testimonials/prakash.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Lila Sen",
        position: "Project Manager",
        quote: "Arbitration win recovered our escalation costs fully.",
        avatar: "/images/testimonials/lila.jpg",
        rating: 5
      }
    ],
    relatedServices: ["energy-and-environment-law", "property-real-estate", "arbitration-and-adr"],
    seo: {
      title: "Infrastructure & Construction Law | The Indian Legal Associates",
      description: "Advisory for EPC contracts, PPP agreements, project disputes, and regulatory compliance in infrastructure and construction.",
      keywords: ["infrastructure law", "construction law", "EPC contracts", "PPP", "project disputes", "FIDIC"],
      image: "/images/services/infra-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/infrastructure-and-construction-law"
    },
    stats: [
      { icon: "HardDrive", value: "₹500Cr+", label: "Extensions Awarded" },
      { icon: "Shield", value: "100%", label: "Contract Compliance" },
      { icon: "Users", value: "100+", label: "Projects Advised" },
      { icon: "TrendingUp", value: "200Cr+", label: "Claims Won" }
    ]
  },
  {
    id: "17",
    title: "Media, Sports & Entertainment Law",
    slug: "media-sports-entertainment-law",
    excerpt: "Representation and advisory in media, entertainment, and sports-related legal issues.",
    heroImage: "/images/services/media-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We provide legal services to production houses, artists, and broadcasters in IP, contracts, and licensing matters. Our services include sports sponsorship, talent management, and digital content regulation.</p>
          <p>Spotlight on legal protection for creative industries.</p>
        `,
        image: "/images/services/media-overview.jpg",
        icon: "Tv"
      },
      {
        id: "approach",
        title: "Our Entertainment Strategy",
        content: `
          <p>We negotiate artist agreements and enforce rights under the Copyright Act.</p>
          <ul className="mt-4 space-y-2">
            <li>• Content licensing and syndication</li>
            <li>• Sponsorship and endorsement deals</li>
            <li>• Defamation and privacy suits</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Secured ₹50 Cr. film rights deal and defended athlete in doping dispute.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Film Co-Production</h4>
              <p className="text-sm text-gray-600">Cross-border agreements finalized.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Sports Endorsement</h4>
              <p className="text-sm text-gray-600">₹10 Cr. deal with morality clauses.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Media Law with Us?",
        content: `
          <p>Covering OTT regulations and NBA/IFFCO disputes.</p>
          <ul className="mt-4 space-y-2">
            <li>• Talent agency setups</li>
            <li>• Music rights management</li>
            <li>• Broadcast rights negotiation</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What rights do artists have?</h5>
              <p className="text-sm text-gray-600">Moral and economic under Copyright Act.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to protect content online?</h5>
              <p className="text-sm text-gray-600">Via DMCA notices and IT Act provisions.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Asha Khan",
        position: "Film Producer",
        quote: "Their licensing deals opened international markets for us.",
        avatar: "/images/testimonials/asha.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Vikrant Singh",
        position: "Sports Agent",
        quote: "Handled my client's contract flawlessly – career booster.",
        avatar: "/images/testimonials/vikrant.jpg",
        rating: 5
      }
    ],
    relatedServices: ["intellectual-property-law", "arbitration-and-adr", "legal-drafting-documentation"],
    seo: {
      title: "Media, Sports & Entertainment Law | The Indian Legal Associates",
      description: "Legal services for production houses, artists, broadcasters, sports sponsorship, and digital content regulation in entertainment.",
      keywords: ["media law", "sports law", "entertainment law", "IP licensing", "talent contracts", "broadcast rights"],
      image: "/images/services/media-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/media-sports-entertainment-law"
    },
    stats: [
      { icon: "Tv", value: "₹50Cr+", label: "Rights Deals" },
      { icon: "Shield", value: "95%", label: "Contract Success" },
      { icon: "Users", value: "100+", label: "Artists Represented" },
      { icon: "TrendingUp", value: "10Cr+", label: "Endorsements Secured" }
    ]
  },
  {
    id: "18",
    title: "Shipping & Admiralty Law",
    slug: "shipping-and-admiralty-law",
    excerpt: "Maritime and admiralty legal services for shipping and logistics sectors.",
    heroImage: "/images/services/shipping-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We represent clients in ship arrest, marine insurance, charter party disputes, and maritime claims. Our services ensure compliance with international maritime conventions and port regulations.</p>
          <p>Navigating seas of legal challenges in maritime trade.</p>
        `,
        image: "/images/services/shipping-overview.jpg",
        icon: "Anchor"
      },
      {
        id: "approach",
        title: "Our Maritime Advisory",
        content: `
          <p>We handle bills of lading disputes and cargo claims under Hague-Visby rules.</p>
          <ul className="mt-4 space-y-2">
            <li>• Ship mortgage and finance</li>
            <li>• Collision and salvage claims</li>
            <li>• Port state control compliance</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Arrested vessel for ₹100 Cr. claim and settled pollution incident amicably.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Ship Arrest</h4>
              <p className="text-sm text-gray-600">Secured release upon payment guarantee.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Cargo Dispute</h4>
              <p className="text-sm text-gray-600">Full recovery under marine policy.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Admiralty with Us?",
        content: `
          <p>Expertise in SOLAS, MARPOL, and Mumbai High Court admiralty jurisdiction.</p>
          <ul className="mt-4 space-y-2">
            <li>• Charterparty arbitration</li>
            <li>• Marine insurance claims</li>
            <li>• Crew repatriation</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is ship arrest?</h5>
              <p className="text-sm text-gray-600">Court order to detain vessel for claim security.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to claim cargo damage?</h5>
              <p className="text-sm text-gray-600">Under COGSA or carrier liability limits.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Kapil Dev",
        position: "Shipping Director",
        quote: "Their arrest action recovered our dues promptly.",
        avatar: "/images/testimonials/kapil.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Nalini Pereira",
        position: "Logistics Manager",
        quote: "Insurance claim settled without litigation hassle.",
        avatar: "/images/testimonials/nalini.jpg",
        rating: 5
      }
    ],
    relatedServices: ["litigation-support", "insurance-law", "arbitration-and-adr"],
    seo: {
      title: "Shipping & Admiralty Law | The Indian Legal Associates",
      description: "Maritime law services for ship arrest, marine insurance, charter disputes, and compliance with international conventions.",
      keywords: ["shipping law", "admiralty law", "ship arrest", "marine insurance", "charter party", "cargo claims"],
      image: "/images/services/shipping-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/shipping-and-admiralty-law"
    },
    stats: [
      { icon: "Anchor", value: "₹100Cr+", label: "Claims Recovered" },
      { icon: "Shield", value: "95%", label: "Compliance Rate" },
      { icon: "Users", value: "50+", label: "Vessels Handled" },
      { icon: "TrendingUp", value: "80%", label: "Settlement Rate" }
    ]
  },
  {
    id: "19",
    title: "Investment & Collaborations",
    slug: "investment-and-collaborations",
    excerpt: "Legal framework for foreign investment, FDI, and joint ventures.",
    heroImage: "/images/services/investment-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We advise domestic and foreign clients on investment structures, FEMA/FDI compliance, and joint ventures. Our focus is on ensuring regulatory approval and smooth cross-border transactions.</p>
          <p>Unlocking global opportunities with compliant pathways.</p>
        `,
        image: "/images/services/investment-overview.jpg",
        icon: "TrendingUp"
      },
      {
        id: "approach",
        title: "Our FDI Strategy",
        content: `
          <p>We prepare entry routes and sector caps advisory under Press Note guidelines.</p>
          <ul className="mt-4 space-y-2">
            <li>• JV agreement drafting</li>
            <li>• DPIIT approvals</li>
            <li>• Repatriation and ECB compliance</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Facilitated ₹5,000 Cr. FDI in manufacturing and structured 20+ JVs.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">FDI Approval</h4>
              <p className="text-sm text-gray-600">100% auto route for e-commerce.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">JV Formation</h4>
              <p className="text-sm text-gray-600">Equity sharing with exit clauses.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Investment Advisory?",
        content: `
          <p>Navigating PLI schemes and bilateral investment treaties.</p>
          <ul className="mt-4 space-y-2">
            <li>• Valuation and due diligence</li>
            <li>• Dispute resolution in investments</li>
            <li>• Startup funding rounds</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What is FDI policy?</h5>
              <p className="text-sm text-gray-600">DPIIT consolidated guidelines on entry routes.</p>
            </div>
            <div>
              <h5 className="font-semibold">How to repatriate profits?</h5>
              <p className="text-sm text-gray-600">Via current account after tax compliance.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Elena Rossi",
        position: "Foreign Investor",
        quote: "Smooth FDI entry into Indian market – compliant and swift.",
        avatar: "/images/testimonials/elena.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Sameer Khan",
        position: "JV Partner",
        quote: "Balanced agreement that built trust from day one.",
        avatar: "/images/testimonials/sameer.jpg",
        rating: 5
      }
    ],
    relatedServices: ["corporate-commercial-advisory", "company-law-and-governance", "legal-drafting-documentation"],
    seo: {
      title: "Investment & Collaborations Law | The Indian Legal Associates",
      description: "Legal framework for FDI, joint ventures, investment structures, and cross-border transactions with regulatory approval.",
      keywords: ["FDI", "investment law", "joint ventures", "FEMA", "DPIIT approvals", "cross-border investments"],
      image: "/images/services/investment-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/investment-and-collaborations"
    },
    stats: [
      { icon: "TrendingUp", value: "₹5,000Cr+", label: "FDI Facilitated" },
      { icon: "Shield", value: "100%", label: "Approval Rate" },
      { icon: "Users", value: "20+", label: "JVs Structured" },
      { icon: "Award", value: "95%", label: "Transaction Success" }
    ]
  },
  {
    id: "20",
    title: "Employment & Labour Compliance",
    slug: "employment-and-labour-compliance",
    excerpt: "Strategic HR and labour compliance solutions for businesses.",
    heroImage: "/images/services/labour-hero.jpg",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p>We assist organizations in implementing employment policies, POSH compliance, and labour audits. Our services aim to minimize disputes through proactive HR governance.</p>
          <p>Harmonious workplaces through compliant practices.</p>
        `,
        image: "/images/services/labour-overview.jpg",
        icon: "Shield"
      },
      {
        id: "approach",
        title: "Our Compliance Framework",
        content: `
          <p>We align with the new Labour Codes and conduct gap analyses.</p>
          <ul className="mt-4 space-y-2">
            <li>• Code on Wages implementation</li>
            <li>• POSH committee formation</li>
            <li>• Social security registrations</li>
          </ul>
        `,
        icon: "Target"
      },
      {
        id: "success-stories",
        title: "Success Stories",
        content: `
          <p>Audited 200+ factories for Code compliance, averting inspections.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">POSH Audit</h4>
              <p className="text-sm text-gray-600">Trained 1,000+ employees zero incidents.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Labour Code Rollout</h4>
              <p className="text-sm text-gray-600">Unified policies across 10 states.</p>
            </div>
          </div>
        `,
        icon: "Award"
      },
      {
        id: "why-choose-us",
        title: "Why Labour Compliance?",
        content: `
          <p>Preparing for OSH Code with risk-based audits.</p>
          <ul className="mt-4 space-y-2">
            <li>• Gig worker contracts</li>
            <li>• Gratuity and PF advisory</li>
            <li>• Dispute prevention training</li>
          </ul>
        `,
        icon: "Users"
      },
      {
        id: "faqs",
        title: "Frequently Asked Questions",
        content: `
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold">What are new Labour Codes?</h5>
              <p className="text-sm text-gray-600">Four codes consolidating 29 laws for simplification.</p>
            </div>
            <div>
              <h5 className="font-semibold">Is POSH mandatory?</h5>
              <p className="text-sm text-gray-600">Yes, for organizations with 10+ employees.</p>
            </div>
          </div>
        `,
        icon: "Eye"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Neelam Kaur",
        position: "HR Head",
        quote: "Their audit made us fully Code-compliant overnight.",
        avatar: "/images/testimonials/neelam.jpg",
        rating: 5
      },
      {
        id: "t2",
        name: "Omar Ali",
        position: "Factory Owner",
        quote: "POSH program empowered our workforce positively.",
        avatar: "/images/testimonials/omar.jpg",
        rating: 5
      }
    ],
    relatedServices: ["employment-labour-law", "corporate-commercial-advisory", "legal-drafting-documentation"],
    seo: {
      title: "Employment & Labour Compliance | The Indian Legal Associates",
      description: "Proactive HR compliance, POSH audits, and labour law advisory to minimize workplace disputes and ensure regulatory adherence.",
      keywords: ["labour compliance", "employment law", "POSH", "HR policies", "labour audits", "industrial governance"],
      image: "/images/services/labour-hero.jpg",
      canonical: "https://theindianlegalassociates.com/services/employment-and-labour-compliance"
    },
    stats: [
      { icon: "Shield", value: "200+", label: "Audits Completed" },
      { icon: "Users", value: "1,000+", label: "Employees Trained" },
      { icon: "TrendingUp", value: "0", label: "Disputes Post-Audit" },
      { icon: "Award", value: "100%", label: "Compliance Achieved" }
    ]
  }
];
