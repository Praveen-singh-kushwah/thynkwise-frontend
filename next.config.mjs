/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.thynkwise.co.in",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      }
    ],
  },

  env: {
    SITE_LOGO: "/assets/images/logo/thynkwise.png",
    SITE_TITLE: "thynkWISE | Streamlining Sales with Platform Integration",
    SITE_DESCRIPTION:
      "Accelerate sales with thynkWISE! We optimize processes, integrate CRM, and mentor field & inside sales teams to boost efficiency and revenue growth.",
    SITE_KEYWORDS:
      "Sales Process Transformation, Platform Integration, CRM Solutions, thynkWISE, Sales Efficiency, Revenue Growth, Sales Team Empowerment, Strategic Sales Consulting",
    SITE_LOGO1: "/assets/images/logo/logo1.png",
    CONTACT_URL: "https://api.thynkwise.co.in/contact.php",
    ENQUIRY_URL: "https://api.thynkwise.co.in/enquiry.php"
  },
};

export default nextConfig;
