import type { SVGProps } from "react";

// Organische "rise" mark: een opgaande blad-/adembeweging
export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="20" cy="20" r="19" className="fill-sage-100" />
      <path
        d="M20 30c-5-2-8-6-8-11 0-3 1-5 3-7 1 4 3 6 6 8 3 2 5 4 5 8 0 1-.3 2-.8 2.9C23 30.6 21.5 30.6 20 30Z"
        className="fill-sage-500"
      />
      <path
        d="M20 30c0-5 2-9 6-12"
        className="stroke-terracotta-400"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
