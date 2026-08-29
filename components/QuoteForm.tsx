"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export function QuoteForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [
      `Name: ${fd.get("name")}`,
      `Email: ${fd.get("email")}`,
      `Phone: ${fd.get("phone")}`,
      `Country: ${fd.get("country")}`,
      `Interest: ${fd.get("interest")}`,
      "",
      String(fd.get("message") || ""),
    ].join("\n");
    const mailto = `mailto:heaelu@gmail.com?subject=${encodeURIComponent(
      "AMTech RFQ — " + fd.get("interest")
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return <p className="rounded border border-black/10 bg-white p-6 text-sm">{t("thanks")}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-black/10 bg-white p-6">
      <label className="grid gap-1 text-sm">
        {t("name")}
        <input required name="name" className="rounded border border-black/15 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        {t("email")}
        <input required type="email" name="email" className="rounded border border-black/15 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        {t("phone")}
        <input name="phone" className="rounded border border-black/15 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        {t("country")}
        <input name="country" className="rounded border border-black/15 px-3 py-2" />
      </label>
      <label className="grid gap-1 text-sm">
        {t("interest")}
        <select name="interest" className="rounded border border-black/15 px-3 py-2">
          <option value="Clean 300">{t("interests.clean300")}</option>
          <option value="Clean 500">{t("interests.clean500")}</option>
          <option value="Weld 1500">{t("interests.weld")}</option>
          <option value="Multi 1500">{t("interests.multi")}</option>
          <option value="Rental">{t("interests.rental")}</option>
          <option value="Advice">{t("interests.other")}</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        {t("message")}
        <textarea name="message" rows={5} className="rounded border border-black/15 px-3 py-2" />
      </label>
      <button
        type="submit"
        className="rounded bg-charcoal px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
      >
        {t("submit")}
      </button>
    </form>
  );
}
