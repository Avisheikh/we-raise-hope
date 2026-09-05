export const site = {
  name: "We Raise Hope",
  legalName: "We Raise Hope Inc.",
  alternateName: "We Raise Hope Global",
  tagline: "Give a child in rural Nepal the chance to learn, heal, and thrive.",
  description:
    "U.S. 501(c)(3) funding healthcare, education, and opportunity in rural Nepal with Bodgaun Hospital and local partners.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.RAILWAY_PUBLIC_DOMAIN
      ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
      : "https://weraisehope.org"),
  email: "info@weraisehope.org",
  phone: "+1 (917) 863-6902",
  phoneTel: "+19178636902",
  ein: "99-2747198",
  nonprofitStatus: "501(c)(3)",
  publicCharity: "170(b)(1)(A)(vi)",
  exemptionEffective: "September 19, 2023",
  founded: 2015,
  programPercent: 95,
  address: {
    line1: "New York",
    city: "New York",
    region: "NY",
    postalCode: "",
    country: "United States",
  },
  social: {
    facebook: "https://www.facebook.com/weraisehopeglobal",
    instagram: "https://www.instagram.com/weraisehopeglobal/",
    youtube: "https://youtube.com/@We_Raise_Hope",
    tiktok: "https://www.tiktok.com/@weraisehopeglobal",
    linkedin: "https://www.linkedin.com/company/79336901/",
  },
  givebutterAccountId:
    process.env.NEXT_PUBLIC_GIVEBUTTER_ACCOUNT ?? "ylAigQK73xNS12hH",
  givebutterWidgetId: process.env.NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN ?? "LeZZmE",
  givebutterFallbackUrl:
    process.env.NEXT_PUBLIC_GIVEBUTTER_URL ?? "/givebutter-embed.html",
  candidUrl:
    process.env.NEXT_PUBLIC_CANDID_URL ??
    "https://app.candid.org/profile/16282019/we-raise-hope-inc-99-2747198",
  candidPrintUrl:
    process.env.NEXT_PUBLIC_CANDID_PRINT_URL ??
    "https://app.candid.org/profile/16282019/print",
  charityNavigatorUrl: process.env.NEXT_PUBLIC_CHARITY_NAVIGATOR_URL ?? "",
  zelleHandle: process.env.NEXT_PUBLIC_ZELLE_HANDLE ?? "info@weraisehope.org",
  zelleMemo: "NEPAL RELIEF",
  venmoHandle: "@weraisehopeNYC",
  venmoUrl: "https://venmo.com/u/weraisehopeNYC",
  eventsUrl: "/events",
  eventsPortalUrl: "https://events.weraisehope.org",
  irsEoSearch: "https://apps.irs.gov/app/eos/",
  partners: [
    {
      name: "Jay Nepal NGO",
      href: "https://www.jaynepal.org",
      role: "Nepal operating partner — delivers programs on the ground",
    },
    {
      name: "Indrawati Rural Municipality",
      href: "https://indrawatimun.gov.np",
      role: "Local government partner — community ownership and public health systems",
    },
    {
      name: "Bodgaun Primary Hospital",
      href: "https://bodgaunhospital.jaynepal.org",
      role: "Healthcare facility in Sindhupalchowk serving rural families",
    },
  ],
} as const;

export const partnerNames = site.partners.map((p) => p.name);

/** Explicit operating model for donors, search engines, and AI systems */
export const operatingModel = [
  {
    name: "We Raise Hope",
    role: "U.S. 501(c)(3) fundraising, stewardship, and program support so care and classrooms stay funded.",
    cta: { href: "/donate", label: "Support the mission" },
    icon: "hope" as const,
  },
  {
    name: "Implementing Body",
    role: "Jay Nepal NGO leads delivery on the ground with local partners.",
    cta: { href: "/programs", label: "See the work" },
    icon: "partners" as const,
    lead: {
      name: "Jay Nepal NGO",
      role: "Nepal operating partner delivering healthcare, education, and community programs",
    },
    partners: [
      {
        name: "Indrawati Rural Municipality",
        role: "Local government partner for public systems and community ownership",
      },
      {
        name: "Bodgaun Primary Hospital",
        role: "Rural hospital with emergency care, diagnostics, and an operating surgical room",
      },
      {
        name: "School of Social Development",
        role: "Children’s education, IT education, and sports training",
      },
    ],
  },
] as const;

export const navGroups = [
  {
    label: "Our Work",
    links: [
      { href: "/bodgaun-hospital", label: "Bodgaun Hospital" },
      { href: "/programs", label: "Programs" },
      { href: "/programs#education", label: "Education & IT" },
      { href: "/programs#clean-water", label: "Water" },
      { href: "/programs#livelihoods", label: "Livelihoods" },
    ],
  },
  {
    label: "Impact",
    links: [
      { href: "/impact", label: "Results" },
      { href: "/news", label: "Field updates" },
      { href: "/where-money-goes", label: "Where money goes" },
    ],
  },
  {
    label: "About",
    links: [
      { href: "/about", label: "Who we are" },
      { href: "/team", label: "Leadership" },
      { href: "/trust", label: "Transparency & financials" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Get involved",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/events", label: "Events" },
      { href: "/get-involved", label: "Volunteer & partner" },
      { href: "/ways-to-give", label: "Ways to give" },
    ],
  },
] as const;

/** Flat primary nav for header */
export const navLinks = [
  { href: "/bodgaun-hospital", label: "Hospital" },
  { href: "/programs", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/news", label: "Updates" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/trust", label: "Transparency" },
  { href: "/get-involved", label: "Get Involved" },
] as const;

/** Lifetime / cumulative proof points */
export const impactStats = [
  {
    value: "20,000+",
    label: "People served in healthcare",
    detail: "Bodgaun Primary Hospital catchment and community care",
    period: "Lifetime",
    source: "Jay Nepal / hospital reporting",
  },
  {
    value: "8K+",
    label: "Patients treated",
    detail: "Hospital care and outreach completed to date",
    period: "Lifetime",
    source: "Jay Nepal / hospital reporting",
  },
  {
    value: "13+ / 50+",
    label: "Major / minor surgeries",
    detail: "Surgical care delivered at Bodgaun Primary Hospital",
    period: "Lifetime",
    source: "Hospital surgical reporting",
  },
  {
    value: "70+",
    label: "Students in sports",
    detail: "Soccer program with dedicated coach support",
    period: "Current program",
    source: "Education & sports partner reporting",
  },
] as const;

/** Latest monthly field snapshot — August 2026 */
export const liveImpact = {
  period: "August 2026",
  headline: "550+ patients a month. Surgery is running. Help keep it going.",
  metrics: [
    {
      value: "550+",
      label: "Patients treated monthly",
      detail: "Bodgaun Primary Hospital — August 2026",
    },
    {
      value: "13",
      label: "Major surgeries",
      detail: "August 2026 surgical activity",
    },
    {
      value: "50+",
      label: "Minor surgeries",
      detail: "August 2026 surgical activity",
    },
    {
      value: "350+",
      label: "IT students",
      detail: "Currently learning digital skills",
    },
    {
      value: "88",
      label: "Children in education",
      detail: "Supported in our education program",
    },
  ],
} as const;

/** Prior snapshot retained for the evidence room */
export const aprilImpact = [
  { value: "332", label: "Patients served at Bodgaun (Apr 2026)" },
  { value: "298", label: "IT students across 4 schools" },
  { value: "22", label: "Teachers trained on digital systems" },
  { value: "85", label: "Kindergarten enrollments" },
] as const;

export const fieldUpdates = [
  {
    slug: "august-2026-hospital-activity",
    date: "2026-08-31",
    title: "August 2026: 550+ patients, 13 major and 50+ minor surgeries",
    summary:
      "Bodgaun Primary Hospital is treating 550+ patients monthly. August reporting includes 13 major surgeries and 50+ minor surgeries, plus 350+ IT students and 88 children in education support.",
    body: "August 2026 field reporting confirms sustained clinical volume at Bodgaun Primary Hospital—550+ patients treated in the month, 13 major surgeries, and 50+ minor surgeries. Education partners currently support 350+ IT students learning digital skills and 88 children in our education program. Lifetime healthcare reach includes 20,000+ people served and 8K+ patients treated. Sports programming now supports 70+ students with a soccer coach.",
    href: "/news/august-2026-hospital-activity",
  },
  {
    slug: "may-2026-surgery-operating",
    date: "2026-05-31",
    title: "May 2026: Surgery operating with growing patient volume",
    summary:
      "Earlier 2026 field reporting documented sustained surgical activity and expanding education and IT enrollment.",
    body: "May 2026 partner reporting documented continued clinical activity at Bodgaun Primary Hospital alongside education and IT programs that kept students in school and digital-skills pathways.",
    href: "/news/may-2026-surgery-operating",
  },
  {
    slug: "april-2026-first-surgeries",
    date: "2026-04-30",
    title: "April 2026: Early surgical milestones at Bodgaun",
    summary:
      "332 patients served; early appendix and lipoma operations; kindergarten and IT enrollment continued to grow.",
    body: "April 2026 field reporting recorded 332 patients at Bodgaun, early surgical milestones including appendix and lipoma procedures, 85 kindergarten enrollments, 298 IT students across four schools, 22 teachers trained on digital systems, and growing sports participation.",
    href: "/news/april-2026-first-surgeries",
  },
] as const;

export const bodgaun = {
  name: "Bodgaun Primary Hospital",
  location: "Bodgaun, Indrawati Rural Municipality, Sindhupalchowk, Nepal",
  beds: "5-bed rural hospital",
  population: "20,000+ people served in healthcare",
  services: [
    "24/7 emergency care",
    "Operating surgical room",
    "13+ major and 50+ minor surgeries to date",
    "Laboratory services",
    "X-ray diagnostics",
    "Referrals and outpatient care",
  ],
  status:
    "Surgical care is operational—550+ patients treated every month. Donations sustain staff, supplies, equipment, maintenance, and reliable access.",
  partnersNote:
    "The facility is delivered with Jay Nepal NGO and Indrawati Rural Municipality. We Raise Hope Inc. is the U.S. 501(c)(3) that raises and stewards funds to support this locally led care.",
  externalUrl: "https://bodgaunhospital.jaynepal.org",
} as const;

export const programs = [
  {
    slug: "healthcare",
    title: "Healthcare",
    eyebrow: "Bodgaun Primary Hospital",
    summary: "550+ patients a month. Surgery is operating. Help sustain life-saving care close to home.",
    body: "Bodgaun Primary Hospital provides emergency care, lab and X-ray, referrals, and an operating surgical room—8K+ patients treated lifetime, with 13+ major and 50+ minor surgeries. We Raise Hope funds support; Jay Nepal and municipal partners deliver care locally.",
    image: "/images/from-wrh/uploads/med15_jkuiw4.png",
    imageAlt: "Medical care and hospital work supported in rural Nepal",
    cta: "Sustain hospital care",
    href: "/bodgaun-hospital",
  },
  {
    slug: "education",
    title: "Education & IT",
    eyebrow: "Skills for the next generation",
    summary: "350+ IT students currently learning; 88 children supported in education; 70+ in sports with a soccer coach.",
    body: "From Shree Setidevi IT School to Sipatindhara and Alex George Brown IT School, partners expand computer literacy, teacher training, kindergarten support, tutoring, and meals so children can learn and thrive.",
    image: "/images/generated/it-class-rural-nepal.jpg",
    imageAlt: "Students learning computers in a rural Nepal school IT class",
    cta: "Support education",
    href: "/donate",
  },
  {
    slug: "clean-water",
    title: "Clean water",
    eyebrow: "Health starts at the tap",
    summary: "Gravity-fed systems, filtration, and local maintenance that communities can run.",
    body: "Clean water reduces illness and frees time for school and work. We support locally maintained water systems paired with hygiene education.",
    image: "/images/from-wrh/uploads/water1_xwj0go.jpg",
    imageAlt: "Clean water access for a rural community in Nepal",
    cta: "Fund clean water",
    href: "/donate",
  },
  {
    slug: "livelihoods",
    title: "Livelihoods & sports",
    eyebrow: "Opportunity that stays local",
    summary: "Sewing, woodworking, digital design, entrepreneurship, and 70+ students in sports with coach support.",
    body: "Healthcare and education endure when families have economic footing and youth have pathways. Partners back skills, sports (including soccer with a dedicated coach), and entrepreneurship rooted in community.",
    image: "/images/from-wrh/uploads/livelihoods-community.jpg",
    imageAlt: "Youth in sports gear helping each other on a field in rural Nepal",
    cta: "Build opportunity",
    href: "/donate",
  },
] as const;

export const stories = [
  {
    title: "Surgical care in Bodgaun",
    place: "Bodgaun, Sindhupalchowk",
    body: "A surgical room that began as a goal now delivers appendectomies, hernia repairs, orthopedic care, and other procedures—keeping patients closer to home.",
    image: "/images/generated/surgery-room-bodgaun.jpg",
    imageAlt: "Surgical operating room with bed and stand light in Bodgaun",
  },
  {
    title: "IT class in rural schools",
    place: "Partner IT schools, Nepal",
    body: "Students learn computer literacy and digital skills in rural school IT classrooms—building confidence and long-term opportunity close to home.",
    image: "/images/generated/it-class-rural-nepal.jpg",
    imageAlt: "Students learning in an IT computer class at a rural Nepal school",
  },
  {
    title: "Community-built futures",
    place: "Sindhupalchowk District",
    body: "Hope is a foundation—healthcare, education, water, and opportunity working together so families can build futures close to home.",
    image: "/images/from-wrh/uploads/who-we-r_xlg52s.jpg",
    imageAlt: "Community members with We Raise Hope",
  },
] as const;

export const board = [
  {
    name: "Alberto Luzzi",
    role: "CEO & Co-Founder · Board Chair",
    image: "/images/from-wrh/uploads/alberto_vioshe.png",
    bio: "Leads We Raise Hope’s mission connecting U.S. supporters with locally led programs in rural Nepal.",
  },
  {
    name: "Kevin B. Brown",
    role: "Vice Chair",
    image: "/images/from-wrh/uploads/kevin-b.brown__ayxttf.png",
    bio: "Board leadership focused on governance, growth, and long-term community impact.",
  },
  {
    name: "Annallisa Liuzzo",
    role: "Secretary",
    image: "/images/from-wrh/uploads/Annallisa-Liuzzo_ml26ak.jpg",
    bio: "Supports organizational accountability and board stewardship.",
  },
  {
    name: "Michael Harvey",
    role: "Treasurer",
    image: "/images/from-wrh/uploads/Michael-Harvey_qec6er.jpg",
    bio: "Oversees financial stewardship for We Raise Hope Inc.",
  },
] as const;

export const fieldTeam = [
  {
    name: "Dr. Suman",
    role: "Clinical partner",
    image: "/images/from-wrh/uploads/doc_suman_rgw1ak.jpg",
  },
  {
    name: "Chandeshori",
    role: "Community leadership",
    image: "/images/from-wrh/uploads/Chandeshori_vrumn9.jpg",
  },
  {
    name: "Sherya",
    role: "Program support",
    image: "/images/from-wrh/uploads/sherya_gao3g8.jpg",
  },
] as const;

export const waysToHelp = [
  {
    title: "Donate",
    body: "Primary online giving is through Givebutter. 95% goes to programs.",
    href: "/donate",
    cta: "Give now",
  },
  {
    title: "Give monthly",
    body: "Monthly gifts keep surgical care and classrooms running between campaigns.",
    href: "/donate#monthly",
    cta: "Start monthly giving",
  },
  {
    title: "Volunteer & partner",
    body: "Medical volunteers and institutional partners multiply what local teams already lead.",
    href: "/get-involved",
    cta: "Get involved",
  },
  {
    title: "Events",
    body: "Join New York gatherings that fund sustained care and education in Nepal.",
    href: "/events",
    cta: "See events",
  },
] as const;

export const moneyFlow = [
  {
    step: "1",
    title: "You give",
    body: "Primary path: Givebutter on this site (card, Venmo, PayPal, and more). Alternates: Zelle, Venmo direct, or check.",
  },
  {
    step: "2",
    title: "We Raise Hope Inc. stewards funds",
    body: "Gifts are received by our U.S. 501(c)(3) (EIN 99-2747198). Contributions are tax-deductible to the extent allowed by law.",
  },
  {
    step: "3",
    title: "Local partners deliver",
    body: "Funds support Jay Nepal NGO, Bodgaun Primary Hospital, schools, and community programs with Indrawati Rural Municipality.",
  },
] as const;

export const events = [
  {
    id: "metropolitan-club-gala-2026-11-11",
    status: "upcoming" as const,
    title: "An Evening of Impact at The Metropolitan Club of New York",
    date: "2026-11-11T19:00:00",
    time: "7:00 PM ET",
    location: "The Metropolitan Club — One East Sixtieth Street, New York, NY",
    image: "/images/events/metropolitan-club-gala.jpg",
    ticketPrice: 400,
    cta: "Buy tickets",
    description: [
      "Reception & open bar, followed by gala dinner, entertainment, and inspiring stories from the field.",
      "Purpose: expand access to healthcare, education, and opportunity in underserved communities in Nepal.",
      "Attire: Black Tie Optional. Jacket and tie required by the Club.",
      "Ticket: $400 per guest. Limited seating; advance purchase required.",
      "Only the portion exceeding the fair market value of benefits received may be tax-deductible under applicable law.",
    ],
  },
  {
    id: "gala-2026-06-24",
    status: "past" as const,
    title: "Gala Dinner in Support of We Raise Hope",
    date: "2026-06-24T19:00:00",
    time: "7:00 PM",
    location: "Tiro a Segno — 77 MacDougal Street, New York, NY",
    image: "/images/events/gala-2026-06.jpg",
    ticketPrice: null,
    cta: null,
    description: [
      "Hosted by Alberto Luzzi · Organized by We Raise Hope Inc.",
      "An intimate charity gala supporting education, healthcare, and community development in rural Nepal.",
    ],
  },
] as const;

export const eventPillars = [
  {
    title: "Healthcare close to home",
    body: "Support rural medical access through Bodgaun Primary Hospital, outreach, and surgical care.",
  },
  {
    title: "Education and opportunity",
    body: "Help children gain foundational education, computer literacy, and room to develop their potential.",
  },
  {
    title: "Water and resilient livelihoods",
    body: "Strengthen daily life through clean-water infrastructure, practical skills, and local enterprise.",
  },
  {
    title: "Confidence and belonging",
    body: "Create inclusive opportunities for women and youth through training, arts, sport, and shared community spaces.",
  },
] as const;

export const img = {
  hero: "/images/generated/hero-hope-child-fa.jpg",
  mission: "/images/from-wrh/uploads/our_mission_sme8ym.png",
  where: "/images/from-wrh/uploads/wherewework_nsnpar.jpg",
  engage: "/images/from-wrh/uploads/engage_froxgo.jpg",
  infra: "/images/from-wrh/uploads/infra_vfvsvl.jpg",
  collage: "/images/from-wrh/uploads/community_collage_five_paint_pfo1lt.jpg",
  skills: "/images/from-wrh/uploads/skills_wjfwvh.png",
  entrepreneurship: "/images/from-wrh/uploads/enterpernurship_ylvfpj.jpg",
  flood: "/images/from-wrh/external/rasuwa_flood1.jpg",
  logo: "/logo.png",
  hospital: "/images/from-wrh/uploads/med15_jkuiw4.png",
  donateHero: "/images/generated/donate-hero-nepal.jpg",
} as const;
