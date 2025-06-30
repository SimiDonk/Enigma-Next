import { getTranslations, getLocale } from "next-intl/server";

export default async function getLang(namespace: string) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: namespace });
  return t;
}
