"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import style from "./Section12.module.css";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Section12Swiper({ data }) {
  const swiperRef = useRef(null);

  return (
    <div className={style.swiperContainer}>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        loop={false}
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
        autoHeight={true}
        grabCursor={true}
        speed={1500}
        modules={[Autoplay, Navigation, Controller]}
        navigation={{
          nextEl: `.${style.customSwiperButtonNext}`,
          prevEl: `.${style.customSwiperButtonPrev}`,
        }}
      >
        {data?.length > 0 ? (
          data.map((item, key) => (
            <SwiperSlide key={key}>
              <div
                className={
                  "card rounded-4 border-0 h-100 " +
                  style["dreamit-service-box"]
                }
              >
                <div className={"card-body " + style["service-box-inner"]}>
                  <div
                    className={style["em-service-title"] + " " + style.upper}
                  >
                    <h4 className="fw-bold">{item.title}</h4>
                  </div>
                  <div className={style["em-service-title"]}>
                    <h3 className="text-justify">{item.description}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div>not found</div>
        )}
      </Swiper>

      <div
        className={`${style.customSwiperButton} ${style.customSwiperButtonPrev} shadow`}
      >
        <MdKeyboardArrowLeft size={40} />
      </div>
      <div
        className={`${style.customSwiperButton} ${style.customSwiperButtonNext} shadow`}
      >
        <MdKeyboardArrowRight size={40} />
      </div>
    </div>
  );
}
