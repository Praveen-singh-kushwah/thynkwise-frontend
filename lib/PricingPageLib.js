const CMS =
  process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

export async function getPricingPage() {
  const url = `${CMS}/api/pricing-page?populate[tab][populate][plan][populate][platformFeatures]=*&populate[tab][populate][plan][populate][executionFeatures]=*&populate[seo][populate]=*`;

  const res = await fetch(url, {
    next: { tags: ["pricing-page"] },
  });

  const json = await res.json();

  return json?.data || null;
}