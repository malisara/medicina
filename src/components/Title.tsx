type Props = { title: string };

//TODO mobile title height
function Title({ title }: Props): JSX.Element {
  return (
    <div
      className="text-5xl text-titleColor 
    mb-[5rem] text-center font-semibold"
    >
      {title}
    </div>
  );
}

export default Title;
