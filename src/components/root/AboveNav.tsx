import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function AboveNav(): JSX.Element {
  return (
    <>
      <div
        className="bg-secondaryPurple bg-opacity-80 
        flex px-10 py-4 justify-center gap-10 h-15"
      >
        <div className="flex items-center gap-2">
          <AiOutlinePhone />
          <p>123456789</p>
        </div>

        <div className="flex items-center gap-2">
          <AiOutlineMail />
          <p>fake.mail@mail.com</p>
        </div>
      </div>
    </>
  );
}

export default AboveNav;
