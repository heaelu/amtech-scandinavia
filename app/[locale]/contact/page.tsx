import { getTranslations, setRequestLocale } from "next-intl/server";
import { QuoteForm } from "@/components/QuoteForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const f = await getTranslations("footer");
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="mt-3 text-charcoal/70">{t("lead")}</p>
      <div className="mt-8">
        <QuoteForm />
      </div>
      <p className="mt-6 text-sm text-charcoal/60">
        {t("or")}:{" "}
        <a className="underline" href={`mailto:${f("email")}`}>
          {f("email")}
        </a>{" "}
        · {f("phone")}
      </p>
    </div>
  );
}
