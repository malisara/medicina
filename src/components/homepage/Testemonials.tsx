import { useEffect, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
//TODO make mt component

const reviews = [
  {
    id: 0,
    customer: "Maja K.",
    comment:
      "Sveče iz čebeljega voska so čudovite in dišeče. Ustvarijo prijetno\
       vzdušje v mojem domu. Zagotovo jih bom spet kupila.",
  },
  {
    id: 1,
    customer: "Katja L",
    comment:
      "Nikoli nisem verjela v moč čebeljega cvetnega prahu, dokler nisem\
      poskusila Medičina izdelka. Ima pozitiven vpliv na mojo energijo\
       in zdravje. Priporočam ga vsem!",
  },
  {
    id: 2,
    customer: "Grega K.",
    comment:
      "Vaša ekipa je vedno prijazna in pripravljena\
   pomagati. Hvala za odlično storitev in odlične izdelke!",
  },
  {
    id: 3,
    customer: "Neža S.",
    comment:
      "Ponudba Medičine je raznolika, in vse,\
 kar sem doslej kupila, je bilo vrhunske kakovosti!",
  },
];

function Testemonials(): JSX.Element {
  const [currentReview, setCurrentReview] = useState<number>(0);
  const reviewToDisplay = reviews.filter(
    (review) => review.id === currentReview
  )[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentReview]);

  return (
    <div>
      <div className="mb-[3rem] text-center text-3xl text-yellow-500">
        STRANKE PRAVIJO:
      </div>
      <div className="mt-10 w-[85%] md:w-[50%] mx-auto relative">
        <div>
          <ImQuotesLeft
            className="text-yellow-500 text-[3rem] 
          absolute top-0 riht-0"
          />
        </div>
        <div className="px-10 py-[5rem] italic text-center text-lg">
          {reviewToDisplay.comment}
          <div className="mt-5">{reviewToDisplay.customer}</div>
        </div>
        <div>
          <ImQuotesRight
            className="text-yellow-500 text-[3rem] 
          absolute right-0 bottom-0"
          />
        </div>

        {/* indicators */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: reviews.length }, (_, index: number) => (
            <p
              aria-current={index === reviewToDisplay.id}
              className="[&[aria-current='true']]:bg-yellow-500 
            bg-gray-400 w-3 h-3 rounded-full"
              key={index}
            />
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Testemonials;
