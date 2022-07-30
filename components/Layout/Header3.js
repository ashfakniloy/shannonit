import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropDown from "./DropDown";

function Header3() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPages, setShowPages] = useState(false);
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

  const activeBorder = (path) =>
    pathname === path
      ? "border-custom-orange header2-link"
      : "border-transparent header2-link";

  const activeLink = (path) =>
    pathname === path
      ? "text-black"
      : "hover:text-black cursor-pointer duration-300";

  const headerClass = () => {
    if (pathname === "/") {
      return scroll
        ? "text-white py-4 bg-custom-gray transition duration-300"
        : "text-white py-20 bg-transparent transition duration-300";
    } else {
      return scroll
        ? "text-black py-4 bg-gray-200 transition duration-300"
        : "text-black py-14 bg-white transition duration-300";
    }
  };

  return (
    <div className="fixed w-full z-10">
      <div className={` ${headerClass()}`}>
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
            <Link href="/">
              <a className="header2-link border-transparent">home</a>
            </Link>
            <Link href="/about">
              <a className={activeBorder("/about")}>about us</a>
            </Link>
            <Link href="/gallery">
              <a className={activeBorder("/gallery")}>gallery</a>
            </Link>
            {/* <Link href="/services">
              <a className={activeBorder("/services")}>services</a>
            </Link> */}

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
            </Link>
          </div>
        </div>
      </div>
      {toggle ? <DropDown pathname={pathname} /> : ""}
    </div>
  );
}

export default Header3;
