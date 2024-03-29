import { NavLink, useMatch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineCloseCircle,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import useMediaQuery from "../../hooks/useMediaQuery";
import { products_urls } from "../../utils/urls";

const urls = [
  { title: "o nas", url: "o-nas" },
  { title: "blog", url: "blog" },
];

function Navbar({}): JSX.Element {
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [mobileNavIsOpen, setMobileNavOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isIzdelkiActive = useMatch("/izdelki/*");

  useEffect(() => {
    setOpenSubMenu(false);
  }, [isDesktop]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSubMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <nav className="top-[3rem] w-full" ref={ref}>
      <div
        className="bg-secondaryPurple flex text-lg items-center
         text-white justify-between px-10 py-4"
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#52525b" : "#ffffff",
          })}
        >
          MEDIČINA
        </NavLink>
        {isDesktop ? (
          // desktop - right side of nav
          <>
            <div className="flex w-full px-12 gap-9">
              {urls.map((url) => (
                <NavLink
                  to={url.url}
                  key={url.title}
                  style={({ isActive }) => ({
                    color: isActive ? "#52525b" : "#ffffff",
                  })}
                >
                  {url.title.toUpperCase()}
                </NavLink>
              ))}
              <div className="relative">
                <button
                  onClick={() => setOpenSubMenu(!openSubMenu)}
                  className={`${isIzdelkiActive && "text-gray-600"}`}
                >
                  IZDELKI <AiOutlineDown className="inline" />
                </button>
                {openSubMenu && (
                  <div
                    className="absolute top-full left-0 mt-3 border z-10
                   border-gray-50 shadow-lg bg-secondaryPurple flex flex-col
                   divide-y divide-gray-300 rounded-lg w-44"
                  >
                    {products_urls.map((products_url) => (
                      <NavLink
                        to={products_url.url}
                        className="px-2 py-3 hover:bg-titleColor 
                        hover:bg-opacity-60 "
                        key={products_url.title}
                        onClick={() => setOpenSubMenu(false)}
                      >
                        {products_url.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          // mobile - right side of nav
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
            className="h-[100%] bg-secondaryPurple w-full fixed top-0 flex
          flex-col px-16 pt-[4.5rem] z-10 text-white"
          >
            <div className="flex justify-between items-center">
              <NavLink
                to="/"
                onClick={() => setMobileNavOpen(false)}
                className="text-xl"
              >
                MEDIČINA
              </NavLink>

              <button onClick={() => setMobileNavOpen(false)}>
                <AiOutlineCloseCircle className="float-right text-xl" />
              </button>
            </div>
            <div className="flex flex-col gap-10 mt-12">
              {urls.map((url) => (
                <NavLink
                  to={url.url}
                  key={url.title}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {url.title.toUpperCase()}
                </NavLink>
              ))}
            </div>
            {openSubMenu ? (
              <button
                onClick={() => setOpenSubMenu(!openSubMenu)}
                className="mt-10 flex items-center"
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

            {/* mobile -items submenu */}
            {openSubMenu && (
              <div
                className="mt-3 mx-[15%] gap-3
               flex flex-col w-44"
              >
                {products_urls.map((products_url) => (
                  <NavLink
                    to={products_url.url}
                    className="px-2 py-3"
                    key={products_url.title}
                    onClick={() => {
                      setMobileNavOpen(false);
                      setOpenSubMenu(false);
                    }}
                  >
                    <RxDotFilled className="inline mr-1" />
                    {products_url.title}
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
