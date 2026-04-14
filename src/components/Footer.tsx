const Footer = () => {
  return (
    <footer id="contact" className="border-t">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
          Let's talk.
        </h2>
        <p className="text-base text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
          I'm open to new opportunities and always happy to connect over product problems, discovery methods, or what's next in AI-native products.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:hello@example.com"
            className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            hello@example.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()}. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
