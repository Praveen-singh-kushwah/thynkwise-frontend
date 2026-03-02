import Pagebanner from "@/components/Common/Pagebanner";
import GemQuizForm from "@/components/Main/GemQuiz/GemQuizForm";
import { getSeoPage } from "@/lib/PageLib";
export async function generateMetadata() {
  const response = await getSeoPage({ slug: "personality-type" });
  const seo = response;
  if (!seo) return null;
  return {
    title: seo.title || process.env.SITE_TITLE,
    description: seo.description || process.env.SITE_DESCRIPTION,
    keywords: seo.keywords || process.env.SITE_KEYWORD,
    openGraph: {
      title: seo.og_title || process.env.SITE_TITLE,
      description: seo.og_description || process.env.SITE_DESCRIPTION,
      type: "website",
      images: [
        {
          url: seo.og_image || process.env.OG_IMAGE,
          width: seo.og_image_width || process.env.OG_IMAGE_WIDTH,
          height: seo.og_image_height || process.env.OG_IMAGE_HEIGHT,
          alt: seo.og_title || process.env.SITE_TITLE,
        },
      ],
    },
    alternates: {
      canonical: process.env.SITE_URL + "/personality-type",
    },
  };
}
export default function page() {
  return (
    <>
      <Pagebanner title={"GEM Personality Assessment"} />
      <GemQuizForm />
    </>
  );
}
