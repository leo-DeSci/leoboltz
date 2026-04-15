import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="max-w-2xl mx-auto px-6 pt-10 pb-16">
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
          Get in touch
        </h2>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground">
            Built with care, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
