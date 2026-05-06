import { getBlogs } from "@/lib/BlogLib";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = (process.env.SITE_URL || "").replace(/\/$/, "");
  const [blogs] = await Promise.all([getBlogs({ start: 0, limit: 1000 })]);
  // Define static routes
  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/about-us", priority: 0.7 },
    { path: "/team", priority: 0.6 },
    { path: "/partners", priority: 0.6 },
    { path: "/service", priority: 0.7 },
    { path: "/contact-us", priority: 0.6 },
    { path: "/blog", priority: 0.5 },
    { path: "/investment", priority: 0.6 },
    { path: "/success-stories", priority: 0.6 },
    { path: "/personality-type", priority: 0.6 },
    { path: "/apollo-sales-execution-services-in/ahmedabad", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/bangalore", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/bhopal", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/chandigarh", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/chennai", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/coimbatore", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/delhi", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/guwahati", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/hyderabad", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/indore", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/jaipur", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/kochi", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/kolkata", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/lucknow", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/ludhiana", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/madurai", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/mumbai", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/nagpur", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/patna", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/pune", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/raipur", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/rajkot", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/ranchi", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/surat", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/trivandrum", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/vadodara", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/vijayawada", priority: 0.7 },
    { path: "/apollo-sales-execution-services-in/visakhapatnam", priority: 0.7 },
  ];

  const dynamicRoutes = [
    ...blogs.data.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.5,
    })),
  ];
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  const sitemap = allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    priority: route.priority,
  }));
  return sitemap;
}
