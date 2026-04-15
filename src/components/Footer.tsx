import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-end">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
              Contact
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-6">
              Let's work<br />
              <em className="text-accent">together.</em>
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-md leading-relaxed">
              Always happy to chat about product, discovery, or AI-native experiences. Reach out and let's start a conversation.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
            >
              <span className="text-sm font-medium text-foreground">hello@example.com</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
            >
              <span className="text-sm font-medium text-foreground">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
            Built with care · {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
            Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
