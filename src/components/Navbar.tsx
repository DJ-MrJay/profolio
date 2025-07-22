import Link from "next/link";

const links = [
  { href: "#intro", label: "Intro" },
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow p-4 sticky top-0 z-50">
      <ul className="flex justify-center gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-blue-600 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
