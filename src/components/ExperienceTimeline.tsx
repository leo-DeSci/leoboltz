import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Program & Product Manager",
    company: "Bio Protocol · Decentralized Science",
    dates: "2023 — 2025",
    responsibilities: [
      "Owned product roadmap and led cross-functional delivery across engineering, design, and research teams",
      "Drove discovery for decentralized funding tools, translating complex Web3 workflows into intuitive user experiences",
      "Managed stakeholder alignment across a distributed, globally remote organization",
    ],
  },
  {
    role: "Entrepreneur in Residence",
    company: "SQUARE · Climate Tech",
    dates: "2022 — 2023",
    responsibilities: [
      "Scoped and validated early-stage product concepts in the climate adaptation space",
      "Built and tested MVPs with target users, iterating on value proposition and go-to-market strategy",
      "Collaborated with founders and investors to refine product-market fit hypotheses",
    ],
  },
  {
    role: "Product Manager",
    company: "Meply Travel",
    dates: "2019 — 2020",
    responsibilities: [
      "Led product development for a travel-tech platform, managing the full lifecycle from ideation to launch",
      "Defined and prioritized features based on user research, analytics, and business impact",
      "Coordinated with engineering to ship on tight timelines while maintaining product quality",
    ],
  },
  {
    role: "Head of Operations",
    company: "Skip App · Social Consumer",
    dates: "2017 — 2019",
    responsibilities: [
      "Built and scaled operational processes across a high-growth consumer social app",
      "Managed vendor relationships, logistics, and cross-team coordination to support rapid expansion",
      "Transitioned into product-adjacent work, shaping feature priorities based on operational insights",
    ],
  },
];

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">
        Experience
      </h2>
      <div className="divide-y divide-border">
        {experiences.map((exp, i) => (
          <div key={i} className="py-4">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start justify-between text-left group"
            >
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {exp.company}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className="text-sm text-muted-foreground">
                  {exp.dates}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                    expandedIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                expandedIndex === i
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-1.5 pl-4">
                  {exp.responsibilities.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground leading-relaxed relative before:content-['·'] before:absolute before:-left-3 before:text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
