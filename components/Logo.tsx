import type { SVGProps } from "react";

// Editorial mark: strak vierkant met een opgaande "rise"-lijn
export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <path
        d="M9 21.5 15.5 12l3.2 4.4L23 10.5"
        stroke="#FBFBFA"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="10.5" r="1.7" fill="#FBFBFA" />
    </svg>
  );
}
