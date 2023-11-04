import useMediaQuery from "../../hooks/useMediaQuery";
import { imageCover } from "../homepage/Hero";

type Props = { title: string; text: JSX.Element[]; imageSrc: string };

function DetailView({ title, text, imageSrc }: Props): JSX.Element {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

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
              <img src={imageSrc} className={imageCover} />
            </div>
          </div>
          <div
            className="w-full text-end px-[10rem] 
          flex flex-col items-end"
          >
            <p className="py-[4rem] text-6xl">{title}</p>
            <p className="text-5xl opacity-80">10€</p>

            <div className="mt-16 w-[70%] text-justify">
              {text.map((paragraph, i) => (
                <div key={i} className="mb-6 leading-8">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
          <div className="w-[85%] mx-auto">
            <div className="h-[25rem] sm:h-[25rem]">
              <img src={imageSrc} className={imageCover} />
            </div>
            <div className="mt-10 text-justify">
              {text.map((paragraph, i) => (
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
