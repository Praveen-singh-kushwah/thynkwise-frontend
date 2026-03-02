import Pagebanner from "@/components/Common/Pagebanner";
import Section1 from "@/components/Main/About/Section1/Section1";
import Section12 from "@/components/Main/About/Section12/Section12";
import Section6 from "@/components/Main/About/Section6/Section6";
import Section7 from "@/components/Main/About/Section7/Section7";
import Section8 from "@/components/Main/About/Section8/Section8";
import Section9 from "@/components/Main/About/Section9/Section9";

import { getAboutPage } from "@/lib/AboutPageLib";

export async function generateMetadata() {
  const aboutData = await getAboutPage();

  const seo = aboutData?.seo;

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
        seo?.ogDescription || seo?.metaDescription || process.env.SITE_DESCRIPTION,
      type: "website",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              alt: seo?.ogTitle || seo?.metaTitle || process.env.SITE_TITLE,
            },
          ]
        : [],
    },

    alternates: {
      canonical: process.env.SITE_URL + "about-us",
    },
  };
}

export default async function page() {
  const aboutData = await getAboutPage();

  if (!aboutData) return null;

  const {
    introSection,
    imageTextSection,
    approachSection,
    valuesSection,
    listWithImageSection,
    OurPromise,
  } = aboutData;

  return (
    <>
      <Pagebanner title="About Us" />

      <Section1 data={introSection} />
      <Section6 data={imageTextSection} />
      <Section12 data={approachSection} />
      <Section7 data={valuesSection} />
      <Section8 data={listWithImageSection} />
      <Section9 data={OurPromise} />
    </>
  );
}
