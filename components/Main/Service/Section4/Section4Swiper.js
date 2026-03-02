"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import style from "./Section4.module.css";

export default function Section4Swiper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
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
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        grabCursor={true}
        speed={2000}
        modules={[Autoplay, Navigation, Pagination]}
        // navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span className="${className} ${style.customBullet}"></span>`;
          },
        }}
      >
        {data?.length > 0 ? (
          data?.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <div className={style["testimonial-single-box"]} key={key}>
                  <div className={style["testimonial-content1"]}>
                    <div className={style["single-quote-icon"]}>
                      <div className={style["quote-thumb"]}>
                        <img src={item.image_thumb} alt={key + 1} />
                      </div>
                      <div className={style["quote-title"]}>
                        <h4>{item.title}</h4>
                        <p>{item.sub_title}</p>
                      </div>
                    </div>
                    <div className={style["em-testimonial-text"]}>
                      <p>{item.description}</p>
                    </div>
                    <div className={style["em-testi-start-icon"]}>
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
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
