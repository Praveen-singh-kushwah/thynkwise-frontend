const CMS = process.env.CMS_URL;

export async function getPrivacyPolicy() {
  const res = await fetch(
    `${CMS}/api/privacy-policy-page?populate[seo][populate]=*`,
    {
      next: { tags: ["privacy-policy"] },
    }
  );

  const json = await res.json();
  const data = json.data;

  if (!data) return null;

  return {
    title: data.title,
    content: data.content,
    seo: data.seo || null,
  };
}
