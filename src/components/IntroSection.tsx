import { useState, useEffect, useRef } from "react";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

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
      {/* Crystal decorations with heavy blur */}
      <img
        src={crystal2}
        alt=""
        className="absolute top-[12%] right-[8%] w-10 h-10 opacity-20 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '9s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute top-[25%] left-[5%] w-8 h-8 opacity-18 blur-[3px] animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute bottom-[22%] right-[4%] w-12 h-12 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '4s', animationDuration: '11s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute bottom-[30%] left-[10%] w-6 h-6 opacity-12 blur-[3px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '14s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute top-[50%] right-[15%] w-7 h-7 opacity-10 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '10s' }}
      />

      <div
        className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground max-w-5xl mx-auto">
          Protoform — мультидисциплинарное творческое агентство на стыке искусства, бренда и пространственных решений. Мы создаём выставки, инсталляции, ивенты, стенды и арт-объекты, которые усиливают идентичность брендов и формируют эмоциональное взаимодействие с аудиторией. Наш подход строится на синтезе художественного взгляда и продакшна полного цикла.
        </p>
      </div>
    </section>
  );
};
