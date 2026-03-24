import Pagebanner from "@/components/Common/Pagebanner";
import NewPricing from "@/components/Main/Pricing/NewPricing";
import { getPricingPage } from "@/lib/PricingPageLib";

export async function generateMetadata() {
  const pricingData = await getPricingPage();
  const seo = pricingData?.seo;

  const CMS =
    process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

  const ogImageUrl =
    seo?.ogImage?.url
      ? `${CMS}${seo.ogImage.url}`
      : process.env.OG_IMAGE;

  return {
    title: seo?.metaTitle || process.env.SITE_TITLE,
    description:
      seo?.metaDescription || process.env.SITE_DESCRIPTION,
    keywords: seo?.keywords || process.env.SITE_KEYWORDS,
    openGraph: {
      title:
        seo?.ogTitle ||
        seo?.metaTitle ||
        process.env.SITE_TITLE,
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
      canonical: process.env.SITE_URL + "/pricing",
    },
  };
}

export default async function Page() {
  const pricingData = await getPricingPage();

  if (!pricingData) return null;

  return (
    <>
      <Pagebanner title={"Pricing"} />
      <NewPricing data={pricingData} />
    </>
  );
}
