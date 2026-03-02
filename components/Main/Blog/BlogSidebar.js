import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import style from "./Blogdetail.module.css";
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
};
const siteUrl = process.env.SITE_URL || "";
const blogPath = "/blogs";

export default function BlogSidebar({ recentpost }) {
  return (
    <>
      <div className={style["sidebar-widget"]}>
      <h3 className={style["widget-title"]}>
          <Link href={`${siteUrl}${blogPath}`}>Other Blogs</Link>
          <Link href={`${siteUrl}${blogPath}`}>
            <FaArrowRight className={style["arrow-icon"]} />
          </Link>
        </h3>

        {recentpost.length ? (
          recentpost.map((blog, key) => {
            return (
              <div className={style["sidebar-post"]} key={key}>
                <Image
                  width={95}
                  height={95}
                  priority
                  quality={90}
                  src={blog.banner_image}
                  alt="post"
                  className="w-auto h-auto"
                />
                <div className={style["post-content"]}>
                  <ul className={style["post-meta"]}>
                    <li>
                      <FaCalendarAlt />
                      {formatDate(blog.date)}
                    </li>
                  </ul>
                  <h3 className={style.title}>
                    <Link href={blog.slug}>{blog.title}</Link>
                  </h3>
                </div>
              </div>
            );
          })
        ) : (
          <div>No recent posts!</div>
        )}
      </div>
      {/* <div className={style["sidebar-widget"]}>
        <h3 className={style["widget-title"]}>Category</h3>
        <ul className={style["category-list"]}>
          <li>
            <Link href={"/blog?category=business"}>
              Business
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link href={"/blog?category=other"}>
              Others
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href={"/blog?category=web_design_company"}
            >
              Web Design Company
              <FaArrowRight />
            </Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}
