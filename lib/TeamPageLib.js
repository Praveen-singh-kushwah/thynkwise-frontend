"use server";

const CMS = process.env.CMS_URL;

export async function getTeamPage() {
  const res = await fetch(
    `${CMS}/api/team-page?` +
      `populate[FounderIntro][populate]=*&` +
      `populate[CEO_Message][populate]=*&` +
      `populate[VisionAndMission][populate]=*&` +
      `populate[team_section][populate][team_member][populate]=*&` +
      `populate[seo][populate]=*`,
    {
      next: { tags: ["team-page"] },
    }
  );

  const json = await res.json();
  const data = json.data;

  if (!data) return null;

  const attrs = data.attributes || data;

  return {
    founderIntro: attrs.FounderIntro,
    visionAndMission: attrs.VisionAndMission,
    teamSections: attrs.team_section || [],
    commitmentText: attrs.commitmentText,
    ceoMessage: attrs.CEO_Message,
    seo: attrs.seo, // ✅ VERY IMPORTANT
  };
}
