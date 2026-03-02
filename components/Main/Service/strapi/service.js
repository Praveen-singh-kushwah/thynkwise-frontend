const CMS = process.env.CMS_URL;

export async function getServicesPage() {
  const res = await fetch(
    `${CMS}/api/services-page?populate[serviceSection][populate]=icon&populate[seo][populate]=*`,
    {
      next: { tags: ["services-page"] },
    }
  );

  const json = await res.json();
  const data = json.data;

  if (!data) return null;

  return {
    serviceSection: data.serviceSection || [],
    seo: data.seo || null,
  };
}
