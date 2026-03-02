import Pagebanner from "@/components/Common/Pagebanner";
import Section1 from "@/components/Main/ApolloSalesExecutionServices/Section1/Section1";
import Section2 from "@/components/Main/ApolloSalesExecutionServices/Section2/Section2";
import Section3 from "@/components/Main/ApolloSalesExecutionServices/Section3/Section3";
import Section4 from "@/components/Main/ApolloSalesExecutionServices/Section4/Section4";
import Section5 from "@/components/Main/ApolloSalesExecutionServices/Section5/Section5";
import Section6 from "@/components/Main/ApolloSalesExecutionServices/Section6/Section6";
import Section7Accordion from "@/components/Main/ApolloSalesExecutionServices/Section7Accordion/Section7Accordion";
import { getApolloCityPage } from "@/lib/ApolloCityLib";

export async function generateMetadata({ params }) {
  const page = await getApolloCityPage(params.slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  const seo = page?.seo;

  const CMS =
    process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

  const ogImageUrl =
    seo?.ogImage?.url
      ? `${CMS}${seo.ogImage.url}`
      : process.env.OG_IMAGE;

  const canonicalUrl =
    `${process.env.SITE_URL}apollo-sales-execution-services-in/${params.slug}`;

  return {
    title: seo?.metaTitle || page.title || process.env.SITE_TITLE,
    description:
      seo?.metaDescription || process.env.SITE_DESCRIPTION,
    keywords: seo?.keywords || process.env.SITE_KEYWORDS,

    openGraph: {
      title:
        seo?.ogTitle ||
        seo?.metaTitle ||
        page.title ||
        process.env.SITE_TITLE,

      description:
        seo?.ogDescription ||
        seo?.metaDescription ||
        process.env.SITE_DESCRIPTION,

      type: "website",

      url: canonicalUrl,

      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              alt:
                seo?.ogTitle ||
                seo?.metaTitle ||
                page.title,
            },
          ]
        : [],
    },

    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Page({ params }) {
  const page = await getApolloCityPage(params.slug);

  if (!page) return null;

  const CMS =
    process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

  const heroData = page.hero_Section
    ? {
      heading: page.hero_Section.heading,
      description: page.hero_Section.description,
      city: page.cityName,
      image: page.hero_Section.image
        ? {
          width: page.hero_Section.image.width,
          height: page.hero_Section.image.height,
          src: CMS + page.hero_Section.image.url,
          alt:
            page.hero_Section.image.alternativeText || "",
        }
        : null,
    }
    : null;

  const servicesData =
    page.service_Item?.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.Description,
      image: item.image
        ? {
          width: item.image.width,
          height: item.image.height,
          src: CMS + item.image.url,
          alt: item.image.alternativeText || "",
        }
        : null,
    })) || [];

  const processData =
    page.process_item?.map((item) => ({
      id: item.id,
      description: item.description,
      image: item.image
        ? {
          width: item.image.width,
          height: item.image.height,
          src: CMS + item.image.url,
          alt: item.image.alternativeText || "",
        }
        : null,
    })) || [];

  const whyCityData = page.why_city_section
    ? {
      heading: page.why_city_section.heading,
      description: page.why_city_section.description,
      city: page.cityName,
      image: page.why_city_section.image
        ? {
          width: page.why_city_section.image.width,
          height: page.why_city_section.image.height,
          src:
            CMS + page.why_city_section.image.url,
          alt:
            page.why_city_section.image.alternativeText ||
            "",
        }
        : null,
    }
    : null;

  return (
    <>
      <Pagebanner title={page.title} />

      {heroData && <Section1 data={heroData} />}

      <Section2 services={servicesData} city={page.cityName} />

      <Section3
        tools={page.tool_section}
        city={page.cityName}
      />

      <Section4 data={processData} />

      {whyCityData && <Section5 data={whyCityData} />}

      {page.cta_section && (
        <Section6 {...page.cta_section} />
      )}

      <Section7Accordion
        items={page.faq_item || []}
        city={page.cityName}
      />
    </>
  );
}
