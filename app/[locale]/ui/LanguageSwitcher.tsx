"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { MouseEvent } from "react";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const newLocale = event.currentTarget.value === "en" ? "hu" : "en";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.replace(pathname + hash, { locale: newLocale });
    console.log(window.location);
  };
  return (
    <button
      className={`${className} bg-amber-800`}
      value={locale}
      onClick={handleChange}
    >
      {`${locale === "en" ? "HU" : "EN"}`}
    </button>
  );
}
