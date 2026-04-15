import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Program & Product Manager",
    company: "Bio Protocol · Decentralized Science",
    dates: "2023 — 2025",
    slug: "bio-protocol",
    summary:
      "Owned product roadmap and led cross-functional delivery for decentralized funding tools in Web3.",
  },
  {
    role: "Entrepreneur in Residence",
    company: "SQUARE · Climate Tech",
    dates: "2022 — 2023",
    slug: "square",
    summary:
      "Scoped and validated early-stage product concepts in the climate adaptation space.",
  },
  {
    role: "Product Manager",
    company: "Meply Travel",
    dates: "2019 — 2020",
    slug: "meply-travel",
    summary:
      "Led product development for a travel-tech platform from ideation to launch.",
  },
  {
    role: "Head of Operations",
    company: "Skip App · Social Consumer",
    dates: "2017 — 2019",
    slug: "skip-app",
    summary:
      "Built and scaled operational processes across a high-growth consumer social app.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">
        Experience
      </h2>
      <div className="divide-y divide-border">
        {experiences.map((exp) => (
          <div key={exp.slug} className="py-4">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                {exp.role}
              </h3>
              <span className="text-sm text-muted-foreground shrink-0 ml-4">
                {exp.dates}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {exp.company}
            </p>
            <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
              {exp.summary}
            </p>
            <Link
              to={`/experience/${exp.slug}`}
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View work
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
