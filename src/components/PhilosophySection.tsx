import { useEffect, useRef, useState } from "react";

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
      className="py-16 md:py-24 px-4 md:px-8 bg-background"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-sm md:text-base tracking-widest text-muted-foreground mb-8 md:mb-12">
          ФИЛОСОФИЯ PROTOFORM
        </h2>

        <div className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold leading-[0.9] tracking-tight text-foreground mb-8 md:mb-12">
          ART — BRAND — SPACE
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Мы работаем на пересечении художественного взгляда, стратегического мышления и пространственного проектирования. Каждый проект превращается в систему, которую можно прожить.
        </p>
      </div>
    </section>
  );
};
