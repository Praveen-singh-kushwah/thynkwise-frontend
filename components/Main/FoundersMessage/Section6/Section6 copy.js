import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import style from "./Section6.module.css";

export default function Section6() {
  const data = [
    {
      id: 1,
      image: "/assets/images/about/vipin-sharma.png",
      title: "Vipin Sharma",
      sub_title: "Founder, Chief <span style='color:red';>Execution</span> Officer",
      linked_href:
        "https://www.linkedin.com/in/vipin-sharma-b567b8b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      image: "/assets/images/about/modi.png",
      title: "Bharat Modi",
      sub_title: "Co-Founder",
      linked_href:
        "https://www.linkedin.com/in/bharat-modi-98a7b915?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 3,
      image: "/assets/images/about/prateek.jpg",
      title: "Prateek Pashine",
      sub_title: "Mentor",
      linked_href: "https://www.linkedin.com/in/prateek-pashine-2926241/",
    },
    {
      id: 4,
      image: "/assets/images/about/rashid.png",
      title: "Rashid Ahmed",
      sub_title: "Advisor - Digital",
      linked_href: "https://www.linkedin.com/in/kaputnik77/",
    },
    {
      id: 5,
      image: "/assets/images/about/Hitesh1.png",
      title: "Hitesh Alwani",
      sub_title: "Director - Sales Operations",
      linked_href: "https://www.linkedin.com/in/hiteshalwani100380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 6,
      image: "/assets/images/about/Azra.png",
      title: "Azra Ashraf",
      sub_title: "Senior Manager - Operations",
      linked_href: "https://www.linkedin.com/in/azra-akhoon-6134801a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const teamMembers = data.filter((item) => item.id !== 3 && item.id !== 4);
  const mentors = data.filter((item) => item.id === 3);
  const advisor = data.filter((item) => item.id === 4);

  return (
    <>
      <section className={style["team-area-about-inner"]}>
        <div className="container">
          {mentors.length > 0 && (
            <div className={"mentor-area py-4 " + style["about-page-mentor"]}>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className={style["consen-section-title"]}>
                    <h2 className="text-center">Mentor</h2>
                    <div className="lines style-three pt-20 pb-10">
                      <div className="line" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center py-5">
                {mentors.map((item) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 mb-30 "
                    key={item.id}
                  >
                    <div
                      className={
                        style["team-inner"] +
                        " " +
                        style["team-inner-about-page"]
                      }
                    >
                      <Image
                        width={384}
                        height={384}
                        priority
                        quality={90}
                        src={item.image}
                        alt={item.title}
                      />
                      <div className={style["team-social-media"]}>
                        <button
                          type="button"
                          className={style["team-social-media-plus"]}
                        >
                          <span>
                            <Link href={item.linked_href} target="_blank">
                              <FaLinkedin />
                            </Link>
                          </span>
                        </button>
                        {/* <ul>
                          <li>
                            <Link href={item.linked_href} target="_blank">
                              <FaLinkedin />
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                      <div className={style["team-name-position"]}>
                        <h6 className={style["font-size-1-22"]}>
                          <Link href={item.linked_href} target="_blank">
                            {item.title}
                          </Link>
                        </h6>
                        <span className={style["font-size-1-16"]}>
                          {item.sub_title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {advisor.length > 0 && (
            <div className={"mentor-area py-4 " + style["about-page-mentor"]}>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className={style["consen-section-title"]}>
                    <h2 className="text-center">Advisor</h2>
                    <div className="lines style-three pt-20 pb-10">
                      <div className="line" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                {advisor.map((item) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 mb-30 "
                    key={item.id}
                  >
                    <div
                      className={
                        style["team-inner"] +
                        " " +
                        style["team-inner-about-page"]
                      }
                    >
                      <Image
                        width={356}
                        height={445}
                        priority
                        quality={90}
                        src={item.image}
                        alt={item.title}
                      />
                      <div className={style["team-social-media"]}>
                        <button
                          type="button"
                          className={style["team-social-media-plus"]}
                        >
                          <span>
                            <Link href={item.linked_href} target="_blank">
                              <FaLinkedin />
                            </Link>
                          </span>
                        </button>
                        {/* <ul>
                          <li>
                            <Link href={item.linked_href} target="_blank">
                              <FaLinkedin />
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                      <div className={style["team-name-position"]}>
                        <h6 className={style["font-size-1-22"]}>
                          <Link href={item.linked_href} target="_blank">
                            {item.title}
                          </Link>
                        </h6>
                        <span className={style["font-size-1-16"]}>
                          {item.sub_title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className={style["consen-section-title"]}>
                <h2 className="text-center">Team Members</h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
              </div>
            </div>
          </div>

          <div className={"team-area " + style["about-page-team"]}>
            <div className="row justify-content-center">
              {teamMembers.length > 0 ? (
                teamMembers.map((item) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 mb-30"
                    key={item.id}
                  >
                    <div
                      className={
                        style["team-inner"] +
                        " " +
                        style["team-inner-about-page"]
                      }
                    >
                      <Image
                        width={356}
                        height={524}
                        priority
                        quality={100}
                        src={item.image}
                        alt={item.title}
                        className="w-100 h-auto"
                      />
                      <div className={style["team-social-media"]}>
                        <button
                          type="button"
                          className={style["team-social-media-plus"]}
                        >
                          <span>
                            <Link href={item.linked_href} target="_blank">
                              <FaLinkedin />
                            </Link>
                          </span>
                        </button>
                        {/* <ul>
                          <li>
                            <Link href={item.linked_href} target="_blank">
                              <FaLinkedin />
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                      <div className={style["team-name-position"]}>
                        <h6 className={style["font-size-1-22"]}>
                          <Link href={item.linked_href} target="_blank">
                            {item.title}
                          </Link>
                        </h6>
                        <span
                          className={style["font-size-1-16"]}
                          dangerouslySetInnerHTML={{ __html: item.sub_title }}
                        ></span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No data found</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
