"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Section5.module.css";

export default function Section5Swiper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        // }}
        autoHeight={true}
        grabCursor={true}
        speed={2000}
        modules={[Autoplay, Navigation]}
        // navigation
      >
        {data?.length > 0 ? (
          data?.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <div className={style["case-study-single-box"]}>
                  <div className={style["case-study-thumb"]}>
                    <Image
                      width={350}
                      height={433}
                      quality={90}
                      src={item.image}
                      alt={key + 1}
                      className="w-auto"
                    />
                    <div className="row">
                      <div className="col-md-10">
                        <div className={style["case-study-content"]}>
                          <div className={style["case-study-title"]}>
                            <h6> {item.title} </h6>
                            <h3>
                              {" "}
                              <Link href="#"> {item.description}</Link>
                            </h3>
                          </div>
                          <div className={style["case-button"]}>
                            <Link href="#">
                              <div className="d-flex gap-2">
                                Read More <FaPlus />{" "}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <div>not found</div>
        )}
      </Swiper>
    </>
  );
}
