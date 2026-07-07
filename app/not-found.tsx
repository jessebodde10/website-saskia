import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Pagina niet gevonden</p>
      <h1 className="mt-4 text-5xl">Even de weg kwijt</h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        Deze pagina bestaat niet (meer). Ga terug naar een rustig beginpunt.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Terug naar home
        <ArrowRight />
      </Link>
    </section>
  );
}
