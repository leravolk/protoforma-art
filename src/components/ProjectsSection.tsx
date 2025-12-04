import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import boothBackground from "@/assets/booth-background.jpg";
import booth1 from "@/assets/booth-new-1.jpg";
import booth2 from "@/assets/booth-new-2.jpg";
import booth3 from "@/assets/booth-new-3.jpg";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

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
        threshold: 0.05,
        rootMargin: "50px",
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
      {/* Crystal decorations - same as hero */}
      <img
        src={crystal1}
        alt=""
        className="absolute top-[3%] left-[4%] w-32 h-32 opacity-25 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '8s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute top-[8%] right-[6%] w-20 h-20 opacity-35 blur-[1px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute top-[20%] left-[3%] w-16 h-16 opacity-20 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img
        src={crystal1}
        alt=""
        className="absolute top-[35%] right-[5%] w-28 h-28 opacity-30 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '9s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute top-[50%] left-[5%] w-24 h-24 opacity-25 blur-[3px] animate-float mix-blend-screen"
        style={{ animationDelay: '4s', animationDuration: '11s' }}
      />
      <img
        src={crystal1}
        alt=""
        className="absolute top-[65%] right-[4%] w-36 h-36 opacity-40 animate-float mix-blend-screen"
        style={{ animationDelay: '0.5s', animationDuration: '9s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute bottom-[20%] left-[6%] w-20 h-20 opacity-35 blur-[1px] animate-float mix-blend-screen"
        style={{ animationDelay: '2.5s', animationDuration: '10s' }}
      />
      <img
        src={crystal1}
        alt=""
        className="absolute bottom-[8%] right-[8%] w-40 h-40 opacity-35 animate-float mix-blend-screen"
        style={{ animationDelay: '1.5s', animationDuration: '10s' }}
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

        {/* Project 1: Pop-up Exhibition */}
        <h3 className="font-display text-2xl md:text-3xl mb-8 text-foreground">
          Pop-up выставка<br />
          «Когда он закуривает, начинает идти снег»
        </h3>

        {/* Main Image placeholder */}
        <div className="mb-12 bg-muted/30 h-64 md:h-96 flex items-center justify-center border border-dashed border-muted-foreground/30">
          <span className="text-muted-foreground">Главное фото проекта</span>
        </div>

        {/* First Paragraph */}
        <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
          Иммерсивная pop-up выставка, построенная на исследовании памяти, хрупкости эмоциональных состояний и их проявлений в пространстве.
          Проект включал в себя художественную экспозицию, перформативную среду и специально созданные арт-объекты.
        </p>

        {/* Key Parameters */}
        <ul className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-12 space-y-2">
          <li>• более 200 гостей в формате закрытого события</li>
          <li>• интеграция бренд-партнёров в художественный контекст</li>
          <li>• разработка визуальной концепции, среды и маршрута восприятия</li>
          <li>• подготовка сувенирной продукции для продажи</li>
          <li>• команда Protoforma выступила хостом мероприятия</li>
        </ul>

        {/* Carousel placeholder */}
        <div className="mb-24 bg-muted/30 h-48 md:h-64 flex items-center justify-center border border-dashed border-muted-foreground/30">
          <span className="text-muted-foreground">Карусель с фото проекта</span>
        </div>

        {/* Divider between projects */}
        <div className="border-t border-muted-foreground/20 mb-16"></div>

        {/* Project 2: Apriori Home */}
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
        <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
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
        <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
          Винтажная швейная машинка, расписанная художницей Елизаветой Григоровой, является акцентом композиции и связала ремесленную традицию с современным художественным прочтением.
        </p>

        {/* Third Paragraph */}
        <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-16">
          Итог — цельное пространство с характером бренда, где текстиль воспринимается не как экспонат, а как часть визуального высказывания.
        </p>

        {/* Contact Button */}
        <div className="flex justify-center">
          <a
            href="https://t.me/lerawolfy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-base font-medium bg-transparent border border-white/80 text-white rounded-md hover:bg-white/10 transition-all duration-300"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
};
