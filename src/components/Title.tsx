type Props = { title: string; light?: boolean };

function Title({ title, light }: Props): JSX.Element {
  const textColor = light && "text-secondaryPurple";
  return (
    <h2
      className={`text-5xl md:text-6xl pb-[2rem] 
      md:pb-[4rem] text-center ${textColor}`}
    >
      {title}
    </h2>
  );
}

export default Title;
