import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import ImageFrame from "@/components/ui/ImageFrame";
import Spectrum from "@/components/ui/Spectrum";
import { images } from "@/lib/images";
import { ArrowRight, Check } from "@/components/icons";

const audiences = [
  "Kinderopvang",
  "Onderwijs",
  "Zorg",
  "Teams",
  "Leidinggevenden",
  "HR & opleiders",
];

const themes = [
  {
    label: "De training",
    title: "Generatie op de werkvloer",
    text: "Een interactieve training over de verschillende generaties in een team. Medewerkers ontdekken hoe generaties verschillen in communicatie, samenwerken, feedback en werkhouding, en hoe je die verschillen benut.",
    href: "/generatie-op-de-werkvloer",
    cta: "Bekijk de training",
  },
  {
    label: "Het hoofdstuk",
    title: "Generatie Alpha in de praktijk",
    text: "De eerste volledig digitale generatie zit nu op de groep en in de klas. In dit hoofdstuk vertaal ik wat Generatie Alpha kenmerkt naar jouw dagelijkse praktijk in kinderopvang, onderwijs en zorg.",
    href: "/generatie-alpha",
    cta: "Lees het hoofdstuk",
  },
];

const values = [
  {
    title: "Meer begrip",
    text: "Verschillen tussen generaties worden zichtbaar en bespreekbaar, als bron van begrip in plaats van wrijving.",
  },
  {
    title: "Betere samenwerking",
    text: "Teams die elkaars gedrag en verwachtingen snappen, werken soepeler en met meer plezier samen.",
  },
  {
    title: "Klaar voor de toekomst",
    text: "Van babyboomer tot Generatie Alpha: inzicht in wie er straks op de werkvloer staat en op de groep zit.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-sand-200">
        <div className="container-content grid gap-12 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pt-24">
          <div>
            <FadeIn>
              <p className="eyebrow">Training voor teams</p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="mt-5 text-5xl leading-[0.98] tracking-tightest sm:text-6xl">
                Generaties op de werkvloer
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Ik help teams in kinderopvang, onderwijs en zorg om de
                verschillen tussen generaties te begrijpen en die om te zetten
                in betere samenwerking. Praktisch, interactief en direct
                toepasbaar.
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/generatie-op-de-werkvloer" className="btn-primary">
                  Bekijk de training
                  <ArrowRight />
                </Link>
                <Link href="/generatie-alpha" className="btn-outline">
                  Generatie Alpha
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={24}>
            <ImageFrame
              src={images.trainingTeam}
              alt="Team van verschillende generaties in gesprek"
              priority
              aspect="aspect-[4/5]"
              rounded="rounded-xl"
            />
          </FadeIn>
        </div>

        {/* Signatuur: het generatiespectrum */}
        <FadeIn delay={0.1}>
          <div className="container-content py-12 sm:py-16">
            <Spectrum />
          </div>
        </FadeIn>
      </section>

      {/* Doelgroepen strip */}
      <div className="border-b border-sand-200">
        <div className="container-content flex flex-wrap items-center gap-x-2 gap-y-2 py-5 text-sm text-ink-muted">
          <span className="eyebrow mr-2">Voor</span>
          {audiences.map((a, i) => (
            <span key={a} className="flex items-center gap-2">
              {i > 0 && <span className="text-sand-300">·</span>}
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Twee thema's */}
      <section className="container-content py-20 sm:py-28">
        <div className="grid divide-y divide-sand-200 border-y border-sand-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {themes.map((t, i) => (
            <FadeIn key={t.label} className="h-full">
              <article
                className={`group flex h-full flex-col py-10 lg:py-4 ${
                  i === 0 ? "lg:pr-14" : "lg:pl-14"
                }`}
              >
                <span className="eyebrow">{t.label}</span>
                <h2 className="mt-4 text-2xl tracking-tightest sm:text-3xl">
                  {t.title}
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-ink-soft">
                  {t.text}
                </p>
                <div className="mt-8">
                  <Link
                    href={t.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-sage-600"
                  >
                    {t.cta}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Wat het oplevert */}
      <section className="border-y border-sand-200 bg-sand-50 py-20 sm:py-28">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <FadeIn>
              <div>
                <p className="eyebrow">Wat het oplevert</p>
                <h2 className="mt-5 text-3xl tracking-tightest sm:text-4xl">
                  Van verschillen naar veerkracht in je team
                </h2>
              </div>
            </FadeIn>
            <StaggerGroup className="grid gap-px overflow-hidden rounded-xl border border-sand-200 bg-sand-200 sm:grid-cols-3">
              {values.map((v) => (
                <StaggerItem key={v.title} className="bg-cream p-7">
                  <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.text}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Over mij */}
      <section
        id="over-mij"
        className="container-content scroll-mt-24 py-20 sm:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <FadeIn>
            <ImageFrame
              src="/saskia.jpg"
              alt="Portret van Saskia Bodde"
              aspect="aspect-[4/5]"
              rounded="rounded-xl"
            />
          </FadeIn>

          <div>
            <FadeIn>
              <p className="eyebrow">Over mij</p>
              <h2 className="mt-5 text-3xl tracking-tightest sm:text-4xl">
                Ik ben Saskia
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  Door mijn jarenlange ervaring in de kinderopvang, als
                  leidinggevende, opleider, docent en examinator, weet ik hoe
                  belangrijk het is dat mensen zich gezien en gehoord voelen. Ik
                  zie snel wat er speelt in een groep en maak verschillen tussen
                  generaties zichtbaar en werkbaar.
                </p>
                <p>
                  Ik breng helderheid, stel eerlijke vragen en help teams om
                  dichter bij elkaar te komen. Zo ontstaat een veilige basis
                  waarin samenwerking en ontwikkeling mogelijk worden.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.14}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Ervaring in kinderopvang",
                  "Opleider & docent",
                  "Praktijkgericht",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <Check className="h-4 w-4 shrink-0 text-sage-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <section className="container-content py-12 sm:py-16">
        <div className="rounded-3xl bg-sage-600 px-8 py-14 text-cream sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl tracking-tightest text-cream sm:text-4xl">
                Benieuwd wat dit voor jouw team betekent?
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-sand-100/80">
                Neem gerust contact op. Dan kijken we samen naar wat aansluit bij
                jouw vraag of organisatie.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/contact"
                  className="btn bg-cream text-ink hover:bg-white"
                >
                  Neem contact op
                  <ArrowRight />
                </Link>
                <Link
                  href="/generatie-op-de-werkvloer"
                  className="btn border border-cream/30 text-cream hover:bg-cream/10"
                >
                  Bekijk de training
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
