import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import boothBackground from "@/assets/booth-background.jpg";
import booth1 from "@/assets/booth-new-1.jpg";
import booth2 from "@/assets/booth-new-2.jpg";
import booth3 from "@/assets/booth-new-3.jpg";
import sewing1 from "@/assets/sewing-new-1.jpg";
import sewing2 from "@/assets/sewing-new-2.jpg";
import sewing3 from "@/assets/sewing-new-3.jpg";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const plugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
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
      {/* Decorative crystal elements */}
      <img
        src={crystal1}
        alt=""
        className="absolute top-[10%] right-[8%] w-20 h-20 opacity-10 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '13s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute bottom-[15%] left-[10%] w-16 h-16 opacity-15 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '15s' }}
      />

      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-4xl text-center mb-20 text-foreground uppercase tracking-wide">
          Реализованные проекты
        </h2>

        {/* Project Title */}
        <h3 className="font-display text-2xl md:text-3xl mb-8 text-foreground">
          Стенд для Apriori Home — Hometextile & Design 2025
        </h3>

        {/* Main Image after title */}
        <div className="mb-12">
          <img
            src={boothBackground}
            alt="Стенд для Apriori Home"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* First Paragraph */}
        <p className="font-sans text-base md:text-lg leading-relaxed text-foreground mb-8">
          Стенд «Сказочная мастерская» был создан как пространственная инсталляция, основанная на образе ремесленной мастерской — месте, где рождается ткань.
          Центральным элементом стала конструкция из натуральных ветвей, символизирующая истоки материала и ручной труд. На неё были интегрированы драпировки из фирменного текстиля Apriori.
        </p>

        {/* First Carousel */}
        <div className="mb-12">
          <Carousel
            plugins={[plugin]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={booth1}
                  alt="Детали стенда 1"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={booth2}
                  alt="Детали стенда 2"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={booth3}
                  alt="Детали стенда 3"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Second Paragraph */}
        <p className="font-sans text-base md:text-lg leading-relaxed text-foreground mb-8">
          Винтажная швейная машинка, расписанная художницей Елизаветой Григоровой, является акцентом композиции и связала ремесленную традицию с современным художественным прочтением.
        </p>

        {/* Second Carousel */}
        <div className="mb-12">
          <Carousel
            plugins={[plugin]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={sewing1}
                  alt="Швейная машинка 1"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={sewing2}
                  alt="Швейная машинка 2"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src={sewing3}
                  alt="Швейная машинка 3"
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Third Paragraph */}
        <p className="font-sans text-base md:text-lg leading-relaxed text-foreground">
          Итог — цельное пространство с характером бренда, где текстиль воспринимается не как экспонат, а как часть визуального высказывания.
        </p>
      </div>
    </section>
  );
};
