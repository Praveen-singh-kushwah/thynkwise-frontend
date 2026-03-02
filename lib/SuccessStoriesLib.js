"use server";

const CMS = process.env.CMS_URL;

export async function getSuccessStoriesPage() {
  try {
    const res = await fetch(
      `${CMS}/api/success-stories-page
        ?populate[testimonials][populate]=photo
        &populate[seo][populate]=*`
        .replace(/\s/g, ""),
      {
        next: { tags: ["success-stories"] },
      }
    );

    const json = await res.json();
    const data = json?.data;

    if (!data) return null;

    return {
      testimonials: data.testimonials || [],
      seo: data.seo || null,
    };
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return null;
  }
}
