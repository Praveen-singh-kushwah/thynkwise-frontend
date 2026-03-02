import style from "./Section12.module.css";
import Section12Swiper from "./Section12Swiper";

export default function Section12({ data }) {
  if (!data) return null;

  const items =
    data.approachItem?.map((item, index) => ({
      id: item.id || index,
      title: item.title,
      description: item.description,
    })) || [];

  return (
    <>
      <div className={style["service-area"] + " " + style["style-three"]}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6">
              <div
                className={
                  "text-center pb-50 " +
                  style["consen-section-title"] +
                  " " +
                  style.upper
                }
              >
                <h5>Our Approach</h5>

                {/* CMS Title */}
                <h2>{data.mainTitle}</h2>
              </div>

              <div className="lines style-three pt-20 pb-10">
                <div className="line" />
              </div>
            </div>
          </div>

          <div className="row pt-30">
            <div className="col-md-12">
              <Section12Swiper data={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
