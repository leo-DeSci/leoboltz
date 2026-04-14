import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "The Situation",
    content:
      "Describe the context here — the company, the product, the team, and the landscape. What was happening in the market or inside the organization that created the conditions for this work? Set the stage so the reader understands why this problem mattered and what was at stake. This section should feel grounded and specific, not generic.",
  },
  {
    title: "What I Found",
    content:
      "This is the discovery section — the part that separates a thoughtful PM from someone who jumps straight to solutions. Describe the research you conducted: who you talked to, what you observed, what surprised you. Surface the key insight that changed the direction of the work. What did you learn that wasn't obvious? What did users say — or not say — that reframed the problem?",
  },
  {
    title: "What I Built",
    content:
      "Describe the solution and your approach to getting there. What did you decide to build, and just as importantly, what did you decide not to build? How did you scope the MVP? What trade-offs did you navigate? Talk about the collaboration — how you worked with engineering, design, and stakeholders to bring this to life. Include specifics about process, prioritization, and any frameworks you used.",
  },
  {
    title: "What Happened",
    content:
      "Share the outcomes — both quantitative and qualitative. What metrics moved? What did users say after launch? Did the solution hold up, or did you need to iterate? Be honest about what worked well and what didn't. This section should demonstrate that you care about impact, not just shipping.",
  },
  {
    title: "What I'd Do Differently",
    content:
      "Reflection is what makes a case study genuinely useful — both for the reader and for you. What would you change about your approach? What did you learn about yourself as a product person? What would you tell someone facing a similar problem? This section signals intellectual honesty and a growth mindset.",
  },
];

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="max-w-2xl mx-auto px-6 pt-12 pb-20 md:pt-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Case Study
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold leading-tight text-foreground mb-6">
          Case Study Title — Placeholder
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12" style={{ lineHeight: 1.8 }}>
          A brief summary of what this case study is about and why it matters. This is where the story starts — the kind of messy, undefined problem that needed someone willing to dig in before jumping to solutions.
        </p>

        <hr className="border-border mb-12" />

        <div className="space-y-14">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed" style={{ lineHeight: 1.85 }}>
                {section.content}
              </p>
              {/* Placeholder for future images */}
              <div className="mt-6 border border-dashed border-border rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground italic">
                  Image or diagram placeholder
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="my-14 pl-6 border-l-4 border-accent">
          <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed">
            "The most valuable thing I did on this project wasn't building — it was asking the right questions early enough that we avoided building the wrong thing."
          </p>
        </blockquote>

        <hr className="border-border mb-8" />
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </article>
      <Footer />
    </div>
  );
};

export default CaseStudy;
