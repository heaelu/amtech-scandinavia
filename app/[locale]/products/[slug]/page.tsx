import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { PRODUCT_SLUGS, isProductSlug } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isProductSlug(slug)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <Link href="/products" className="text-sm text-steel hover:text-charcoal">
        ← {t("product.back")}
      </Link>
      <p className="mt-6 text-xs uppercase tracking-wider text-steel">{slug}</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
        {t(`catalog.${slug}.name`)}
      </h1>
      <p className="mt-4 text-lg text-charcoal/80">{t(`catalog.${slug}.short`)}</p>
      <p className="mt-4 leading-relaxed text-charcoal/75">{t(`catalog.${slug}.card`)}</p>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wider text-steel">
        {t("product.specs")}
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-charcoal/80">
        {[0, 1, 2, 3].map((i) => (
          <li key={i}>{t(`catalog.${slug}.points.${i}`)}</li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-charcoal/50">{t("product.note")}</p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded bg-charcoal px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
      >
        {t("product.cta")}
      </Link>
    </div>
  );
}
