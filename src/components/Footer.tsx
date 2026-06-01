import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-lg font-semibold text-foreground mb-4 tracking-tight">
        Get in touch
      </h2>
      <div className="flex items-center gap-4 mb-12">
        <a
          href="https://www.linkedin.com/in/leonard-boltz-27649b159/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>
      <div className="border-t border-border pt-6">
        <p className="text-xs text-muted-foreground text-center">
          Berlin x Lisbon, 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
