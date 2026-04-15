import { Link } from "react-router-dom";

const CaseStudyCard = () => {
  return (
    <section id="work" className="max-w-2xl mx-auto px-6 py-10">
      <Link
        to="/case-study"
        className="block border border-border rounded-lg p-8 hover:border-primary/30 transition-colors"
      >
        <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
          Case Study — Vibe Coded
        </p>
        <h2 className="text-lg font-semibold text-foreground mb-4 tracking-tight">
          BioRadar: AI-powered research discovery for biotech PMs
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Biotech product managers spend hours scanning papers, preprints, and regulatory filings to stay on top of the competitive landscape. The tooling is scattered — PubMed, Google Scholar, ClinicalTrials.gov — and none of it is built for product people who need signal, not volume.
          </p>
          <p>
            I built BioRadar in a weekend using Claude Code. It's a web app that ingests a biotech company's pipeline, pulls relevant papers and trial updates via API, and surfaces a weekly AI-generated briefing structured around what matters to a PM: competitive moves, regulatory signals, and emerging targets.
          </p>
          <p>
            The prototype runs on Next.js + Vercel, uses Claude for summarization and relevance scoring, and has a clean dashboard UI I designed in Figma and implemented myself. It collapses a 4-hour weekly workflow into 10 minutes.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {["Claude Code", "Next.js", "Vercel", "Figma", "AI + Biotech", "Vibe Coded"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium border border-border text-muted-foreground px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </section>
  );
};

export default CaseStudyCard;
