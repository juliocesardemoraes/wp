import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["en", "pt"] as const;
export const defaultLocale = "pt";

export default getRequestConfig(async ({ locale }) => {
  let selectedLanguage = !locales.includes(locale as any)
    ? defaultLocale
    : locale;

  const store = await cookies();
  selectedLanguage = store.get("locale")?.value || "pt";

  return {
    locale: selectedLanguage,
    messages: (await import(`../../messages/${selectedLanguage}.json`)).default,
  };
});
