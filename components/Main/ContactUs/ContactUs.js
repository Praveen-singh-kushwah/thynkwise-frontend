import Image from "next/image";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import style from "./ContactUs.module.css";
import ContactUsForm from "./ContactUsForm";
import LocationSection1 from "./LocationSection1";

export default function ContactUs({ data, locations }) {
  const icons = [RiNumber1, RiNumber2, RiNumber3, RiNumber4];

  return (
    <>
      <div className={"pt-40 " + style["contact-us"]}>
        <div className="container">

          <div className="row">
            <ContactUsForm data={data} />
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className={style["cda-content-area"]}>
                <div className={"pb-4 " + style["contact_title"]}>
                  <h2 className="ps-5 ">
                    {data?.stepsHeading || "What Happens Next ?"}
                  </h2>
                </div>
                {data?.steps
                  ?.sort((a, b) => a.order - b.order)
                  ?.map((step, index) => {
                    const Icon = icons[index] || RiNumber1;

                    return (
                      <div
                        key={step.id}
                        className={
                          "d-md-flex d-sm-block align-items-center gap-3 " +
                          style["cda-single-content"]
                        }
                      >
                        <div className={"px-3 " + style["cda-icon"]}>
                          <Icon />
                        </div>

                        <div className={style["cda-content-inner"]}>
                          <h4>{step.title}</h4>
                        </div>
                      </div>
                    );
                  })}

              </div>
              <div className="text-center pt-3">
                <Image
                  width={350}
                  height={350}
                  priority
                  quality={100}
                  src="/assets/images/logo/about3.png"
                  alt="thynkwise logo"
                  className="mobile-image"
                />
              </div>
            </div>
          </div>
          <div className="row">

            <LocationSection1 locations={locations} />
          </div>
        </div>
      </div>

      {/* <div className={style["map-section"]}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
