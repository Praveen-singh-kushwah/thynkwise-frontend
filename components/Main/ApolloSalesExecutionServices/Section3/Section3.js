import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Section3({ tools, city }) {
  if (!tools || !tools.tool_item) return null;

  const CMS =
    process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

  const processedList = tools.tool_item.map((item) => ({
    id: item.id,
    title: item.title.replace(/\[City\]/g, city),
    image: item.image ? CMS + item.image.url : null,
  }));

  const itemsWithImages = processedList.filter(
    (item) => item.image
  );

  const itemsWithoutImages = processedList.filter(
    (item) => !item.image
  );

  return (
    <div className="why-choose-us-area">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-delay="0.5s"
          >
            {/* LEFT ALIGNED HEADING (same as original) */}
            <div className="consen-section-title">
              <h2>{tools.heading}</h2>
            </div>

            {/* EXACT SAME GRID STRUCTURE */}
            {itemsWithImages.length > 0 && (
              <div className="row pt-4">
                {itemsWithImages.map((item) => (
                  <div
                    className="col-md-4 mb-4"
                    key={item.id}
                  >
                    <div className="d-flex align-items-center flex-column gap-4">
                      <Image
                        width={120}
                        height={120}
                        src={item.image}
                        alt={item.title}
                        className="me-2 object-fit-contain w-100"
                      />
                      <span className="fw-bold fs-5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EXACT SAME VERTICAL LIST */}
            {itemsWithoutImages.length > 0 && (
              <div className="dreamit-icon-list pt-4">
                <ul className="list-unstyled">
                  {itemsWithoutImages.map((item) => (
                    <li
                      key={item.id}
                      className="icon-title-container mb-3"
                    >
                      <div className="icon-title d-flex align-items-start mb-1">
                        <FaArrowRight className="me-2 mt-1" />
                        <span className="fw-bold">
                          {item.title}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}