export const siteConfig = {
  name: "Medovon Research Institute",
  shortName: "Medovon",
  tagline: "Advancing Medical Research That Improves Lives.",
  description:
    "Medovon Research Institute pioneers cutting-edge biomedical research, clinical innovation, public health studies, and scientific discovery that transform healthcare.",
  email: "research@medovon.org",
  phone: "+1 (415) 555-0198",
  address: "1180 Harborview Research Park, Boston, MA 02110",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research-areas" },
  { label: "Process", href: "#process" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const aboutCounters = [
  { label: "Years of Research", value: 15, suffix: "+" },
  { label: "Published Papers", value: 250, suffix: "+" },
  { label: "Researchers", value: 100, suffix: "+" },
  { label: "Clinical Studies", value: 60, suffix: "+" },
];

export const missionVisionValues = [
  {
    key: "Mission",
    icon: "Target",
    text: "To accelerate the translation of rigorous scientific discovery into treatments, policies, and technologies that measurably improve patient outcomes worldwide.",
  },
  {
    key: "Vision",
    icon: "Eye",
    text: "A future where every clinical decision is informed by open, verifiable, and reproducible research — closing the gap between laboratory insight and human health.",
  },
  {
    key: "Values",
    icon: "HeartPulse",
    text: "Scientific integrity, ethical rigor, radical collaboration, and an unwavering focus on the patients our findings are ultimately meant to serve.",
  },
];

export const researchAreas = [
  {
    icon: "Microscope",
    title: "Biomedical Research",
    description:
      "Foundational investigation into disease mechanisms, cellular biology, and molecular pathways that underpin modern medicine.",
  },
  {
    icon: "FlaskConical",
    title: "Clinical Trials",
    description:
      "Multi-phase, ethically governed trials designed to validate new therapies with statistical and clinical rigor.",
  },
  {
    icon: "Dna",
    title: "Genomics",
    description:
      "Large-scale genomic sequencing and analysis to uncover hereditary risk, precision diagnostics, and gene-based therapy.",
  },
  {
    icon: "Globe2",
    title: "Public Health",
    description:
      "Population-level studies on disease prevention, health equity, and the social determinants of wellbeing.",
  },
  {
    icon: "Pill",
    title: "Pharmaceutical Innovation",
    description:
      "Translational drug discovery pipelines, from compound screening to formulation and regulatory pathway design.",
  },
  {
    icon: "BrainCircuit",
    title: "AI in Medicine",
    description:
      "Machine learning models for diagnostic imaging, predictive risk scoring, and accelerated biomedical discovery.",
  },
];

export const whyChooseUs = [
  {
    title: "International Collaborations",
    description:
      "Active research partnerships spanning 15+ countries, connecting Medovon to the world's leading medical institutions.",
    icon: "Globe2",
  },
  {
    title: "Modern Laboratories",
    description:
      "State-of-the-art wet labs, genomics suites, and imaging facilities built for reproducible, high-precision science.",
    icon: "FlaskConical",
  },
  {
    title: "Highly Qualified Scientists",
    description:
      "A multidisciplinary team of clinicians, PhDs, and biostatisticians recruited from top research programs globally.",
    icon: "GraduationCap",
  },
  {
    title: "Ethical Research",
    description:
      "Every study is reviewed under independent ethics oversight, with full informed consent and data transparency.",
    icon: "ShieldCheck",
  },
  {
    title: "Data-Driven Innovation",
    description:
      "Decisions grounded in longitudinal datasets, real-world evidence, and reproducible statistical methodology.",
    icon: "LineChart",
  },
  {
    title: "Global Impact",
    description:
      "Findings deployed through policy partnerships and clinical networks reaching underserved populations worldwide.",
    icon: "Target",
  },
];

export const featuredResearch = [
  {
    id: "rs-01",
    category: "Genomics",
    title: "Mapping Rare Genetic Variants in Pediatric Cardiomyopathy",
    date: "March 2026",
    leadResearcher: "Dr. Elena Vasquez",
    status: "Peer Review",
    summary:
      "A multi-site genomic cohort study identifying novel variant signatures associated with early-onset cardiomyopathy in children.",
    fullSummary:
      "This study sequenced whole-exome data from 1,240 pediatric patients across nine partner hospitals to identify previously uncharacterized genetic variants driving early-onset cardiomyopathy. The findings establish a new variant-classification framework now under review for inclusion in international pediatric cardiology guidelines, with the potential to shorten time-to-diagnosis from years to weeks.",
  },
  {
    id: "rs-02",
    category: "Pharmaceutical Innovation",
    title: "Novel Compound Pathway for Treatment-Resistant Inflammation",
    date: "January 2026",
    leadResearcher: "Dr. Marcus Chen",
    status: "Phase II Trial",
    summary:
      "A first-in-class small molecule showing significant reduction in inflammatory biomarkers across resistant patient cohorts.",
    fullSummary:
      "Building on five years of target discovery, this Phase II trial evaluates a first-in-class small molecule that selectively inhibits a previously undruggable inflammatory pathway. Interim results across 340 patients show a 42% reduction in key inflammatory biomarkers with a favorable safety profile, positioning the compound for expedited regulatory review.",
  },
  {
    id: "rs-03",
    category: "AI in Medicine",
    title: "Deep Learning Model for Early Sepsis Detection",
    date: "November 2025",
    leadResearcher: "Dr. Priya Raman",
    status: "Completed",
    summary:
      "A predictive model detecting sepsis onset up to 6 hours earlier than standard clinical scoring systems.",
    fullSummary:
      "Trained on over 2 million ICU data points across partner health systems, this model predicts sepsis onset an average of 6.2 hours before conventional clinical scoring, giving care teams a critical early window for intervention. The model has completed validation and is now entering deployment planning with three partner hospital networks.",
  },
  {
    id: "rs-04",
    category: "Public Health",
    title: "Longitudinal Study on Urban Air Quality and Respiratory Health",
    date: "September 2025",
    leadResearcher: "Dr. Amara Osei",
    status: "Ongoing",
    summary:
      "A ten-year population study tracking respiratory outcomes across densely populated urban environments.",
    fullSummary:
      "This decade-long cohort study tracks 18,000 participants across six metropolitan regions, correlating fine particulate exposure with long-term respiratory and cardiovascular outcomes. Early findings have already informed municipal air-quality policy recommendations in two partner cities, with full results expected in 2028.",
  },
  {
    id: "rs-05",
    category: "Clinical Trials",
    title: "Adaptive Trial Design for Rare Autoimmune Disorders",
    date: "July 2025",
    leadResearcher: "Dr. Jonas Weber",
    status: "Phase I Trial",
    summary:
      "A response-adaptive trial framework accelerating evidence generation for ultra-rare autoimmune conditions.",
    fullSummary:
      "Traditional trial designs struggle with ultra-rare conditions due to small eligible populations. This adaptive, Bayesian-informed trial framework reallocates participants toward more promising arms in real time, reducing the sample size required to reach statistical confidence by an estimated 35% without compromising safety oversight.",
  },
  {
    id: "rs-06",
    category: "Biomedical Research",
    title: "Cellular Senescence Pathways in Age-Related Disease",
    date: "May 2025",
    leadResearcher: "Dr. Elena Vasquez",
    status: "Completed",
    summary:
      "Foundational research identifying senescent cell signaling as a therapeutic target for age-related decline.",
    fullSummary:
      "This foundational study characterizes the signaling cascades through which senescent cells contribute to tissue-level aging and chronic disease. The identified pathway has since become the basis for two follow-on pharmaceutical partnerships exploring senolytic compound development.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Idea",
    description:
      "Hypotheses emerge from clinical observation, literature gaps, and cross-disciplinary insight.",
    icon: "Lightbulb",
  },
  {
    number: "02",
    title: "Research Proposal",
    description:
      "Formal study design, ethics review, and funding alignment before any data is collected.",
    icon: "FileText",
  },
  {
    number: "03",
    title: "Laboratory Analysis",
    description:
      "Controlled experimentation and data collection inside Medovon's certified laboratories.",
    icon: "TestTube",
  },
  {
    number: "04",
    title: "Clinical Validation",
    description:
      "Findings are tested in real clinical settings across our partner hospital network.",
    icon: "Stethoscope",
  },
  {
    number: "05",
    title: "Publication",
    description:
      "Peer-reviewed publication ensures transparency and reproducibility of every result.",
    icon: "BookOpen",
  },
  {
    number: "06",
    title: "Implementation",
    description:
      "Validated research is deployed into clinical practice, policy, and partner health systems.",
    icon: "Rocket",
  },
];

export const statistics = [
  { label: "Researchers", value: 100, suffix: "+" },
  { label: "Published Papers", value: 250, suffix: "+" },
  { label: "Partner Institutions", value: 40, suffix: "+" },
  { label: "Countries Served", value: 15, suffix: "+" },
];

export const partners = [
  "Northbridge University",
  "Harborview Medical Center",
  "Global Health Assembly",
  "Meridian Health NGO",
  "National Biomedical Agency",
  "Ashcombe Institute of Technology",
  "Sterling Children's Hospital",
  "Continental Health Alliance",
];

export const testimonials = [
  {
    quote:
      "Medovon's genomics team delivered findings with a level of rigor and speed we hadn't seen from an external research partner before. It genuinely changed our clinical protocols.",
    name: "Dr. Sarah Whitfield",
    role: "Chief of Cardiology",
    org: "Harborview Medical Center",
  },
  {
    quote:
      "Their adaptive trial framework let us reach statistical confidence on a rare-disease study that would have been impossible under a traditional design. Exceptional methodology.",
    name: "Dr. Michael Torres",
    role: "Director of Clinical Research",
    org: "Northbridge University",
  },
  {
    quote:
      "What stands out is the transparency — every dataset, every method, fully documented. It's the kind of research partner regulators and clinicians can actually trust.",
    name: "Amara Osei, PhD",
    role: "Public Health Lead",
    org: "Global Health Assembly",
  },
];

export const newsArticles = [
  {
    id: "news-01",
    category: "Publication",
    title: "Medovon Publishes Landmark Sepsis Detection Study in Nature Medicine",
    excerpt:
      "Our AI-driven early detection model has been peer-reviewed and published, marking a milestone for predictive critical care.",
    date: "Mar 12, 2026",
  },
  {
    id: "news-02",
    category: "Partnership",
    title: "Medovon Announces Genomics Partnership with Northbridge University",
    excerpt:
      "A new five-year collaboration will expand rare-disease sequencing capacity across three continents.",
    date: "Feb 24, 2026",
  },
  {
    id: "news-03",
    category: "Institute News",
    title: "New Clinical Validation Wing Opens at Boston Headquarters",
    excerpt:
      "The expanded facility triples Medovon's Phase I–II trial capacity and adds dedicated pediatric research suites.",
    date: "Jan 08, 2026",
  },
];

export const footerLinks = {
  Research: [
    { label: "Research Areas", href: "#research-areas" },
    { label: "Featured Studies", href: "#featured-research" },
    { label: "Research Process", href: "#process" },
    { label: "Publications", href: "#news" },
  ],
  Institute: [
    { label: "About Medovon", href: "#about" },
    { label: "Departments", href: "#research-areas" },
    { label: "Careers", href: "#contact" },
    { label: "Partners", href: "#partners" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Ethics Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};
