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
      className="py-32 px-4 md:px-8 bg-background"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground uppercase tracking-wide">
          Философия PROTOFORM
        </h2>

        <div className="flex flex-col items-center mb-16 space-y-2">
          {["ART", "BRAND", "SPACE"].map((word) => (
            <div
              key={word}
              className="w-full font-display font-bold text-foreground text-center"
              style={{
                fontSize: "clamp(3rem, 18vw, 12rem)",
                letterSpacing: "0.5em",
                lineHeight: 1,
              }}
            >
              {word}
            </div>
          ))}
        </div>

        <p className="font-sans text-base md:text-lg text-center text-foreground leading-relaxed max-w-4xl mx-auto">
          Мы работаем на пересечении художественного взгляда, стратегического мышления и пространственного проектирования. Каждый проект превращается в систему, которую можно прожить.
        </p>
      </div>
    </section>
  );
};
