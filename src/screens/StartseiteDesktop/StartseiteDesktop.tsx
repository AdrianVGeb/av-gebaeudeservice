import React from "react";
import { Button } from "../../components/ui/button";
import { ContactSubsection } from "./sections/ContactSubsection";
import { ContainerWrapperSubsection } from "./sections/ContainerWrapperSubsection";
import { ContentSubsection } from "./sections/ContentSubsection";
import { ContentWrapperSubsection } from "./sections/ContentWrapperSubsection";
import { CtaSubsection } from "./sections/CtaSubsection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { ImpressumSubsection } from "./sections/ImpressumSubsection";
import { HeaderSubsection } from "./sections/HeaderSubsection";
import { LayoutSubsection } from "./sections/LayoutSubsection";
import { LayoutWrapperSubsection } from "./sections/LayoutWrapperSubsection";
import { TeamSubsection } from "./sections/TeamSubsection";

const navigationLinks = [
  { label: "Über uns", hasDropdown: false, href: "#uber-uns" },
  { label: "Leistungen", hasDropdown: false, href: "#leistungen" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const isMobile = window.innerWidth < 768;
    let offset = 0;

    if (isMobile) {
      if (id === 'ihre-ansprechpartner') {
        offset = -95;
      } else if (id === 'uber-uns' || id === 'leistungen') {
        offset = -95;
      }
    } else {
      if (id === 'ihre-ansprechpartner') {
        offset = -100;
      }
    }

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  }
};

export const StartseiteDesktop = (): JSX.Element => {

  return (
    <div className="flex flex-col w-full pt-24 relative overflow-x-hidden">
      <div id="hero" style={{ position: 'absolute', top: 0 }}></div>
      <div className="fixed inset-0 -z-10 bg-black" style={{ height: '200vh' }}>
        <div className="fixed inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
          opacity: 1,
          height: '200vh'
        }}></div>
      </div>
      <div className="fixed inset-0 -z-[5] pointer-events-none">
        <div className="absolute top-[25%] left-[15%] w-[400px] h-[400px] bg-[#061da9] rounded-full opacity-20 blur-[100px]"></div>
        <div className="absolute top-[50%] right-[20%] w-[350px] h-[350px] bg-[#061da9] rounded-full opacity-15 blur-[90px]"></div>
        <div className="absolute bottom-[20%] left-[45%] w-[300px] h-[300px] bg-[#061da9] rounded-full opacity-10 blur-[70px]"></div>
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center px-4 md:px-16 py-0 max-w-[1440px] bg-gradient-to-r from-[#0010ae]/10 to-[#4d5aef]/10 backdrop-blur-lg h-[60px] md:h-[72px] rounded-full shadow-[0_0_10px_rgba(204,115,248,0.08),0_2px_8px_rgba(0,16,174,0.05),inset_0_-1px_2px_rgba(255,255,255,0.1),inset_0_1px_2px_rgba(0,0,0,0.1)] border-[2px] border-gray-400/40" style={{ width: 'calc(100vw - 2rem)', maxWidth: 'min(calc(100vw - 2rem), 1440px)' }}>
        <div className="flex items-center justify-between md:justify-center gap-1 md:gap-8 w-full max-w-full">
          <div className="flex items-center flex-1 md:flex-1">
            <div className="inline-flex items-center gap-2 md:gap-8">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.replace('#', ''));
                  }}
                  className="inline-flex items-center justify-center gap-1 cursor-pointer px-1.5 md:px-3 py-1.5 md:py-2 rounded-lg transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                >
                  <div className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[10px] md:text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                    {link.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center justify-center flex-shrink-0 md:flex-none">
            <a
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer group"
            >
              <div className="relative">
                <div
                  className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:[animation:pulse-logo_2s_ease-in-out_infinite]"
                  style={{
                    background: 'radial-gradient(circle, rgba(24, 232, 216, 0.5) 0%, rgba(89, 128, 233, 0.5) 100%)',
                    filter: 'blur(15px)',
                    width: '130%',
                    height: '130%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                <img
                  className="h-10 md:h-12 w-auto object-contain rounded-full relative z-10"
                  alt="Logo"
                  src="https://i.imgur.com/jVxbVLV.png"
                  style={{
                    imageRendering: 'high-quality',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    WebkitTransform: 'translateZ(0)',
                  }}
                />
                <div className="absolute inset-0 rounded-full border-[2.5px] border-[#2596be] pointer-events-none z-20" style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)' }}></div>
              </div>
              <style>{`
                @keyframes pulse-logo {
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
            </a>
          </div>

          <div className="flex items-center justify-end flex-1 md:flex-1">
            <Button
              onClick={() => scrollToSection('ihre-ansprechpartner')}
              className="h-auto px-2 md:px-2.5 py-0.5 md:py-1 bg-black text-white rounded-[20px] border-[2px] md:border-[3px] border-gray-400 hover:bg-black hover:border-white hover:scale-105 cursor-pointer relative overflow-visible hover:animate-pulse-glow transition-all duration-300 ease-out text-[10px] md:text-base"
              style={{ isolation: 'isolate' }}
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)] relative z-10">
                Kontakt
              </span>
            </Button>
          </div>
        </div>
      </nav>

      <HeaderSubsection />
      <LayoutSubsection />
      <ContainerWrapperSubsection />
      <div id="cta" style={{ position: 'absolute', top: 0 }}></div>
      <CtaSubsection />
      <div id="warum-wrapper" style={{ position: 'absolute', top: 0 }}></div>
      <LayoutWrapperSubsection />
      <div id="team" style={{ position: 'absolute', top: 0 }}></div>
      <TeamSubsection />
      <ContactSubsection />
      <div id="content" style={{ position: 'absolute', top: 0 }}></div>
      <ContentSubsection />
      <ContentWrapperSubsection />
      <ImpressumSubsection />
      <FooterSubsection />
      <div id="footer" style={{ position: 'absolute', top: 0 }}></div>
    </div>
  );
};
