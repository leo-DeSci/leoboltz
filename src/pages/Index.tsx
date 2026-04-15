import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CaseStudyCard />
        <ExperienceTimeline />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
