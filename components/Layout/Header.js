import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DropDown from "./DropDown";
import { navLinks } from "./navLinks";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState("");
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

  return (
    <div className="fixed w-full z-10">
      <div
        className={` text-white duration-300 ${
          scroll ? "py-4 bg-custom-gray" : "py-20 bg-transparent"
        }`}
      >
        <div className="px-4 lg:container flex justify-between items-center">
          <div className="">
            <Link href="/" passHref>
              <div className="w-[50px] h-[50px]">
                <Image
                  src="/images/logo/shannonit.jpg"
                  alt="shannon it"
                  width={238}
                  height={212}
                />
              </div>
              {/* <p className="text-[22px] font-Raleway cursor-pointer">
                Shannon IT
              </p> */}
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

          <div className="hidden lg:flex gap-[50px] duration-300 uppercase text-sm font-Montserrat">
            {navLinks &&
              navLinks.map((navLink, i) => (
                <div key={i}>
                  {!navLink.subLinks ? (
                    <Link href={navLink.link} passHref>
                      <a
                        className={`header-link ${
                          pathname === navLink.link ? "text-custom-orange" : ""
                        }`}
                      >
                        {navLink.name}
                      </a>
                    </Link>
                  ) : (
                    <div
                      onMouseEnter={() => menu(i)}
                      onMouseLeave={() => menu(null)}
                    >
                      <div>
                        <p className="header-link">{navLink.name}</p>
                      </div>

                      {showSubMenu === i && (
                        <div className="absolute">
                          <div className="h-8 border-b-2 border-custom-gray"></div>
                          <div className="py-2 bg-custom-orange shadow-xl">
                            {navLink.subLinks.map((subLink, i) => (
                              <div
                                key={i}
                                className="text-white flex flex-col hover:text-custom-orange hover:bg-white cursor-pointer duration-300"
                              >
                                <Link href={subLink.link}>
                                  <a className="py-2 pl-4 pr-24">
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
            

            <div
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <div>
                <p className="header-link">Services</p>
              </div>

              {showServices ? (
                <div className="absolute">
                  <div className="h-8 border-b-2 border-custom-gray"></div>
                  <div className="text-white bg-custom-orange flex flex-col py-3 shadow-xl">
                    <Link href="/erp">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-14 cursor-pointer duration-300">
                        E.R.P
                      </a>
                    </Link>

                    <Link href="/school-management-system">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-14 cursor-pointer duration-300">
                        School Management System
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-14 cursor-pointer duration-300">
                        Desktop Development
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-14 cursor-pointer duration-300">
                        Web Development
                      </a>
                    </Link>

                    <Link href="#">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-14 cursor-pointer duration-300">
                        Mobile Development
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="hover:text-custom-orange hover:bg-white py-2 pl-4 pr-14 cursor-pointer duration-300">
                        Digital Marketing
                      </a>
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
              <div>
                <p className="header-link">pages</p>
              </div>

              {showPages ? (
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
            <Link href="/contact">
              <a className="header-link">contact</a>
            </Link> */}
          </div>
        </div>
      </div>
      {toggle ? <DropDown pathname={pathname} /> : ""}
    </div>
  );
}

export default Header;
