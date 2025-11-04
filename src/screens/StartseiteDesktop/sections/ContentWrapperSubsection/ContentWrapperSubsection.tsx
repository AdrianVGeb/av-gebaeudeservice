import React from "react";

const textBlocks = [
  {
    id: 1,
    content: `Wir verarbeiten keine personenbezogenen Daten, außer den Angaben, die Sie uns freiwillig per E-Mail oder Telefon mitteilen.
Es werden keine Cookies oder Tracking-Tools verwendet.
Verantwortlich für die Datenverarbeitung ist die im Impressum genannte Person.
Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung von Anfragen).
Ihre Daten werden ausschließlich zur Bearbeitung der Anfrage genutzt und anschließend gelöscht.
Diese Website wird über eine SSL-verschlüsselte Verbindung bereitgestellt.`,
    paddingBottom: "",
  },
];

export const ContentWrapperSubsection = (): JSX.Element => {
  return (
    <section id="datenschutz" data-section="datenschutz" className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-8 w-full bg-black">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex flex-col max-w-screen-md items-start gap-6 w-full">
          <h1 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[18px] md:text-[24px] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Datenschutzerklärung
          </h1>

          <div className="flex flex-col items-start w-full">
            {textBlocks.map((block) => (
              <div
                key={block.id}
                className={`flex flex-col items-start pt-0 px-0 w-full ${block.paddingBottom}`}
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
