export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Trainingen", href: "/trainingen" },
  { label: "Ademcoaching", href: "/ademcoaching" },
  { label: "Over mij", href: "/over-mij" },
  { label: "Contact", href: "/contact" },
];

export const contactEmail = "hallo@riseandconnect.nl";
