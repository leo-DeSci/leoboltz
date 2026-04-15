import profilePhoto from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
      <div className="grid md:grid-cols-[1fr_280px] gap-16 items-end">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-8">
            Product Manager · Open to opportunities
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground mb-8 tracking-tight">
            Building products<br />
            <em className="text-accent">for the age<br />of agents.</em>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
            I'm a product manager who leads with discovery — user research, creative problem-solving, and the kind of empathy that catches what people don't say out loud.
          </p>
          <div className="flex gap-6 mt-10 font-mono text-xs tracking-wide uppercase text-muted-foreground">
            <span>Discovery-led</span>
            <span className="text-border">·</span>
            <span>Product Strategy</span>
            <span className="text-border">·</span>
            <span>AI-native</span>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img
              src={profilePhoto}
              alt="Profile photo"
              width={280}
              height={373}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground mt-3">
            Fig. 01 — Portrait
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
