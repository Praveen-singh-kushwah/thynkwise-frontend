export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/blogs/", "/resource", "/new-page", "https://backend.thynkwise.co.in"],
      allow: ["/", "/llms.txt"],
    },
    sitemap: process.env.SITE_URL + "/sitemap.xml",
  };
}
