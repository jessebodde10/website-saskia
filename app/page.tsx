import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import ImageFrame from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";
import { ArrowRight, Users, Sparkle, Heart, Check } from "@/components/icons";

const audiences = [
  "Kinderopvang",
  "Onderwijs",
  "Zorg",
  "Teams",
  "Leidinggevenden",
  "HR & opleiders",
];

const values = [
  {
    icon: Users,
    title: "Meer begrip",
    text: "Verschillen tussen generaties worden zichtbaar en bespreekbaar, als bron van begrip in plaats van wrijving.",
  },
  {
    icon: Heart,
    title: "Betere samenwerking",
    text: "Teams die elkaars gedrag en verwachtingen snappen, werken soepeler en met meer plezier samen.",
  },
  {
    icon: Sparkle,
    title: "Klaar voor de toekomst",
    text: "Van babyboomer tot Generatie Alpha: inzicht in wie er straks op de werkvloer staat en op de groep zit.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="blob absolute -right-32 -top-24 h-96 w-96 bg-sage-100/50 blur-3xl"
        />
        <div
          aria-hidden
          className="blob absolute -left-24 top-40 h-72 w-72 bg-terracotta-100/30 blur-3xl"
        />

        <div className="container-content relative grid items-center gap-12 pb-8 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16">
          <div>
            <FadeIn>
              <p className="eyebrow">Saskia Bodde · Training</p>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Generaties op de werkvloer, van babyboomer tot Alpha
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
                <Link
                  href="/generatie-op-de-werkvloer"
                  className="btn-primary"
                >
                  Bekijk de training
                  <ArrowRight />
                </Link>
                <Link href="/generatie-alpha" className="btn-outline">
                  Generatie Alpha in de praktijk
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={32}>
            <div className="relative">
              <div
                aria-hidden
                className="blob absolute -inset-4 -z-10 bg-sand-200/60"
              />
              <ImageFrame
                src={images.trainingTeam}
                alt="Team van verschillende generaties in gesprek"
                priority
                aspect="aspect-[4/5]"
                className="animate-float-slow"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white/90 px-6 py-4 shadow-card backdrop-blur sm:block">
                <p className="font-serif text-2xl text-ink">4 generaties</p>
                <p className="text-sm text-ink-muted">één team</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Doelgroepen strip */}
        <div className="container-content relative pb-6">
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-sand-200 pt-6 text-sm text-ink-muted">
              <span className="font-medium text-ink-soft">Voor:</span>
              {audiences.map((a) => (
                <span
                  key={a}
                  className="rounded-full bg-sand-100 px-3.5 py-1.5 text-ink-soft"
                >
                  {a}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Twee thema's */}
      <section className="container-content py-16 sm:py-20">
        <StaggerGroup className="grid gap-8 lg:grid-cols-2">
          <StaggerItem>
            <article className="card group flex h-full flex-col">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                <Users />
              </span>
              <h2 className="mt-6 text-2xl sm:text-3xl">
                Generatie op de werkvloer
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">
                Een interactieve training over de verschillende generaties in een
                team. Medewerkers ontdekken op een luchtige manier hoe generaties
                verschillen in communicatie, samenwerken, feedback en
                werkhouding, en hoe je die verschillen benut.
              </p>
              <div className="mt-8 pt-2">
                <Link
                  href="/generatie-op-de-werkvloer"
                  className="inline-flex items-center gap-2 font-medium text-sage-600 transition-colors hover:text-sage-700"
                >
                  Bekijk de training
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </StaggerItem>

          <StaggerItem>
            <article className="card group flex h-full flex-col">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-terracotta-100 text-terracotta-500">
                <Sparkle />
              </span>
              <h2 className="mt-6 text-2xl sm:text-3xl">
                Generatie Alpha in de praktijk
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">
                De eerste volledig digitale generatie zit nu op de groep en in de
                klas. In dit hoofdstuk vertaal ik wat Generatie Alpha kenmerkt
                naar jouw dagelijkse praktijk in kinderopvang, onderwijs en zorg.
              </p>
              <div className="mt-8 pt-2">
                <Link
                  href="/generatie-alpha"
                  className="inline-flex items-center gap-2 font-medium text-terracotta-500 transition-colors hover:text-terracotta-600"
                >
                  Lees het hoofdstuk
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </StaggerItem>
        </StaggerGroup>
      </section>

      {/* Waarden / opbrengst */}
      <section className="bg-sand-50 py-20">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <FadeIn>
              <div className="relative">
                <div
                  aria-hidden
                  className="blob absolute -inset-4 -z-10 bg-sage-100"
                />
                <ImageFrame
                  src={images.leaves}
                  alt="Zacht zonlicht dat door groene bladeren valt"
                  aspect="aspect-square"
                  rounded="rounded-5xl"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <p className="eyebrow">Wat het oplevert</p>
                <h2 className="mt-4 text-3xl sm:text-4xl">
                  Van verschillen naar veerkracht in je team
                </h2>
              </FadeIn>
              <StaggerGroup className="mt-8 space-y-6">
                {values.map((v) => (
                  <StaggerItem key={v.title}>
                    <div className="flex gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sage-600 shadow-soft">
                        <v.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-medium text-ink">
                          {v.title}
                        </h3>
                        <p className="mt-1 leading-relaxed text-ink-soft">
                          {v.text}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Over mij */}
      <section id="over-mij" className="container-content scroll-mt-24 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <FadeIn>
            <div className="relative">
              <div
                aria-hidden
                className="blob absolute -inset-4 -z-10 bg-terracotta-100/60"
              />
              <ImageFrame
                src="/saskia.jpg"
                alt="Portret van Saskia Bodde"
                aspect="aspect-[4/5]"
                rounded="rounded-5xl"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="eyebrow">Over mij</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Ik ben Saskia Bodde</h2>
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
                    <Check className="h-4 w-4 shrink-0 text-sage-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA */}
      <section className="container-content pb-20">
        <FadeIn>
          <div className="relative overflow-hidden rounded-5xl bg-sage-600 px-8 py-16 text-center text-cream shadow-card sm:px-16">
            <div
              aria-hidden
              className="blob absolute -right-16 -top-16 h-64 w-64 bg-sage-400/50"
            />
            <div
              aria-hidden
              className="blob absolute -bottom-20 -left-10 h-56 w-56 bg-terracotta-400/30"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-cream sm:text-4xl">
                Benieuwd wat dit voor jouw team betekent?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-sand-100/90">
                Neem gerust contact op. Dan kijken we samen naar wat aansluit bij
                jouw vraag of organisatie.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="btn bg-cream text-ink hover:-translate-y-0.5 hover:bg-white"
                >
                  Neem contact op
                  <ArrowRight />
                </Link>
                <Link
                  href="/generatie-op-de-werkvloer"
                  className="btn border border-cream/40 text-cream hover:-translate-y-0.5 hover:bg-cream/10"
                >
                  Bekijk de training
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
