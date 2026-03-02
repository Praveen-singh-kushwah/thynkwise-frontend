"use client";
import PlanPopup from "@/components/Common/PlanPopup";
import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollUp from "../ScrollTop/ScrollTop";
import style from "./Footer.module.css";
import Newsletter from "./NewsLetter/Newsletter";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={style["footer-middle"]}>
        <div className="container">
          <Newsletter />
          <div className={style["footer-bg"]}>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widgets-company-info mb-4 mb-lg-0">
                  <div className={" pr-2 " + style["company-info-desc"]}>
                    <h4 className={style["widget-title"]}> About Us </h4>
                    <p className="text-justify">
                      We bridge the gap between investment & Value by
                      operationalizing platforms from a sales perspective
                      thereby leveraging the fullest potential
                    </p>
                  </div>
                  <div className={"d-flex " + style["follow-company-icon"]}>
                    {/* <div className={style['icon']}>
                      <Link className="social-icon-color" href="#">
                        {" "}
                        <FaFacebookF />{" "}
                      </Link>
                    </div>
                    <div className={style["icon"]}>
                      <Link className={style["social-icon-color2"]} href="#">
                        {" "}
                        <FaInstagram />{" "}
                      </Link>
                    </div> */}
                    <div className={style["icon"]}>
                      <Link
                        className={style["social-icon-color1"]}
                        href="https://x.com/trackbiz"
                        target="_blank"
                      >
                        {" "}
                        <FaXTwitter />{" "}
                      </Link>
                    </div>
                    <div className={style["icon"]}>
                      <a
                        className={style["social-icon-color3"]}
                        href="https://www.youtube.com/@thynkwize"
                        target="_blank"
                      >
                        {" "}
                        <FaYoutube />{" "}
                      </a>
                    </div>
                    <div className={style["icon"]}>
                      <Link
                        className={style["social-icon-color1"]}
                        href="https://www.linkedin.com/company/thynkwise-advisors"
                        target="_blank"
                      >
                        {" "}
                        <FaLinkedinIn />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className={"widget widget-nav-menu " + style["widget"]}>
                  <h4 className={style["widget-title"]}>Menu</h4>
                  <div className={style["menu-quick-link-content"]}>
                    <ul className={"p-0 " + style["footer-menu"]}>
                      <li>
                        <Link href="/"> Home </Link>
                      </li>
                      <li>
                        <Link href="/about-us">
                          {" "}
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link href="/service">
                          {" "}
                          Services{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">
                          {" "}
                          Privacy Policy{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className={"widget widget-nav-menu " + style["widget"]}>
                  <h4 className={style["widget-title"]}> Services </h4>
                  <div className={style["menu-quick-link-content"]}>
                    <ul className={"p-0 " + style["footer-menu"]}>
                      <li>
                        <Link href="/service">
                          {" "}
                          Sales Process
                        </Link>
                      </li>
                      <li>
                        <Link href="/service">
                          {" "}
                          Sales Platforms{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/service">
                          {" "}
                          Mentorship Program
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className={"widget widget-nav-menu " + style["widget"]}>
                  <h4 className={style["widget-title"]}>
                    {" "}
                    Contact Information{" "}
                  </h4>
                  <div className={style["menu-quick-link-content"]}>
                    <ul className={"p-0 " + style["footer-menu"]}>
                      {/* <li className="d-flex flex-column gap-3">
                        <span className="text-white fs-5">
                          Registered Address
                        </span>
                        <a href="#">
                          <div className="d-flex gap-2">
                            <div>
                              <FaLocationDot />
                            </div>
                            <div>
                              A 406, Star Gaze, Dhanori Lohegaon Main Road, Pune
                              411015
                            </div>
                          </div>
                        </a>
                      </li> */}
                      {/* <li className="d-flex flex-column gap-3">
                        <span className="text-white fs-5">
                          Ahmedabad Office
                        </span>
                        <a href="#">
                          {" "}
                          209, Dev Prime, Behind Divya Bhasker Press, Corporate
                          Road, Makarba, Ahmedabad 380051{" "}
                        </a>
                      </li> */}
                      <li className="d-flex flex-column gap-3">
                        {/* <span className="text-white fs-5">
                        Contact Number
                        </span> */}

                        <a href="tel:+919763008800">
                          <div className="d-flex gap-2">
                            <div>
                              <FaPhoneAlt />
                            </div>
                            <div>+91 9763 0088 00</div>
                          </div>
                        </a>
                      </li>
                      <li className="d-flex flex-column gap-3">
                        {/* <span className="text-white fs-5">
                          Email
                        </span> */}
                        <a href="mailto:partner@thynkwise.co.in">
                          <div className="d-flex gap-2">
                            <div>
                              <FaEnvelope />
                            </div>
                            <div>partner@thynkwise.co.in</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-sm-6">
                <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                  <div className={style["single-widget-item"]}>
                    <h4 className={style["widget-title"]}>Contact Us</h4>
                    <ul className={"p-0 " + style["footer-menu"]}>
                      <li>
                        <span>Registered Address</span>
                        <a href="#">
                          {" "}
                          A 406, Star Gaze, Dhanori Lohegaon
                          Main Road, Pune 411015{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#"> Consumer Market </a>
                      </li>
                      <li>
                        <a href="#"> Data Analysis </a>
                      </li>
                      <li>
                        <a href="#"> Corporate Finance </a>
                      </li>
                      <li>
                        <a href="#"> Market Research </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {pathname !== "/contact-us" && pathname !== "/personality-type" && <PlanPopup />}

          <ScrollUp scrollDistance={200} />
        </div>
        <div
          className={
            " d-flex align-items-center " + style["footer-bottom-area"]
          }
        >
          <div className="container">
            <div className={style["footer-bottom-content"]}>
              <div className={style["footer-bottom-content-copy"]}>
                <p className="text-center">
                  Copyright <FaRegCopyright /> {currentYear}{" "}
                  <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span ><span style={{color:"#f6881f"}}>WISE</span> | All Rights Reserved.
                  {/*  Design By{" "}
                  <Link href={"https://www.ksofttechnologies.com/"}>
                    Ksoft Technologies
                  </Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
