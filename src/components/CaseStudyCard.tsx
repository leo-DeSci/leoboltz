import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import caseStudyImage from "@/assets/case-study-placeholder.jpg";

const CaseStudyCard = () => {
  return (
    <section id="work" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
          Featured Work
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-16">
          Deep dives into the discovery process,<br className="hidden md:block" />
          decisions, and outcomes behind real product work.
        </h2>

        <Link to="/case-study" className="group block">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div className="overflow-hidden">
              <img
                src={caseStudyImage}
                alt="Case study preview"
                loading="lazy"
                width={700}
                height={500}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-3">
                Fig. 02 — Case Study
              </p>
            </div>
            <div className="md:pt-8">
              <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
                Case Study
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
                Case Study Title — Placeholder
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 font-light">
                A brief summary of what this case study is about and why it matters. This is where the story starts — the kind of messy, undefined problem that needed someone willing to dig in before jumping to solutions.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                Read the full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CaseStudyCard;
