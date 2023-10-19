import { Outlet } from "react-router-dom";
import AboveNav from "../components/AboveNav";
import Navbar from "../components/Navbar";

type Props = {};

function Root({}: Props) {
  return (
    <>
      <AboveNav />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
