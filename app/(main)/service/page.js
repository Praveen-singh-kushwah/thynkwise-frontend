import Pagebanner from "@/components/Common/Pagebanner";
import Section1 from "@/components/Main/Service/Section1/Section1";
import { getServicesPage } from "@/components/Main/Service/strapi/service";

export const revalidate = 3600;

export async function generateMetadata() {
  const pageData = await getServicesPage();
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
      canonical: process.env.SITE_URL + "/service",
    },
  };
}

export default async function Page() {
  const pageData = await getServicesPage();

  if (!pageData) return null;

  return (
    <>
      <Pagebanner title={"Services"} />
      <Section1 services={pageData.serviceSection} />
    </>
  );
}
