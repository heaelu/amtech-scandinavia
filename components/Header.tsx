"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { routing } from "@/i18n/routing";

const NAV = [
  { href: "/products", key: "products" },
  { href: "/applications", key: "applications" },
  { href: "/safety", key: "safety" },
  { href: "/about", key: "about" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-[220px]" />
          <span className="sr-only">AMTech Scandinavia</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal/80 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-charcoal ${
                pathname.startsWith(item.href) ? "text-charcoal" : ""
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded bg-charcoal px-3 py-1.5 text-white hover:bg-black"
          >
            {t("contact")}
          </Link>
          <LangSwitch locale={locale} pathname={pathname} />
        </nav>

        <button
          className="md:hidden text-sm font-medium"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/8 bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {t(item.key)}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              {t("contact")}
            </Link>
            <LangSwitch locale={locale} pathname={pathname} />
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ locale, pathname }: { locale: string; pathname: string }) {
  return (
    <div className="flex gap-2 text-xs uppercase tracking-wide text-steel">
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={l === locale ? "text-charcoal font-semibold" : "hover:text-charcoal"}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
