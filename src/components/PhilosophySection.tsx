import { useEffect, useRef, useState } from "react";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

export const PhilosophySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
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
      {/* Crystal decorations - same as hero */}
      <img
        src={crystal1}
        alt=""
        className="absolute top-[8%] left-[4%] w-28 h-28 opacity-30 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '9s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute top-[15%] right-[6%] w-20 h-20 opacity-35 blur-[1px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute bottom-[20%] left-[10%] w-16 h-16 opacity-20 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img
        src={crystal1}
        alt=""
        className="absolute bottom-[10%] right-[8%] w-32 h-32 opacity-25 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '8s' }}
      />

      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground uppercase tracking-wide">
          Философия PROTOFORM
        </h2>

        <div className="flex flex-col items-center mb-16 space-y-0">
          {["ART", "BRAND", "SPACE"].map((word) => (
            <div
              key={word}
              className="w-full font-display font-bold text-foreground text-center tracking-tight"
              style={{
                fontSize: "clamp(4rem, 22vw, 16rem)",
                lineHeight: 0.9,
              }}
            >
              {word}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative">
          <span className="absolute -top-8 -left-4 text-8xl md:text-9xl text-primary/30 font-serif leading-none select-none">"</span>
          <blockquote className="font-sans text-base md:text-lg text-center text-foreground leading-relaxed px-8">
            Для нас принципиально создавать проекты, в которых бренды поддерживают не только форму, но и содержание. В этом pop-up мы соединяем живопись, перформанс, работу с пространством и партнёров так, чтобы зритель получал не рекламную интеграцию, а цельный художественный опыт. Мы верим, что именно такие коллаборации помогают современным художникам звучать громче, а компаниям — говорить с аудиторией на более глубоком эмоциональном уровне.
          </blockquote>
          <span className="absolute -bottom-12 -right-4 text-8xl md:text-9xl text-primary/30 font-serif leading-none select-none">"</span>
          <p className="text-center text-muted-foreground mt-8 font-medium">— команда PROTOFORM</p>
        </div>
      </div>
    </section>
  );
};
