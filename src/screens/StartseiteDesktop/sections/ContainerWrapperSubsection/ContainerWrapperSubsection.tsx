import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const services = [
  {
    title: "Aufzugsreinigung",
    description:
      "Für ein gepflegtes Gesamtbild von Schacht und Maschinenraum.",
    image: "https://i.imgur.com/JJcTGv6.jpeg",
    imagePosition: "right",
  },
  {
    title: "Hausmeisterdienst",
    description:
      "Professionelle Pflege, Wartung, Reinigung, kleinere Reparaturen und technische Überwachung von WEG's und Gewerbeobjekten.",
    image: "https://i.imgur.com/FQlpONe.jpeg",
    imagePosition: "left",
  },
  {
    title: "Winterdienst",
    description:
      "Räumung und Streudienst bei Schnee und Eis – zuverlässig und pünktlich mit moderner Technik.",
    image: "https://i.imgur.com/UYDGsOQ.jpeg",
    imagePosition: "right",
  },
  {
    title: "Treppenhausreinigung",
    description:
      "Unterhaltsreinigung für Eigentümergemeinschaften sowie für Bürogebäude.",
    image: "https://i.imgur.com/Th411Rt.jpeg",
    imagePosition: "left",
  },
  {
    title: "Fensterreinigung",
    description: "Um den perfekten Durchblick beizubehalten.",
    image: "https://i.imgur.com/cJ2zRjw.jpeg",
    imagePosition: "right",
  },
];

export const ContainerWrapperSubsection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(services.map(() => false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      const triggerPoint = wh * 0.7;

      if (rect.top < triggerPoint) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }

      const newVisibleCards = cardRefs.current.map((cardRef, idx) => {
        if (!cardRef) return false;
        const cardRect = cardRef.getBoundingClientRect();
        const trigger = idx === 2 ? wh * 0.75 : wh * 0.8;
        return cardRect.top < trigger;
      });

      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="leistungen" ref={sectionRef} className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-16 md:py-28 w-full">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-6 self-stretch w-full">
            <h2
              className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[20px] md:text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] transition-all duration-700"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${30 * (1 - scrollProgress)}px)`
              }}
            >
              Unsere Leistungen
            </h2>

            <p
              className="text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] transition-all duration-700"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${30 * (1 - scrollProgress)}px)`,
                transitionDelay: '100ms'
              }}
            >
              Professionelle Reinigungslösungen für Ihre Objekte
            </p>
          </div>
        </header>

        <div className="flex flex-col items-center gap-8 self-stretch w-full">
          {services.map((service, index) => {
            const isVisible = visibleCards[index];
            const isFromRight = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card
                className="w-full max-w-screen-xl transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'translateX(0)'
                    : isFromRight
                    ? 'translateX(100px)'
                    : 'translateX(-100px)',
                  transitionDelay: index === 0 ? '300ms' : '0ms',
                }}
              >
                <Card className="bg-gradient-to-r from-[#1f2332]/95 to-[#252937]/95 backdrop-blur-xl rounded-3xl overflow-hidden border-[2px] border-gray-600/40 shadow-[0_0_20px_rgba(0,0,0,0.5),0_4px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 h-auto md:h-[520px]">
                  <CardContent
                    className={`flex flex-col ${service.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} items-stretch p-0 self-stretch w-full h-full`}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 md:gap-8 p-6 md:p-12 flex-1">
                      <div className="flex flex-col items-start gap-2 self-stretch w-full">
                        <div className="flex flex-col items-start gap-6 self-stretch w-full">
                          <h3 className="self-stretch mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-white text-[18px] md:text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                            {service.title}
                          </h3>

                          <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-gray-300 text-sm md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-center flex-1 h-[250px] md:h-full overflow-hidden">
                      <img
                        className={`w-full object-cover ${
                          service.title === "Hausmeisterdienst"
                            ? "h-[180%] object-[50%_18%]"
                            : service.title === "Winterdienst"
                            ? "h-[180%] object-[50%_-3%]"
                            : "h-full object-top"
                        }`}
                        alt={service.title}
                        src={service.image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
