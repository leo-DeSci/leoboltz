import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudyImage from "@/assets/case-study-placeholder.jpg";

const CaseStudyCard = () => {
  return (
    <section id="work" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <Eye className="w-5 h-5 text-primary" />
          <p className="text-sm font-semibold tracking-wide uppercase text-primary">
            Featured Work
          </p>
        </div>
        <p className="text-muted-foreground text-base mb-10 max-w-lg">
          Deep dives into the discovery process, decisions, and outcomes behind real product work.
        </p>

        <Link
          to="/case-study"
          className="group block bg-background border border-border rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={caseStudyImage}
                alt="Case study preview"
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary text-muted-foreground px-2.5 py-1 rounded-md w-fit mb-4">
                Case Study
              </span>
              <h2 className="text-2xl font-bold text-card-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                Case Study Title — Placeholder
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A brief summary of what this case study is about and why it matters. This is where the story starts — the kind of messy, undefined problem that needed someone willing to dig in before jumping to solutions.
              </p>
              <Button variant="default" size="sm" className="w-fit group/btn">
                Read case study
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyCard;
