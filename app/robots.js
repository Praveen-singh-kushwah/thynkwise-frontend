export default function robots() {
  const baseUrl = (process.env.SITE_URL || "").replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      disallow: ["/blogs/", "/resource", "/new-page"],
      allow: ["/", "/llms.txt"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
