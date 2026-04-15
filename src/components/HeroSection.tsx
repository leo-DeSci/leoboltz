import profilePhoto from "@/assets/profile-placeholder.png";
import { Briefcase, Sparkles, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary text-muted-foreground px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              Open to opportunities
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-foreground mb-6 tracking-tight">
            Building products for the age of agents.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
            I'm a product manager who leads with discovery — user research, creative problem-solving, and the kind of empathy that catches what people don't say out loud.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Search, label: "Discovery-led" },
              { icon: Briefcase, label: "Product Strategy" },
              { icon: Sparkles, label: "AI-native" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 text-sm font-medium bg-card border border-border text-foreground px-4 py-2 rounded-lg shadow-card"
              >
                <tag.icon className="w-4 h-4 text-muted-foreground" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border border-border shadow-elevated">
              <img
                src={profilePhoto}
                alt="Profile photo"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-lg px-3 py-1.5 shadow-elevated">
              <p className="text-xs font-semibold text-foreground">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
