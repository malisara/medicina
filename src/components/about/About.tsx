import AboutImg from "../../assets/about-bee.jpg";
import Contact from "./Contact";
import Title from "../Title";

const aboutText = [
  <p>
    Dobrodošli v svetu čebelarstva, kjer se prepletajo narava, strast in znanje.
    Sva <span className="font-bold">Karmen in Jernej</span>, ponosna lastnika{" "}
    <span className="font-bold">Medičine</span>. Skupaj deliva ljubezen do čebel
    in njihovega izjemnega daru naravi.
  </p>,
  <p>
    Naše čebelje družine so za nas več kot le panji; so naši partnerji v
    ekosistemu in ključni akterji v ohranjanju biotske raznovrstnosti. Skrbimo
    za njihovo dobro počutje z najvišjo stopnjo odgovornosti do čebel, narave in
    okolja. Naš cilj je zagotoviti, da imajo čebele{" "}
    <span className="font-bold">zdravo in trajnostno okolje </span>, kjer lahko
    cvetijo in prinašajo
    <span className="font-bold"> kakovosten med</span>.
  </p>,
  <p>
    Pri Medičini nudimo okusen{" "}
    <span className="font-bold">
      čebelji med, čebelji vosek, cvetni prah ter sveče
    </span>
    . Vse naše izdelke pridobivamo s strastjo in nenehnim prizadevanjem za
    <span className="font-bold"> najvišjo kakovost</span>. Vsaka kapljica našega
    medu in vsaka izdelana sveča odražata našo predanost in skrbnost, ki ju
    vlagamo v naše čebelarstvo.
  </p>,
];

function About(): JSX.Element {
  return (
    <div className="mt-[2rem] w-[85%] lg:w-[60%] mx-auto">
      <img
        src={AboutImg}
        className="h-[20rem] md:h-[40rem] w-full 
        object-cover mb-[2rem] md:mb-[4rem]"
      />

      <Title title="O nas" />

      {aboutText.map((paragraph, i) => (
        <div
          className="text-xl leading-8 mb-[2.5rem]
          md:leading-[3rem] md:text-justify"
          key={i}
        >
          {paragraph}
        </div>
      ))}
      <Contact />
    </div>
  );
}

export default About;
