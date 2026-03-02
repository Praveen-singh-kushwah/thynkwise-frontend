import Pagebanner from "@/components/Common/Pagebanner";
import PrivacyPolicy from "@/components/Main/PrivacyPolicy/PrivacyPolicy";
import { getPrivacyPolicy } from "@/components/Main/PrivacyPolicy/strapi/PrivacyPolicy";

export const revalidate = 3600;

export async function generateMetadata() {
  const pageData = await getPrivacyPolicy();
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
      canonical: process.env.SITE_URL + "/privacy-policy",
    },
  };
}

export default async function Page() {
  const pageData = await getPrivacyPolicy();

  if (!pageData) return null;

  return (
    <>
      <Pagebanner title="Privacy Policy" />
      <PrivacyPolicy data={pageData} />
    </>
  );
}
