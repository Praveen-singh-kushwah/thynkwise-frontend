// TestimonialSwiper.jsx / .tsx

"use client";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Testimonial.module.css";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:1337";

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
            modules={[Navigation, Thumbs]}
            className={style["thumb-carousel"]}
            breakpoints={{
              0:    { slidesPerView: 1 },
              576:  { slidesPerView: 1 },
              768:  { slidesPerView: 1 },
              992:  { slidesPerView: 3 },
            }}
          >
            {items?.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <div className={style["swiper-slide"]}>
                  <div
                    className={`${style["testi-thumb"]} ${
                      activeIndex === idx ? style["active-thumb"] : ""
                    }`}
                  >
                    <Image
                      width={90}
                      height={90}
                      quality={85}
                      className="rounded-circle"
                      src={
                        item.photo?.url
                          ? `${CMS_URL}${item.photo.url}`
                          : "/assets/images/testimonial/60111.jpg"
                      }
                      alt={item.name || "Client photo"}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
        autoHeight={true}
        grabCursor={true}
        speed={1200}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: `.${style["swiper-button-next"]}`,
          prevEl: `.${style["swiper-button-prev"]}`,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
      >
        {items?.map((item, idx) => (
          <SwiperSlide key={item.id || idx}>
            <div className={`swiper ${style["content-carousel"]}`}>
              <div className="swiper-wrapper">
                <div className={style["swiper-slide"]}>
                  <div className={style["testi-content"]}>
                    <p>{item.message || "—"}</p>

                    <div className={style["author-info"]}>
                      <div className="align-items-center d-flex gap-3">
                        <h4 className={style.name}>{item.name}</h4>
                        <div className={style["team-social-media"]}>
                          {item.linkedinUrl && (
                            <Link
                              href={item.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedinIn />
                            </Link>
                          )}
                        </div>
                      </div>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}