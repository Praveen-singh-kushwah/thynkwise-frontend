"use server";

const CMS = process.env.CMS_URL;

export async function getPartnersPage() {
  const res = await fetch(
    `${CMS}/api/partners-page?populate[seo][populate]=*`,
    { next: { tags: ["partners-page"] } }
  );

  const json = await res.json();
  const data = json.data;

  if (!data) return null;

  const attrs = data.attributes || data;

  return {
    pageTitle: attrs.pageTitle,
    seo: attrs.seo,
  };
}

/* ---------------- PARTNERS LIST ---------------- */
export async function getPartners() {
  const res = await fetch(
    `${CMS}/api/partners?populate=logo&sort=order:asc`,
    { next: { tags: ["partners"] } }
  );

  const json = await res.json();
  const partners = json.data || [];

  return partners.map((p) => {
    const attrs = p.attributes || p;

    return {
      id: p.id,
      name: attrs.name,
      slug: attrs.slug,
      subtitle: attrs.subtitle,
      desc: attrs.shortDescription,
      websiteUrl: attrs.websiteUrl,
      logo: attrs.logo?.url
        ? CMS + attrs.logo.url
        : null,
    };
  });
}

/* ---------------- PARTNER DETAIL ---------------- */
export async function getPartnerBySlug(slug) {
  const res = await fetch(
    `${CMS}/api/partners?filters[slug][$eq]=${slug}&populate=*`,
    { next: { tags: ["partners"] } }
  );

  const json = await res.json();
  const partner = json.data?.[0];

  if (!partner) return null;

  const attrs = partner.attributes || partner;

  return {
    name: attrs.name,
    slug: attrs.slug,
    content: attrs.content,
    websiteUrl: attrs.websiteUrl,

    logo: attrs.logo?.url
      ? CMS + attrs.logo.url
      : null,

    // ✅ FIX HERE
    seo: attrs.SEO || null,
  };
}
