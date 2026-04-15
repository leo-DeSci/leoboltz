import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import caseStudyImage from "@/assets/case-study-placeholder.jpg";

const CaseStudyCard = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 pb-20">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
        Featured Work
      </p>
      <Link
        to="/case-study"
        className="group block border border-border overflow-hidden bg-card hover:border-foreground transition-all duration-200"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={caseStudyImage}
            alt="Case study preview"
            loading="lazy"
            width={1200}
            height={640}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="p-8 md:p-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Case Study
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground mb-4 tracking-tight group-hover:text-accent transition-colors duration-200">
            Case Study Title — Placeholder
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            A brief summary of what this case study is about and why it matters. This is where the story starts — the kind of messy, undefined problem that needed someone willing to dig in before jumping to solutions.
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200">
            Read the full case study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </div>
      </Link>
    </section>
  );
};

export default CaseStudyCard;
