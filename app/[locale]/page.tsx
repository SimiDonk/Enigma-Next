import AccordionSection from "./ui/AccordionSection";
import Navigation from "./ui/Navigation";
import Header from "./ui/Header";
import Prices from "./ui/Prices";
import Contact from "./ui/Contact";
import { getTranslations } from "next-intl/server";
import ReservationButton from "./ui/ReservationButton";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return (
    <>
      <Header />
      <Navigation />
      <section className="box-border w-full h-[32rem] flex flex-row items-center justify-center bg-cover bg-center bg-[url(/img/enhanced_enig15.png)] hero">
        <div className="flex flex-col items-center gap-2">
          <h1 className="border-b-red-800 border-b-2 m-5 p-5 text-7xl font-stretch-expanded font-bold text-red-800">
            ENIGMA
          </h1>
          <h3 className="text-2xl text-center">{t("secondary-title")}</h3>
          <ReservationButton />
        </div>
      </section>
      <main className="">
        <section id="rooms"></section>
        <section
          id="prices"
          className="w-full h-fit md:h-[32rem] flex flex-col md:flex-row items-center md:items-baseline justify-center py-16 px-8 gap-20"
        >
          <Prices />
        </section>
      </main>
      <AccordionSection />
      <section id="contact">
        <Contact />
      </section>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div>{t("footer")}</div>
      </footer>
    </>
  );
}
