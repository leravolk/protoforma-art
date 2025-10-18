import { Instagram, Send } from "lucide-react";

export const ContactsSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-light text-primary tracking-wider">
              Контакты
            </h3>
            
            <a
              href="mailto:hello@protoforma.art"
              className="block font-sans text-lg text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              hello@protoforma.art
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-steel group-hover:text-accent transition-colors duration-300" />
              <span className="font-sans text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Instagram
              </span>
            </a>
            
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
              aria-label="Telegram"
            >
              <Send className="w-6 h-6 text-steel group-hover:text-accent transition-colors duration-300" />
              <span className="font-sans text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Telegram
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="font-sans text-sm text-muted-foreground/60 text-center">
            © 2025 PROTOFORMA. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
};
