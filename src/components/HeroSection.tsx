import profilePhoto from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
          <img
            src={profilePhoto}
            alt="Profile photo"
            width={112}
            height={112}
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-1">
          Leonard Boltz
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Product Manager · AI + Healthcare + Sustainability{" "}
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          I am a Product Manager with hands-on experience building at the frontier. I've spent the last seven years in the Berlin Startup Space with four years doing early-stage product work across decentralized science, climate tech and B2C. I turn ambiguous problem spaces into shipped products: running discovery, shaping what gets built and why and staying in the weeds with engineering through release. Most recently at Bio Protocol, a Scientific AI Agent platform, I owned core platform modules that helped 35+ teams collectively raise $50M+. Currently diving into AI-native workflows with Lovable, Cursor, and Claude Code on a personal projects.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
