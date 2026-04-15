import { Building2, ArrowUpRight } from "lucide-react";

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
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-5 h-5 text-primary" />
          <p className="text-sm font-semibold tracking-wide uppercase text-primary">
            Experience
          </p>
        </div>
        <p className="text-muted-foreground text-base mb-10 max-w-lg">
          A track record of building products from discovery through delivery.
        </p>

        <div className="grid gap-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-medium uppercase tracking-wider bg-secondary text-muted-foreground px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {exp.company}
                      {exp.category && (
                        <span className="ml-2 text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">
                          {exp.category}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm text-muted-foreground font-medium">
                    {exp.dates}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
