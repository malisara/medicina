import Title from "../Title";

// hero: mt-[38rem] lg:mt-[48rem]
const presentationText =
  //TODO change dummy text
  "Pri Medičini se z ljubeznijo in predanostjo posvečamo pridelavi\
 visokokakovostnega medu in medenih izdelkov. Naše čebelje družine skrbno črpajo\
 naravno bogastvo cvetličnih vrtov, rezultat pa so izdelki, polni okusa in\
  zdravja. Z veseljem delimo naravno sladkost narave s svojo skupnostjo in\
   zagotavljamo izdelke brez dodanih umetnih sestavin. Pridružite se nam v\
    okušanju čistega okusa narave in podprite lokalno pridelavo medu!";

function Presentation(): JSX.Element {
  return (
    <div
      className="mt-[44rem] lg:mt-[60rem] px-10 text-center
       flex flex-col items-center"
    >
      <Title title="Medičina" />
      <div
        className="leading-10 md:leading-[3rem] mb-[5rem]
      text-md md:text-xl w-[95%] md-w[80%] lg:w-1/2"
      >
        {presentationText}
      </div>
    </div>
  );
}

export default Presentation;
