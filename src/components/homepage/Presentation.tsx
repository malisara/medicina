import { motion } from "framer-motion";

import Title from "../Title";

const presentationText = (
  <p>
    Pri Medičini se z ljubeznijo in predanostjo posvečamo pridelavi
    <span className="font-semibold">
      {" "}
      visokokakovostnega medu in medenih izdelkov.
    </span>{" "}
    Naše čebelje družine skrbno črpajo naravno bogastvo cvetličnih vrtov,{" "}
    rezultat pa so izdelki,{" "}
    <span className="font-semibold">polni okusa in vitaminov. </span>Z veseljem
    delimo naravno sladkost narave s svojo skupnostjo in zagotavljamo izdelke
    <span className="font-semibold"> brez dodanih umetnih sestavin.</span>{" "}
    Pridružite se nam v okušanju čistega okusa narave in podprite
    <span className="font-semibold"> lokalno pridelavo medu!</span>
  </p>
);

function Presentation(): JSX.Element {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
      className="mt-[44rem] lg:mt-[60rem] px-10 text-center
       flex flex-col items-center"
    >
      <Title title="Medičina" light={true} />
      <div
        className="leading-10 md:leading-[3rem] mb-[5rem]
      text-md md:text-xl w-[95%] md-w[80%] lg:w-1/2"
      >
        {presentationText}
      </div>
    </motion.div>
  );
}

export default Presentation;
