import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineCloseCircle,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import useMediaQuery from "../../hooks/useMediaQuery";

const urls = [
  { title: "o nas", url: "o-nas" },
  { title: "blog", url: "blog" },
  //   { title: "kontakt", url: "kontakt" },
];

//TODO on hover
//Dropdown div style
//Dropdown close logic

const itemUrls = [
  { title: "Cvetlični med", url: "med" },
  { title: "Cvetni prah", url: "cvetni_prah" },
  { title: "Sveče", url: "svece" },
  { title: "Vosek", url: "vosek" },
  { title: "Čebelje družine", url: "cebelje_druzine" },
];

function Navbar({}): JSX.Element {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [mobileNavIsOpen, setMobileNavOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  useEffect(() => {
    setOpenSubMenu(false);
  }, [isDesktop]);

  return (
    <nav className="top-[3rem] w-full">
      <div
        className={`bg-yellow-100 flex text-lg items-center justify-between
        px-10 py-4`}
      >
        <NavLink to="/">Logo</NavLink>
        {isDesktop ? (
          <>
            <div className="flex w-full px-12 gap-9">
              {urls.map((url) => (
                <NavLink to={url.url} key={url.title}>
                  {url.title.toUpperCase()}
                </NavLink>
              ))}
              <div className="relative">
                <button onClick={() => setOpenSubMenu(!openSubMenu)}>
                  IZDELKI <AiOutlineDown className="inline" />
                </button>
                {openSubMenu && (
                  <div
                    className="absolute top-full left-0 mt-3 border z-10
                   border-gray-50 shadow-lg bg-yellow-100 flex flex-col
                   divide-y divide-gray-300 rounded-lg w-44"
                  >
                    {itemUrls.map((item) => (
                      <NavLink
                        to={item.url}
                        className="px-2 py-3 hover:bg-yellow-200"
                        key={item.title}
                        onClick={() => setOpenSubMenu(false)}
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex">
            <button onClick={() => setMobileNavOpen(!mobileNavIsOpen)}>
              <RxHamburgerMenu />
            </button>
          </div>
        )}
      </div>

      {!isDesktop && mobileNavIsOpen && (
        <>
          <div
            className="h-[100%] bg-yellow-100 w-full fixed top-0 flex
          flex-col px-16 pt-[4.5rem] z-10"
          >
            <button onClick={() => setMobileNavOpen(false)}>
              <AiOutlineCloseCircle className="float-right" />
            </button>
            <div className="flex flex-col items-start gap-10">
              {urls.map((url) => (
                <NavLink to={url.url} key={url.title}>
                  {url.title.toUpperCase()}
                </NavLink>
              ))}
            </div>
            {openSubMenu ? (
              <button
                onClick={() => setOpenSubMenu(!openSubMenu)}
                className="mt-10 flex justify-start items-center"
              >
                IZDELKI <AiOutlineRight className="inline ml-2" />
              </button>
            ) : (
              <button
                onClick={() => setOpenSubMenu(!openSubMenu)}
                className="mt-10 flex justify-start items-center"
              >
                IZDELKI <AiOutlineDown className="inline ml-2" />
              </button>
            )}

            {openSubMenu && (
              <div
                className="mt-3 mx-auto gap-3
               flex flex-col w-44"
              >
                {itemUrls.map((item) => (
                  <NavLink
                    to={item.url}
                    className="px-2 py-3 hover:bg-yellow-200"
                    key={item.title}
                    onClick={() => setOpenSubMenu(false)}
                  >
                    <RxDotFilled className="inline mr-1" />
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
