import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CaseStudyData {
  role: string;
  company: string;
  dates: string;
  summary: string;
  approach: string;
  outcomes: string;
  learnings: string;
}

const caseStudies: Record<string, CaseStudyData> = {
  "bio-protocol": {
    role: "Program & Product Manager",
    company: "Bio Protocol · Decentralized Science",
    dates: "2023 — 2025",
    summary:
      "Owned product roadmap and led cross-functional delivery for decentralized funding tools in Web3.",
    approach:
      "Describe your approach here — how you tackled the problem, frameworks you used, how you navigated ambiguity in a decentralized org. What discovery work did you do? How did you align stakeholders across time zones and cultures?",
    outcomes:
      "Share the measurable results — metrics that moved, adoption numbers, funding rounds facilitated, community growth. What changed because of your work? Include both quantitative wins and qualitative shifts.",
    learnings:
      "Reflect on what you learned — about decentralized product management, about yourself as a PM. What would you do differently? What advice would you give someone stepping into a similar role?",
  },
  square: {
    role: "Entrepreneur in Residence",
    company: "SQUARE · Climate Tech",
    dates: "2022 — 2023",
    summary:
      "Scoped and validated early-stage product concepts in the climate adaptation space.",
    approach:
      "Describe how you identified and validated opportunities in climate tech. What research methods did you use? How did you move from problem space to solution space? What hypotheses did you test?",
    outcomes:
      "What came out of the EIR period? MVPs built, partnerships formed, investment secured, pivots made. Share the tangible outputs and their impact on the organization's direction.",
    learnings:
      "What did you learn about early-stage product work in climate tech? About the pace of innovation in the space? What would you tell someone considering an EIR role?",
  },
  "meply-travel": {
    role: "Product Manager",
    company: "Meply Travel",
    dates: "2019 — 2020",
    summary:
      "Led product development for a travel-tech platform from ideation to launch.",
    approach:
      "Walk through your product process — from user research and competitive analysis to feature prioritization and sprint planning. How did you balance speed with quality? What tools and frameworks guided your decisions?",
    outcomes:
      "Share launch metrics, user adoption, retention, revenue impact. What features shipped and how did they perform? Did the product find traction? What signals confirmed or challenged your bets?",
    learnings:
      "What did you learn about building travel products? About managing the full product lifecycle at a startup? What would you do differently with more time or resources?",
  },
  "skip-app": {
    role: "Head of Operations",
    company: "Skip App · Social Consumer",
    dates: "2017 — 2019",
    summary:
      "Built and scaled operational processes across a high-growth consumer social app.",
    approach:
      "Describe how you built operational infrastructure from scratch — vendor management, logistics, team coordination. How did you transition into product-adjacent work? What operational insights shaped feature priorities?",
    outcomes:
      "Quantify the scale you managed — users served, operations streamlined, costs reduced, processes automated. How did your operational work feed into product decisions?",
    learnings:
      "What did you learn about the ops-to-product pipeline? About scaling operations in a high-growth environment? How did this role shape your transition into product management?",
  },
};

const ExperienceCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? caseStudies[slug] : undefined;

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

  const sections = [
    { title: "Approach", content: data.approach },
    { title: "Business Outcomes", content: data.outcomes },
    { title: "Learnings", content: data.learnings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-20 md:pt-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
          {data.dates}
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold leading-tight text-foreground mb-2">
          {data.role}
        </h1>
        <p className="text-lg text-muted-foreground mb-6">{data.company}</p>
        <p
          className="text-lg text-muted-foreground leading-relaxed mb-12"
          style={{ lineHeight: 1.8 }}
        >
          {data.summary}
        </p>

        <hr className="border-border mb-12" />

        <div className="space-y-14">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <p
                className="text-base text-muted-foreground leading-relaxed"
                style={{ lineHeight: 1.85 }}
              >
                {section.content}
              </p>
              <div className="mt-6 border border-dashed border-border rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground italic">
                  Screenshot or diagram placeholder
                </p>
              </div>
            </section>
          ))}
        </div>

        <hr className="border-border my-14" />
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
