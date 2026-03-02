import React from "react";
import style from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Common/Pagination";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
};

export default function Blog({ data, totalCount, itemsPerPage, blogPage }) {
  return (
    <>
      <div className={" page " + style["style-two"] + " " + style["blog-area"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className={style["blog-heading"] + " mb-3"}>
                {blogPage?.Heading}
              </h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: blogPage?.introContent || "",
                }}
              />
            </div>
            {data?.length > 0 ? (
              data.map((item, key) => (
                <>
                  <div className="col-lg-4 col-md-6" key={key}>
                    <div className={style["single-blog-box"]}>
                      <div className={style["single-blog-thumb"]}>
                        <Image
                          src={item.banner_image}
                          width={350}
                          height={200}
                          quality={90}
                          alt={item.title}
                          // priority
                          className="object-fit-cover"
                        />
                        {/* <div className={style["blog-top-button"]}>
                            <a href="#"> {item.button} </a>
                          </div> */}
                      </div>
                      <div className={style["em-blog-content"]}>
                        <div className={style["meta-blog-text"]}>
                          <p> {formatDate(item.date)} </p>
                        </div>
                        <div className={style["em-blog-title"]}>
                          <h2>
                            {" "}
                            <Link href={"/blog/" + item.slug}>
                              {" "}
                              {item.title}
                            </Link>{" "}
                          </h2>
                        </div>
                        <div className={" d-flex " + style["em-blog-icon"]}>
                          <div className={style["em-blog-thumb"]}>
                            <Image
                              src={"/assets/images/resource/blog-icon.png"}
                              width={24}
                              height={24}
                              quality={90}
                              alt={key + 1}
                            />
                          </div>
                          <div className={style["em-blog-icon-title"]}>
                            <h6> Admin</h6>
                          </div>
                        </div>
                        <div className={style["blog-button"]}>
                          <Link href={"/blog/" + item.slug}>
                            {" "}
                            Learn More <i className="bi bi-plus"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <div>No data found</div>
            )}
          </div>
          <div className="mt-5">
            <Pagination
              totalCount={totalCount}
              itemsPerPage={itemsPerPage}
              hidePageNumbers={true}
              customBreakLabel={null}
            />
          </div>
        </div>
      </div>
    </>
  );
}
