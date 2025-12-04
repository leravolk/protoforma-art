import { useState, useEffect, useRef } from "react";
import crystal1 from "@/assets/crystal-octagon-1.png";
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
      id="about"
      ref={sectionRef}
      className="py-32 px-4 md:px-8 bg-background relative overflow-hidden"
    >
      {/* Crystal decorations - same as hero */}
      <img
        src={crystal1}
        alt=""
        className="absolute top-[10%] right-[5%] w-24 h-24 opacity-25 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '8s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute bottom-[15%] left-[8%] w-20 h-20 opacity-35 blur-[1px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute top-[25%] left-[3%] w-16 h-16 opacity-20 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
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
