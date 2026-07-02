import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import PageHeader from "@/components/ui/PageHeader";
import ImageFrame from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";
import { ArrowRight, Wind, Leaf, Users, Heart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Ademcoaching",
  description:
    "Ademcoaching voor volwassenen, kinderen en teams. Meer rust, ontspanning en bewustwording door bewust met je adem te werken. Mini-retreats, kinderen en teams.",
};

export default function AdemcoachingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ademcoaching"
        title="Ademcoaching"
        intro={
          <>
            <p>
              Ademcoaching helpt je om stil te staan bij je adem, je lichaam en
              wat je ervaart. Het ondersteunt je in het creëren van meer rust,
              ontspanning en bewustwording.
            </p>
            <p>
              Door bewust met je adem te werken, kun je spanning beter herkennen
              en loslaten, meer in contact komen met jezelf en helderder voelen
              wat je nodig hebt. Het helpt je om uit je hoofd te komen en meer in
              je lichaam aanwezig te zijn.
            </p>
            <p>
              Bij Rise &amp; Connect bied ik ademcoaching aan in kleine groepen
              voor volwassenen, gericht op zowel werk als privé, en voor kinderen
              samen met hun ouders. De begeleiding wordt afgestemd op de groep en
              de situatie.
            </p>
          </>
        }
      />

      {/* Mini-retreat — uitgelicht */}
      <section className="container-content py-16 sm:py-20">
        <FadeIn>
          <article className="overflow-hidden rounded-5xl border border-sand-200 bg-white shadow-card">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta-100 text-terracotta-500">
                    <Leaf />
                  </span>
                  <span className="rounded-full bg-terracotta-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta-500">
                    Uitgelicht
                  </span>
                </div>
                <h2 className="mt-6 text-2xl sm:text-3xl">Mini-retreat</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                  <p>
                    Soms is het fijn om even stil te staan. Niet door ver weg te
                    gaan, maar gewoon in je eigen vertrouwde omgeving. Daarom bied
                    ik mini-retreats aan bij jou thuis, voor twee tot vier
                    personen.
                  </p>
                  <p>
                    In ongeveer twee tot tweeënhalf uur neem ik jullie mee in een
                    moment van rust, verbinding en bewustwording. We werken met
                    zachte beweging, ademhaling en aandacht voor wat je lichaam
                    aangeeft. Geen vaste trucjes, maar kijken en voelen wat op dat
                    moment nodig is.
                  </p>
                  <p>
                    Vooraf stemmen we samen af of jullie met een bepaald thema
                    willen werken. Dit kan bijvoorbeeld gaan over rust, loslaten,
                    energie, grenzen of verbinding. Hebben jullie geen thema, dan
                    neem ik zelf iets passends mee.
                  </p>
                  <p>
                    Ik neem alle materialen mee om van jouw huiskamer of ruimte
                    een fijne, rustige plek te maken.
                  </p>
                  <p>
                    We sluiten af met een kop thee. Er is ruimte om na te praten.
                  </p>
                  <p className="rounded-2xl bg-sand-50 px-5 py-4 font-serif text-lg text-ink">
                    Een mini-retreat is ook mooi als cadeau.
                  </p>
                  <p>
                    Het is een laagdrempelige manier om samen tot rust te komen,
                    bewuster contact te maken met je lichaam en even uit de drukte
                    van de dag te stappen.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact?onderwerp=mini-retreat"
                    className="btn-accent"
                  >
                    Vraag een mini-retreat aan
                    <ArrowRight />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <ImageFrame
                  src={images.miniRetreat}
                  alt="Warme, rustige sfeer met thee en zacht licht"
                  rounded="rounded-none"
                  aspect="aspect-auto"
                  className="h-full"
                />
              </div>
            </div>
          </article>
        </FadeIn>
      </section>

      {/* Kinderen & teams */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-content">
          <FadeIn>
            <div className="mx-auto max-w-prose text-center">
              <p className="eyebrow">Afgestemd op elke groep</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Ademcoaching voor kinderen en teams
              </h2>
            </div>
          </FadeIn>

          <StaggerGroup className="mt-12 grid gap-8 lg:grid-cols-2">
            <StaggerItem>
              <article className="card h-full overflow-hidden bg-white p-0">
                <ImageFrame
                  src={images.children}
                  alt="Speels, natuurlijk licht — ademcoaching voor kinderen"
                  rounded="rounded-none"
                  aspect="aspect-[16/9]"
                />
                <div className="p-8 sm:p-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                    <Heart />
                  </span>
                  <h3 className="mt-5 text-2xl">Ademcoaching voor kinderen</h3>
                  <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                    <p>
                      Voor kinderen werk ik op een speelse en rustige manier.
                      Kinderen maken kennis met hun adem, hun lijf en hun gevoel
                      op een manier die past bij hun leeftijd en beleving.
                    </p>
                    <p>
                      Door mijn ervaring in de kinderopvang sluit ik makkelijk
                      aan bij kinderen en kijk ik goed naar wat een kind nodig
                      heeft.
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="card h-full overflow-hidden bg-white p-0">
                <ImageFrame
                  src={images.teamBreath}
                  alt="Rustige groep — ademcoaching voor teams"
                  rounded="rounded-none"
                  aspect="aspect-[16/9]"
                />
                <div className="p-8 sm:p-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta-100 text-terracotta-500">
                    <Users />
                  </span>
                  <h3 className="mt-5 text-2xl">Ademcoaching voor teams</h3>
                  <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                    <p>
                      Ademcoaching op de werkvloer is geschikt voor teams die
                      willen stilstaan bij rust, spanning en samenwerking.
                    </p>
                    <p>
                      Tijdens een bijeenkomst ervaren medewerkers hoe adem
                      invloed kan hebben op bewustwording en ontspanning.
                    </p>
                    <p>De bijeenkomst is laagdrempelig en praktisch.</p>
                    <p>
                      Het kan goed worden ingezet tijdens een teamdag, studiedag
                      of teamoverleg.
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          </StaggerGroup>

          <FadeIn delay={0.1}>
            <div className="mt-12 text-center">
              <Link href="/contact?onderwerp=ademcoaching" className="btn-primary">
                <Wind className="h-5 w-5" />
                Plan een ademsessie
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
