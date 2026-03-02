import style from "./Section1.module.css";

export default function Section7({ data }) {
  if (!data) return null;

  const services =
    data.valueItem?.map((item, index) => ({
      id: item.id || index,
      title: item.title,
      description: item.description,
      imgSrc: item.icon?.url
        ? process.env.CMS_URL + item.icon.url
        : null,
    })) || [];

  return (
    <>
      <div className={style["service-area"]}>
        <div className="container">
          <div className="row align-items-center mb-30">
            <div className="col-lg-4 col-md-4 pl-0">
              <div
                className={
                  style["consen-section-title"] +
                  " " +
                  style["mobile-center"]
                }
              >
                <h2>{data.title}</h2>

                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-around">
            {services.map((service) => (
              <div key={service.id} className="col-lg-12 col-sm-12 p-0">
                <div className={style["service-details-box"]}>
                  <div className={style["service-details-icon"]}>
                    {service.imgSrc && (
                      <img src={service.imgSrc} alt={service.title} />
                    )}
                  </div>

                  <div className={style["service-details-title"]}>
                    <h4>{service.title}</h4>
                  </div>

                  <div className={style["services-detials-desc"]}>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
