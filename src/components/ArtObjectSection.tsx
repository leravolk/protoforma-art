import { useEffect, useRef, useState } from "react";
import sewingMachine from "@/assets/sewing-machine.jpg";

export const ArtObjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <img
                src={sewingMachine}
                alt="Винтажная швейная машинка - центральный арт-объект"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="mt-6 text-sm text-steel font-sans tracking-wider">
              Автор: Елизавета Григорова
            </p>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight">
              Арт-объект
              <br />
              «Швейная машинка»
            </h2>
            
            <div className="space-y-6">
              <p className="font-sans text-lg text-foreground/90 leading-relaxed font-light">
                Центральный арт-объект — швейная машинка, символ созидания и 
                памяти о человеческом прикосновении.
              </p>
              
              <p className="font-sans text-base text-muted-foreground leading-relaxed font-light">
                Она раскрывает возможность нового чувственного опыта и диалога 
                между ремеслом, искусством и временем.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
