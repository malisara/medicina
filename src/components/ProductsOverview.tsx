import { NavLink } from "react-router-dom";

import Bees from "../assets/product_bees.png";
import Candle from "../assets/product_candle.jpg";
import Honey from "../assets/product_honey.jpg";
import Pollen from "../assets/product_pollen.jpg";
import Title from "./Title";
import Wax from "../assets/product_wax.jpg";

const categories = [
  { title: "Cvetlični med", img: Honey, url: "/med" },
  { title: "Cvetni prah", img: Pollen, url: "/cvetni-prah" },
  { title: "Sveče", img: Candle, url: "/svece" },
  { title: "Vosek", img: Wax, url: "/vosek" },
  { title: "Čebelje družine", img: Bees, url: "/cebelje-druzne" },
];

function ProductsOverview(): JSX.Element {
  return (
    <>
      <Title title="Ponudba" />
      <div
        className="flex flex-wrap justify-center gap-8 mt-10 w-[80%]
     md:w-[60%] mx-auto flex-col md:flex-row"
      >
        {categories.map((category) => {
          return (
            <div className="text-center flex flex-col items-center">
              <NavLink to={category.url}>
                <img
                  src={category.img}
                  alt=""
                  className="h-[80vw] sm:h-[20rem] w-[20rem] 
                object-cover md:mt-6 hover:opacity-80"
                />
                <div
                  className="border border-yellow-100 p-2 mt-3
               bg-yellow-500 text-white text-lg hover:opacity-80"
                >
                  {category.title}
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsOverview;
