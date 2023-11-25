import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { imageCover } from "../homepage/Hero";
import SizesAndPrices from "./SizesAndPrices";
import { ProductDataType } from "../../typeAliases";

type Props = { productData: ProductDataType };

function DetailView({ productData }: Props): JSX.Element {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [price, setPrice] = useState<number>(0);

  return (
    <div>
      {isDesktop ? (
        <div className="flex">
          <div
            className="w-[45%] bg-secondaryPurple 
          min-h-[100vh] bg-opacity-80 pb-[6rem]"
          >
            <div
              className="transform -translate-x-[-40%] 
            -translate-y-[-10%] h-[40rem]"
            >
              <img src={productData.imageSrc} className={imageCover} />
            </div>
          </div>
          <div
            className="w-full text-end pr-[15rem] 
            pl-[5rem] flex flex-col items-end"
          >
            <p className="py-[4rem] text-6xl">{productData.title}</p>

            {productData.prices ? (
              <>
                <p className="text-5xl opacity-80">{price}€</p>
                <SizesAndPrices
                  handleSizeChange={setPrice}
                  sizesPricesData={productData.prices}
                />
              </>
            ) : (
              <p className="text-5xl opacity-80">{productData.price}€</p>
            )}

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
        <div>
          <div className="w-[85%] mx-auto mt-10">
            <div className="h-[25rem] sm:h-[25rem]">
              <img src={productData.imageSrc} className={imageCover} />
            </div>
            <p className="py-[3rem] text-4xl text-center">
              {productData.title}
            </p>

            {productData.prices ? (
              <>
                <p className="text-3xl text-center opacity-80">{price}€</p>
                <div className="flex justify-center mb-10">
                  <SizesAndPrices
                    handleSizeChange={setPrice}
                    sizesPricesData={productData.prices}
                  />
                </div>
              </>
            ) : (
              <p className="text-5xl opacity-80 mx-auto">
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
        </div>
      )}
    </div>
  );
}

export default DetailView;
