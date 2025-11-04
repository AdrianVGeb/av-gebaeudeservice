import React from "react";

const textBlocks = [
  {
    id: 1,
    content: `Adrian Voicu Gebäudeservice ist ein eingetragenes Unternehmen mit Sitz in Feldkirchen b. München.
Wir sind spezialisiert auf professionelle Gebäudereinigung, Hausmeisterdienste, Aufzugsreinigung, Fensterreinigung und Winterdienst. Dabei arbeiten wir mit höchster Sorgfalt, Zuverlässigkeit und Präzision.

Unser Unternehmen ist vollständig versichert und erfüllt alle gesetzlichen Anforderungen für Gebäudedienstleister in Deutschland.
Wir legen großen Wert auf Transparenz, Verbindlichkeit und eine vertrauensvolle Zusammenarbeit mit unseren Auftraggebern.

Als familiengeführtes Unternehmen mit langjähriger Erfahrung stehen wir für persönliche Betreuung, direkte Kommunikation und eine fachgerechte Ausführung aller Leistungen.`,
    hasPaddingBottom: false,
  },
];

export const ContentSubsection = (): JSX.Element => {
  return (
    <section id="rechtliche" className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 pt-16 md:pt-28 pb-8 w-full bg-black">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex flex-col max-w-screen-md items-start gap-6 w-full">
          <h2 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[18px] md:text-[24px] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Rechtliche Informationen
          </h2>

          <div className="flex flex-col items-start w-full">
            {textBlocks.map((block) => (
              <div
                key={block.id}
                className={`flex flex-col items-start ${block.hasPaddingBottom ? "pt-0 pb-4 px-0" : ""} w-full`}
              >
                <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-gray-300 text-[11px] md:text-[12px] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] whitespace-pre-line">
                  {block.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
