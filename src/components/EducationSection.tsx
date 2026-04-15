const education = [
  {
    degree: "B.S. in Business Administration",
    institution: "University Name",
    year: "2016 — 2020",
    note: "Concentration in Information Systems",
  },
  {
    degree: "Product Management Certificate",
    institution: "Program Name",
    year: "2022",
    note: null,
  },
];

const EducationSection = () => {
  return (
    <section className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Education
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground leading-snug">
              Formal education and professional credentials.
            </h2>
          </div>
          <div className="space-y-0">
            {education.map((ed, i) => (
              <div
                key={i}
                className="py-8 border-b border-border last:border-b-0 first:pt-0"
              >
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    {ed.degree}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {ed.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-light">
                  {ed.institution}
                  {ed.note && (
                    <span className="ml-2 text-xs text-muted-foreground/70">
                      — {ed.note}
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

export default EducationSection;
