"use server";

const CMS =
  process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

export async function getApolloCityPage(slug) {
  const cleanSlug = slug.trim();

  const url =
    `${CMS}/api/apollo-city-pages` +
    `?filters[slug][$eq]=${encodeURIComponent(cleanSlug)}` +
    `&populate[hero_Section][populate]=*` +
    `&populate[service_Item][populate]=*` +
    `&populate[tool_section][populate][tool_item][populate]=*` +
    `&populate[process_item][populate]=*` +
    `&populate[why_city_section][populate]=*` +
    `&populate[cta_section][populate]=*` +
    `&populate[faq_item][populate]=*` +
    `&populate[seo][populate]=*`;

  const res = await fetch(url, {
    next: { tags: ["apollo-city-pages"] },
  });

  if (!res.ok) {
    console.error("Strapi error:", res.status);
    return null;
  }

  const json = await res.json();

  if (!json?.data || json.data.length === 0) {
    return null;
  }

  return json.data[0];
}