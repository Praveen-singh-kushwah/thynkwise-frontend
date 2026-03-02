"use server";

export async function getHomePage() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/home-page
      ?populate[hero][populate]=*
      &populate[about][populate]=*
      &populate[partnerFit][populate][partnerBlock][populate]=partnerItem
      &populate[whyThynkwise][populate]=*
      &populate[caseStudies][populate][caseStudyCard][populate]=image
      &populate[processSection][populate]=processStep
      &populate[seo][populate]=*`
      .replace(/\s/g, ""),
    {
      next: { tags: ["home-page"] },
    }
  );

  const json = await res.json();
  return json?.data || null;
}
