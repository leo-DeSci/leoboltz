import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-medium text-foreground italic">
          Your Name
        </Link>
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("work")}
            className="text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs font-sans font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
