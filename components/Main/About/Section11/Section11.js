import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./Section11.module.css";

// Step 1: Define the data array
const linksData = [
  {
    href: "https://get.apollo.io/lpurkz7pdhxp",
    imgSrc: "/assets/images/resource/AppoloTransparent.png",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "Apollo Image",
  },
  {
    href: "https://www.ksofttechnologies.com/",
    imgSrc: "/assets/images/resource/KsoftTransparent.png",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "Ksoft Image",
  },
  {
    href: "#",
    imgSrc: "/assets/images/resource/TrellusTransparent.png",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "Trellus Image",
  },
];

export default function Section11() {
  return (
    <section className={style.section11}>
 <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <div className={" pb-10 " + style["consen-section-title "]}>
            <h2 > Our Partners</h2>
            <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
          </div>
        </div>   
        </div>
      <div className="row">
       
        {linksData.map((item, index) => (
          <div className="col-md-4 text-center" key={index}>
            <Link href={item.href} target="_blank">
              <Image
                src={item.imgSrc}
                width={item.imgWidth}
                height={item.imgHeight}
                alt={item.imgAlt}
                
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section>
   
  );
}
