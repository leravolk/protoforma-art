import { useState, useEffect, useRef } from "react";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";

export const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 md:px-8 bg-background relative overflow-hidden"
    >
      {/* Decorative crystal elements */}
      <img
        src={crystal1}
        alt=""
        className="absolute top-[20%] right-[10%] w-20 h-20 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '12s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute bottom-[25%] left-[8%] w-16 h-16 opacity-20 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '10s' }}
      />

      <div
        className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground">
          Мы — молодая команда, создающая проекты на пересечении искусства, дизайна и пространства.
        </p>
        <p className="font-sans text-lg md:text-xl leading-relaxed text-muted-foreground">
          Вскоре здесь появится больше информации о нас, и наших идеях.
        </p>
        <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground pt-4">
          Подписывайтесь на наши соцсети, чтобы следить за обновлениями.
        </p>
      </div>
    </section>
  );
};
