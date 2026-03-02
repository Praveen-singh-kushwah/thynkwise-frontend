import Image from "next/image";
import style from "./Section4.module.css";

export default function Section4({ data }) {
  return (
    <>
      <div className={style["service-area"] + " " + style["style-three"]}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-7 col-md-6">
              <div className={" mb-1 pb-4 " + style["consen-section-title"]}>
                <h2>
                  Our Process
                </h2>
              </div>
              <div className="lines style-three pt-20 pb-10">
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="row gy-3 pt-30">
            {data.map((item, key) => (
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
                        " " + style["em-service-icon1"] + " " + style.upper
                      }
                    >
                      <Image
                        width={128}
                        height={50}
                        src={item.image}
                        alt={item.description}
                        className="w-auto"
                      />
                    </div>
                    <div className={style["em-service-title"]}>
                      <h3 className="text-center"> {item.description} </h3>
                    </div>
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
