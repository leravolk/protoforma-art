import { Mail, Send } from "lucide-react";

export const ContactsMinimal = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Title */}
          <h2 className="font-display text-5xl md:text-7xl font-light text-primary tracking-tight">
            КОНТАКТЫ
          </h2>

          {/* Contact Info */}
          <div className="space-y-6">
            <a
              href="mailto:hello@protoforma.art"
              className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors block"
            >
              hello@protoforma.art
            </a>
            
            <div className="space-y-2">
              <a
                href="tel:+79168116795"
                className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors block"
              >
                +7 (916) 811-67-95
              </a>
              <a
                href="https://t.me/+79168116795"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors block"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-8">
            <a
              href="mailto:hello@protoforma.art"
              className="group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
            </a>
            
            <a
              href="https://t.me/+79168116795"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-8">
          <p className="font-sans text-[10px] text-muted-foreground/60 tracking-wider">
            © 2025 PROTOFORMA
          </p>
        </div>
      </div>
    </section>
  );
};
