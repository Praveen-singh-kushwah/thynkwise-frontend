import style from "@/components/Main/Layout/Header/Header.module.css";
import Link from "next/link";
import MenuList, { Menu } from "./HeaderMenu";
import HeaderWrapper from "./HeaderWrapper";
import MobileNav from "../MobileNav/MobileNav";
import NavButton from "../MobileNav/NavButton";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-3 col-md-6 col-6">
              <div className={style.logo}>
                <Link href="/">
                  {/* <Image
                    className={"logo-light " + style["logo-light"]}
                    src={Logo}
                    alt="Site Logo"
                    width={260}
                    height={80}
                    priority
                    quality={90}
                  /> */}
                  <Image
                    src={process.env.SITE_LOGO}
                    width={260}
                    height={97}
                    quality={100}
                    className={"logo-light h-auto " + style["logo-light"]}
                    alt="main_iamge"
                    priority
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 d-none d-xl-block">
              <nav className={" d-none d-lg-block " + style["mainmenu-nav"]}>
                <MenuList>
                  <Menu href="/">Home</Menu>
                  <li className={style["has-droupdown"]}>
                    <Link href="#">About Us</Link>

                    <ul className={style.submenu} style={{ listStyle: "none" }}>
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
                  {/* <Menu href={process.env.SITE_URL + "/assessment-framework"}>Assessment</Menu> */}
                  <Menu href="/blog">Blog</Menu>
                  <Menu href="/success-stories">
                    Success Stories
                  </Menu>
                  {/* <li className={style["has-droupdown"]}>
                    <Link href="#"> Testimonials</Link>

                    <ul className={style.submenu} style={{ listStyle: "none" }}>
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
                  {/* <li className={style["has-droupdown"]}>
                    <Link href="#">Services</Link>

                    <ul className={style.submenu} style={{ listStyle: "none" }}>
                      <Menu href={process.env.SITE_URL + "/service"}>
                        Services
                      </Menu>
                      <Menu href={process.env.SITE_URL + "/investment"}>Pricing</Menu>

                      <Menu href={process.env.SITE_URL + "/service"}>
                        Services
                      </Menu>
                    </ul>
                  </li> */}
                  {/* <Menu href={process.env.SITE_URL + "/service"}>Services</Menu> */}
                  <Menu href="/investment">
                    Pricing
                  </Menu>
                  <Menu href={"https://www.thynkwiseacademy.com/"} target="_blank">
                    Academy
                  </Menu>
                  {/* <Menu href={process.env.SITE_URL + "#"}>Portfolio</Menu> */}
                  <Menu href="/contact-us">
                    Contact Us
                  </Menu>
                </MenuList>
              </nav>
            </div>
            <div className="col-lg-8 col-xl-2 col-md-6 col-6">
              <div
                className={
                  " d-flex justify-content-end " + style["header-right"]
                }
              >
                <div
                  className={"d-none d-xl-block " + style["header-menu-bar"]}
                >
                  <div className={style["header-button"]}>
                    <Link href="/contact-us">
                      Let's get started
                    </Link>
                  </div>
                </div>
                <div className="mobile-menu-bar ml--15 ml_sm--5 d-block d-xl-none">
                  <div className="hamberger">
                    <button
                      className={
                        " hamberger-button header-menu " +
                        style["white-box-icon"]
                      }
                    >
                      <NavButton />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      <MobileNav />
    </>
  );
}
