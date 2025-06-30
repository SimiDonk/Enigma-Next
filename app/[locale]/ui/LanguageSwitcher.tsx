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
    router.replace(pathname, { locale: newLocale, scroll: false });
    console.log(window.location);
  };
  return (
    <button
      className={`cursor-pointer bg-red-800 w-[4rem] h-[3rem] mr-6 rounded-md ${className}`}
      value={locale}
      onClick={handleChange}
    >
      {`${locale === "en" ? "HU" : "EN"}`}
    </button>
  );
}
