import { Mail, Send, Instagram } from "lucide-react";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

export const ContactsMinimal = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Crystal decorations with depth effect */}
      <img 
        src={crystal1} 
        alt="" 
        className="absolute top-[15%] right-[5%] w-28 h-28 opacity-22 animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '10s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute top-[40%] left-[4%] w-16 h-16 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute bottom-[30%] right-[10%] w-20 h-20 opacity-18 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '4s', animationDuration: '11s' }}
      />
      <img 
        src={crystal1} 
        alt="" 
        className="absolute bottom-[15%] left-[8%] w-22 h-22 opacity-12 blur-[3px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '14s' }}
      />

      <div className="w-full max-w-none relative z-10">
        <div className="space-y-16 text-left">
          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl mb-20 text-foreground uppercase tracking-wide">
            Контакты
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
                href="tel:+79258462707"
                className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors block"
              >
                +7 925 846 2707
              </a>
              <a
                href="tel:+79856650900"
                className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors block"
              >
                +7 985 665 0900
              </a>
              <a
                href="https://t.me/+79258462707"
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
              href="https://t.me/+79258462707"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
            </a>

            <a
              href="https://www.instagram.com/protoform.art?igsh=MXJ1OGY1aGF3cm8zcA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
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
