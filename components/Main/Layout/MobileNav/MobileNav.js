"use client";
import { useNavControl } from "@/context/NavProvider";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CloseButton from "./CloseButton";
import style from "./Mobile.module.css";
import MenuList, { Menu } from "./MobileNavMenu";

export default function MobileNav() {
  const { isNavOpen, toggleNav } = useNavControl();
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu by id

  const toggleSubMenu = (menuId) => {
    setOpenSubMenu((prev) => (prev === menuId ? null : menuId));
  };

  const framerSidebar = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };
  const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {isNavOpen && (
          <>
            <motion.div
              {...framerSidebar}
              className={[style["active"], style["popup-mobile-menu"]].join(
                " "
              )}
            >
              <div className={style.inner}>
                <div className={style["header-top"]}>
                  <div className={style.logo}>
                    <Link href="/">
                      <Image
                        width={65}
                        height={65}
                        priority
                        src={process.env.SITE_LOGO}
                        alt="Site Logo"
                        className={style.logo}
                        quality={100}
                      />
                    </Link>
                  </div>
                  <CloseButton />
                </div>

                <MenuList>
                  <Menu href="/">Home</Menu>
                  <li
                    className={`${style["has-droupdown"]} ${openSubMenu === "about" ? style["active"] : ""
                      }`}
                  >
                    <Link
                      href="#"
                      className="align-items-center d-flex justify-content-between"
                      onClick={() => toggleSubMenu("about")}
                    >
                      About us{" "}
                      {openSubMenu === "about" ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </Link>
                    <ul
                      className={`${style.submenu}`}
                      style={{
                        display: openSubMenu === "about" ? "block" : "none",
                      }}
                    >
                      <Menu href="/about-us">
                        About Us
                      </Menu>
                      <Menu href="/team">Team</Menu>
                      <Menu href="/partners">
                        Partners
                      </Menu>
                      {/* <Menu href={process.env.SITE_URL + "/service"}>
                        Services
                      </Menu> */}
                    </ul>
                  </li>
                  {/* <Menu href={process.env.SITE_URL + "/service"}>Services</Menu> */}
                  <Menu href="/blog">Blogs</Menu>
                  <Menu href="/success-stories">
                    Success Stories
                  </Menu>

                  {/* <li
                    className={`${style["has-droupdown"]} ${
                      openSubMenu === "testimonials" ? style["active"] : ""
                    }`}
                  >
                    <Link
                      href="#"
                      className="align-items-center d-flex justify-content-between"
                      onClick={() => toggleSubMenu("testimonials")}
                    >
                      Testimonials{" "}
                      {openSubMenu === "testimonials" ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </Link>
                    <ul
                      className={`${style.submenu}`}
                      style={{
                        display:
                          openSubMenu === "testimonials" ? "block" : "none",
                      }}
                    >
                      <Menu
                        href={process.env.SITE_URL + "/founder-testimonials"}
                      >
                        Founder
                      </Menu>
                      <Menu href={process.env.SITE_URL + "/testimonials"}>
                        Company
                      </Menu>
                    </ul>
                  </li> */}
                  {/* <li
                    className={`${style["has-droupdown"]} ${openSubMenu === "services" ? style["active"] : ""}`}
                  >
                    <Link
                      href="#"
                      className="align-items-center d-flex justify-content-between"
                      onClick={() => toggleSubMenu("services")}
                    >
                      Services{" "}
                      {openSubMenu === "services" ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </Link>
                    <ul
                      className={`${style.submenu}`}
                      style={{
                        display: openSubMenu === "services" ? "block" : "none",
                      }}
                    >
                      <Menu href={process.env.SITE_URL + "/services"}>Services</Menu>
                      <Menu href={process.env.SITE_URL + "/investment"}>Pricing</Menu>
                    </ul>
                  </li> */}
                  {/* <Menu href={process.env.SITE_URL + "/service"}>Services</Menu> */}

                  <Menu href="/investment">
                    Pricing
                  </Menu>
                  <Menu href={"https://www.thynkwiseacademy.com/"} target="_blank">
                    Academy
                  </Menu>
                  <Menu href="/contact-us">
                    Contact Us
                  </Menu>
                </MenuList>
              </div>
            </motion.div>
            <motion.div
              {...framerSidebarBackground}
              className=" position-fixed z-1 vh-100 vw-100 bg-black top-0"
              onClick={() => toggleNav()}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
