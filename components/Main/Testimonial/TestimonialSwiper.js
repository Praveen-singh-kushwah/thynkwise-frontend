"use client";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Testimonial.module.css";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function TestimonialSwiper({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={style["testi-carousel-wrap"]}>
      <div className="align-items-baseline d-flex flex-wrap">
        <div className={style["testi-thumb-wrap"]}>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            watchSlidesProgress={true}
            onSlideChange={handleSlideChange}
            modules={[Navigation, Thumbs]}
            className={style["thumb-carousel"]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {items?.length > 0 &&
              items?.map((item, key) => {
                return (
                  <SwiperSlide key={key}>
                    <div className={style["swiper-slide"]}>
                      <div
                        className={`${style["testi-thumb"]} ${
                          activeIndex === key ? style["active-thumb"] : ""
                        }`}
                      >
                        <Image
                          width={90}
                          height={90}
                          quality={90}
                          className="rounded-circle"
                          src={
                            item.image || "/assets/images/testimonial/60111.jpg"
                          }
                          alt={item.name || "Default Image"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <div className={style["swiper-navigation"]}>
          <div className={style["swiper-button-prev"]}>
            <FiArrowLeft />
          </div>
          <div className={style["swiper-button-next"]}>
            <FiArrowRight />
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        autoHeight={true}
        grabCursor={true}
        speed={2000}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: `.${style["swiper-button-next"]}`,
          prevEl: `.${style["swiper-button-prev"]}`,
        }}
        modules={[Autoplay, Navigation, Pagination, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {items?.length > 0 ? (
          items?.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <div className={`swiper ${style["content-carousel"]}`}>
                  <div className="swiper-wrapper">
                    <div className={style["swiper-slide"]}>
                      <div className={style["testi-content"]}>
                        <p>{item.content}</p>
                        <div className={style["author-info"]}>
                          <div className="align-items-center d-flex gap-3">
                            <h4 className={style.name}>{item.name}</h4>
                            <div className={style["team-social-media"]}>
                              {item.linkedin && (
                                <Link
                                  href={item.linkedin}
                                  // href={"#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedinIn />
                                </Link>
                              )}
                            </div>
                          </div>
                          {item.designation && <span>{item.designation}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <div>currently don’t have any testimonials to display.</div>
        )}
      </Swiper>
    </div>
  );
}
