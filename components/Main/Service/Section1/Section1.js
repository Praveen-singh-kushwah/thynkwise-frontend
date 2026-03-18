import style from "./Section1.module.css";
import Image from "next/image";
import { getMediaUrl } from "@/lib/media";

function makeTablesResponsive(html) {
  if (!html) return html;

  const addMinWidth = html
    .replace(
      /<table([^>]*?)\sstyle="([^"]*)"/gi,
      (_m, attrs, styles) =>
        `<table${attrs} style="${styles};min-width:640px"`
    )
    .replace(
      /<table(?![^>]*\sstyle=)([^>]*)>/gi,
      (_m, attrs) => `<table${attrs} style="min-width:640px">`
    );

  return addMinWidth
    .replace(
      /<table/gi,
      `<div style="overflow-x:auto;"><table`
    )
    .replace(/<\/table>/gi, `</table></div>`);
}

export default async function Section1({ services }) {
  if (!services) return null;

  return (
    <div className={style["service-area"]}>
      <div className="container">
        <div className="row gy-md-5 gy-sm-3">
          {services.map((service, index) => {
            const iconUrl = getMediaUrl(service.icon?.url);

            return (
              <div key={index} className="col-lg-12 col-sm-6 p-0">
                <div className={style["dreamit-service-box"]}>
                  <div className={style["service-box-inner"]}>
                    {iconUrl && (
                      <div className={style["em-service-icon"]}>
                        <Image
                          src={iconUrl}
                          width={service.icon?.width || 40}
                          height={service.icon?.height || 40}
                          alt={service.title}
                        />
                      </div>
                    )}

                    <div className={style["em-service-title"]}>
                      <h2>{service.title}</h2>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: makeTablesResponsive(
                          service.content
                        ),
                      }}
                      className={
                        "text-justify " +
                        style["em-service-text"]
                      }
                    />
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
