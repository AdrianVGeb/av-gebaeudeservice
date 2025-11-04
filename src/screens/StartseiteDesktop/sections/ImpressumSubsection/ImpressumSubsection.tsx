import React from "react";

export const ImpressumSubsection = (): JSX.Element => {
  return (
    <section id="impressum" data-section="impressum" className="flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 pt-8 pb-16 md:pb-28 w-full bg-black">
      <div className="flex flex-col max-w-screen-xl items-center gap-20 w-full">
        <div className="flex flex-col max-w-screen-md items-start gap-6 w-full">
          <h1 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[18px] md:text-[24px] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            Impressum
          </h1>

          <div className="flex flex-col items-start w-full">
            <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-gray-300 text-[11px] md:text-[12px] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] whitespace-pre-line">
              <strong>Adrian Voicu Gebäudeservice</strong>{"\n"}
              Inhaber: Adrian Voicu{"\n\n"}
              📍 Büroanschrift:{"\n"}
              Oberndorferstr. 29{"\n"}
              85622 Feldkirchen b. München{"\n"}
              Deutschland{"\n\n"}
              <strong>📞 Telefon:</strong> +49 173 104 9688{"\n"}
              <strong>✉️ E-Mail:</strong> info@av-gebaeudeservice.com{"\n\n"}
              <strong>Unternehmensform:</strong> Einzelunternehmen{"\n"}
              <strong>Tätigkeitsbereich:</strong> Gebäudereinigung, Hausmeisterservice, Aufzugs- und Fensterreinigung, Winterdienst{"\n"}
              <strong>USt-IdNr.:</strong> DE452728329{"\n"}
              <strong>Verantwortlich gem. § 18 Abs. 2 MStV:</strong>{"\n"}
              Adrian Voicu (Daten wie oben){"\n"}
              EU-Streitbeilegung: https://ec.europa.eu/consumers/odr{"\n\n"}
              <strong>Haftungsausschluss:</strong>{"\n"}
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.{"\n"}
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
