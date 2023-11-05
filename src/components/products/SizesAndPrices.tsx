import React, { useEffect, useState } from "react";

type Props = {
  sizePriceData: SiZePriceType[];
  handlePriceChange: React.Dispatch<React.SetStateAction<number>>;
};

type SiZePriceType = {
  index: number;
  size: string;
  price: number;
};

function SizesAndPrices({
  handlePriceChange,
  sizePriceData,
}: Props): JSX.Element {
  const [chosenBtnIndex, setChosenBtnIndex] = useState<number>(0);
  const activeBtnStyle =
    "bg-secondaryPurple text-white\
   hover:bg-opacity-90 hover:border-white";
  const inactiveBtnStyle =
    "border-secondaryPurple hover:bg-opacity-90\
   hover:bg-secondaryPurple hover:text-white";
  function handleClick(element: SiZePriceType): void {
    setChosenBtnIndex(element.index);
    handlePriceChange(element.price);
  }

  useEffect(() => {
    //set default value on load
    handlePriceChange(sizePriceData[0].price);
  }, []);

  return (
    <div className="flex gap-5 mt-8">
      {sizePriceData.map((el) => (
        <button
          className={`${
            chosenBtnIndex === el.index ? activeBtnStyle : inactiveBtnStyle
          } border  p-2 mt-3 text-lg rounded-lg`}
          key={el.index}
          onClick={() => handleClick(el)}
        >
          {el.size}
        </button>
      ))}
    </div>
  );
}

export default SizesAndPrices;
