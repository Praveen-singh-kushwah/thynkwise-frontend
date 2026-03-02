import Pagebanner from "@/components/Common/Pagebanner";
import Testimonial from "@/components/Main/Testimonial/Testimonial";
export function generateMetadata() {
  return {
    title: "thynkWISE Founder Testimonials - Inspiring Success Stories",
    description:
      "Discover testimonials from ThynkWise founders, sharing their inspiring journeys and impactful experiences with our platform.",
    keywords:
      "thynkWISE testimonials, user reviews, customer feedback, professional solutions, thynkWISE success stories, innovative platform reviews, trusted by professionals, business transformation stories, satisfied users, thynkWISE experiences",
    openGraph: {
      title: "ThynkWise Founder Stories: Inspiring Testimonials",
      description:
        "Read testimonials from ThynkWise founders, highlighting their achievements and how ThynkWise empowered their growth and success.",
      images: [
        {
          url: "/assets/images/seo-images/testimonial.png",
          width: "1000",
          height: "875",
          alt: "thynkWISE Founder Testimonials - Inspiring Success Stories",
        },
      ],
    },
    alternates: {
      canonical: process.env.SITE_URL + "/founder-testimonials",
    },
  };
}
export default function page() {
  return (
    <>
      <Pagebanner title={"Founder Testimonials"} />
      <Testimonial type={'founder'}/>
    </>
  );
}
