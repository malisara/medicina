import DetailView from "./DetailView";
import WaxImage from "../../assets/product_wax.jpg";

const text = [
  <p>
    Čebelji vosek je znan po svoji edinstveni sposobnosti ohranjanja vlage in
    tvorjenja zaščitne plasti. Zaradi tega se pogosto uporablja za izdelavo
    naravnih kozmetičnih izdelkov, kot so balzami za ustnice, kreme za roke, in
    mazila za kožo. Njegova nežna aroma in mehkoba omogočata, da se vosek
    enostavno vključi v različne izdelke.
  </p>,

  <p>
    Poleg tega se čebelji vosek uporablja tudi za izdelavo naravnih sveč, ki
    ustvarjajo prijetno atmosfero v vašem domu. Te sveče oddajajo blag vonj po
    medu in čebeljemu vosku, kar ustvarja sproščujoče okolje.
  </p>,
];

const productData = {
  title: "Vosek",
  text: text,
  imageSrc: WaxImage,
  price: 12,
};

function Wax(): JSX.Element {
  return <DetailView productData={productData} />;
}

export default Wax;
