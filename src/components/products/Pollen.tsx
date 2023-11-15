import DetailView from "./DetailView";
import PollenImage from "../../assets/product_pollen.jpg";

const text = [
  <p>
    Cvetni prah Medičina je bogat z beljakovinami, vitamini, minerali in
    antioksidanti, kar ga naredi za odličen dodatek k prehrani. Prav tako
    vsebuje naravni sladkor, ki vam daje energijo in pomaga izboljšati splošno
    počutje.
  </p>,

  <p>
    Naš cvetni prah je pridobljen z največjo skrbnostjo, saj želimo ohraniti
    njegovo naravno kakovost. Uporabljamo le okolju prijazne metode, ki ne
    vplivajo negativno na okolje in ohranjajo cvetje in rastline za prihodnje
    generacije.
  </p>,

  <p>
    Cvetni prah je odličen dodatek k različnim jedem, kot so smoothiji in
    jogurt. Prav tako ga lahko uživate samostojno, kot naravni vir hranil.
    Cvetni prah pomaga pri krepitev imunskega sistema ter lajšanje alergij.
  </p>,
];

const productData = {
  title: "Cvetni prah",
  text: text,
  imageSrc: PollenImage,
  price: 12,
};
function Pollen(): JSX.Element {
  return <DetailView productData={productData} />;
}

export default Pollen;
