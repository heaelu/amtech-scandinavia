import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const n = useTranslations("nav");
  return (
    <footer className="border-t border-black/10 bg-charcoal text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            AM<span className="text-accent">T</span>ech
          </p>
          <p className="mt-1 text-sm text-ice">{n("tagline")}</p>
          <p className="mt-3 text-sm text-white/70">{t("legal")}</p>
          <p className="text-sm text-white/60">{t("y")}</p>
          <p className="text-sm text-white/60">{t("aka")}</p>
        </div>
        <div className="text-sm text-white/80">
          <p>
            <a className="hover:text-white" href={`mailto:${t("email")}`}>
              {t("email")}
            </a>
          </p>
          <p>
            <a className="hover:text-white" href={`tel:${t("phone").replace(/\s/g, "")}`}>
              {t("phone")}
            </a>
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <Link href="/products" className="hover:text-white">
              {n("products")}
            </Link>
            <Link href="/safety" className="hover:text-white">
              {n("safety")}
            </Link>
            <Link href="/contact" className="hover:text-white">
              {n("contact")}
            </Link>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-white/50">{t("note")}</p>
      </div>
    </footer>
  );
}
