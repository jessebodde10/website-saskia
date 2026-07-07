import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import PageHeader from "@/components/ui/PageHeader";
import ImageFrame from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";
import { ArrowRight, Sparkle, Users, Heart, Leaf, Clock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Generatie Alpha in de praktijk",
  description:
    "De eerste volledig digitale generatie groeit nu op in de kinderopvang en het onderwijs. Wat kenmerkt Generatie Alpha en wat betekent dat voor jouw werk en team?",
};

const kenmerken = [
  {
    icon: Sparkle,
    title: "Digitaal vanaf dag één",
    text: "Opgegroeid met touchscreens, video en slimme apparaten. Technologie is geen hulpmiddel maar vanzelfsprekend onderdeel van hun wereld.",
  },
  {
    icon: Clock,
    title: "Andere prikkelverwerking",
    text: "Gewend aan snelle, visuele en interactieve prikkels. Dat vraagt om afwisseling, maar ook om bewuste momenten van rust en focus.",
  },
  {
    icon: Heart,
    title: "Behoefte aan echtheid",
    text: "Gevoelig voor sfeer en oprechtheid. Ze bloeien op bij volwassenen die aanwezig, eerlijk en betrokken zijn.",
  },
  {
    icon: Users,
    title: "Zelf willen doen",
    text: "Vroeg gericht op autonomie en eigen keuzes. Ze zoeken ruimte om zelf te ontdekken, binnen duidelijke en veilige kaders.",
  },
];

const vertaling = [
  {
    title: "In de kinderopvang",
    text: "Kinderen die anders spelen, leren en communiceren vragen om pedagogisch medewerkers die meebewegen én rust en structuur blijven bieden.",
  },
  {
    title: "In het onderwijs",
    text: "Andere aandacht en motivatie vragen om andere werkvormen, en om leerkrachten die weten wanneer een scherm helpt en wanneer juist niet.",
  },
  {
    title: "Als toekomstige collega's",
    text: "Generatie Alpha is de werkvloer van morgen. Wie hen nu begrijpt, bouwt aan teams die straks moeiteloos aansluiten.",
  },
];

export default function GeneratieAlphaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hoofdstuk"
        title="Generatie Alpha in de praktijk"
        intro={
          <>
            <p>
              Generatie Alpha, kinderen geboren vanaf ongeveer 2010, is de
              eerste generatie die volledig opgroeit in een digitale wereld. Zij
              zitten nu op de groep en in de klas, en zullen over enkele jaren de
              nieuwe collega&apos;s op de werkvloer zijn.
            </p>
            <p>
              In de kinderopvang, het onderwijs en de zorg merk je hun invloed nu
              al. Ze kijken, leren en communiceren anders dan de generaties
              ervoor. In dit hoofdstuk vertaal ik wat dat betekent voor jouw
              dagelijkse praktijk: nuchter, herkenbaar en zonder oordeel.
            </p>
          </>
        }
      />

      {/* Beeld + korte duiding */}
      <section className="container-content py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <FadeIn>
            <div>
              <p className="eyebrow">Wie zijn zij?</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Opgegroeid met een scherm binnen handbereik
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Voor Generatie Alpha zijn tablets, spraakassistenten en video
                  net zo gewoon als boeken en buitenspelen dat voor eerdere
                  generaties waren. Dat maakt hen nieuwsgierig, beeldgericht en
                  snel, maar het vraagt ook om bewuste aandacht voor rust,
                  concentratie en echt contact.
                </p>
                <p>
                  Het gaat niet om goed of fout. Het gaat erom dat we hun wereld
                  begrijpen, zodat we hen kunnen begeleiden op een manier die
                  aansluit bij wie ze zijn.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} y={32}>
            <div className="relative">
              <div
                aria-hidden
                className="blob absolute -inset-4 -z-10 bg-sage-100"
              />
              <ImageFrame
                src={images.children}
                alt="Kind dat geconcentreerd en speels bezig is"
                aspect="aspect-[4/5]"
                rounded="rounded-5xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kenmerken */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-content">
          <FadeIn>
            <div className="max-w-prose">
              <p className="eyebrow">In de praktijk</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Wat je terugziet op de groep en in de klas
              </h2>
            </div>
          </FadeIn>

          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {kenmerken.map((k) => (
              <StaggerItem key={k.title}>
                <div className="card flex h-full gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta-100 text-terracotta-500">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-ink">{k.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {k.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Wat betekent dit voor jou */}
      <section className="container-content py-16 sm:py-20">
        <FadeIn>
          <div className="max-w-prose">
            <p className="eyebrow">Wat betekent dit voor jou?</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Van inzicht naar dagelijkse praktijk
            </h2>
          </div>
        </FadeIn>

        <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3">
          {vertaling.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                  <Leaf className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-medium text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Afsluitende CTA */}
      <section className="container-content pb-20">
        <FadeIn>
          <div className="relative overflow-hidden rounded-5xl bg-sage-600 px-8 py-16 text-center text-cream shadow-card sm:px-16">
            <div
              aria-hidden
              className="blob absolute -right-16 -top-16 h-64 w-64 bg-sage-400/50"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-cream sm:text-4xl">
                Generatie Alpha als thema voor jouw team?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-sand-100/90">
                Ik kom graag langs om dit hoofdstuk interactief met je team te
                verkennen, afgestemd op jullie praktijk in kinderopvang,
                onderwijs of zorg.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact?onderwerp=alpha"
                  className="btn bg-cream text-ink hover:-translate-y-0.5 hover:bg-white"
                >
                  Vraag informatie aan
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
