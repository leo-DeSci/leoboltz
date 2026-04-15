import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";

// Per-slug screenshot assets
import bioProtocol1 from "@/assets/bio-protocol-1.png";
import bioProtocol2 from "@/assets/bio-protocol-2.png";
import bioProtocol3 from "@/assets/bio-protocol-3.png";
import bioProtocolLogo from "@/assets/bio-protocol-logo.png";

const screenshotsBySlug: Record<string, string[]> = {
  "bio-protocol": [bioProtocol1, bioProtocol2, bioProtocol3],
};

const logosBySlug: Record<string, string> = {
  "bio-protocol": bioProtocolLogo,
};
import Footer from "@/components/Footer";

interface Learning {
  title: string;
  content: string;
}

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "objective", label: "Objective" },
  { id: "approach", label: "Approach" },
  { id: "impact", label: "Impact" },
  { id: "learnings", label: "Learnings" },
];

const SectionNav = ({ activeSection }: { activeSection: string }) => (
  <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-center justify-center gap-1 py-3">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              activeSection === item.id
                ? "bg-foreground text-background font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const ExperienceCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const screenshots = screenshotsBySlug[slug || ""] || [];
  const [activeSection, setActiveSection] = useState("intro");

  const { data, isLoading } = useQuery({
    queryKey: ["experience", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const learnings: Learning[] = Array.isArray(data?.learnings)
    ? (data.learnings as unknown as Learning[])
    : [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <SectionNav activeSection="intro" />
        <div className="max-w-3xl mx-auto px-6 pt-14 pb-16 animate-pulse space-y-6">
          <div className="h-6 bg-muted rounded w-1/4" />
          <div className="h-10 bg-muted rounded w-2/3" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 pt-20 pb-20 text-center">
          <p className="text-muted-foreground">Case study not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SectionNav activeSection={activeSection} />

      <article className="max-w-3xl mx-auto px-6 pt-8 pb-16 md:pt-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Intro */}
        <div id="intro">
          <div className="w-14 h-14 rounded-xl border border-border bg-card flex items-center justify-center mb-6">
            <span className="text-xs text-muted-foreground italic">Logo</span>
          </div>
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
            {data.subtitle}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold leading-tight text-foreground mb-2">
            {data.role}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8" style={{ lineHeight: 1.8 }}>
            {data.summary}
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
            <div>
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-1">ROLE</p>
              <p className="text-sm font-medium text-foreground">{data.meta_role}</p>
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground mb-1">TOOLS</p>
              <p className="text-sm font-medium text-foreground">{data.tools}</p>
            </div>
          </div>
        </div>

        <hr className="border-border mb-10" />

        {/* Objective */}
        <section id="objective" className="mb-10 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">Objective</h2>
          <p className="text-base text-muted-foreground leading-relaxed" style={{ lineHeight: 1.85 }}>
            {data.objective}
          </p>
        </section>

        <hr className="border-border mb-10" />

        {/* Approach */}
        <section id="approach" className="mb-10 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">Approach</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8" style={{ lineHeight: 1.85 }}>
            {data.approach_intro}
          </p>
          {screenshots.length > 0 ? (
            <div className="space-y-4">
              <img src={screenshots[0]} alt="Platform overview" className="w-full rounded-lg border border-border" />
            </div>
          ) : (
            <div className="border border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-muted-foreground italic">Screenshot or diagram placeholder</p>
            </div>
          )}
          {data.approach_closing && (
            <p className="text-base text-muted-foreground leading-relaxed mt-8" style={{ lineHeight: 1.85 }}>
              {data.approach_closing}
            </p>
          )}
        </section>

        <hr className="border-border mb-10" />

        {/* Impact */}
        <section id="impact" className="mb-10 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">Impact</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6" style={{ lineHeight: 1.85 }}>
            {data.impact_intro}
          </p>
          {screenshots.length > 1 ? (
            <div className="space-y-4">
              <img src={screenshots[1]} alt="Platform detail" className="w-full rounded-lg border border-border" />
              {screenshots[2] && (
                <img src={screenshots[2]} alt="Platform detail" className="w-full rounded-lg border border-border" />
              )}
            </div>
          ) : (
            <div className="border border-dashed border-border rounded-lg p-8 text-center">
              <p className="text-sm text-muted-foreground italic">Screenshot or metrics visualization placeholder</p>
            </div>
          )}
          {data.impact_closing && (
            <p className="text-base text-muted-foreground leading-relaxed mt-8" style={{ lineHeight: 1.85 }}>
              {data.impact_closing}
            </p>
          )}
        </section>

        <hr className="border-border mb-10" />

        {/* Learnings */}
        <section id="learnings" className="mb-10 scroll-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-8">Learnings</h2>
          <div className="space-y-5">
            {learnings.map((learning, i) => (
              <div key={i} className="border border-border rounded-xl p-6 bg-card">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{learning.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ lineHeight: 1.8 }}>
                  {learning.content}
                </p>
              </div>
            ))}
          </div>
        </section>

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

export default ExperienceCaseStudy;
