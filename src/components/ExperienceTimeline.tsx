const experiences = [
  {
    role: "Program & Product Manager",
    company: "Bio Protocol · Decentralized Science",
    dates: "2023 — 2025",
  },
  {
    role: "Entrepreneur in Residence",
    company: "SQUARE · Climate Tech",
    dates: "2022 — 2023",
  },
  {
    role: "Product Manager",
    company: "Meply Travel",
    dates: "2019 — 2020",
  },
  {
    role: "Head of Operations",
    company: "Skip App · Social Consumer",
    dates: "2017 — 2019",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">
        Experience
      </h2>
      <div className="divide-y divide-border">
        {experiences.map((exp, i) => (
          <div key={i} className="flex items-start justify-between py-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {exp.company}
              </p>
            </div>
            <span className="text-sm text-muted-foreground shrink-0 ml-4">
              {exp.dates}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
