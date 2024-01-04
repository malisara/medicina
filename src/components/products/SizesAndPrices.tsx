import { useEffect, useState } from "react";

import { SiZeAndPrice } from "../../interfaces";

const activeBtnStyle =
  "bg-secondaryPurple text-white hover:bg-opacity-90 hover:border-white";
const inactiveBtnStyle =
  "border-gray-300 hover:bg-opacity-90\
  hover:bg-secondaryPurple hover:text-white";

type Props = {
  sizesPricesData: SiZeAndPrice[];
  handleSizeChange: React.Dispatch<React.SetStateAction<number>>;
};

function SizesAndPrices({
  sizesPricesData,
  handleSizeChange,
}: Props): JSX.Element {
  const [chosenSizeIndex, setChosenSizeIndex] = useState<number>(0);

  function handleClick(element: SiZeAndPrice): void {
    setChosenSizeIndex(element.index);
    handleSizeChange(element.price);
  }

  useEffect(() => {
    //set default value on load
    handleSizeChange(sizesPricesData[0].price);
  }, []);

  return (
    <div className="flex gap-4 mt-4 md:mt-8">
      {sizesPricesData.map((el) => (
        <button
          className={`${
            chosenSizeIndex === el.index ? activeBtnStyle : inactiveBtnStyle
          } border p-2 mt-3 w-[5rem] text-lg rounded-sm`}
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
