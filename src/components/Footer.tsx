import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-card border border-border rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-base mb-8 max-w-md mx-auto">
            Always happy to chat about product, discovery, or AI-native experiences.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:hello@example.com">
                <Mail className="w-4 h-4" />
                Send email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <p className="text-xs text-muted-foreground text-center">
          Built with care · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
