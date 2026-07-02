import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import PageHeader from "@/components/ui/PageHeader";
import ImageFrame from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";
import { ArrowRight, Users, Clock, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Trainingen voor teams",
  description:
    "Interactieve trainingen over generaties op de werkvloer voor teams in kinderopvang, onderwijs en zorg. Praktisch, laagdrempelig en direct toepasbaar.",
};

const praktisch = [
  { label: "Voor wie", value: "Teams in kinderopvang, onderwijs en zorg" },
  { label: "Vorm", value: "Interactieve basistraining" },
  { label: "Duur", value: "Ongeveer 90 minuten" },
  { label: "Vervolg mogelijk", value: "Verdieping op teamvragen" },
];

export default function TrainingenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trainingen"
        title="Trainingen voor teams"
        intro={
          <>
            <p>
              Binnen teams werken tegenwoordig meer dan ooit verschillende
              generaties samen. Iedere generatie brengt eigen ervaringen,
              waarden, gewoontes en verwachtingen mee. Dat kan een enorme kracht
              zijn, maar ook zorgen voor misverstanden in communicatie en
              samenwerking.
            </p>
            <p>
              Mijn trainingen zijn interactief, praktisch en direct toepasbaar.
              Ze maken verschillen zichtbaar en bespreekbaar op een manier die
              mensen actief betrekt. Hierdoor ontstaat niet alleen meer begrip en
              inzicht in elkaars gedrag, maar dragen de trainingen ook bij aan
              betere samenwerking en kunnen ze zelfs ingezet worden als
              waardevolle vorm van teambuilding.
            </p>
          </>
        }
      />

      {/* Contentkaart */}
      <section className="container-content py-16 sm:py-20">
        <FadeIn>
          <article className="overflow-hidden rounded-5xl border border-sand-200 bg-white shadow-card">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <ImageFrame
                  src={images.trainingTeam}
                  alt="Team in gesprek tijdens een interactieve training"
                  rounded="rounded-none"
                  aspect="aspect-auto"
                  className="h-full"
                />
              </div>

              <div className="p-8 sm:p-12">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600">
                  <Users />
                </span>
                <h2 className="mt-6 text-2xl sm:text-3xl">
                  Generaties op de werkvloer
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                  <p>
                    Deze basistraining gaat over verschillende generaties op de
                    werkvloer. Medewerkers ontdekken op een luchtige en
                    interactieve manier hoe generaties van elkaar kunnen
                    verschillen in communicatie, samenwerken, feedback en
                    werkhouding.
                  </p>
                  <p>
                    De training is bedoeld als eerste bewustwording. Na de
                    training kunnen er vraagstukken naar boven komen waar we samen
                    verder mee aan de slag gaan en waarin we verdieping kunnen
                    aanbrengen op specifieke vragen binnen het team.
                  </p>
                </div>

                <div className="mt-8 rounded-3xl bg-sand-50 p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <Clock className="h-4 w-4 text-terracotta-500" />
                    Praktische informatie
                  </h3>
                  <dl className="mt-4 space-y-3">
                    {praktisch.map((item) => (
                      <div
                        key={item.label}
                        className="flex gap-3 text-sm sm:gap-4"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-500" />
                        <div>
                          <dt className="inline font-medium text-ink">
                            {item.label}:{" "}
                          </dt>
                          <dd className="inline text-ink-soft">{item.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact?onderwerp=training"
                    className="btn-primary"
                  >
                    Vraag informatie aan
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      </section>

      {/* Kernpunten */}
      <section className="bg-sand-50 py-16">
        <div className="container-content">
          <StaggerGroup className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Interactief",
                text: "Mensen worden actief betrokken; niemand blijft toeschouwer.",
              },
              {
                title: "Praktisch",
                text: "Direct toepasbaar in het dagelijkse werk van het team.",
              },
              {
                title: "Verbindend",
                text: "Verschillen worden een bron van begrip in plaats van wrijving.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="card h-full bg-white/70">
                  <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
