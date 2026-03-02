import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import style from "./Section1.module.css";

export default function Section1({ data }) {
  if (!data) return null;

  console.log("Section1 data:", data); // Debug log to check the data structure

  const heroImage =
    data?.image?.url
      ? process.env.CMS_URL + data.image.url
      : "/assets/images/thynkwise/img1.webp";


  return (
    <>
      <Head>
        <link
          rel="preload"
          href={heroImage}
          as="image"
          fetchPriority="high"
        />
      </Head>

      <div className={`d-flex align-items-center ${style["slider-area"]}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* TEXT SIDE */}
            <div className="col-lg-7 col-md-6">
              <div className={style["slider-content"]}>

                <h3>
                  Partner with{" "}
                  <span style={{ color: "rgb(57, 89, 167)" }}>th</span>
                  <span>y</span>
                  <span style={{ color: "rgb(53, 85, 166)" }}>nk</span>
                  <span>WISE</span>
                </h3>
                
                {/* Quote from CMS */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.quote || "",
                  }}
                />

                {/* Description */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.description || "",
                  }}
                />
              </div>

              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>

              <div className={style["banner-buttons"]}>
                <div className={style["slider-button"]}>
                  <Link href="/contact-us">
                    <div className="d-flex">
                      Work Together <FaPlus size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="col-lg-5 col-md-6">
              <div className={style["slider-thumb"]}>
                <Image
                  src={heroImage}
                  width={451}
                  height={459}
                  quality={90}
                  className="h-auto img-fluid"
                  alt="Hero Image"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
