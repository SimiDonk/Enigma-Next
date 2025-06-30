export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div className="w-[350px] flex flex-col justify-center border-amber-50 border-2">
        <div>
          <h3 className="p-4 text-2xl text-center">Contact</h3>
          <p>Adress: 1134 Budapest Csango street 13.</p>
          <p>Phone: +36 20 559 8143</p>
          <p>Email: info@szabadulosjatek.com</p>
        </div>
        <div className="w-[80%]">
          <h3 className="p-4 text-2xl text-center">Banki adatok</h3>
          <p>Name: Simon David E.V.</p>
          <p>Számlaszám: 10918001-00000069-23890001</p>
          <p>IBAN: HU90 1091 8001 0000 0069 2389 0001</p>
          <p>Swift: BACXHUHB</p>
          <p>Közlemény: Csapatnév / Kuponkód</p>
        </div>
      </div>
      <div className="my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5388.357713006396!2d19.065022213058537!3d47.525380793460734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dbf2eb684d93%3A0xdbc645030b93bfee!2sEnigma%20szabadul%C3%B3s%20j%C3%A1t%C3%A9k%20-%20Escape%20room%20with%20laser%20maze!5e0!3m2!1shu!2shu!4v1750577340857!5m2!1shu!2shu"
          loading="lazy"
          className="m-auto w-[90%] h-[400px] md:w-[600px] md:h-[450px] border-0"
        ></iframe>
      </div>
    </div>
  );
}

// valami
