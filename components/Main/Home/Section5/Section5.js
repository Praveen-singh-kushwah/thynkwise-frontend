import Image from "next/image";
import style from "./Section5.module.css";

export default function Section5({ data }) {
  if (!data) return null;

  return (
    <div className={style["service-area"] + " " + style["style-three"]}>
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div className={"mb-1 pb-4 " + style["consen-section-title"]}>
              <h2>{data.title}</h2>
            </div>

            <div className="lines style-three pt-20 pb-10">
              <div className="line" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row gy-3 pt-30">

          {data.caseStudyCard?.map((item, key) => {
            const img =
              item?.image?.url
                ? process.env.CMS_URL + item.image.url
                : "/assets/images/thynkwise/go2mkt.png";

            return (
              <div className="col-lg-4 col-sm-6 pl-1" key={key}>
                <div
                  className={
                    "card rounded-4 border-0 h-100 " +
                    style["dreamit-service-box"]
                  }
                >
                  <div className={"card-body " + style["service-box-inner"]}>
                    <div
                      className={
                        style["em-service-icon1"] + " " + style.upper
                      }
                    >
                      <Image
                        width={128}
                        height={50}
                        src={img}
                        alt={item.title}
                        className="w-auto"
                      />
                    </div>

                    <div className={style["em-service-title"]}>
                      <h3 className="text-center">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
