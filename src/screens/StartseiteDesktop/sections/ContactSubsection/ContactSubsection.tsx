import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const contactCards = [
  {
    iconType: "email",
    title: "E-Mail",
    description: "Kontaktieren Sie uns für individuelle Anfragen",
    link: "info@av-gebaeudeservice.com",
    linkType: "email",
  },
  {
    iconType: "phone",
    title: "Telefon",
    description: "Adrian Voicu | Neukunden",
    link: "+49 173 104 9688",
    linkType: "phone",
  },
  {
    iconType: "phone",
    title: "Telefon",
    description: "Nicoleta Voicu | Bestandskunden",
    link: "+49 172 258 2059",
    linkType: "phone",
  },
];

export const ContactSubsection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.6;

      if (rect.top < triggerPoint) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }

      if (cardsRef.current) {
        const cardsRect = cardsRef.current.getBoundingClientRect();
        const cardsTrigger = windowHeight * 0.65;
        if (cardsRect.top < cardsTrigger) {
          setCardsVisible(1);
        } else {
          setCardsVisible(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ihre-ansprechpartner" ref={sectionRef} className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-8 md:py-28 pb-24 md:pb-96 w-full overflow-x-hidden">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-4 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2
              className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[20px] md:text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] transition-all duration-700"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${30 * (1 - scrollProgress)}px)`,
                willChange: 'transform, opacity'
              }}
            >
              Ihre Ansprechpartner
            </h2>

            <p
              className="text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] transition-all duration-700"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${30 * (1 - scrollProgress)}px)`,
                transitionDelay: '100ms',
                willChange: 'transform, opacity'
              }}
            >
              Direkter Kontakt zu unserem Team
            </p>
          </div>
        </header>

        <div className="flex flex-col items-center gap-16 w-full">
          <div ref={cardsRef} className="gap-8 md:gap-12 flex flex-col md:flex-row items-center md:items-start w-full relative">
            {contactCards.map((card, index) => {
              const isCenter = index === 1;
              const translateX = isCenter ? 0 : index === 0 ? 300 : -300;
              const zIndex = isCenter ? 30 : 10;
              const easing = cardsVisible;

              return (
                <Card
                  key={index}
                  className="flex flex-col items-center gap-6 w-full md:flex-1 bg-transparent border-0 shadow-none"
                  style={{ zIndex }}
                >
                  <CardContent className="flex flex-col items-center gap-6 w-full p-0">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                      style={{
                        opacity: easing,
                        transform: `translateX(${translateX * (1 - easing)}px)`,
                        transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        isolation: 'isolate'
                      }}
                    >
                      {card.iconType === 'email' ? (
                        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 8px rgba(219,176,228,0.6))' }}>
                          <circle cx="24" cy="24" r="22" stroke="#dbb0e4" strokeWidth="2" />
                          <text x="24" y="32" fontSize="24" fontWeight="bold" fill="#dbb0e4" textAnchor="middle">@</text>
                        </svg>
                      ) : (
                        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 8px rgba(219,176,228,0.6))' }}>
                          <path d="M14 8C12.895 8 12 8.895 12 10V38C12 39.105 12.895 40 14 40H34C35.105 40 36 39.105 36 38V10C36 8.895 35.105 8 34 8H14ZM14 10H34V38H14V10ZM18 14V16H30V14H18ZM22 32C20.895 32 20 32.895 20 34C20 35.105 20.895 36 22 36H26C27.105 36 28 35.105 28 34C28 32.895 27.105 32 26 32H22Z" fill="#dbb0e4" />
                        </svg>
                      )}
                    </div>

                    <div
                      className="flex flex-col items-center gap-6 w-full"
                      style={{
                        opacity: easing,
                        transform: `translateY(${30 * (1 - easing)}px)`,
                        transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <div className="flex flex-col items-center gap-4 w-full">
                        <h3 className="mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[16px] md:text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                          {card.title}
                        </h3>

                        <p className="text-gray-300 text-sm md:text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                          {card.description}
                        </p>
                      </div>

                      <a
                        href={
                          card.linkType === "email"
                            ? `mailto:${card.link}`
                            : `tel:${card.link}`
                        }
                        className="font-text-regular-link font-bold text-white text-sm md:text-[length:var(--text-regular-link-font-size)] text-center tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] [font-style:var(--text-regular-link-font-style)]"
                      >
                        {card.link}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
