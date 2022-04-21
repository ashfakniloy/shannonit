import React, { useState, useEffect } from "react";
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
        className={` duration-300  text-black  ${
          scroll ? "py-4 bg-gray-200" : "py-14 bg-white"
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
              {/* <h1 className="text-[22px] font-Raleway cursor-pointer">
                Graphonex
              </h1> */}
            </Link>
          </div>

          <button
            className="lg:hidden bg-white text-custom-orange text-xl p-2"
            onClick={handleToggle}
          >
            <FaBars className={!toggle ? "block" : "hidden"} />
            <FaTimes className={toggle ? "block" : "hidden"} />
          </button>

          <div className="hidden lg:flex gap-[50px]  uppercase text-sm font-Montserrat">
            <Link href="/">
              <a className="header2-link border-transparent">home</a>
            </Link>
            <Link href="/about">
              <a
                className={`header2-link ${
                  pathname === "/about"
                    ? "border-custom-orange"
                    : "border-transparent"
                }`}
              >
                about us
              </a>
            </Link>
            <Link href="/gallery">
              <a
                className={`header2-link ${
                  pathname === "/gallery"
                    ? "border-custom-orange"
                    : "border-transparent"
                }`}
              >
                gallery
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`header2-link ${
                  pathname === "/services"
                    ? "border-custom-orange"
                    : "border-transparent"
                }`}
              >
                services
              </a>
            </Link>

            <div
              className=""
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <div className="header2-link border-transparent hover:border-transparent">
                <p>pages</p>
              </div>

              {showMenu ? (
                <div className="absolute">
                  <div className="h-8 border-b-2 border-custom-orange"></div>
                  <div className="text-custom-orange bg-white flex flex-col gap-4 p-6 pr-24 shadow-xl ">
                    <Link href="/clients">
                      <a
                        className={
                          pathname === "/clients"
                            ? "text-black"
                            : "hover:text-black cursor-pointer duration-300"
                        }
                      >
                        Clients
                      </a>
                    </Link>
                    <Link href="/our-team">
                      <a
                        className={
                          pathname === "/our-team"
                            ? "text-black"
                            : "hover:text-black cursor-pointer duration-300"
                        }
                      >
                        Our Team
                      </a>
                    </Link>
                    <Link href="/pricing">
                      <a
                        className={
                          pathname === "/pricing"
                            ? "text-black"
                            : "hover:text-black cursor-pointer duration-300"
                        }
                      >
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
              <a
                className={`header2-link ${
                  pathname === "/blog"
                    ? "border-custom-orange"
                    : "border-transparent"
                }`}
              >
                blog
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`header2-link ${
                  pathname === "/contact"
                    ? "border-custom-orange"
                    : "border-transparent"
                }`}
              >
                contact
              </a>
            </Link>
          </div>
        </div>
      </div>
      {toggle ? <DropDown pathname={pathname} /> : ""}
    </div>
  );
}

export default Header;
