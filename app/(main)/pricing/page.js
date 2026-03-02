import Pagebanner from "@/components/Common/Pagebanner";
import PricingTable from "@/components/Main/Pricing/PricingTable";
export function generateMetadata() {
  return {
    title: "thynkWISE Pricing | Flexible Plans for Every Need",
    description:
      "Explore thynkWISE pricing plans tailored to fit your needs. Choose the perfect package for seamless collaboration and productivity.",
    keywords:
      "thynkWISE Pricing, thynkWISE Plans, Flexible Pricing, Affordable Collaboration Tools, Productivity Software Pricing, Team Collaboration Plans, thynkWISE Packages.",
    openGraph: {
      title: "Discover thynkWISE Pricing Plans",
      description:
        "Find the right thynkWISE plan for your team. Affordable, flexible, and designed to boost your productivity and collaboration.",
      images: [
        {
          url: "/assets/images/seo-images/testimonial.png",
          width: "1000",
          height: "875",
          alt: "thynkWISE Pricing | Flexible Plans for Every Need",
        },
      ],
    },
    alternates: {
      canonical: process.env.SITE_URL + "/pricing",
    },
  };
}
export default function page() {
  return (
    <>
      <Pagebanner title={"Pricing"} />
      <PricingTable />
      {/* <NewPricing/> */}
    </>
  );
}
