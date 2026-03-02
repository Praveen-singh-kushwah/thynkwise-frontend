import style from "./Section2.module.css";

export default function Section3({ text }) {
  if (!text) return null;

  return (
    <div className={style["service-area"]}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 pl-0">
            <div
              className={
                "text-center " +
                style["consen-section-title"] +
                " " +
                style["mobile-center"]
              }
            >
              <div
                className="fs-5"
                style={{ lineHeight: "1.6" }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
