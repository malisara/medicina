import { motion } from "framer-motion";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const contactDivStyle = "flex gap-4 items-center sm:mx-[35%] md:-[45%]";

function Contact(): JSX.Element {
  return (
    <>
      {/* seperator top part */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,224L1440,64L1440,320L0,320Z"
        ></path>
      </svg>

      {/* content */}
      <div className="bg-primaryPurple">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0.5, x: -60 },
          }}
          className="flex flex-col gap-7 text-lg px-10"
        >
          <h2 className="text-center mb-4 md:mb-6 text-2xl md:text-4xl">
            Kontakt
          </h2>

          <div className={contactDivStyle}>
            <AiOutlinePhone />
            <p>0123456789</p>
          </div>

          <div className={contactDivStyle}>
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
        </motion.div>
      </div>

      {/* seperator bottom part */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e8d1eb"
          fillOpacity="1"
          d="M0,192L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Contact;
