import { getTestimonial } from "@/lib/SuccessStoriesLib";
import Image from "next/image";
import style from "./Testimonial.module.css";

async function NewTestimonial({ testimonials }) {
  const response = testimonials || [];

  if (!response || response.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <section className="py-5">
      <div className="container">
        {response.map((item, index) => (
          <div
            className="row justify-content-center mb-5"
            key={item.name ? item.name + index : index}
          >
            <div className="col-lg-12">
              <div className="row align-items-center">

                {/* IMAGE COLUMN */}
                <div
                  className={`col-md-4 mb-4 mb-md-0 text-center ${item.imagePosition === "right"
                      ? "order-md-2"
                      : "order-md-1"
                    }`}
                >
                  <Image
                    width={150}
                    height={150}
                    quality={90}
                    className="img-fluid rounded-circle"
                    src={
                      item.photo?.url
                        ? `${process.env.CMS_URL}${item.photo.url}`
                        : "/assets/images/default-user.png"
                    }
                    alt={item.name || "Default Image"}
                  />
                </div>

                {/* TEXT COLUMN */}
                <div
                  className={`col-md-8 ${item.imagePosition === "right"
                      ? "order-md-1"
                      : "order-md-2"
                    }`}
                >
                  <div className={"mb-4 " + style["icon-color"]}>
                    <svg
                      className="bi bi-quote"
                      fill="currentColor"
                      height="48"
                      viewBox="0 0 16 16"
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>
                  </div>

                  <p className="text-justify">
                    {item.message || "No content available"}
                  </p>

                  <div className="align-items-baseline d-flex gap-3">
                    <div className="d-flex flex-column">
                      {item.linkedinUrlUrl ? (
                        <a
                          href={item.linkedinUrlUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5 className="fw-bold text-black">
                            {item.name || "Anonymous"}
                          </h5>
                        </a>
                      ) : (
                        <h5 className="fw-bold text-black">
                          {item.name || "Anonymous"}
                        </h5>
                      )}

                      {item.designation && (
                        <div className="text-muted">
                          {item.designation}
                        </div>
                      )}
                    </div>

                    {/* LinkedIn icon */}
                    {item.linkedinUrl && (
                      <div className="mt-2">
                        <a
                          href={item.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={"text-primary " + style["icon-color"]}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewTestimonial;
