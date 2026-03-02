"use server";

export async function getLocations() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/locations?populate=image&sort=order:asc`,
    {
      next: { tags: ["locations"] },
    }
  );

  const json = await res.json();
  return json.data || [];
}
