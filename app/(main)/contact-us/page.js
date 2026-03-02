import Pagebanner from "@/components/Common/Pagebanner";
import ContactUs from "@/components/Main/ContactUs/ContactUs";
import { getContactPage } from "@/lib/ContactPageLib";
import { getLocations } from "@/lib/LocationLib";

export async function generateMetadata() {
  const contactData = await getContactPage();
  const seo = contactData?.seo;

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
      canonical: process.env.SITE_URL + "contact-us",
    },
  };
}

export default async function page() {
  const contactData = await getContactPage();
  const locations = await getLocations();
  return (
    <>
      <Pagebanner title={"Contact Us"} />
      <ContactUs data={contactData} locations={locations} />
    </>
  );
}
