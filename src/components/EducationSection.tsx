const education = [
  {
    degree: "B.S. in Business Administration",
    institution: "University Name",
    year: "2020",
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
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((ed, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base font-medium text-foreground">
                {ed.degree}
              </h3>
              <span className="text-sm text-muted-foreground">{ed.year}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {ed.institution}
              {ed.note && <span> · {ed.note}</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
