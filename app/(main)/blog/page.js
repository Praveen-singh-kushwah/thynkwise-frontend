import Pagebanner from "@/components/Common/Pagebanner";
import Blog from "@/components/Main/Blog/Blog";
import { getBlogs, getBlogPage } from "@/lib/BlogLib";

export const revalidate = 3600;

export async function generateMetadata() {
  const blogPage = await getBlogPage();
  const seo = blogPage?.seo;

  const ogImageUrl =
    seo?.ogImage?.url
      ? `${process.env.CMS_URL}${seo.ogImage.url}`
      : process.env.OG_IMAGE;

  return {
    title: seo?.metaTitle || "Blog",
    description: seo?.metaDescription || process.env.SITE_DESCRIPTION,
    keywords: seo?.keywords || process.env.SITE_KEYWORDS,

    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle,
      description:
        seo?.ogDescription || seo?.metaDescription,
      type: "website",
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },

    alternates: {
      canonical: process.env.SITE_URL + "/blog",
    },
  };
}

export default async function page({ searchParams }) {
  const itemsPerPage = 6;
  const pageNum = searchParams?.page || 1;
  const start = (pageNum - 1) * itemsPerPage;

  const blogPage = await getBlogPage();

  const response = await getBlogs({
    start,
    limit: itemsPerPage,
  });

  return (
    <>
      <Pagebanner title={"Blog"} />
      <Blog
        data={response.data}
        totalCount={response.total_count}
        itemsPerPage={itemsPerPage}
        blogPage={blogPage}
      />
    </>
  );
}
