import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link to="/" className="font-heading text-base font-semibold text-foreground">
          Your Name
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToSection("work")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-secondary"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-secondary"
          >
            Experience
          </button>
          <Button
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="ml-2"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
