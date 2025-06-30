"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function ReservationButton() {
  const t = useTranslations("global");
  const locale = useLocale();
  const router = useRouter();
  const handleClick = () => {
    // link to reservation page
    router.push(`/${locale}/reservation`);
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-red-900 w-[10rem] h-[3rem] rounded-md m-2 font-bold uppercase"
    >
      {t("bookingbutton")}
    </button>
  );
}
