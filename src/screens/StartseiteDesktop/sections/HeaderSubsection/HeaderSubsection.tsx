import React, { useEffect, useState } from "react";

export const HeaderSubsection = (): JSX.Element => {
  const [logoSize, setLogoSize] = useState(0);
  const [logoPosition, setLogoPosition] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showSlogan, setShowSlogan] = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [showLogoGlow, setShowLogoGlow] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const ensureReady = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(ensureReady);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const timer1 = setTimeout(() => setLogoSize(1), 100);
    const timer2 = setTimeout(() => setLogoSize(2), 1000);
    const timer3 = setTimeout(() => setLogoPosition(1), 1500);
    const timer4 = setTimeout(() => setShowText(true), 1800);
    const timer5 = setTimeout(() => setShowSlogan(true), 2400);
    const timer6 = setTimeout(() => setShowSubText(true), 3400);
    const timer7 = setTimeout(() => setShowLogoGlow(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, [isReady]);

  const getLogoHeight = () => {
    const isMobile = window.innerWidth < 768;
    if (logoSize === 0) return 0;
    if (logoSize === 1) return isMobile ? 200 : 350;
    return isMobile ? 60 : 80;
  };

  const getBlurSize = () => {
    const isMobile = window.innerWidth < 768;
    const baseHeight = getLogoHeight();
    if (baseHeight === 0) return 0;
    return isMobile ? baseHeight * 2 : baseHeight * 1.15;
  };

  return (
    <section className="flex flex-col h-[500px] md:h-[700px] items-center justify-start pt-20 md:pt-32 gap-12 md:gap-20 px-4 md:px-16 py-0 relative w-full" style={{ paddingTop: 'clamp(5rem, 12vh, 8rem)' }}>
      <div className="flex flex-col max-w-screen-xl items-center gap-20 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-md items-center gap-8 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-6 relative w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center mb-4 relative">
              <div
                className="absolute rounded-full transition-all"
                style={{
                  background: 'radial-gradient(circle, rgba(24, 232, 216, 0.5) 0%, rgba(89, 128, 233, 0.5) 100%)',
                  filter: window.innerWidth < 768 ? 'blur(40px)' : 'blur(60px)',
                  opacity: showLogoGlow ? 1 : 0,
                  width: `${getBlurSize()}px`,
                  height: `${getBlurSize()}px`,
                  top: '50%',
                  left: '50%',
                  transform: logoPosition === 1
                    ? (window.innerWidth < 768 ? 'translate(-50%, calc(-50% - 20px))' : 'translate(-50%, calc(-50% - 40px))')
                    : 'translate(-50%, -50%)',
                  animation: showLogoGlow ? 'pulse 3s ease-in-out infinite' : 'none',
                  transitionDuration: logoSize === 1 ? '800ms' : '600ms',
                  transitionProperty: 'opacity, width, height, transform',
                }}
              />
              <img
                className="object-contain rounded-full transition-all relative z-10"
                style={{
                  height: `${getLogoHeight()}px`,
                  opacity: logoSize === 0 ? 0 : 1,
                  transform: logoPosition === 1 ? (window.innerWidth < 768 ? 'translateY(-20px)' : 'translateY(-40px)') : 'translateY(0)',
                  transitionDuration: logoSize === 1 ? '800ms' : '600ms',
                  filter: 'drop-shadow(0 0 20px rgba(24, 232, 216, 0.3))',
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                }}
                alt="Logo"
                src="https://i.imgur.com/jVxbVLV.png"
              />
              <style>{`
                @keyframes pulse {
                  0%, 100% {
                    opacity: 0.5;
                    transform: translate(-50%, -50%) scale(1);
                  }
                  50% {
                    opacity: 0.8;
                    transform: translate(-50%, -50%) scale(1.05);
                  }
                }
              `}</style>
            </div>

            <div className="flex flex-col items-center w-full gap-2" style={{ willChange: 'contents' }}>
              <div className="overflow-visible w-full flex justify-center">
                <h1
                  className="relative mt-[-1.00px] text-[24px] md:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap uppercase"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    opacity: showText ? 1 : 0,
                    transform: `translateX(${showText ? 0 : -400}px)`,
                    background: 'linear-gradient(180deg, #27c1d0 0%, #5d76e3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'all 700ms',
                    willChange: 'transform, opacity',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  Adrian Voicu
                </h1>
              </div>
              <div className="overflow-visible w-full flex justify-center">
                <h1
                  className="relative text-[24px] md:text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap uppercase"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    opacity: showText ? 1 : 0,
                    transform: `translateX(${showText ? 0 : 400}px)`,
                    background: 'linear-gradient(180deg, #27c1d0 0%, #5d76e3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'all 700ms',
                    willChange: 'transform, opacity',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  Gebäudeservice
                </h1>
              </div>

              <div
                className="relative text-center transition-opacity duration-[2000ms]"
                style={{
                  fontFamily: "'Codec Pro', sans-serif",
                  fontSize: 'clamp(14px, 3vw, 32px)',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  opacity: showSlogan ? 1 : 0,
                  background: 'linear-gradient(135deg, #18e8d8 0%, #5980e9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  willChange: 'opacity',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                WIR KÜMMERN UNS.
              </div>
            </div>

            <p
              className="relative font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-gray-300 text-sm md:text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] transition-opacity duration-1000 px-4 max-w-2xl"
              style={{
                opacity: showSubText ? 1 : 0,
              }}
            >
              Seit über 15 Jahren sorgen wir für gepflegte Objekte und
              verlässliche Zusammenarbeit in München und Umgebung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
