import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { navLinks } from "./navLinks";
import { AnimatePresence, motion } from "framer-motion";

function DropDown({ pathname }) {
  const [showServices, setShowServices] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState("");

  const toggle = (index) => {
    if (showSubMenu === index) {
      return setShowSubMenu(null);
    }
    setShowSubMenu(index);
  };

  return (
    <div className="px-3">
      <div
        className={`lg:hidden flex flex-col bg-custom-orange text-white text-lg cursor-pointer uppercase`}
      >
        {navLinks &&
          navLinks.map((navLink, i) => (
            <div key={i} className="border-b border-red-200 last:border-b-0">
              {!navLink.subLinks ? (
                <Link href={navLink.link} passHref>
                  <a>
                    <p
                      className={`px-6 py-2 ${
                        pathname === navLink.link
                          ? "text-custom-orange bg-red-200"
                          : ""
                      }`}
                      onClick={() => toggle(null)}
                    >
                      {navLink.name}
                    </p>
                  </a>
                </Link>
              ) : (
                <div
                  className="flex justify-between items-center px-6 py-2"
                  onClick={() => toggle(i)}
                >
                  <p>{navLink.name}</p>
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
              )}

              <AnimatePresence>
                {showSubMenu === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    {navLink.subLinks.map((subLink, i) => (
                      <Link key={i} href={subLink.link} passHref>
                        <a>
                          <p
                            className={`px-10 py-2 text-sm ${
                              pathname === subLink.link
                                ? "text-custom-orange bg-red-200"
                                : ""
                            }`}
                            onClick={() => toggle(null)}
                          >
                            {subLink.name}
                          </p>
                        </a>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        {/* <Link href="/">
          <a
            className={`px-6 py-2 border-y ${
              pathname === "/" ? "text-custom-orange bg-white" : ""
            }`}
          >
            home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`px-6 py-2 border-b ${
              pathname === "/about" ? "text-black" : ""
            }`}
          >
            about us
          </a>
        </Link>
        <Link href="/gallery">
          <a
            className={`px-6 py-2 border-b ${
              pathname === "/gallery" ? "text-black" : ""
            }`}
          >
            gallery
          </a>
        </Link>
        

        <div className="border-b cursor-text">
          <a
            className={`flex justify-between items-center px-6 py-2 ${
              pathname === "" ? "text-custom-orange" : ""
            }`}
          >
            <p>Services</p>
            <p
              onClick={() => setShowServices(!showServices)}
              className="cursor-pointer"
            >
              <FaAngleDown />
            </p>
          </a>
          {showServices ? (
            <div className="flex flex-col gap-2 px-10 py-2 text-sm cursor-pointer">
              <Link href="/erp">
                <a className={pathname === "/erp" ? "text-black" : ""}>E.R.P</a>
              </Link>
              <Link href="/school-management-system">
                <a
                  className={
                    pathname === "/school-management-system" ? "text-black" : ""
                  }
                >
                  School Management System
                </a>
              </Link>
              <Link href="#">
                <a className={pathname === "#" ? "text-black" : ""}>
                  Desktop development
                </a>
              </Link>
              <Link href="#">
                <a className={pathname === "#" ? "text-black" : ""}>
                  Web development
                </a>
              </Link>
              <Link href="#">
                <a className={pathname === "#" ? "text-black" : ""}>
                  Mobile development
                </a>
              </Link>
              <Link href="#">
                <a className={pathname === "#" ? "text-black" : ""}>
                  Digital marketing
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="border-b cursor-text">
          <a
            className={`flex justify-between items-center px-6 py-2 ${
              pathname === "" ? "text-custom-orange" : ""
            }`}
          >
            <p>pages</p>
            <p
              onClick={() => setShowPages(!showPages)}
              className="cursor-pointer"
            >
              <FaAngleDown />
            </p>
          </a>
          {showPages ? (
            <div className="flex flex-col gap-2 px-10 py-2 text-sm cursor-pointer">
              <Link href="/clients">
                <a className={pathname === "/clients" ? "text-black" : ""}>
                  clients
                </a>
              </Link>
              <Link href="/our-team">
                <a className={pathname === "/our-team" ? "text-black" : ""}>
                  our team
                </a>
              </Link>
              <Link href="/pricing">
                <a className={pathname === "/pricing" ? "text-black" : ""}>
                  pricing
                </a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <Link href="/contact">
          <a
            className={`px-6 py-2 ${
              pathname === "/contact" ? "text-black" : ""
            }`}
          >
            contact
          </a>
        </Link> */}
      </div>
    </div>
  );
}

export default DropDown;
