import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";

export const CtaSubsection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.5;

      if (rect.top < triggerPoint) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }

      if (textRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const textTrigger = windowHeight * 0.65;
        if (textRect.top < textTrigger) {
          setTextVisible(1);
        } else {
          setTextVisible(0);
        }
      }

      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const buttonTrigger = windowHeight * 0.7;
        if (buttonRect.top < buttonTrigger) {
          setButtonVisible(1);
        } else {
          setButtonVisible(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-16 md:py-28 w-full">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex flex-col max-w-screen-md items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="inline-flex flex-col items-center w-full">
              <h2
                className="w-full max-w-[768px] mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[24px] md:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] transition-all duration-500"
                style={{
                  opacity: scrollProgress,
                  transform: `translateX(${-200 * (1 - scrollProgress)}px)`
                }}
              >
                Langjährige
              </h2>

              <h2
                className="w-full max-w-[768px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[24px] md:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] transition-all duration-500"
                style={{
                  opacity: scrollProgress,
                  transform: `translateX(${200 * (1 - scrollProgress)}px)`
                }}
              >
                Kooperationen
              </h2>
            </div>

            <p
              ref={textRef}
              className="text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] transition-all duration-700"
              style={{
                opacity: textVisible,
                transform: `translateY(${30 * (1 - textVisible)}px)`
              }}
            >
              Seit 2010 betreuen wir verschiedene Gewerbe- und Wohnobjekte in
              München und Umgebung. Unsere Kooperationen mit Hausverwaltungen
              sind langfristig angelegt, und wir zielen darauf ab, diese in
              Zukunft weiter auszubauen.
            </p>
          </div>

          <div ref={buttonRef} className="inline-flex items-start gap-4">
            <Button
              onClick={() => {
                const element = document.getElementById('ihre-ansprechpartner');
                if (element) {
                  const offset = -100;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="h-auto px-2.5 py-1 bg-black text-white rounded-[20px] border-[3px] border-gray-400 hover:bg-black hover:border-white cursor-pointer relative overflow-visible transition-[opacity,transform,scale] duration-300"
              style={{
                isolation: 'isolate',
                opacity: buttonVisible,
                transform: `translateY(${20 * (1 - buttonVisible)}px)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(${20 * (1 - buttonVisible)}px) scale(1.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translateY(${20 * (1 - buttonVisible)}px) scale(1)`;
              }}
            >
              <div
                className="absolute inset-0 rounded-[20px] transition-all duration-700"
                style={{
                  boxShadow: buttonVisible === 1
                    ? '0 0 20px rgba(0, 16, 174, 0.4), 0 0 40px rgba(0, 16, 174, 0.2), 0 0 60px rgba(0, 16, 174, 0.1)'
                    : '0 0 0 rgba(0, 16, 174, 0)',
                  animation: buttonVisible === 1 ? 'pulse-glow 2s ease-in-out infinite' : 'none',
                  pointerEvents: 'none',
                }}
              />
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)] relative z-10" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
                Kontakt
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
