import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.S. in Business Administration",
    institution: "University Name",
    year: "2016 — 2020",
    note: "Concentration in Information Systems",
    icon: GraduationCap,
  },
  {
    degree: "Product Management Certificate",
    institution: "Program Name",
    year: "2022",
    note: null,
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          <p className="text-sm font-semibold tracking-wide uppercase text-primary">
            Education
          </p>
        </div>
        <p className="text-muted-foreground text-base mb-10 max-w-lg">
          Formal education and professional development credentials.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((ed, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-highlight flex items-center justify-center shrink-0">
                  <ed.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-foreground">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {ed.institution}
                  </p>
                  {ed.note && (
                    <span className="inline-block mt-2 text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                      {ed.note}
                    </span>
                  )}
                  <p className="text-xs text-muted-foreground mt-2 font-medium">
                    {ed.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
