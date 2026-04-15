import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CaseStudyData {
  role: string;
  company: string;
  dates: string;
  subtitle: string;
  summary: string;
  meta: { label: string; value: string }[];
  objective: string;
  approach: {
    intro: string;
    details?: string;
    table?: { source: string; task: string }[];
    closing?: string;
  };
  impact: {
    intro: string;
    details?: string;
    table?: { source: string; task: string }[];
    closing?: string;
  };
  learnings: { title: string; content: string }[];
}

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "objective", label: "Objective" },
  { id: "approach", label: "Approach" },
  { id: "impact", label: "Impact" },
  { id: "learnings", label: "Learnings" },
];

const caseStudies: Record<string, CaseStudyData> = {
  "bio-protocol": {
    role: "Program & Product Manager",
    company: "Bio Protocol · Decentralized Science",
    dates: "2023 — 2025",
    subtitle: "CASE STUDY · DECENTRALIZED SCIENCE",
    summary:
      "Owned product roadmap and led cross-functional delivery for decentralized funding tools in Web3 — bridging traditional biotech workflows with on-chain infrastructure.",
    meta: [
      { label: "TIMELINE", value: "2 years" },
      { label: "DOMAIN", value: "DeSci · Web3" },
      { label: "TEAM", value: "Cross-functional" },
      { label: "ROLE", value: "Product Lead" },
    ],
    objective:
      "Define and execute the product strategy for a decentralized science funding platform — aligning a globally distributed team around a shared roadmap while navigating the unique constraints of Web3 governance and tokenomics.",
    approach: {
      intro:
        "Describe your approach here — how you tackled the problem, frameworks you used, how you navigated ambiguity in a decentralized org. What discovery work did you do? How did you align stakeholders across time zones and cultures?",
      table: [
        { source: "Stakeholder interviews", task: "Map decision-making across decentralized teams" },
        { source: "User research", task: "Understand researcher funding pain points" },
        { source: "Competitive analysis", task: "Benchmark against traditional grant platforms" },
        { source: "On-chain data", task: "Analyze token holder behavior and governance" },
        { source: "Sprint reviews", task: "Align eng + design on weekly delivery cadence" },
      ],
      closing:
        "Describe the key insight or turning point that shaped the product direction. What did you learn that wasn't obvious from the outside?",
    },
    impact: {
      intro:
        "Share the measurable results — metrics that moved, adoption numbers, funding rounds facilitated, community growth. What changed because of your work?",
      closing:
        "Include both quantitative wins and qualitative shifts. What do stakeholders say about the impact?",
    },
    learnings: [
      {
        title: "Decentralized ≠ unstructured",
        content:
          "Working in a DAO taught me that decentralized orgs need more process, not less. Clear decision frameworks and communication rituals become the product manager's most important tool.",
      },
      {
        title: "Token incentives shape user behavior",
        content:
          "Understanding tokenomics isn't optional for a Web3 PM. The incentive design is the product — it determines who participates, how, and why. I learned to think about mechanism design as a core PM skill.",
      },
      {
        title: "Ship to learn, not to impress",
        content:
          "In a space moving this fast, polished specs are a liability. The most valuable thing I did was ship rough prototypes to real researchers and iterate on their feedback within days.",
      },
    ],
  },
  square: {
    role: "Entrepreneur in Residence",
    company: "SQUARE · Climate Tech",
    dates: "2022 — 2023",
    subtitle: "CASE STUDY · CLIMATE TECH",
    summary:
      "Scoped and validated early-stage product concepts in the climate adaptation space — moving from whiteboard to working prototype.",
    meta: [
      { label: "TIMELINE", value: "1 year" },
      { label: "DOMAIN", value: "Climate Tech" },
      { label: "STAGE", value: "0 → 1" },
      { label: "ROLE", value: "EIR" },
    ],
    objective:
      "Identify and validate the most promising product opportunity in climate adaptation — moving from a broad thesis to a concrete, fundable concept with early user validation.",
    approach: {
      intro:
        "Describe how you identified and validated opportunities in climate tech. What research methods did you use? How did you move from problem space to solution space?",
      table: [
        { source: "Expert interviews", task: "Map the climate adaptation landscape" },
        { source: "Market sizing", task: "Quantify addressable opportunity" },
        { source: "User testing", task: "Validate willingness to pay" },
        { source: "Rapid prototyping", task: "Build and test MVPs in 2-week sprints" },
      ],
      closing:
        "What hypotheses did you test? Which ones were validated and which were killed?",
    },
    impact: {
      intro:
        "What came out of the EIR period? MVPs built, partnerships formed, investment secured, pivots made.",
      closing:
        "Share the tangible outputs and their impact on the organization's direction.",
    },
    learnings: [
      {
        title: "Climate tech needs product people",
        content:
          "The space is full of brilliant scientists and engineers but short on people who can translate deep tech into products users actually adopt. The biggest impact came from simplifying, not adding.",
      },
      {
        title: "Validation speed matters more than fidelity",
        content:
          "I learned to kill ideas faster. A 2-day prototype that gets honest feedback is worth more than a month of market research. The goal is to be wrong quickly and cheaply.",
      },
      {
        title: "Partnerships unlock distribution",
        content:
          "In climate, going direct-to-consumer is brutal. The most promising paths to market came through partnerships with organizations that already had trust and reach.",
      },
    ],
  },
  "meply-travel": {
    role: "Product Manager",
    company: "Meply Travel",
    dates: "2019 — 2020",
    subtitle: "CASE STUDY · TRAVEL TECH",
    summary:
      "Led product development for a travel-tech platform from ideation to launch — balancing speed with quality in a competitive market.",
    meta: [
      { label: "TIMELINE", value: "1.5 years" },
      { label: "DOMAIN", value: "Travel Tech" },
      { label: "STAGE", value: "Seed" },
      { label: "ROLE", value: "Product Manager" },
    ],
    objective:
      "Take a travel-tech concept from zero to launched product — defining the core value proposition, building the initial feature set, and establishing product-market fit signals.",
    approach: {
      intro:
        "Walk through your product process — from user research and competitive analysis to feature prioritization and sprint planning.",
      table: [
        { source: "User interviews", task: "Understand traveler decision-making" },
        { source: "Competitive audit", task: "Map feature gaps vs. incumbents" },
        { source: "Analytics", task: "Identify drop-off points in booking funnel" },
        { source: "A/B testing", task: "Optimize conversion on key flows" },
      ],
      closing:
        "How did you balance speed with quality? What tools and frameworks guided your decisions?",
    },
    impact: {
      intro:
        "Share launch metrics, user adoption, retention, revenue impact. What features shipped and how did they perform?",
      closing:
        "Did the product find traction? What signals confirmed or challenged your bets?",
    },
    learnings: [
      {
        title: "Distribution is the product",
        content:
          "Building a great travel product doesn't matter if nobody finds it. I learned that growth strategy needs to be baked into the product from day one, not bolted on after launch.",
      },
      {
        title: "Trust signals drive conversion",
        content:
          "In travel, users are spending real money on experiences they can't preview. Every product decision — reviews, photos, cancellation policies — is ultimately about building trust.",
      },
      {
        title: "Startups need PMs who ship",
        content:
          "At a seed-stage company, the PM who writes perfect specs but ships slowly is less valuable than the PM who ships something good today and iterates tomorrow.",
      },
    ],
  },
  "skip-app": {
    role: "Head of Operations",
    company: "Skip App · Social Consumer",
    dates: "2017 — 2019",
    subtitle: "CASE STUDY · SOCIAL CONSUMER",
    summary:
      "Built and scaled operational processes across a high-growth consumer social app — then transitioned into product-adjacent work that shaped feature priorities.",
    meta: [
      { label: "TIMELINE", value: "2 years" },
      { label: "DOMAIN", value: "Consumer Social" },
      { label: "SCALE", value: "High-growth" },
      { label: "ROLE", value: "Head of Ops" },
    ],
    objective:
      "Build operational infrastructure from scratch for a fast-growing consumer app — then leverage operational insights to influence product direction and feature prioritization.",
    approach: {
      intro:
        "Describe how you built operational infrastructure from scratch — vendor management, logistics, team coordination.",
      table: [
        { source: "Process mapping", task: "Document and optimize core workflows" },
        { source: "Vendor management", task: "Negotiate and manage key partnerships" },
        { source: "Team building", task: "Hire and train operations team" },
        { source: "Data analysis", task: "Surface operational insights for product" },
        { source: "Cross-functional", task: "Bridge ops feedback into product roadmap" },
      ],
      closing:
        "How did you transition into product-adjacent work? What operational insights shaped feature priorities?",
    },
    impact: {
      intro:
        "Quantify the scale you managed — users served, operations streamlined, costs reduced, processes automated.",
      closing:
        "How did your operational work feed into product decisions?",
    },
    learnings: [
      {
        title: "Ops is the unfiltered user signal",
        content:
          "Operations teams hear every complaint, every edge case, every failure mode. I learned that the best product insights come from the people closest to the user's pain — and that's often ops.",
      },
      {
        title: "Systems thinking transfers to product",
        content:
          "Building operational systems taught me to think in workflows, dependencies, and failure modes. That systems lens became my biggest advantage when I moved into product management.",
      },
      {
        title: "Scale breaks everything once",
        content:
          "Every process that works at 1,000 users breaks at 10,000. I learned to build for the next order of magnitude, not the current one — and to accept that some things will break anyway.",
      },
    ],
  },
};

const SectionNav = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center justify-center gap-1 py-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                activeSection === item.id
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const ExperienceCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? caseStudies[slug] : undefined;
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 pt-20 pb-20 text-center">
          <p className="text-muted-foreground">Case study not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SectionNav activeSection={activeSection} />

      <article className="max-w-2xl mx-auto px-6 pt-12 pb-20 md:pt-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Intro */}
        <div id="intro">
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
            {data.subtitle}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold leading-tight text-foreground mb-2">
            {data.role}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8" style={{ lineHeight: 1.8 }}>
            {data.summary}
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
            {data.meta.map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-border mb-14" />

        {/* Objective */}
        <section id="objective" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
            The Objective
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed" style={{ lineHeight: 1.85 }}>
            {data.objective}
          </p>
        </section>

        <hr className="border-border mb-14" />

        {/* Approach */}
        <section id="approach" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
            The Approach
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8" style={{ lineHeight: 1.85 }}>
            {data.approach.intro}
          </p>

          {data.approach.table && (
            <div className="border border-border rounded-lg overflow-hidden mb-8">
              <div className="divide-y divide-border">
                {data.approach.table.map((row, i) => (
                  <div key={i} className="flex gap-4 px-5 py-3.5">
                    <span className="text-sm font-mono font-medium text-primary whitespace-nowrap min-w-[160px]">
                      {row.source}
                    </span>
                    <span className="text-sm text-muted-foreground">{row.task}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.approach.closing && (
            <p className="text-base text-muted-foreground leading-relaxed" style={{ lineHeight: 1.85 }}>
              {data.approach.closing}
            </p>
          )}
        </section>

        <hr className="border-border mb-14" />

        {/* Impact */}
        <section id="impact" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
            The Impact
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6" style={{ lineHeight: 1.85 }}>
            {data.impact.intro}
          </p>

          <div className="mt-6 border border-dashed border-border rounded-lg p-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              Screenshot or metrics visualization placeholder
            </p>
          </div>

          {data.impact.closing && (
            <p className="text-base text-muted-foreground leading-relaxed mt-8" style={{ lineHeight: 1.85 }}>
              {data.impact.closing}
            </p>
          )}
        </section>

        <hr className="border-border mb-14" />

        {/* Learnings */}
        <section id="learnings" className="mb-14 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-8">
            What I Learned
          </h2>
          <div className="space-y-5">
            {data.learnings.map((learning, i) => (
              <div
                key={i}
                className="border border-border rounded-xl p-6 bg-card"
              >
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  {learning.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ lineHeight: 1.8 }}>
                  {learning.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border mb-8" />
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </article>
      <Footer />
    </div>
  );
};

export default ExperienceCaseStudy;
