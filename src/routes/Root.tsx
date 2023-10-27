import { Outlet } from "react-router-dom";
import AboveNav from "../components/root/AboveNav";
import Footer from "../components/root/Footer";
import Navbar from "../components/root/Navbar";

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
