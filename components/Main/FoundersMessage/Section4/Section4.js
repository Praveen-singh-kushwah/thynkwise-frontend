import Image from "next/image";
import style from "./Section.module.css";

const CMS = process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

export default function Section4({ data }) {
  if (!data) return null;

  const imageUrl = data.image?.url
    ? CMS + data.image.url
    : null;

  return (
    <div className={style["ceo-cod-area"]}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            {imageUrl && (
              <div className="text-center">
                <Image
                  src={imageUrl}
                  width={482}
                  height={468}
                  quality={100}
                  alt={data.name}
                  className="mobile-image w-100 h-auto"
                  style={{ maxWidth: "300px", marginBottom: "30px" }}
                />
              </div>
            )}
          </div>

          <div className="col-lg-7 col-md-12">
            <div className={style["consen-section-title"]}>
              <div
                className={"text-justify " + style["about-text2"]}
                dangerouslySetInnerHTML={{
                  __html: data.message,
                }}
              />

              <p className={style["about-text2"]}>Warm regards,</p>
            </div>

            <div className={style["dreamit-ceo-title"]}>
              <h4>{data.name}</h4>
              <span>{data.designation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
