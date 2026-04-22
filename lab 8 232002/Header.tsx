"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/products", label: "Products" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#1e3a5f] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-orange-400 transition-colors">
          🛒 NextShop
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === link.href
                      ? "bg-orange-500 text-white"
                      : "hover:bg-white hover:text-[#1e3a5f]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
