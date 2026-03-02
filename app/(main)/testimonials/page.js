import Pagebanner from "@/components/Common/Pagebanner";
import Testimonial from "@/components/Main/Testimonial/Testimonial";
export function generateMetadata() {
  return {
    title: "thynkWISE Testimonials - Trusted by Professionals",
    description:
      "Discover how thynkWISE empowers professionals with innovative solutions. Real stories from satisfied users of our cutting-edge platform.",
    keywords:
      "thynkWISE testimonials, user reviews, customer feedback, professional solutions, thynkWISE success stories, innovative platform reviews, trusted by professionals, business transformation stories, satisfied users, thynkWISE experiences",
    openGraph: {
      title: "What Our Users Say About thynkWISE",
      description:
        "Explore real testimonials from thynkWISE users. See how our solutions are transforming businesses and delivering results for professionals worldwide.",
      images: [
        {
          url: "/assets/images/seo-images/testimonial.png",
          width: "1000",
          height: "875",
          alt: "thynkWISE Testimonials - Trusted by Professionals",
        },
      ],
    },
    alternates: {
      canonical: process.env.SITE_URL + "/testimonials",
    },
  };
}
export default function page() {
  return (
    <>
      <Pagebanner title={"Testimonials"} />
      {/* <Testimonial type='company'/> */}
      <Testimonial/>
    </>
  );
}
