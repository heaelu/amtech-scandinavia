import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fi", "en", "et", "sv"],
  defaultLocale: "fi",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
