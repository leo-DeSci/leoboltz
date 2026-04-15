import profilePhoto from "@/assets/profile-placeholder.png";

const HeroSection = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
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
          Leo Boltz
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Product Manager · AI + Bio
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Product Manager with 7+ years building at VC-backed startups. I own discovery through delivery, turn ambiguity into clear product decisions, and obsess over building the right thing for real users. Background in decentralized science, climate tech, and consumer apps. Now exploring AI + Bio — where my domain knowledge meets the most interesting product challenges of the decade.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
