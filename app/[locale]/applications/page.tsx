import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">{t("apps.title")}</h1>
      <p className="mt-3 max-w-2xl text-charcoal/70">{t("apps.lead")}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <article key={i} className="rounded-lg border border-black/10 bg-white p-6">
            <h2 className="text-lg font-semibold">{t(`apps.items.${i}.t`)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {t(`apps.items.${i}.d`)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
