import React from "react";
import { Separator } from "../../../../components/ui/separator";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const windowHeight = window.innerHeight;
    const elementHeight = element.offsetHeight;
    const offset = (windowHeight - elementHeight) / 2;
    const scrollPosition = elementPosition - offset;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }
};

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-12 md:py-20 w-full">
      <div className="flex-col max-w-screen-xl items-start gap-12 flex w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center gap-4 md:gap-6">
            <img
              className="h-10 md:h-12 w-auto object-contain rounded-full"
              alt="Logo"
              src="https://i.imgur.com/jVxbVLV.png"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(24, 232, 216, 0.3))'
              }}
            />
            <div className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-white text-sm md:text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
              Adrian Voicu Gebäudeservice
            </div>
          </div>
          <div className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-gray-300 text-xs md:text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
            📞 +49 173 104 9688 | ✉️ info@av-gebaeudeservice.com
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <Separator className="bg-white opacity-20" />

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full text-center">
            <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-gray-400 text-xs md:text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2025 Adrian Voicu Gebäudeservice
            </p>
            <span className="text-gray-400 hidden md:inline">|</span>
            <a
              href="#impressum"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('impressum');
              }}
              className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-gray-300 text-xs md:text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:opacity-70 transition-opacity cursor-pointer underline"
            >
              Impressum
            </a>
            <span className="text-gray-400 hidden md:inline">|</span>
            <a
              href="#datenschutz"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('rechtliche');
              }}
              className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-gray-300 text-xs md:text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:opacity-70 transition-opacity cursor-pointer underline"
            >
              Datenschutzerklärung
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
