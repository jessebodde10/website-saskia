import Image from "next/image";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  rounded?: string;
  aspect?: string;
};

/**
 * Afgeronde afbeelding met een zachte, organische uitsnede.
 * Gebruikt professionele placeholder-fotografie (natuur, rust, verbinding).
 */
export default function ImageFrame({
  src,
  alt,
  className = "",
  priority = false,
  rounded = "rounded-xl",
  aspect = "aspect-[4/5]",
}: ImageFrameProps) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
    </div>
  );
}
