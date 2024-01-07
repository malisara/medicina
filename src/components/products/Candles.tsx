import DetailView from "./DetailView";
import CandleImage from "../../assets/product-candle.jpg";

const text = [
  <p>
    Sveče iz čebeljega voska so prav posebne, saj oddajajo čudovit naraven vonj
    in ustvarjajo prijetno atmosfero v vašem domu. Te sveče so pridelane iz 100%
    čebeljega voska, kar pomeni, da ne vsebujejo umetnih dišav ali kemikalij.
    Naravna aroma sveč iz čebeljega voska vam bo pričarala vonj po medu in
    vosku, kar bo ustvarilo sproščujoče vzdušje v prostoru.
  </p>,

  <p>
    Čebelji vosek gori bolj čisto in enakomerno kot parafinski vosek, kar
    pomeni, da bodo vaše sveče gorele dlje in ne bodo puščale črnih saj. Poleg
    tega so sveče Medičina brez škodljivih snovi, kar jih naredi okolju prijazne
    in varne za vaše zdravje.
  </p>,
];

const productData = {
  title: "Sveče",
  text: text,
  imageSrc: CandleImage,
  price: 12,
};

function Candles(): JSX.Element {
  return <DetailView productData={productData} />;
}

export default Candles;
