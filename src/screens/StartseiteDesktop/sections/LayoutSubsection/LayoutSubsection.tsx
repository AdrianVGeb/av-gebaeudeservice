import React, { useEffect, useRef, useState } from "react";

export const LayoutSubsection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(0);
  const [statsVisible, setStatsVisible] = useState(0);
  const [imageVisible, setImageVisible] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const statistics = [
    {
      value: "15+",
      label: "Jahre Erfahrung",
    },
    {
      value: "Professionell",
      label: "Moderne Ausstattung",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.7;

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

      if (statsRef.current) {
        const statsRect = statsRef.current.getBoundingClientRect();
        const statsTrigger = windowHeight * 0.85;
        if (statsRect.top < statsTrigger) {
          setStatsVisible(1);
        } else {
          setStatsVisible(0);
        }
      }

      if (imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const imageTrigger = windowHeight * 0.85;
        if (imageRect.top < imageTrigger) {
          setImageVisible(1);
        } else {
          setImageVisible(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="uber-uns" ref={sectionRef} className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-16 md:py-28 w-full">
      <div className="flex-col max-w-screen-xl items-start gap-12 md:gap-20 flex w-full">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full md:flex-1 md:min-w-0">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <div
                  className="inline-flex items-center transition-all duration-700"
                  style={{
                    opacity: scrollProgress,
                    transform: `translateY(${30 * (1 - scrollProgress)}px)`
                  }}
                >
                  <p className="mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-white text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                    Familienunternehmen
                  </p>
                </div>

                <div className="flex flex-col items-start gap-6 w-full">
                  <h2
                    className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[20px] md:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] transition-all duration-700"
                    style={{
                      opacity: scrollProgress,
                      transform: `translateY(${30 * (1 - scrollProgress)}px)`,
                      transitionDelay: '50ms'
                    }}
                  >
                    Über uns
                  </h2>

                  <p
                    ref={textRef}
                    className="text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] transition-all duration-700"
                    style={{
                      opacity: textVisible,
                      transform: `translateX(${-50 * (1 - textVisible)}px)`,
                      transitionDelay: '100ms'
                    }}
                  >
                    Adrian Voicu Gebäudeservice ist ein
                    Familienunternehmen aus München, das seit 2010 für
                    Sauberkeit, Zuverlässigkeit und Vertrauen steht.
                    <br />
                    <br />
                    Wir betreuen zahlreiche Objekte in München und Umgebung –
                    viele davon seit über 10 Jahren.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                <div ref={statsRef} className="flex items-start gap-4 md:gap-6 px-0 py-2 w-full">
                  {statistics.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-2 flex-1 transition-all duration-700"
                      style={{
                        opacity: statsVisible,
                        transform: `translateX(${-50 * (1 - statsVisible)}px)`,
                        transitionDelay: `${200 + index * 100}ms`
                      }}
                    >
                      <h3 className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[18px] md:text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                        {stat.value}
                      </h3>

                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-gray-300 text-xs md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start pl-0 md:pl-8 pt-0 md:pt-12 w-full md:flex-1 md:min-w-0">
            <div
              ref={imageRef}
              className="relative rounded-2xl transition-all duration-700 w-full md:w-[85.75%] lg:w-[85.75%] aspect-[4/3] md:aspect-auto md:h-[130%] max-w-full"
              style={{
                opacity: isMobile ? imageVisible : scrollProgress,
                transform: `translateX(${150 * (1 - (isMobile ? imageVisible : scrollProgress))}px)`,
                transitionDelay: '150ms',
                minHeight: '250px',
                maxHeight: 'min(500px, 130%)',
              }}
            >
              <div
                className="absolute -inset-[2px] rounded-2xl border-[2px] border-[#dbb0e4] pointer-events-none z-10"
              />
              <div className="w-full h-full overflow-visible rounded-2xl">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Team photo"
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=640"
                  style={{
                    objectPosition: 'center center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
