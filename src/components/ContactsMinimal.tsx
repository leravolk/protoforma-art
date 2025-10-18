import { Instagram, Send } from "lucide-react";

export const ContactsMinimal = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Title */}
          <h2 className="font-display text-5xl md:text-7xl font-light text-primary tracking-tight">
            КОНТАКТЫ
          </h2>

          {/* Contact Info - Asymmetric Layout */}
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 md:col-start-1">
              <a
                href="mailto:hello@protoforma.art"
                className="font-sans text-xs text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@protoforma.art
              </a>
            </div>

            {/* Social Links */}
            <div className="md:col-span-4 md:col-start-9 flex gap-8 justify-end">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
              </a>
              
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-8 border-t border-border/30">
          <p className="font-sans text-[10px] text-muted-foreground/60 tracking-wider">
            © 2025 PROTOFORMA
          </p>
        </div>
      </div>
    </section>
  );
};
