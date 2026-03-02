import Image from "next/image";
import { getSuccessStoriesPage } from "@/lib/SuccessStoriesLib";
import style from "./Testimonial.module.css";
import TestimonialSwiper from "./TestimonialSwiper";
export default async function Testimonial() {
  // const response = await getTestimonial({ type });
  const response = await getSuccessStoriesPage();
  return (
    <>
      {response && (
        <section className={style["testimonial-section-5"]}>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 col-md-12">
                <div className={"testi-content-5"}>
                  <div className={style["section-heading"]}>
                    <h2
                      className={"mb-30 " + style["section-title"]}
                      data-text-animation
                      data-split="word"
                      data-duration={1}
                    >
                      What our clients say <br /> about{" "}
                      {/* {type == "founder" ? "Founder" : "thynkWISE"} */}us
                      ?
                    </h2>
                  </div>
                  <TestimonialSwiper items={response.testimonials} />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className={" reveal " + style["testi-img-5"]}>
                  <Image
                    width={570}
                    height={510}
                    quality={90}
                    src="/assets/images/thynkwise/img7.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
