import AccordionSection from "./ui/accordion-section";
import Navigation from "./ui/navigation";
import Header from "./ui/header";
import Prices from "./ui/prices";
import Contact from "./ui/contact";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <section className="box-border w-full h-[32rem] flex flex-row items-center justify-center bg-cover bg-center bg-[url(/img/enhanced_enig15.png)] hero">
        <div className="">
          <h1 className="border-b-red-800 border-b-2 m-5 p-5 text-7xl font-stretch-expanded font-bold text-red-800">
            ENIGMA
          </h1>
          <h3 className="text-2xl text-center">SZABADULOS JATEK</h3>
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
        <div>Footer incoming...</div>
      </footer>
    </>
  );
}
