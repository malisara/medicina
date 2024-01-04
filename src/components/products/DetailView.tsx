import { useState } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";
import { imageCoverStyle } from "../homepage/Hero";
import { Product } from "../../interfaces";
import SizesAndPrices from "./SizesAndPrices";

type Props = { productData: Product };

function DetailView({ productData }: Props): JSX.Element {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [price, setPrice] = useState<number>(0);

  return (
    <>
      {/* desktop display */}
      {isDesktop ? (
        <div className="flex">
          {/* left part with purple bg and item image */}
          <div
            className="w-[45%] bg-secondaryPurple 
            min-h-[100vh] bg-opacity-80 pb-[6rem]"
          >
            <div
              className="transform -translate-x-[-40%] 
              -translate-y-[-10%] h-[40rem]"
            >
              <img src={productData.imageSrc} className={imageCoverStyle} />
            </div>
          </div>

          {/* right part with text */}
          <div
            className="w-full text-end mr-[5rem] xl:mr-[15rem] 
            ml-[5rem] flex flex-col items-end"
          >
            <h2 className="py-[4rem] text-6xl">{productData.title}</h2>

            {productData.prices ? (
              <>
                {/* several price options */}
                <p className="text-2xl md:text-5xl opacity-80">{price}€</p>
                <SizesAndPrices
                  handleSizeChange={setPrice}
                  sizesPricesData={productData.prices}
                />
              </>
            ) : (
              //one price
              <p className="text-5xl opacity-80">{productData.price}€</p>
            )}

            {/* product description */}
            <div className="mt-16 w-[70%] text-justify">
              {productData.text.map((paragraph, i) => (
                <div key={i} className="mb-6 leading-8">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        //mobile display
        <>
          <div className="w-[85%] mx-auto mt-10">
            <div className="h-[25rem] sm:h-[25rem]">
              <img src={productData.imageSrc} className={imageCoverStyle} />
            </div>
            <p className="py-[2rem] text-4xl text-center">
              {productData.title}
            </p>

            {productData.prices ? (
              <>
                {/* several price options */}
                <p className="text-3xl text-center opacity-80">{price}€</p>
                <div className="flex justify-center mb-10">
                  <SizesAndPrices
                    handleSizeChange={setPrice}
                    sizesPricesData={productData.prices}
                  />
                </div>
              </>
            ) : (
              //one price
              <p className="text-center text-3xl opacity-80 pb-4 md:pb-8">
                {productData.price}€
              </p>
            )}

            <div className="text-justify pb-10">
              {productData.text.map((paragraph, i) => (
                <div key={i} className="mb-6 leading-8">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailView;
