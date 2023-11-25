import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const contactDivStyle = "flex gap-4 items-center sm:mx-[35%] md:-[45%]";

function Contact(): JSX.Element {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,224L1440,64L1440,320L0,320Z"
        ></path>
      </svg>

      <div className="bg-primaryPurple">
        <div className="flex flex-col gap-7 text-lg px-10">
          <p className="text-center mb-4 md:mb-6 text-2xl md:text-4xl">
            Kontakt
          </p>
          <div className={`${contactDivStyle}`}>
            <AiOutlinePhone />
            <p>0123456789</p>
          </div>
          <div className={`${contactDivStyle}`}>
            <AiOutlineMail />
            <p>fake.mail@mail.com</p>
          </div>
          <a
            href="#"
            className={`${contactDivStyle} hover:text-secondaryPurple w-fit`}
          >
            <BsFacebook />
            @ourPage
          </a>
          <a
            href="#"
            className={`${contactDivStyle} hover:text-secondaryPurple w-fit`}
          >
            <BsInstagram />
            <p>Ig</p>
          </a>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,192L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Contact;
