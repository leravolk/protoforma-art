import { useEffect, useRef, useState } from "react";
import booth1 from "@/assets/booth-1.jpg";
import booth2 from "@/assets/booth-2.jpg";
import booth3 from "@/assets/booth-3.jpg";
import booth4 from "@/assets/booth-4.jpg";
import booth5 from "@/assets/booth-5.jpg";
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
import Autoplay from "embla-carousel-autoplay";

export const AboutMinimal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-32 px-4 md:px-8 bg-background relative overflow-hidden"
    >
      {/* Crystal octagon decorations */}
      <img 
        src={crystal1} 
        alt="" 
        className="absolute top-[15%] right-[8%] w-24 h-24 opacity-20 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '9s' }}
      />
      <img 
        src={crystal2} 
        alt="" 
        className="absolute bottom-[20%] left-[10%] w-20 h-20 opacity-25 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '11s' }}
      />
      <img 
        src={crystal3} 
        alt="" 
        className="absolute top-[35%] left-[5%] w-16 h-16 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '4s', animationDuration: '10s' }}
      />

      <div className="w-full max-w-none relative z-10">
        <div
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Text Content - Left side, 4 columns */}
            <div className="md:col-span-4 md:col-start-1 space-y-6 text-left order-2 md:order-1">
              {/* Title - appears after carousel on mobile */}
              <h2 className="font-display text-4xl md:text-3xl font-light text-primary tracking-tight mb-8">
                PROTOFORMA
              </h2>
              
              <p className="font-sans text-xs md:text-sm text-foreground leading-relaxed font-light">
              Мы создаём диалог между эстетикой и функцией, превращая визуальный язык в способ взаимодействия.
            </p>
            
            <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
              Стенд, созданный совместно с Apriori Home, выполнен как сказочная мастерская, где природа, труд и творчество переплетаются в единое полотно.
            </p>
            </div>

            {/* Carousel - Right side, full height */}
            <div className="md:col-span-7 md:col-start-6 order-1 md:order-2">
            <Carousel 
              className="w-full"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="h-[70vh] overflow-hidden bg-muted">
                    <img
                      src={booth1}
                      alt="Стенд Apriori Home - вид 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[70vh] overflow-hidden bg-muted">
                    <img
                      src={booth2}
                      alt="Стенд Apriori Home - вид 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[70vh] overflow-hidden bg-muted">
                    <img
                      src={booth3}
                      alt="Стенд Apriori Home - вид 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[70vh] overflow-hidden bg-muted">
                    <img
                      src={booth4}
                      alt="Стенд Apriori Home - вид 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-[70vh] overflow-hidden bg-muted">
                    <img
                      src={booth5}
                      alt="Стенд Apriori Home - вид 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
