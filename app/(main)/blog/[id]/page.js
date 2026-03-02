import Pagebanner from "@/components/Common/Pagebanner";
import BlogDetails from "@/components/Main/Blog/BlogDetail";
import { getBlogDetails } from "@/lib/BlogLib";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const response = await getBlogDetails({
    slug: params.id,
  });

  const seo = response?.data?.seo;
  const blog = response?.data;

  const ogImageUrl =
    seo?.ogImage?.url
      ? `${process.env.CMS_URL}${seo.ogImage.url}`
      : blog?.banner_image;

  return {
    title: seo?.metaTitle || blog?.title,
    description:
      seo?.metaDescription ||
      blog?.content?.replace(/<[^>]+>/g, "").slice(0, 150),

    keywords: seo?.keywords,

    openGraph: {
      title: seo?.ogTitle || blog?.title,
      description:
        seo?.ogDescription ||
        blog?.content?.replace(/<[^>]+>/g, "").slice(0, 150),
      type: "article",
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },

    alternates: {
      canonical:
        process.env.SITE_URL + "/blog/" + params.id,
    },
  };
}

export default async function pages({ params }) {
  const response = await getBlogDetails({
    slug: params.id,
  });

  if (!response) return null;

  return (
    <>
      <Pagebanner title={"Blog Details"} />
      <BlogDetails data={response?.data} recentpost={[]} />
    </>
  );
}
