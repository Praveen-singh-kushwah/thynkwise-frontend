import Pagebanner from "@/components/Common/Pagebanner";
import style from "./page.module.css";
import Partners from "@/components/Main/Partners/Partners";
import { getPartners, getPartnersPage  } from "@/lib/PartnerLib";

export const revalidate = 3600;

export async function generateMetadata() {
  const pageData = await getPartnersPage();
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
      canonical: process.env.SITE_URL + "partners",
    },
  };
}


export default async function Section11() {
  const partners = await getPartners();

  return (
    <>
      <Pagebanner title={"Partners"} />
      <section className={style.section11}>
        <div className="container">
          <Partners partners={partners} />
        </div>
      </section>
    </>
  );
}
