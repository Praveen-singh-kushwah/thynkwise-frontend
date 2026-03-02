import Banner from "@/components/Main/Home/Banner/Banner";
import Section1 from "@/components/Main/Home/Section1/Section1";
import Section11 from "@/components/Main/Home/Section11/Section11";
import Section2 from "@/components/Main/Home/Section2/Section2";
import Section3 from "@/components/Main/Home/Section3/Section3";
import Section4 from "@/components/Main/Home/Section4/Section4";
import Section5 from "@/components/Main/Home/Section5/Section5";
import Section6 from "@/components/Main/Home/Section6/Section6";

import { getHomePage } from "@/lib/HomePageLib";

export async function generateMetadata() {
  const homeData = await getHomePage();
  const seo = homeData?.seo;

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
      canonical: process.env.SITE_URL,
    },
  };
}

export default async function page() {
  const homeData = await getHomePage();

  if (!homeData) return null;

  return (
    <>
      <Section1 data={homeData.hero} />
      <Section2 />
      <Banner />

      {/* About section from CMS */}
      <Section3 data={homeData.about} />

      <Section11 data={homeData.partnerFit} />
      <Section4 data={homeData.whyThynkwise} />
      <Section5 data={homeData.caseStudies} />
      <Section6 data={homeData.processSection} />
    </>
  );
}

