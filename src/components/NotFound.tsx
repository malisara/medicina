import AboveNav from "./root/AboveNav";
import Navbar from "./root/Navbar";
import Footer from "./root/Footer";

function NotFound(): JSX.Element {
  return (
    <>
      <AboveNav />
      <Navbar />
      <div className="h-[80vh] text-center mt-[10rem]">
        <p className="text-2xl md:text-4xl mb-5 md:mb-10">Ups!</p>
        <p className="mb-6 md:mb-10 italic">Iskana stran ne obstaja.</p>
        <p className="font-bold underline">
          <a href="/">domov</a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
