import { NavLink } from "react-router-dom";

type Props = { text: string; url: string };

function Button({ text, url }: Props): JSX.Element {
  return (
    <NavLink to={url}>
      <div
        className="border hover:border-white p-2 mt-3 text-white 
        text-lg hover:bg-secondaryPurple bg-transparent"
      >
        {text}
      </div>
    </NavLink>
  );
}

export default Button;
