import type { SVGProps } from "react";

// Merkmark: vijf opgaande balken in de generatie-tinten — het spectrum in het klein.
export default function Logo(props: SVGProps<SVGSVGElement>) {
  const bars = [
    { x: 2, h: 11, fill: "#6E7F8C" },
    { x: 8, h: 15, fill: "#5E8A78" },
    { x: 14, h: 19, fill: "#C6A15E" },
    { x: 20, h: 23, fill: "#C07350" },
    { x: 26, h: 27, fill: "#7E6E9E" },
  ];
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {bars.map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={30 - b.h}
          width="4"
          height={b.h}
          rx="1.6"
          fill={b.fill}
        />
      ))}
    </svg>
  );
}
