"use server";

export async function getContactPage() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/contact-page?populate[steps]=*&populate[seo][populate]=*`,
    {
      next: { tags: ["contact-page"] },
    }
  );

  const json = await res.json();

  return json?.data || null;
}
