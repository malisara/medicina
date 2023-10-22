type Props = { title: string };

function Title({ title }: Props): JSX.Element {
  return (
    <div
      className="text-5xl text-yellow-500 
    mb-[5rem] text-center"
    >
      {title}
    </div>
  );
}

export default Title;
