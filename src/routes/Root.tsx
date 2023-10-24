import { Outlet } from "react-router-dom";
import AboveNav from "../components/AboveNav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Root({}): JSX.Element {
  return (
    <>
      <AboveNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
