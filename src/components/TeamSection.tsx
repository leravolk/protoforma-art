import { useState, useEffect, useRef } from "react";
import elizaveta from "@/assets/team-elizaveta.jpg";
import ekaterina from "@/assets/team-ekaterina.jpg";
import valeria from "@/assets/team-valeria.jpg";
import anastasia from "@/assets/team-anastasia.jpg";
import artur from "@/assets/team-artur.jpg";
import crystal1 from "@/assets/crystal-octagon-1.png";
import crystal2 from "@/assets/crystal-octagon-2.png";
import crystal3 from "@/assets/crystal-octagon-3.png";

const teamMembers = [
  { name: "Елизавета Григорова", image: elizaveta },
  { name: "Екатерина Орлова", image: ekaterina },
  { name: "Валерия Волкова", image: valeria },
  { name: "Анастасия Милованова", image: anastasia },
  { name: "Артур Корчагин", image: artur },
];

export const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      {/* Crystal decorations - same as hero */}
      <img
        src={crystal1}
        alt=""
        className="absolute top-[5%] right-[4%] w-32 h-32 opacity-25 blur-sm animate-float mix-blend-screen"
        style={{ animationDelay: '0s', animationDuration: '8s' }}
      />
      <img
        src={crystal2}
        alt=""
        className="absolute top-[30%] left-[3%] w-20 h-20 opacity-35 blur-[1px] animate-float mix-blend-screen"
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <img
        src={crystal3}
        alt=""
        className="absolute bottom-[15%] right-[6%] w-16 h-16 opacity-20 blur-md animate-float mix-blend-screen"
        style={{ animationDelay: '2s', animationDuration: '12s' }}
      />
      <img
        src={crystal1}
        alt=""
        className="absolute bottom-[25%] left-[5%] w-24 h-24 opacity-30 blur-[2px] animate-float mix-blend-screen"
        style={{ animationDelay: '3s', animationDuration: '9s' }}
      />

      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title */}
        <h2 className="font-display text-2xl md:text-3xl text-left mb-16 text-foreground uppercase tracking-wide">
          команда PROTOFORM
        </h2>

        {/* Team photos grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(20%-26px)]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative aspect-square overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-all duration-500" />
              </div>
              <p className="font-sans text-xs md:text-sm text-center text-foreground leading-tight">
                {member.name}
              </p>
            </div>
          ))}
        </div>

        {/* Description text */}
        <div className="text-left">
          <p className="font-sans text-base md:text-lg leading-relaxed text-foreground">
            Мы придерживаемся горизонтальной организационной структуры, в которой роли формируются проектными задачами. Такой формат позволяет использовать компетенции каждого участника максимально эффективно, быстро и цельно реализовывать проекты.
          </p>
        </div>
      </div>
    </section>
  );
};
