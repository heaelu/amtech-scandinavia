import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PRODUCT_SLUGS } from "@/lib/products";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">{t("productsPage.title")}</h1>
      <p className="mt-3 max-w-2xl text-charcoal/70">{t("productsPage.lead")}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {PRODUCT_SLUGS.map((slug) => (
          <article key={slug} className="flex flex-col rounded-lg border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-wider text-steel">{slug}</p>
            <h2 className="mt-1 text-xl font-semibold">{t(`catalog.${slug}.name`)}</h2>
            <p className="mt-2 text-sm text-charcoal/80">{t(`catalog.${slug}.short`)}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
              {t(`catalog.${slug}.card`)}
            </p>
            <Link
              href={`/products/${slug}`}
              className="mt-5 text-sm font-medium text-steel hover:text-charcoal"
            >
              {t(`catalog.${slug}.name`)} →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
