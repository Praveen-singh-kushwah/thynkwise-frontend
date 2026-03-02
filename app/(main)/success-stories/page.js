import Pagebanner from "@/components/Common/Pagebanner";
import NewTestimonial from "@/components/Main/Testimonial/NewTestimonial";
import { getSuccessStoriesPage } from "@/lib/SuccessStoriesLib";

export async function generateMetadata() {
  const pageData = await getSuccessStoriesPage();
  const seo = pageData?.seo;

  const ogImageUrl =
    seo?.ogImage?.url
      ? `${process.env.CMS_URL}${seo.ogImage.url}`
      : process.env.OG_IMAGE;

  return {
    title: seo?.metaTitle || process.env.SITE_TITLE,
    description: seo?.metaDescription || process.env.SITE_DESCRIPTION,
    keywords: seo?.keywords || process.env.SITE_KEYWORDS,

    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || process.env.SITE_TITLE,
      description:
        seo?.ogDescription ||
        seo?.metaDescription ||
        process.env.SITE_DESCRIPTION,
      type: "website",
      images: ogImageUrl
        ? [
          {
            url: ogImageUrl,
            alt:
              seo?.ogTitle ||
              seo?.metaTitle ||
              process.env.SITE_TITLE,
          },
        ]
        : [],
    },

    alternates: {
      canonical: process.env.SITE_URL + "/success-stories",
    },
  };
}

export default async function page() {
  const pageData = await getSuccessStoriesPage();

  if (!pageData) return null;

  return (
    <>
      <Pagebanner title={"Success Stories"} />
      {/* <Testimonial type='company'/> */}
      {/* <Testimonial/> */}
      <NewTestimonial testimonials={pageData.testimonials} />
    </>
  );
}
