import Image from "next/image";
import style from "./section2.module.css";

export default function Section2({ services = [], city }) {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">
        What We Offer in {city}
      </h2>

      <div className="row gy-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          >
            <div
              className={
                "h-100 " + style["service-box-items-3"] ||
                "service-box-items-3"
              }
            >

              {/* IMAGE */}
              {service.image?.src && (
                <div className={style["service-img"]}>
                  <Image
                    src={service.image.src}
                    alt={service.image.alt || service.title}
                    width={280}
                    height={180}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "250px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className={style["service-content"]}>
                <h3 className="text-center">
                  {service.title}
                </h3>

                <p className="text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}