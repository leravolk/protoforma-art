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
import Autoplay from "embla-carousel-autoplay";

export const AboutMinimal = () => {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-32 px-8 md:px-16 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`grid md:grid-cols-12 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Carousel - Left side, 7 columns */}
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
                      alt="Стенд Apriori Home - вид 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={booth2}
                      alt="Стенд Apriori Home - вид 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={booth3}
                      alt="Стенд Apriori Home - вид 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={booth4}
                      alt="Стенд Apriori Home - вид 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square overflow-hidden bg-muted">
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

          {/* Text Content - Right side, 4 columns with offset */}
          <div className="md:col-span-4 md:col-start-9 space-y-6">
            <p className="font-sans text-xs md:text-sm text-foreground leading-relaxed font-light">
              Мы создаём диалог между эстетикой и функцией, превращая визуальный язык в способ взаимодействия.
            </p>
            
            <p className="font-sans text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
              Стенд, созданный совместно с Apriori Home, выполнен как сказочная мастерская, где природа, труд и творчество переплетаются в единое полотно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
