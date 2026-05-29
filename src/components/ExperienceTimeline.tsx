import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const ExperienceTimeline = () => {
  const { data: experiences = [], isLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("experiences")
        .select("slug, role, company, dates, summary")
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 pt-4 pb-10">
      <h2 className="text-lg font-semibold text-foreground mb-6 tracking-tight">
        Experience
      </h2>
      {isLoading ? (
        <div className="divide-y divide-border">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="py-4 animate-pulse space-y-2">
              <div className="h-4 bg-muted rounded w-2/3" />
              <div className="h-3 bg-muted rounded w-1/3" />
              <div className="h-3 bg-muted rounded w-full" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="divide-y divide-border">
            {experiences.slice(0, 2).map((exp) => (
              <div key={exp.slug} className="py-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted-foreground shrink-0 ml-4">
                    {exp.dates}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">
                  {exp.summary}
                </p>
                <Link
                  to={`/experience/${exp.slug}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View work
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
          {experiences.length > 2 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                Previously
              </h3>
              <ul className="space-y-2">
                {experiences.slice(2).map((exp) => (
                  <li
                    key={exp.slug}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="text-foreground">
                      <span className="font-medium">{exp.role}</span>
                      <span className="text-muted-foreground"> · {exp.company}</span>
                    </span>
                    <span className="text-muted-foreground shrink-0 tabular-nums">
                      {exp.dates}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ExperienceTimeline;
