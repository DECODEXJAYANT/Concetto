"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const navItems = [
  { name: "Events", href: "events" },
  { name: "Accommodation", href: "accommodation" },
  { name: "Workshops", href: "#workshops" },
  { name: "Sponsors", href: "sponsors" },
  { name: "Merchandise", href: "merchandise" },
  { name: "About Us", href: "about-us" },
  { name: "Teams", href: "#teams" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 opacity-85">
      <nav className="mx-auto flex sm:justify-center gap-16 h-20 max-w-[1800px] items-center rounded-full border border-[var(--border)] bg-[var(--background)]/85 px-6 backdrop-blur-xl md:h-24 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="relative h-14 w-14 shrink-0 md:h-16 md:w-16"
        >
          <Image
            src="/logo.webp"
            alt="Concetto"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:text-[var(--primary)] xl:text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-12 hidden shrink-0 rounded-full border border-[var(--border)] p-2.5 transition-colors hover:border-[var(--primary)] lg:block"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Mobile Controls */}
        <div className="ml-auto flex items-center gap-3 lg:hidden">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="shrink-0 rounded-full border border-[var(--border)] p-2.5 transition-colors hover:border-[var(--primary)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="shrink-0 rounded-full p-1"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="mx-2 mt-2 rounded-2xl border border-[var(--border)] bg-[var(--background)]/95 p-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}