export type Generation = {
  key: "boomer" | "x" | "y" | "z" | "alpha";
  short: string;
  naam: string;
  jaren: string;
  jarenShort: string;
  tint: string; // achtergrondklasse voor de spectrum-tint
  kern: string;
};

// Het generatiespectrum — de rode draad en het signatuur-element van de site.
export const generations: Generation[] = [
  {
    key: "boomer",
    short: "Boomer",
    naam: "Babyboomers",
    jaren: "1946–1964",
    jarenShort: "’46–’64",
    tint: "bg-gen-boomer",
    kern: "Loyaal, ervaren en gericht op stabiliteit en vakmanschap.",
  },
  {
    key: "x",
    short: "Gen X",
    naam: "Generatie X",
    jaren: "1965–1980",
    jarenShort: "’65–’80",
    tint: "bg-gen-x",
    kern: "Zelfstandig en nuchter, zoekt balans tussen werk en privé.",
  },
  {
    key: "y",
    short: "Gen Y",
    naam: "Generatie Y",
    jaren: "1981–1996",
    jarenShort: "’81–’96",
    tint: "bg-gen-y",
    kern: "Betekenisgericht, flexibel en gewend aan continue feedback.",
  },
  {
    key: "z",
    short: "Gen Z",
    naam: "Generatie Z",
    jaren: "1997–2010",
    jarenShort: "’97–’10",
    tint: "bg-gen-z",
    kern: "Digitaal opgegroeid, direct en gericht op authenticiteit en welzijn.",
  },
  {
    key: "alpha",
    short: "Alpha",
    naam: "Generatie Alpha",
    jaren: "2010–nu",
    jarenShort: "’10–nu",
    tint: "bg-gen-alpha",
    kern: "De eerste volledig digitale generatie; groeit nu op op de groep en in de klas.",
  },
];
