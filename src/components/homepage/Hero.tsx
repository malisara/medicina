"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import beeOneImg from "../../assets/hero-bee-one.jpg";
import beeTwoImg from "../../assets/hero-bee-two.jpg";
import honeyOneImg from "../../assets/hero-honey-one.jpg";
import honeyTwoImg from "../../assets/hero-honey-two.jpg";

const flexCenter = "flex items-center justify-center";
export const imageCover = "object-cover w-full h-full rounded-md";

const heroImages = [
  //todo change dummy text
  {
    id: 0,
    src: beeOneImg,
    text: "Z medom iz naših panjev okusite naravo brez dodanih sladkorjev in konzervansov.",
  },
  {
    id: 1,
    src: beeTwoImg,
    text: "Medečina med - narava v kozarcu, slast v vsakem zajemu!",
  },
  {
    id: 2,
    src: honeyOneImg,
    text: "Poskusite slasten med, ki vašemu življenju doda naravno sladkost.",
  },
  { id: 3, src: honeyTwoImg, text: "Okus narave, zdravje za vas" },
];

const variants = {
  //animation
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0.5,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0.5,
    };
  },
};

function Hero(): JSX.Element {
  const [[shownImageIndex, direction], setShownImageAndDirection] = useState<
    number[]
  >([1, -1]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [shownImageIndex]);

  function nextImage(nextImg: boolean) {
    if (nextImg) {
      //next image
      setShownImageAndDirection((prev) => [
        (prev[0] + 1) % heroImages.length,
        -1,
      ]);
    } else {
      //previous image
      setShownImageAndDirection((prev) => [
        (prev[0] - 1 + heroImages.length) % heroImages.length,
        1,
      ]);
    }
  }

  return (
    <div className="absolute w-full top-[6.5rem]">
      <div className="h-[40rem] overflow-hidden lg:h-[50rem]">
        <AnimatePresence custom={direction} initial={false}>
          {/* Hero Images */}
          {heroImages
            .filter((hero) => hero.id === shownImageIndex)
            .map((hero) => {
              return (
                <div className={imageCover} key={"animate-div"}>
                  <motion.img
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                    custom={direction}
                    key={hero.id}
                    src={hero.src}
                    className={imageCover}
                  />
                  <div
                    className={`absolute inset-0 flex-col 
                    gap-5 lg:gap-10 ${flexCenter}`}
                  >
                    <p
                      className="bg-primaryPurple bg-opacity-90 p-6 
                        rounded-sm text-md w-[63%] md:w-fit md:text-xl"
                    >
                      {hero.text}.
                    </p>
                    <div
                      className="absolute flex gap-3 -translate-x-1/2 
                          bottom-16 left-1/2"
                    >
                      {/* Dot indicators */}
                      {Array.from(
                        { length: heroImages.length },
                        (_, index: number) => (
                          <p
                            id={`sliderBtn-${index}`}
                            aria-current={index === shownImageIndex}
                            className="[&[aria-current='true']]:bg-white 
                              bg-gray-400 w-3 h-3 rounded-full"
                            key={index}
                          ></p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          [0]
        </AnimatePresence>
      </div>

      {/* Left Control Button */}
      <div className={`absolute top-0 left-0 h-full px-4 ${flexCenter}`}>
        <button
          className={`w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-50 
            ${flexCenter}`}
          onClick={() => nextImage(false)}
        >
          <svg
            className="w-4 h-4 dark:text-gray-800"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
      </div>
      {/* Right Control Button */}
      <div className={`absolute top-0 right-0 h-full px-4 ${flexCenter}`}>
        <button
          className={`w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-50
             ${flexCenter}`}
          onClick={() => nextImage(true)}
        >
          <svg
            className="w-4 h-4 dark:text-gray-800"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
