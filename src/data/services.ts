export type Service = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
};

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Litigation Support",
    slug: "litigation-support",
    excerpt:
      "Comprehensive representation in Civil, Criminal, Constitutional, and Tribunal matters.",
    content: `
Our litigation team represents clients across all courts and tribunals in India, including District Courts, High Courts, and the Supreme Court. 
We handle a wide range of cases involving civil disputes, criminal defence, constitutional challenges, and tribunal litigation. 
Our focus is on delivering result-oriented advocacy with strategic insight and meticulous preparation.`,
  },
  {
    id: "2",
    title: "Corporate & Commercial Advisory",
    slug: "corporate-commercial-advisory",
    excerpt:
      "End-to-end corporate advisory for compliance, structuring, contracts, and transactions.",
    content: `
We assist companies with formation, structuring, regulatory compliance, contract negotiation, mergers, acquisitions, and joint ventures. 
Our team provides clear, pragmatic, and business-focused legal solutions that align with corporate objectives and risk frameworks.`,
  },
  {
    id: "3",
    title: "Consumer & Motor Accident Claims",
    slug: "consumer-motor-accident-claims",
    excerpt:
      "Representation in consumer disputes and motor accident compensation cases.",
    content: `
We represent consumers in disputes involving defective goods, unfair trade practices, and service deficiencies before consumer commissions. 
Our team also assists victims in motor accident claims, ensuring timely and fair compensation through both negotiation and litigation.`,
  },
  {
    id: "4",
    title: "Family & Matrimonial Law",
    slug: "family-matrimonial-law",
    excerpt:
      "Guidance and representation in divorce, custody, maintenance, and inheritance disputes.",
    content: `
We provide compassionate and confidential assistance in all family law matters, including divorce, maintenance, domestic violence, adoption, succession, and guardianship. 
Our aim is to resolve disputes amicably through mediation, or through effective litigation when required.`,
  },
  {
    id: "5",
    title: "Property & Real Estate",
    slug: "property-real-estate",
    excerpt:
      "Comprehensive services for property transactions, ownership disputes, and documentation.",
    content: `
We assist with land acquisition, title verification, sale/purchase transactions, lease agreements, and property litigation. 
Our real estate experts ensure due diligence and compliance with applicable laws for both residential and commercial properties.`,
  },
  {
    id: "6",
    title: "Arbitration & ADR",
    slug: "arbitration-and-adr",
    excerpt:
      "Alternative dispute resolution through arbitration, mediation, and conciliation.",
    content: `
We promote out-of-court settlements through structured ADR mechanisms, saving clients time and costs. 
Our lawyers represent clients in both institutional and ad hoc arbitration, domestically and internationally.`,
  },
  {
    id: "7",
    title: "Employment & Labour Law",
    slug: "employment-labour-law",
    excerpt:
      "Advisory and representation for employers and employees in labour disputes.",
    content: `
We advise on employment contracts, workplace policies, industrial disputes, retrenchment, and compliance with labour regulations. 
Our representation spans labour courts, industrial tribunals, and high courts across India.`,
  },
  {
    id: "8",
    title: "Legal Drafting & Documentation",
    slug: "legal-drafting-documentation",
    excerpt:
      "Expert drafting of contracts, agreements, notices, and legal opinions.",
    content: `
Our drafting services include MoUs, partnership deeds, commercial contracts, NDAs, and legal opinions tailored to client needs. 
We ensure every document is legally sound, enforceable, and aligned with the client’s objectives.`,
  },

  // ===== Specialized Areas of Practice =====
  {
    id: "9",
    title: "Banking & Finance",
    slug: "banking-and-finance",
    excerpt:
      "Comprehensive legal advisory for banking, lending, and financial transactions.",
    content: `
We advise banks, NBFCs, and borrowers on loan documentation, project financing, recovery actions, and regulatory compliance. 
Our services also cover SARFAESI proceedings and debt restructuring.`,
  },
  {
    id: "10",
    title: "Company Law & Governance",
    slug: "company-law-and-governance",
    excerpt:
      "Corporate law compliance, governance, and board advisory services.",
    content: `
We assist companies in complying with the Companies Act, corporate governance frameworks, and ROC filings. 
We also handle shareholder disputes and director liability issues.`,
  },
  {
    id: "11",
    title: "Insolvency & Bankruptcy (IBC)",
    slug: "insolvency-and-bankruptcy",
    excerpt:
      "Representation under IBC for creditors, debtors, and resolution professionals.",
    content: `
Our team provides advisory and litigation services under the Insolvency and Bankruptcy Code, 2016. 
We represent clients before NCLT/NCLAT in corporate insolvency resolution processes and liquidation proceedings.`,
  },
  {
    id: "12",
    title: "Intellectual Property Law",
    slug: "intellectual-property-law",
    excerpt:
      "Protection of creative and commercial IP rights including trademarks, patents, and copyrights.",
    content: `
We handle registration, enforcement, and infringement actions for trademarks, patents, and copyrights. 
Our services also cover brand strategy, licensing, and IP portfolio management.`,
  },
  {
    id: "13",
    title: "Information Technology & Data Protection",
    slug: "information-technology-data-protection",
    excerpt:
      "Advisory on IT contracts, data privacy, and digital compliance frameworks.",
    content: `
We assist clients in navigating technology regulations, drafting software agreements, and ensuring compliance with the IT Act and data privacy laws. 
Our team advises on cybersecurity, online liability, and emerging digital policy.`,
  },
  {
    id: "14",
    title: "Taxation & Accounting",
    slug: "taxation-and-accounting",
    excerpt:
      "Advisory and compliance for direct and indirect tax matters.",
    content: `
We provide tax planning, GST advisory, representation before tax authorities, and accounting consultancy. 
Our goal is to deliver practical solutions that optimize financial and compliance efficiency.`,
  },
  {
    id: "15",
    title: "Energy & Environment Law",
    slug: "energy-and-environment-law",
    excerpt:
      "Legal support for environmental compliance and energy sector regulation.",
    content: `
We advise on energy projects, renewable initiatives, and environmental clearances. 
Our lawyers assist in compliance with pollution control laws and representation before NGT.`,
  },
  {
    id: "16",
    title: "Infrastructure & Construction Law",
    slug: "infrastructure-and-construction-law",
    excerpt:
      "Advisory for infrastructure, construction, and real estate development projects.",
    content: `
We draft and review EPC contracts, PPP agreements, and construction documentation. 
Our team represents clients in project disputes and regulatory matters.`,
  },
  {
    id: "17",
    title: "Media, Sports & Entertainment Law",
    slug: "media-sports-entertainment-law",
    excerpt:
      "Representation and advisory in media, entertainment, and sports-related legal issues.",
    content: `
We provide legal services to production houses, artists, and broadcasters in IP, contracts, and licensing matters. 
Our services include sports sponsorship, talent management, and digital content regulation.`,
  },
  {
    id: "18",
    title: "Shipping & Admiralty Law",
    slug: "shipping-and-admiralty-law",
    excerpt:
      "Maritime and admiralty legal services for shipping and logistics sectors.",
    content: `
We represent clients in ship arrest, marine insurance, charter party disputes, and maritime claims. 
Our services ensure compliance with international maritime conventions and port regulations.`,
  },
  {
    id: "19",
    title: "Investment & Collaborations",
    slug: "investment-and-collaborations",
    excerpt:
      "Legal framework for foreign investment, FDI, and joint ventures.",
    content: `
We advise domestic and foreign clients on investment structures, FEMA/FDI compliance, and joint ventures. 
Our focus is on ensuring regulatory approval and smooth cross-border transactions.`,
  },
  {
    id: "20",
    title: "Employment & Labour Compliance",
    slug: "employment-and-labour-compliance",
    excerpt:
      "Strategic HR and labour compliance solutions for businesses.",
    content: `
We assist organizations in implementing employment policies, POSH compliance, and labour audits. 
Our services aim to minimize disputes through proactive HR governance.`,
  },
];
