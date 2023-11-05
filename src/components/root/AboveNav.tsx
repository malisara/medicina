import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

function AboveNav(): JSX.Element {
  return (
    <>
      <div
        className="bg-secondaryPurple bg-opacity-80 
        flex px-10 py-3 justify-center gap-10 h-15"
      >
        <div className="flex items-center gap-2">
          <AiOutlinePhone />
          <p>telefon</p>
        </div>

        <div className="flex items-center gap-2">
          <AiOutlineMail />
          <p>mail</p>
        </div>
      </div>
    </>
  );
}

export default AboveNav;
