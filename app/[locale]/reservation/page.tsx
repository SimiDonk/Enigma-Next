import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("reservations");
  return (
    <>
      <Header />
      <Navigation />
      <h2>{t("title")}</h2>
    </>
  );
}
