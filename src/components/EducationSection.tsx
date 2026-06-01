const education = [
  {
    degree: "MSc Management — Entrepreneurship & Innovation",
    institution: "Nova School of Business and Economics",
    year: "2020 — 2022",
  },
  {
    degree: "BA Business Communications Management",
    institution: "HTW Berlin",
    year: "2016 — 2019",
  },
];

const EducationSection = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">
        Education
      </h2>
      <div className="divide-y divide-border">
        {education.map((ed, i) => (
          <div key={i} className="flex items-start justify-between py-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {ed.degree}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {ed.institution}
              </p>
            </div>
            <span className="text-sm text-muted-foreground shrink-0 ml-4">
              {ed.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
