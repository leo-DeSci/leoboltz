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
    <section className="max-w-2xl mx-auto px-6 pb-20">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-10 tracking-tight">
        Education
      </h2>
      <div className="divide-y divide-border">
        {education.map((ed, i) => (
          <div key={i} className="py-6 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold text-foreground">
                {ed.degree}
                {ed.note && (
                  <span className="font-normal text-muted-foreground">
                    {" "}— {ed.note}
                  </span>
                )}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap font-mono">
                {ed.year}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {ed.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
