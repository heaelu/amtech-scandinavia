import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function SafetyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">{t("safety.title")}</h1>
      <p className="mt-4 text-lg text-charcoal/80">{t("safety.lead")}</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal/80">
        {[0, 1, 2, 3, 4].map((i) => (
          <p key={i}>{t(`safety.body.${i}`)}</p>
        ))}
      </div>
    </div>
  );
}
