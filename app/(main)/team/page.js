import dynamic from "next/dynamic";
import Pagebanner from "@/components/Common/Pagebanner";
import { getTeamPage } from "@/lib/TeamPageLib";

const Section1 = dynamic(() =>
  import("@/components/Main/FoundersMessage/Section1/Section1")
);
const Section2 = dynamic(() =>
  import("@/components/Main/FoundersMessage/Section2/Section2")
);
const Section3 = dynamic(() =>
  import("@/components/Main/FoundersMessage/Section3/Section2")
);
const Section4 = dynamic(() =>
  import("@/components/Main/FoundersMessage/Section4/Section4")
);
const Section6 = dynamic(() =>
  import("@/components/Main/FoundersMessage/Section6/Section6")
);

export async function generateMetadata() {
  const teamData = await getTeamPage();
  const seo = teamData?.seo;

  const ogImageUrl =
    seo?.ogImage?.url
      ? `${process.env.CMS_URL}${seo.ogImage.url}`
      : process.env.OG_IMAGE;

  return {
    title: seo?.metaTitle || process.env.SITE_TITLE,
    description: seo?.metaDescription || process.env.SITE_DESCRIPTION,
    keywords: seo?.keywords || process.env.SITE_KEYWORDS,

    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || process.env.SITE_TITLE,
      description:
        seo?.ogDescription ||
        seo?.metaDescription ||
        process.env.SITE_DESCRIPTION,
      type: "website",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              alt:
                seo?.ogTitle ||
                seo?.metaTitle ||
                process.env.SITE_TITLE,
            },
          ]
        : [],
    },

    alternates: {
      canonical: process.env.SITE_URL + "team",
    },
  };
}


export const revalidate = 3600;

export default async function Page() {
  const teamData = await getTeamPage();

  if (!teamData) return <div>No team data found</div>;

  return (
    <>
      <Pagebanner title="Team" />

      <Section1 data={teamData.founderIntro} />

      <Section2 data={teamData.visionAndMission} />

      <Section6 sections={teamData.teamSections} />

      <Section3 text={teamData.commitmentText} />

      <Section4 data={teamData.ceoMessage} />
    </>
  );
}
