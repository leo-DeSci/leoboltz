const experiences = [
  {
    company: "Current Company",
    role: "Product Manager",
    dates: "2023 — Present",
    bullets: [
      "Led discovery for a new AI-powered feature, conducting 30+ user interviews to identify unmet needs in the workflow.",
      "Defined and shipped an MVP that reduced manual review time by 40%, collaborating across engineering, design, and data science.",
      "Established a lightweight continuous discovery cadence adopted by two other product teams.",
    ],
  },
  {
    company: "Previous Company",
    role: "Associate Product Manager",
    dates: "2021 — 2023",
    bullets: [
      "Owned the onboarding experience end-to-end, improving activation rates by 18% through iterative experimentation.",
      "Partnered with UX research to run usability studies that reshaped the product's information architecture.",
      "Managed a cross-functional squad of 5 engineers and 1 designer across two major releases.",
    ],
  },
  {
    company: "First Company",
    role: "Business Analyst / PM Intern",
    dates: "2020 — 2021",
    bullets: [
      "Translated stakeholder requirements into user stories and acceptance criteria for agile development sprints.",
      "Built dashboards and analyses that surfaced key product usage patterns to leadership.",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="work" className="max-w-2xl mx-auto px-6 pb-20">
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-10">
        Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-border">
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-foreground" />
            <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-serif font-semibold text-foreground">
                {exp.role}
              </h3>
              <span className="text-sm text-muted-foreground">{exp.dates}</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-3">
              {exp.company}
            </p>
            <ul className="space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-border">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
