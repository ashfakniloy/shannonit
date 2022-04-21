import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropDown from "./DropDown";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className="fixed w-full z-10">
      <div
        className={` text-white duration-300 ${
          scroll ? "py-4 bg-custom-gray" : "py-20 bg-transparent"
        }`}
      >
        <div className="px-4 lg:container flex justify-between items-center">
          <div className="">
            <Link href="/">
              <div className="w-[50px] h-[50px]">
                <Image
                  src="/images/logo/shannonit.jpg"
                  width={238}
                  height={212}
                />
              </div>
              {/* <p className="text-[22px] font-Raleway cursor-pointer">
                Shannon it
              </p> */}
            </Link>
          </div>

          <button
            className="lg:hidden bg-white text-custom-orange text-xl p-2"
            onClick={handleToggle}
          >
            <FaBars className={!toggle ? "block" : "hidden"} />
            <FaTimes className={toggle ? "block" : "hidden"} />
          </button>

          <div className="hidden lg:flex gap-[50px] duration-300 uppercase text-sm font-Montserrat">
            <Link href="/">
              <a
                className={`header-link ${
                  pathname === "/" ? "text-custom-orange" : ""
                }`}
              >
                home
              </a>
            </Link>
            <Link href="/about">
              <a className="header-link">about us</a>
            </Link>
            <Link href="/gallery">
              <a className="header-link">gallery</a>
            </Link>
            <Link href="/services">
              <a className="header-link">services</a>
            </Link>

            <div
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <div>
                <p className="header-link">pages</p>
              </div>

              {showMenu ? (
                <div className="absolute">
                  <div className="h-8 border-b-2 border-custom-gray"></div>
                  <div className="text-white bg-custom-orange flex flex-col py-3 shadow-xl">
                    <Link href="/clients">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-24 cursor-pointer duration-300">
                        Clients
                      </a>
                    </Link>

                    <Link href="/our-team">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-24 cursor-pointer duration-300">
                        Our Team
                      </a>
                    </Link>

                    <Link href="/pricing">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-24 cursor-pointer duration-300">
                        Pricing
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <Link href="/blog">
              <a className="header-link">blog</a>
            </Link>
            <Link href="/contact">
              <a className="header-link">contact</a>
            </Link>
          </div>
        </div>
      </div>
      {toggle ? <DropDown pathname={pathname} /> : ""}
    </div>
  );
}

export default Header;
