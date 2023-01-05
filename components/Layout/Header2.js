import React, { useState, useEffect, useCallback, useId } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropDown from "./DropDown";
import { navLinks } from "./navLinks";
import { motion } from "framer-motion";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState("");
  // const uId = useId();

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

  const menu = (index) => {
    if (showSubMenu === index) {
      return setShowSubMenu(null);
    }
    setShowSubMenu(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const activeSubBorder = (navLink) => {
    const value = navLink.subLinks.find((subLink) => subLink.link === pathname);
    if (pathname === value?.link) {
      return "header2-link border-custom-orange text-custom-orange";
    } else {
      return "border-transparent header2-link";
    }
  };

  const activeBorder = (path) =>
    pathname === path
      ? "header2-link border-custom-orange text-custom-orange"
      : "border-transparent header2-link";

  const activeLink = (path) =>
    pathname === path
      ? "text-black"
      : "hover:text-black cursor-pointer duration-300";

  return (
    <div className="fixed w-full z-10">
      <div
        className={` duration-300  text-black  ${
          scroll ? "py-4 bg-gray-200" : "py-14 bg-white"
        }`}
      >
        <div className="px-4 lg:container flex justify-between items-center">
          <div className="">
            <Link href="/" passHref>
              <div className="w-[50px] h-[50px]">
                <Image
                  src="/images/logo/shannonit.jpg"
                  alt="Shannon IT"
                  width={238}
                  height={212}
                />
              </div>
              {/* <h1 className="text-[22px] font-Raleway cursor-pointer">
                Shannon IT
              </h1> */}
            </Link>
          </div>

          <button
            className="lg:hidden bg-white text-custom-orange text-xl p-2"
            onClick={handleToggle}
            aria-label="toggle"
          >
            <FaBars className={!toggle ? "block" : "hidden"} />
            <FaTimes className={toggle ? "block" : "hidden"} />
          </button>

          <div className="hidden lg:flex gap-[50px]  uppercase text-sm font-Montserrat">
            {navLinks &&
              navLinks.map((navLink, i) => (
                <div key={i}>
                  {!navLink.subLinks ? (
                    <div className="">
                      <Link href={navLink.link} passHref>
                        <a
                          className={`border-transparent ${activeBorder(
                            navLink.link
                          )}`}
                        >
                          {navLink.name}
                        </a>
                      </Link>
                      <div className={activeBorder(navLink.link)}></div>
                    </div>
                  ) : (
                    <div
                      onMouseEnter={() => menu(i)}
                      onMouseLeave={() => menu(null)}
                      className={`border-transparent ${activeSubBorder(
                        navLink
                      )}`}
                    >
                      <div>
                        {/* <p className="border-b-2 border-custom-orange"> */}
                        {/* <p className={` ${activeSubBorder(navLink)}`}> */}
                        <p className="">{navLink.name}</p>
                        <div className={` ${activeSubBorder(navLink)}`}></div>
                      </div>

                      {showSubMenu === i && (
                        <div className="absolute">
                          <div className="h-8 border-b-2 border-custom-gray"></div>
                          <div className="py-2 bg-custom-orange shadow-xl">
                            {navLink.subLinks.map((subLink, i) => (
                              <div
                                key={i}
                                className={`text-white flex flex-col hover:text-custom-orange hover:bg-white cursor-pointer duration-300 ${
                                  pathname === subLink.link
                                    ? "bg-white text-custom-orange "
                                    : ""
                                }}`}
                              >
                                <Link href={subLink.link}>
                                  <a className={`py-2 pl-4 pr-24`}>
                                    {subLink.name}
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

            {/* <Link href="/">
              <a className="header2-link border-transparent">home</a>
            </Link>
            <Link href="/about">
              <a className={activeBorder("/about")}>about us</a>
            </Link>
            <Link href="/gallery">
              <a className={activeBorder("/gallery")}>gallery</a>
            </Link>
            

            <div
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <div>
                <p className="header2-link border-transparent hover:border-transparent">
                  Services
                </p>
              </div>

              {showServices ? (
                <div className="absolute">
                  <div className="h-8 border-b-2 border-custom-orange"></div>
                  <div className="text-custom-orange bg-white flex flex-col gap-4 pl-6 pr-14 py-5 shadow-xl">
                    <Link href="/erp">
                      <a className={activeLink("/erp")}>E.R.P</a>
                    </Link>
                    <Link href="/school-management-system">
                      <a className={activeLink("/school-management-system")}>
                        School Management System
                      </a>
                    </Link>
                    <Link href="#">
                      <a className={activeLink("#")}>Desktop Development</a>
                    </Link>

                    <Link href="#">
                      <a className={activeLink("/#")}>Web Development</a>
                    </Link>

                    <Link href="#">
                      <a className={activeLink("/#")}>Mobile Development</a>
                    </Link>
                    <Link href="#">
                      <a className={activeLink("/#")}>Digital Marketing</a>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div
              onMouseEnter={() => setShowPages(true)}
              onMouseLeave={() => setShowPages(false)}
            >
              <div className="header2-link border-transparent hover:border-transparent">
                <p>pages</p>
              </div>

              {showPages ? (
                <div className="absolute">
                  <div className="h-8 border-b-2 border-custom-orange"></div>
                  <div className="text-custom-orange bg-white flex flex-col gap-4 p-6 pr-24 shadow-xl">
                    <Link href="/clients">
                      <a className={activeLink("/clients")}>Clients</a>
                    </Link>
                    <Link href="/our-team">
                      <a className={activeLink("/our-team")}>Our Team</a>
                    </Link>
                    <Link href="/pricing">
                      <a className={activeLink("/pricing")}>Pricing</a>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <Link href="/contact">
              <a className={activeBorder("/contact")}>contact</a>
            </Link> */}
          </div>
        </div>
      </div>
      {toggle ? <DropDown pathname={pathname} /> : ""}
    </div>
  );
}

export default Header;
