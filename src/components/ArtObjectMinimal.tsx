import { useEffect, useRef, useState } from "react";
import sewingMachine1 from "@/assets/sewing-machine-1.jpg";
import sewingMachine2 from "@/assets/sewing-machine-2.jpg";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";
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
      className="min-h-screen flex items-center justify-center py-32 px-4 md:px-8 bg-black relative overflow-hidden"
    >
      {/* Crystal octagon decorations */}
      <img 
        src={crystal1} 
        alt="" 
        className="absolute top-[10%] left-[6%] w-28 h-28 opacity-20 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute bottom-[15%] right-[12%] w-20 h-20 opacity-25 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '12s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute top-[40%] right-[5%] w-16 h-16 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '5s', animationDuration: '9s' }}
      />

      <div className="w-full max-w-none relative z-10">
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
                        src={sewingMachine1}
                        alt="Швейная машинка - вид 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={sewingMachine2}
                        alt="Швейная машинка - вид 2"
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
            <div className="md:col-span-4 md:col-start-9 space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-xs">готово к продаже</Badge>
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
                
                <div className="font-sans text-xs text-white/90 leading-relaxed font-light space-y-2">
                  <p>Для связи:</p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="tel:+79168116795" 
                      className="hover:text-white transition-colors underline"
                    >
                      Позвонить: +7 (916) 811-67-95
                    </a>
                    <a 
                      href="https://t.me/+79168116795" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors underline"
                    >
                      Написать в Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
