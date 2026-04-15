const experiences = [
  {
    role: "Product Manager",
    company: "Current Company",
    category: null,
    dates: "2023 — Present",
    current: true,
  },
  {
    role: "Associate Product Manager",
    company: "Previous Company",
    category: "B2B SaaS",
    dates: "2021 — 2023",
    current: false,
  },
  {
    role: "Business Analyst / PM Intern",
    company: "First Company",
    category: "Enterprise",
    dates: "2020 — 2021",
    current: false,
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Experience
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground leading-snug">
              A track record of building products from discovery through delivery.
            </h2>
          </div>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group py-8 border-b border-border last:border-b-0 first:pt-0"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {exp.role}
                    {exp.current && (
                      <span className="ml-3 font-mono text-[10px] tracking-widest uppercase text-accent">
                        Now
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {exp.dates}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-light">
                  {exp.company}
                  {exp.category && (
                    <span className="ml-2 text-xs text-muted-foreground/70">
                      — {exp.category}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
