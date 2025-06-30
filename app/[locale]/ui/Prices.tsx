import { useTranslations } from "next-intl";

export default function Prices() {
  const t = useTranslations("Prices");
  return (
    <>
      <div className="flex flex-col justify-around text-3xl h-full gap-4">
        <h4 className="text-4xl text-center">{t("title")}</h4>
        <p>2 person -- 8000Huf/ppl (16000Huf)</p>
        <p>3 person -- 7000Huf/ppl (21000Huf)</p>
        <p>4 person -- 6000Huf/ppl (24000Huf)</p>
        <p>5 person -- 5200Huf/ppl (26000Huf)</p>
        <p>6 person -- 4500Huf/ppl (28000Huf)</p>
      </div>
      <div className="flex flex-col justify-around text-2xl text-center h-full">
        <h4 className="text-3xl">Payment options</h4>
        <p>Cash</p>
        <p>Credit card</p>
        <p>Bank transfer</p>
        <p>Online payment</p>
      </div>
    </>
  );
}
