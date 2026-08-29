import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PRODUCT_SLUGS } from "@/lib/products";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <section className="border-b border-black/8 bg-gradient-to-b from-white to-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
            {t("hero.kicker")}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-charcoal md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/75 md:text-lg">
            {t("hero.lead")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded bg-charcoal px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/products"
              className="rounded border border-charcoal/20 px-5 py-2.5 text-sm font-medium hover:border-charcoal"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/8 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {(["a", "b", "c", "d"] as const).map((k) => (
            <p key={k} className="text-sm font-medium text-steel">
              {t(`trust.${k}`)}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{t("homeProducts.title")}</h2>
        <p className="mt-2 max-w-2xl text-charcoal/70">{t("homeProducts.lead")}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PRODUCT_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="group rounded-lg border border-black/10 bg-white p-5 hover:border-steel"
            >
              <p className="text-xs uppercase tracking-wider text-steel">{slug}</p>
              <h3 className="mt-1 text-lg font-semibold group-hover:text-steel">
                {t(`catalog.${slug}.name`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {t(`catalog.${slug}.card`)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-black/8">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">{t("why.title")}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <h3 className="font-semibold">{t(`why.items.${i}.t`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
                  {t(`why.items.${i}.d`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{t("homeApps.title")}</h2>
        <p className="mt-2 max-w-2xl text-charcoal/70">{t("homeApps.lead")}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-lg border border-black/8 bg-white p-4">
              <h3 className="font-semibold">{t(`apps.items.${i}.t`)}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{t(`apps.items.${i}.d`)}</p>
            </div>
          ))}
        </div>
        <Link
          href="/applications"
          className="mt-6 inline-block text-sm font-medium text-steel hover:text-charcoal"
        >
          {t("nav.applications")} →
        </Link>
      </section>
    </>
  );
}
