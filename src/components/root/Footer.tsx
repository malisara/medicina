import { BsFacebook, BsInstagram } from "react-icons/bs";

const soMeLinkStyle = "flex gap-2 items-center hover:opacity-80";

function Footer(): JSX.Element {
  return (
    <footer
      className="bg-secondaryPurple w-full h-fit flex justify-center
      gap-3 md:gap-9 text-md md:text-lg flex-col md:flex-row
      items-center py-[1rem] md:py-[2rem] bottom-0 text-white"
    >
      <a href="#" className={soMeLinkStyle}>
        <BsFacebook />
        <p>medecina_ig</p>
      </a>
      <a href="#" className={soMeLinkStyle}>
        <BsInstagram />
        <p>medicina_fb</p>
      </a>
    </footer>
  );
}

export default Footer;
