import { useEffect, useRef, useState } from "react";
import booth1 from "@/assets/booth-1.jpg";
import booth2 from "@/assets/booth-2.jpg";
import booth3 from "@/assets/booth-3.jpg";
import booth4 from "@/assets/booth-4.jpg";
import booth5 from "@/assets/booth-5.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";

export const ArtObjectMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const plugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

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
            {/* Carousel - Takes 7 columns */}
            <div className="md:col-span-7 md:col-start-1">
              <Carousel 
                className="w-full"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={booth1}
                        alt="Арт-объект стенда - вид 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={booth2}
                        alt="Арт-объект стенда - вид 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={booth3}
                        alt="Арт-объект стенда - вид 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={booth4}
                        alt="Арт-объект стенда - вид 4"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={booth5}
                        alt="Арт-объект стенда - вид 5"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              <p className="mt-4 text-xs text-white/60 font-sans font-light">
                Автор: Елизавета Григорова
              </p>
            </div>

            {/* Text Content - Takes 4 columns with offset */}
            <div className="md:col-span-4 md:col-start-9 space-y-8 md:pt-24">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-xs">В продаже</Badge>
                <h2 className="font-display text-2xl md:text-3xl font-light text-white">
                  Арт-объект<br />
                  Швейная машинка
                </h2>
              </div>
              
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
