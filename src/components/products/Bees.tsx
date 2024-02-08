import DetailView from "./DetailView";
// import BeesImage from "../../assets/product-bees.png";
import BeesImage from "../../assets/product-bees.jpg";

const text = [
  <p>
    Čebelje družine so sestavljene iz več sto čebel, vključno z matico,
    delavkami in samci.
  </p>,
  <p>
    Matice so srce družine in odgovorne za odlaganje jajc. Delavke čebele
    opravljajo različne naloge, kot so nabiranje nektarja, izdelava medu in skrb
    za ličinke. Samci čebele služijo za razmnoževanje.
  </p>,
  <p>
    Te organizirane skupnosti so ključne za opraševanje rastlin, kar prispeva k
    našemu okolju in pridelku. Poleg tega čebele proizvajajo okusen med, ki je
    naravna poslastica in ima številne zdravstvene koristi.
  </p>,
];

const productData = {
  title: "Čebelje družine",
  text: text,
  imageSrc: BeesImage,
  price: 80,
};

function Bees(): JSX.Element {
  return <DetailView productData={productData} />;
}

export default Bees;
