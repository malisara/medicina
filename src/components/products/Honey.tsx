import DetailView from "./DetailView";
import HoneyImage from "../../assets/product_honey.jpg";

const text = [
  <p>
    Cvetlični med Medičina je popolnoma naraven, brez dodanih sladkorjev ali
    konzervansov. Ima sladko, nežno aromo, ki vas bo popeljala v naravno okolje,
    polno cvetlic. Ta med je odličen na kosmičih, v čaju ali kot dodatek k
    različnim jedem, ki potrebujejo naravno sladkost.
  </p>,

  <p>
    Poleg svojega izjemnega okusa ima cvetlični med tudi številne zdravstvene
    koristi. Je bogat z antioksidanti, vitaminom C in drugimi hranili, ki
    krepijo imunski sistem in prispevajo k boljšemu zdravju.
  </p>,
];

const productData = {
  title: "Cvetlični med",
  text: text,
  imageSrc: HoneyImage,
  prices: [
    { index: 0, size: "50ml", price: 10 },
    { index: 1, size: "100ml", price: 15 },
  ],
};

function Honey({}): JSX.Element {
  return <DetailView productData={productData} />;
}

export default Honey;
