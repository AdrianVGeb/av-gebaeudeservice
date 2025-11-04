import React, { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Erfahrung und Kompetenz",
    description:
      "Seit über 15 Jahren sorgen wir für gepflegte Objekte.\nWir denken mit, handeln eigenständig und halten Rücksprache nur, wenn es nötig ist – oder wenn Sie es wünschen.",
    image: "https://i.imgur.com/ZN71QOA.jpeg"
  },
  {
    title: "Direkte Ansprechpartner",
    description:
      "Persönlicher Kontakt und schnelle Kommunikationswege für reibungslose Zusammenarbeit. Wir sind immer für unsere Kunden erreichbar.",
    image: "https://i.imgur.com/o8Xf3rl.jpeg"
  },
  {
    title: "Zuverlässigkeit garantiert",
    description:
      "Sollte einmal ein Problem gemeldet werden, reagieren wir umgehend. In der Regel sind wir noch am selben Tag vor Ort, um die Situation zu prüfen und das Anliegen direkt zu klären.",
    image: "https://i.imgur.com/ctuJkN2.jpeg"
  },
];

export const LayoutWrapperSubsection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(0);
  const [imageVisible, setImageVisible] = useState(0);
  const [featureVisible, setFeatureVisible] = useState<number[]>([0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [activeImage, setActiveImage] = useState(0);

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

      if (imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const imageTrigger = windowHeight * 0.65;
        if (imageRect.top < imageTrigger) {
          setImageVisible(1);
        } else {
          setImageVisible(0);
        }
      }

      const newFeatureVisible = featureRefs.current.map((ref, index) => {
        if (!ref) return 0;
        const featureRect = ref.getBoundingClientRect();
        const featureTrigger = index === 2 ? windowHeight * 0.75 : windowHeight * 0.7;
        return featureRect.top < featureTrigger ? 1 : 0;
      });
      setFeatureVisible(newFeatureVisible);

      if (imageRef.current && window.innerWidth < 768) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const lastFeatureRect = featureRefs.current[2]?.getBoundingClientRect();
        if (lastFeatureRect && lastFeatureRect.top < windowHeight * 0.75) {
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

  useEffect(() => {
    if (hoveredIndex !== null) {
      setActiveImage(hoveredIndex);
    }
  }, [hoveredIndex]);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-16 md:py-32 pb-4 md:pb-32 w-full">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex flex-col max-w-screen-md items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-center gap-6 w-full">
              <h2
                className="w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[20px] md:text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] transition-all duration-700"
                style={{
                  opacity: scrollProgress,
                  transform: `translateY(${30 * (1 - scrollProgress)}px)`
                }}
              >
                Warum mit uns zusammenarbeiten?
              </h2>

              <p
                ref={textRef}
                className="text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] transition-all duration-700"
                style={{
                  opacity: textVisible,
                  transform: `translateY(${30 * (1 - textVisible)}px)`,
                  transitionDelay: '100ms'
                }}
              >
                Wir bieten mehr als nur Reinigungsservice – wir sind Ihr
                zuverlässiger Partner.
                <br />
                Nach einer Besichtigung erstellen wir für jedes Objekt ein
                individuell angepasstes Angebot, um einen fairen und passenden
                Preis gewährleisten zu können.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-20 w-full relative max-w-screen-xl mx-auto">
          <div className="flex flex-col w-full md:w-[616px] md:min-w-0 items-start relative">
            {features.map((feature, index) => {
              const isHovered = hoveredIndex === index;
              const showDescription = isHovered;

              return (
                <div
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="flex items-start gap-4 px-0 py-6 w-full border-b border-[#0c080126] cursor-pointer transition-all duration-500 relative"
                  style={{
                    opacity: featureVisible[index],
                    transform: `translateY(${30 * (1 - featureVisible[index])}px)`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 mt-1 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 16L12 22L26 8" stroke="#dbb0e4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(219,176,228,0.6)]" />
                  </svg>

                  <div className="flex flex-col items-start gap-4 flex-1">
                    <h3 className="w-full mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[16px] md:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                      {feature.title}
                    </h3>

                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: showDescription ? '200px' : '0px',
                        opacity: showDescription ? 1 : 0,
                      }}
                    >
                      <p
                        className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-gray-300 text-sm md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] transition-all duration-500"
                        style={{
                          transform: showDescription ? 'translateY(0)' : 'translateY(-10px)',
                        }}
                      >
                        {feature.description.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < feature.description.split("\n").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div ref={imageRef} className="flex-1 relative pl-0 md:pl-8 w-full max-w-full md:max-w-none mt-0 md:mt-0" style={{ minHeight: window.innerWidth < 768 ? '400px' : 'auto' }}>
            <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-8 flex-col py-16">
              {features.map((_, lineIndex) => {
                const baseHeight = 33.33;
                const additionalHeight = hoveredIndex === lineIndex ? 15 : 0;
                const heightPercent = baseHeight + additionalHeight;

                return (
                  <div
                    key={lineIndex}
                    className="relative transition-all duration-500 ease-in-out"
                    style={{
                      height: `${heightPercent}%`
                    }}
                  >
                    <div
                      className="absolute left-0 w-[2px] rounded-full bg-[#dbb0e4] transition-all duration-700 ease-in-out"
                      style={{
                        top: hoveredIndex === lineIndex ? '0%' : hoveredIndex !== null && hoveredIndex > lineIndex ? '100%' : '0%',
                        height: hoveredIndex === lineIndex ? '100%' : '0%',
                        opacity: imageVisible === 1 ? (hoveredIndex === lineIndex ? 1 : 0.3) : 0,
                      }}
                    />
                    <div
                      className="absolute left-2 w-[1px] rounded-full bg-[#dbb0e4] transition-all duration-700 ease-in-out"
                      style={{
                        top: hoveredIndex === lineIndex ? '10%' : hoveredIndex !== null && hoveredIndex > lineIndex ? '100%' : '0%',
                        height: hoveredIndex === lineIndex ? '80%' : '0%',
                        opacity: imageVisible === 1 ? (hoveredIndex === lineIndex ? 0.8 : 0.2) : 0,
                        transitionDelay: '50ms'
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="relative w-full aspect-[4/3] h-[300px] md:aspect-auto md:h-[600px] max-w-full">
              <div
                className="absolute -inset-[2px] rounded-xl border-[2px] border-[#dbb0e4] transition-all duration-500 pointer-events-none z-50"
                style={{
                  opacity: imageVisible === 1 ? 1 : 0,
                }}
              />

              {features.map((feature, index) => {
                const isActive = activeImage === index;

                return (
                  <img
                    key={index}
                    className="w-full h-full object-cover object-center rounded-xl transition-opacity duration-500"
                    alt={feature.title}
                    src={feature.image}
                    style={{
                      opacity: isActive && imageVisible === 1 ? 1 : 0,
                      zIndex: isActive ? 10 : 0,
                      pointerEvents: 'none',
                      position: index === 0 ? 'relative' : 'absolute',
                      top: index === 0 ? 'auto' : 0,
                      left: index === 0 ? 'auto' : 0
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
