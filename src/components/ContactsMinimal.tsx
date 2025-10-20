import { Mail, Send } from "lucide-react";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

export const ContactsMinimal = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 bg-background relative overflow-hidden">
      {/* Crystal octagon decorations */}
      <img 
        src={crystal1} 
        alt="" 
        className="absolute top-[25%] right-[15%] w-24 h-24 opacity-20 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '0.5s', animationDuration: '11s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute bottom-[30%] left-[8%] w-20 h-20 opacity-25 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '2.5s', animationDuration: '9s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute top-[50%] left-[20%] w-16 h-16 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '4.5s', animationDuration: '10s' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
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
