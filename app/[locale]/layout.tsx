import { Roboto, Lora } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "700",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hu" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${lora.variable} antialiased bg-black scroll-smooth`}
    >
      <body className="max-w-[120rem] m-auto">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
