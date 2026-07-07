import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import PageHeader from "@/components/ui/PageHeader";
import ImageFrame from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";
import { ArrowRight, Users, Clock, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Generatie op de werkvloer",
  description:
    "Interactieve training over de verschillende generaties op de werkvloer. Voor teams in kinderopvang, onderwijs en zorg. Praktisch, laagdrempelig en direct toepasbaar.",
};

const praktisch = [
  { label: "Voor wie", value: "Teams in kinderopvang, onderwijs en zorg" },
  { label: "Vorm", value: "Interactieve basistraining" },
  { label: "Duur", value: "Ongeveer 90 minuten" },
  { label: "Vervolg mogelijk", value: "Verdieping op teamvragen" },
];

const generaties = [
  {
    naam: "Babyboomers",
    jaren: "1946 – 1964",
    kern: "Loyaal, ervaren en gericht op stabiliteit en vakmanschap.",
  },
  {
    naam: "Generatie X",
    jaren: "1965 – 1980",
    kern: "Zelfstandig en nuchter, zoekt balans tussen werk en privé.",
  },
  {
    naam: "Generatie Y (millennials)",
    jaren: "1981 – 1996",
    kern: "Betekenisgericht, flexibel en gewend aan continue feedback.",
  },
  {
    naam: "Generatie Z",
    jaren: "1997 – 2010",
    kern: "Digitaal opgegroeid, direct en gericht op authenticiteit en welzijn.",
  },
];

export default function GeneratieWerkvloerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Training"
        title="Generatie op de werkvloer"
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
              Mijn training is interactief, praktisch en direct toepasbaar. Ze
              maakt verschillen zichtbaar en bespreekbaar op een manier die
              mensen actief betrekt. Hierdoor ontstaat niet alleen meer begrip
              en inzicht in elkaars gedrag, maar draagt de training ook bij aan
              betere samenwerking en kan ze zelfs ingezet worden als waardevolle
              vorm van teambuilding.
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
                  De basistraining
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                  <p>
                    Deze basistraining gaat over de verschillende generaties op
                    de werkvloer. Medewerkers ontdekken op een luchtige en
                    interactieve manier hoe generaties van elkaar kunnen
                    verschillen in communicatie, samenwerken, feedback en
                    werkhouding.
                  </p>
                  <p>
                    De training is bedoeld als eerste bewustwording. Na de
                    training kunnen er vraagstukken naar boven komen waar we
                    samen verder mee aan de slag gaan en waarin we verdieping
                    kunnen aanbrengen op specifieke vragen binnen het team.
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
                    href="/contact?onderwerp=werkvloer"
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

      {/* Generaties in het kort */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-content">
          <FadeIn>
            <div className="max-w-prose">
              <p className="eyebrow">In het kort</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Vier generaties, één team
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Een globale schets, geen hokjes maar handvatten. In de training
                onderzoeken we samen hoe deze patronen in jouw team spelen.
              </p>
            </div>
          </FadeIn>

          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {generaties.map((g) => (
              <StaggerItem key={g.naam}>
                <div className="card h-full">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-medium text-ink">{g.naam}</h3>
                    <span className="text-sm tabular-nums text-terracotta-500">
                      {g.jaren}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-soft">{g.kern}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Kernpunten */}
      <section className="container-content py-16 sm:py-20">
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
              <div className="card h-full">
                <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
