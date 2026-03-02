import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { FaBookmark, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import style from "./Blogdetail.module.css";
import BlogSidebar from "./BlogSidebar";
// import UcFirst from "@/utilities/uc-first";

// Function to format date to dd-mm-yyyy
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
};

export default function BlogDetails({ data, recentpost }) {
  return (
    <>
      {data ? (
        <div className={style["blog-section"] + " " + style["style-two "]}>
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-9 m-auto col-md-12">
                <div className="blog-single-items">
                  <div className={style["blog-thumb"]}>
                    {data?.banner_image && (
                      <Image
                        width={837}
                        height={421}
                        priority
                        quality={90}
                        src={data.banner_image}
                        alt={data.title || "Blog thumbnail"}
                        className="h-auto w-100"
                      />
                    )}
                  </div>
                  <ul className={"mt-4 p-0 " + style["post-meta"]}>
                    <li>
                      <FaCalendarAlt />
                      {formatDate(data.date)}
                    </li>
                    {/* {data.category && (
                      <li>
                        <FaBookmark />
                        {UcFirst(data.category)}
                      </li>
                    )} */}
                    {data.post_by && (
                      <li>
                        <FaRegUserCircle />
                        Post by: {data.post_by}
                      </li>
                    )}
                  </ul>
                  <div className={style["blog-content"]}>
                    <div
                      className={"text-justify " + style["blog-content-text"]}
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Sidebar Widgets */}
              {/* <div className="col-lg-4">
                <div className={style["blog-sidebar"]}>
                  <BlogSidebar recentpost={recentpost} />
                </div>
              </div> */}

              <div className="col-md-12">
                <div className={style["blog-nav"]}>
                  <div className={style["nav-links"]}>
                    {data.previous && (
                      <div className={style["prev-link"]}>
                        <Link
                          href={`/blog/${data.previous.slug}`}
                          className="text-end"
                        >
                          <span>Previous</span>
                          <div className={style.a}>{data.previous.title}</div>
                        </Link>
                      </div>
                    )}
                    <div className={style["divider"]}></div>
                    {data.next && (
                      <div className={style["next-link"]}>
                        <Link
                          href={`/blog/${data.next.slug}`}
                          className="text-start"
                        >
                          <span>Next</span>
                          <div className={style.a}>{data.next.title}</div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="blog-details pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Data not found</h2>
                <p>Sorry, we couldn't find the blog post you're looking for.</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
