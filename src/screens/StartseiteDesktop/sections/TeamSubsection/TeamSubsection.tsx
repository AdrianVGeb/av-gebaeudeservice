import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const teamMembers = [
  {
    image: "https://i.imgur.com/H1KHVGF.png",
    name: "Adrian Voicu",
    role: "Geschäftsführer & Ansprechpartner",
    description:
      "Leitet das Unternehmen seit der Gründung mit Erfahrung, Überblick und persönlichem Einsatz.\n\nDirekter Ansprechpartner für Hausverwaltungen und Objektbetreuer.",
  },
  {
    image: "https://i.imgur.com/9jMJKvK.jpeg",
    name: "Nicoleta Voicu",
    role: "Kundenbetreuung & Objektbetreuung",
    description:
      "Direkte Ansprechpartnerin für Hausverwaltungen und Mieter/Nutzer.\n\nNimmt Anrufe entgegen, koordiniert Termine und unterstützt aktiv bei den Tätigkeiten vor Ort.",
  },
  {
    image: "https://i.imgur.com/nO0YI85.jpeg",
    name: "Constantin Voicu",
    role: "Hausmeister & Techniker",
    description:
      "Unterstützt aktiv alle Tätigkeiten der Firma.",
  },
];

export const TeamSubsection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageVisible, setImageVisible] = useState<number[]>([0, 0, 0]);
  const [textVisible, setTextVisible] = useState<number[]>([0, 0, 0]);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

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

      const newImageVisible = imageRefs.current.map((ref) => {
        if (!ref) return 0;
        const imageRect = ref.getBoundingClientRect();
        const imageTrigger = windowHeight * 0.65;
        return imageRect.top < imageTrigger ? 1 : 0;
      });
      setImageVisible(newImageVisible);

      const newTextVisible = imageRefs.current.map((ref, i) => {
        if (!ref) return 0;
        const imageRect = ref.getBoundingClientRect();
        const imageTrigger = windowHeight * 0.65;
        return imageRect.top < imageTrigger ? 1 : 0;
      });
      setTextVisible(newTextVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-16 md:py-28 w-full">
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
              UNSER TEAM
            </h2>

            <p
              className="text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] transition-all duration-700"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${30 * (1 - scrollProgress)}px)`,
                transitionDelay: '100ms'
              }}
            >
              Persönlich, erfahren und direkt vor Ort.
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-8 self-stretch w-full">
          {teamMembers.map((member, index) => {
            const isCenter = index === 1;
            const translateX = isCenter ? 0 : index === 0 ? -300 : 300;
            const easing = imageVisible[index];
            const textEasing = textVisible[index];

            return (
              <Card
                key={index}
                className="flex flex-col items-center gap-6 w-full md:flex-1 border-0 shadow-none bg-transparent"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                  <div
                    ref={(el) => (imageRefs.current[index] = el)}
                    className="relative"
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                    style={{
                      opacity: easing,
                      transform: `translateX(${translateX * (1 - easing)}px)`,
                      transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div
                      className="absolute rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(15,127,122,0.8) 0%, rgba(15,127,122,0.8) 100%)',
                        filter: 'blur(40px)',
                        width: hoveredImage === index ? 'clamp(140px, 20vw, 160px)' : 'clamp(100px, 15vw, 110px)',
                        height: hoveredImage === index ? 'clamp(140px, 20vw, 160px)' : 'clamp(100px, 15vw, 110px)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: 'teamGlowPulse 2s ease-in-out infinite',
                        transition: 'width 300ms ease, height 300ms ease',
                        zIndex: -1,
                      }}
                    />
                    <style>{`
                      @keyframes teamGlowPulse {
                        0%, 100% {
                          box-shadow: 0 0 20px rgba(15,127,122,0.4),
                                      0 0 40px rgba(15,127,122,0.2),
                                      0 0 60px rgba(15,127,122,0.1);
                        }
                        50% {
                          box-shadow: 0 0 30px rgba(15,127,122,0.6),
                                      0 0 60px rgba(15,127,122,0.4),
                                      0 0 90px rgba(15,127,122,0.2);
                        }
                      }
                    `}</style>
                    <div
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: hoveredImage === index ? 'clamp(164px, 22vw, 184.2px)' : 'clamp(120px, 17vw, 133px)',
                        height: hoveredImage === index ? 'clamp(164px, 22vw, 184.2px)' : 'clamp(120px, 17vw, 133px)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'linear-gradient(135deg, #2596be 0%, #9b59b6 100%)',
                        padding: '2.5px',
                        zIndex: 0,
                        transition: 'width 300ms ease, height 300ms ease',
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-white" />
                    </div>
                    <Avatar
                      className="relative z-10"
                      style={{
                        width: hoveredImage === index ? 'clamp(159px, 21.5vw, 179.2px)' : 'clamp(115px, 16.5vw, 128px)',
                        height: hoveredImage === index ? 'clamp(159px, 21.5vw, 179.2px)' : 'clamp(115px, 16.5vw, 128px)',
                        transition: 'width 300ms ease, height 300ms ease',
                      }}
                    >
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                    </Avatar>
                  </div>

                  <div
                    ref={(el) => (textRefs.current[index] = el)}
                    className="flex flex-col items-center gap-4 self-stretch w-full"
                    style={{
                      opacity: easing,
                      transform: `translateY(${30 * (1 - easing)}px) translateZ(0)`,
                      transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch mt-[-2.00px] font-text-large-semi-bold font-bold text-white text-[16px] md:text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        {member.name}
                      </h4>

                      <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-gray-400 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm md:text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)] whitespace-pre-line" style={{ transform: 'translateZ(0)' }}>
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
