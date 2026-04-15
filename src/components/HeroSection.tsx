import profilePhoto from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="flex items-center gap-5 mb-8">
        <img
          src={profilePhoto}
          alt="Profile photo"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover border-2 border-border shadow-sm"
        />
        <div>
          <h2 className="text-lg font-serif font-semibold text-foreground">Your Name</h2>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Product Manager
          </p>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight text-foreground mb-8">
        Building products for the age of agents — and doing the discovery work to make sure they solve real problems.
      </h1>
      <p className="text-base md:text-lg leading-relaxed text-muted-foreground" style={{ lineHeight: 1.8 }}>
        I'm a product manager who leads with discovery — user research, creative problem-solving, and the kind of empathy that catches what people don't say out loud. I'm most useful when the problem isn't fully defined yet, and I'm currently building toward AI-native product work where figuring out <em className="font-serif italic text-foreground">what</em> to build is harder than building it. I do my best work at early-to-growth stage companies where product decisions still have real consequence.
      </p>
    </section>
  );
};

export default HeroSection;
