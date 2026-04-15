const experiences = [
  {
    role: "Product Manager",
    company: "Current Company",
    category: null,
    dates: "2023 — Present",
  },
  {
    role: "Associate Product Manager",
    company: "Previous Company",
    category: "B2B SaaS",
    dates: "2021 — 2023",
  },
  {
    role: "Business Analyst / PM Intern",
    company: "First Company",
    category: "Enterprise",
    dates: "2020 — 2021",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="work" className="max-w-2xl mx-auto px-6 pb-20">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-10 tracking-tight">
        Experience
      </h2>
      <div className="divide-y divide-border">
        {experiences.map((exp, i) => (
          <div key={i} className="py-6 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold text-foreground">
                {exp.role}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap font-mono">
                {exp.dates}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {exp.company}
              {exp.category && <span> · {exp.category}</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
