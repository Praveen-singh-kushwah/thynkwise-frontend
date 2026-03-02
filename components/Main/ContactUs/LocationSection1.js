import SlideUp from "@/components/Common/Animations/SlideUp";
import Image from "next/image";
import style from "./LocationSection1.module.css";
import { counters } from "sharp";

export default function LocationSection1({ locations = [] }) {
  
  const data = locations.map((item) => ({
    id: item.id,
    image: item.image?.url
      ? process.env.CMS_URL + item.image.url
      : null,
    title: item.title,
    country: item.title?.toLowerCase().includes("india")
      ? "india"
      : "other",
    description: `
    ${item.address?.replace(/\n/g, "<br/>") || ""}
    <br/>
    <a href="tel:${item.phone}">${item.phone}</a>
  `,
  }));


  return (
    <>
      <div className="col-lg-12 pt-40">
        <div className={" text-center " + style["section-title"]}>
          <h3 className={style.title}>Our Locations</h3>
        </div>
      </div>
      <div className="col-md-12 p-md-0">
        <div className="row g-5 py-5">
          <div className="col-lg-12">
            <div className="contact-info">
              <div className="row g-4">
                <div className="col-lg-8 col-md-6 col-sm-12 mx-auto">
                  <div className={"card h-100 website border-0 rounded-3"}>
                    <div className={"card-body p-0 " + style.inner}>
                      <div className="row ">
                        {data
                          .filter((item) => item.country == "india")
                          .map((item, key) => (
                            <div
                              className="col-lg-6 col-md-6 col-sm-12 mx-auto"
                              key={key}
                            >
                              <div
                                className={
                                  "card h-100 website border-0 rounded-3 shadow-none " +
                                  style["contact-address-card-1"]
                                }
                              >
                                <div className={"card-body " + style.inner}>
                                  {item.image && (
                                    <Image
                                      width={250}
                                      height={250}
                                      src={item.image}
                                      alt={item.title}
                                      className="h-auto object-fit-contain rounded-3 w-auto"
                                    />
                                  )}

                                  <div className={style.content}>
                                    <h6 className={style.title}>
                                      {item.title}
                                    </h6>
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: item.description,
                                      }}
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                {data
                  .filter((item) => item.country != "india")
                  .map((item) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mx-auto"
                      key={item.id}
                    >
                      <div
                        className={
                          "card h-100 website border-0 rounded-3 " +
                          style["contact-address-card-1"]
                        }
                      >
                        <div className={"card-body " + style.inner}>
                          {item.image && (
                            <Image
                              width={250}
                              height={250}
                              src={item.image}
                              alt={item.title}
                              className="h-auto object-fit-contain rounded-3 w-auto"
                            />
                          )}

                          <div className={style.content}>
                            <h6 className={style.title}>{item.title}</h6>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
