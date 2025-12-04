import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export const DirectionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const directions = [
    "иммерсивные выставки и pop-up события",
    "арт-инсталляции и пространственные объекты",
    "экспериментальные стенды и презентационные среды",
    "интеграции для брендов: художественный код, визуальные решения, коллаборации",
    "разработка концепций и смысловых сценариев под бренд или пространство",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto px-4 md:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-3xl md:text-4xl text-center mb-16 text-foreground uppercase tracking-wide">
          Проектные направления{" "}
          <span className="text-primary">by PROTOFORM</span>
        </h2>

        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 space-y-3">
          {directions.map((direction, index) => (
            <p key={index}>• {direction}</p>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6"
          >
            <a
              href="https://t.me/lerawolfy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Связаться с нами
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
