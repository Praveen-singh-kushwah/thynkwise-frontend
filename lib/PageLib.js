"use server";

export async function getSeoPage(params) {
    try {
      const res = await fetch(process.env.API_URL + "/api/seo_pages", {
        method: "post",
        body: JSON.stringify(params),
        next: { revalidate: 10 }
      });
      const response = await res.json();
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }