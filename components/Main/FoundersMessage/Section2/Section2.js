import style from "./Section6.module.css";

export default function Section2({ data }) {
  if (!data) return null;

  return (
    <div className={style["process-area"]}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className={"row " + style["process-bg"]}>
              <div className="col-sm-12 pl-10 pr-10">
                <div className={style["process-single-box"]}>
                  <div className={style["process-title"]}>
                    <h3>{data.title}</h3>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
