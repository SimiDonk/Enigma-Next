import Navigation from "../ui/Navigation";
import getLang from "../lib/intl";

export default async function ReservationPage() {
  const t = await getLang("reservations");
  console.log(t);
  return (
    <>
      <Navigation />
      <div>
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}
