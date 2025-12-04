import { Mail, Send, Instagram } from "lucide-react";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";
import crystalClear from "@/assets/crystal-octagon-clear.png";

export const ContactsMinimal = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Crystal decorations with depth effect */}
      <img 
        src={crystal2} 
        alt="" 
        className="absolute top-[10%] right-[6%] w-10 h-10 opacity-22 animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '10s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute top-[30%] left-[5%] w-8 h-8 opacity-16 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img 
        src={crystalClear} 
        alt="" 
        className="absolute bottom-[35%] right-[8%] w-11 h-11 opacity-18 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '4s', animationDuration: '11s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute bottom-[20%] left-[10%] w-7 h-7 opacity-14 blur-[3px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '14s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute top-[55%] right-[4%] w-6 h-6 opacity-12 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '13s' }}
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
