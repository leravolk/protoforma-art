import { useEffect, useRef, useState } from "react";
import sewingMachine from "@/assets/sewing-machine.jpg";

export const ArtObjectMinimal = () => {
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
      id="works"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-32 px-8 md:px-16 bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Asymmetric Grid */}
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Image - Takes 7 columns */}
            <div className="md:col-span-7 md:col-start-1">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={sewingMachine}
                  alt="Винтажная швейная машинка"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-xs text-white/60 font-sans font-light">
                Автор: Елизавета Григорова
              </p>
            </div>

            {/* Text Content - Takes 4 columns with offset */}
            <div className="md:col-span-4 md:col-start-9 space-y-8 md:pt-24">
              <h2 className="font-display text-2xl md:text-3xl font-light text-white">
                Арт-объект<br />
                Швейная машинка
              </h2>
              
              <div className="space-y-6">
                <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed font-light">
                  Центральный арт-объект — швейная машинка, символ созидания и памяти о человеческом прикосновении.
                </p>
                
                <p className="font-sans text-xs text-white/70 leading-relaxed font-light">
                  Она раскрывает возможность нового чувственного опыта и диалога между ремеслом, искусством и временем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
