import Pagebanner from "@/components/Common/Pagebanner";
import GemQuizForm from "@/components/Main/GemQuiz/GemQuizForm";
import { getPersonalityPage } from "@/lib/GemLib/GemLib";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const response = await getPersonalityPage();
  const seo = response?.data?.seo;
  const siteUrl = (process.env.SITE_URL || "").replace(/\/$/, "");

  if (!seo) return null;

  const ogImageUrl = seo.ogImage?.url
    ? `${process.env.CMS_URL}${seo.ogImage.url}`
    : process.env.OG_IMAGE;

  return {
    title: seo.metaTitle || process.env.SITE_TITLE,
    description: seo.metaDescription || process.env.SITE_DESCRIPTION,
    keywords: seo.keywords || process.env.SITE_KEYWORDS,
    openGraph: {
      title: seo.ogTitle || seo.metaTitle || process.env.SITE_TITLE,
      description:
        seo.ogDescription || seo.metaDescription || process.env.SITE_DESCRIPTION,
      type: "website",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              alt: seo.ogTitle || seo.metaTitle || process.env.SITE_TITLE,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `${siteUrl}/personality-type`,
    },
  };
}

export default async function Page() {
  const response = await getPersonalityPage();
  const pageData = response?.data || {};

  return (
    <>
      <Pagebanner title={pageData.pageTitle || "GEM Personality Assessment"} />
      <GemQuizForm pageData={pageData} />
    </>
  );
}
