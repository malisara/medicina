import { NavLink } from "react-router-dom";

type Props = { text: string; url: string };

function Button({ text, url }: Props): JSX.Element {
  return (
    <NavLink to={url} className="w-[100%]">
      <div
        className="border hover:border-white p-2 mt-3 text-white 
        text-lg bg-secondaryPurple hover:bg-opacity-90"
      >
        {text}
      </div>
    </NavLink>
  );
}

export default Button;
