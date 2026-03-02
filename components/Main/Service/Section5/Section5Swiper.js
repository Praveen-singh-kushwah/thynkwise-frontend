"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
                <div className="brand-single-box" key={key}>
                  <div className="brand-thumb">
                    <Image
                      width={141}
                      height={42}
                      src={item.image}
                      alt={key + 1}
                    />
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
