import { getBlogs } from "@/lib/BlogLib";

export const dynamic = 'force-dynamic';

export async function GET() {
    const BASE_URL = process.env.SITE_URL || "https://www.thynkwise.co.in";
    const [blogs] = await Promise.all([getBlogs()]);

    // Static routes with descriptions as per the provided llms.txt content
    const staticRoutes = [
        {
            path: "/",
            description: "thynkWISE | B2B Sales Automation & CRM Services - Accelerate B2B sales with thynkWISE! We offer CRM implementation, sales automation, and expert training for field & inside sales teams.",
        },
        {
            path: "/about-us",
            description: "About Us - Learn about thynkWISE's mission, vision, and the core values that drive our B2B sales automation and CRM services.",
        },
        {
            path: "/team",
            description: "Team - Meet the dedicated professionals behind thynkWISE, committed to enhancing your sales processes.",
        },
        {
            path: "/partners",
            description: "Partners - Discover our strategic partnerships that enhance our service offerings and customer value.",
        },
        {
            path: "/contact-us",
            description: "Contact Us - Get in touch with thynkWISE for inquiries, support, or to learn more about our services.",
        },
        {
            path: "/service",
            description: "Services - Explore the range of services provided by thynkWISE, including CRM implementation and sales automation solutions.",
        },
        {
            path: "/investment",
            description: "Pricing - Review our competitive pricing models designed to fit various business needs.",
        },
        {
            path: "/blog",
            description: "Blog - Access a collection of articles and insights on B2B sales strategies and CRM best practices.",
        },
        {
            path: "/success-stories",
            description: "Success Stories - Read about the successful implementations and outcomes achieved by our clients through thynkWISE services.",
        },
        {
            path: "/personality-type",
            description: "GEM Personality Assessments | Unlock Sales Potential - Discover how personality assessments can enhance sales performance.",
        },
        {
            path: "/founder-testimonials",
            description: "thynkWISE Founder Testimonials - Inspiring Success Stories - Hear from founders who have benefited from thynkWISE's services.",
        },
        {
            path: "/privacy-policy",
            description: "Privacy Policy - Review our privacy policy to understand how we handle your data.",
        },
    ];

    // Blog routes with descriptions from the provided llms.txt content
    const blogRoutes = [
        {
            path: "/blog/change-vs-choice",
            description: "Why Businesses Must Embrace Change - thynkWISE - Understand the importance of adaptability in the ever-evolving business landscape.",
        },
        {
            path: "/blog/execution-over-perfection",
            description: "Execution Over Perfection: Grow with Action - thynkWISE - Learn why taking action is crucial for business growth.",
        },
        {
            path: "/blog/sales-rejection-mistakes",
            description: "High-Ticket Sales Mastery—Authority & Trust - thynkWISE - Discover strategies for mastering high-ticket sales through building authority and trust.",
        },
        {
            path: "/blog/sales-execution-strategy",
            description: "Hard Work Won't Scale Sales-Here's How - thynkWISE - Explore effective methods to scale sales without relying solely on hard work.",
        },
        {
            path: "/blog/inefficient-sales-process-fixes",
            description: "7 Sales Inefficiencies Hurting Revenue—Fix Them - thynkWISE - Identify common sales inefficiencies and how to address them.",
        },
        {
            path: "/blog/cold-emails-vs-linkedin-outreach",
            description: "Why B2B Teams Use LinkedIn Automation in 2025 - thynkWISE - Insights into the future of LinkedIn automation for B2B sales teams.",
        },
        {
            path: "/blog/is-apollo-io-really-a-crm",
            description: "Why Apollo.io Alone Won't Scale Your Sales Pipeline - thynkWISE - Understand the limitations of relying solely on Apollo.io for sales pipeline management.",
        },
        {
            path: "/blog/is-your-say-do-ratio-equal-1",
            description: "The Say-Do Ratio—Building Trust & Driving Results - thynkWISE - Learn about the importance of the say-do ratio in building trust with clients.",
        },
        {
            path: "/blog/celebrate-festivals-with-family-the-ultimate-investment-in-happiness",
            description: "Family Over Screens—The Greatest Gift of All - thynkWISE - A reflective piece on balancing work and personal life.",
        },
        {
            path: "/blog/is-your-business-healthy-enough-to-survive-the-ai-revolution",
            description: "Adapt to Advance: Future-Proofing Your Business - thynkWISE - Strategies for ensuring your business remains competitive in the future.",
        },
        {
            path: "/blog/method-to-madness-unleashing-the-power-of-habits-for-business-success",
            description: "Unleashing Success | The Power of Consistency - thynkWISE - The role of consistency in achieving business success.",
        },
        {
            path: "/blog/stop-renting-growth-why-smart-founders-build-sales-systems-that-scale",
            description: "Why Smart Founders Build Sales Systems That Scale - thynkWISE - Insights into the importance of scalable sales systems for business growth.",
        },
        {
            path: "/blog/who-else-wants-to-close-more-deals-before-the-quarter-ends",
            description: "7 Power Questions to Close More Deals by March 31 - thynkWISE - Effective questions to ask during sales to increase closing rates.",
        },
        {
            path: "/blog/sledging-in-sales-the-underrated-tactic-that-s-hiding-in-plain-sight",
            description: "Sales Sledging: The Psychology of Persuasion - thynkWISE - Explore the psychological aspects of persuasion in sales.",
        },
        {
            path: "/blog/which-sales-best-practice-works-best-the-one-that-breaks-these-3-rules",
            description: "thynkWISE's Proven Sales Playbook | Break the Sales Rules - A guide to unconventional sales strategies that yield results.",
        },
        {
            path: "/blog/execution-eats-enablement-for-breakfast-why-your-sales-team-still-underperforms",
            description: "Why Sales Enablement and Sales Consulting Fail ... - thynkWISE - An analysis of common pitfalls in sales enablement and consulting.",
        },
        {
            path: "/blog/empowering-it-sales-excellence-why-2025-is-the-year-to-thrive-with-thynkwise",
            description: "Boost IT Sales – India's First Execution Consultancy - thynkWISE - Learn about our unique approach to boosting IT sales through execution consultancy.",
        },
    ];

    // Dynamic blog routes from getBlogs
    const dynamicBlogRoutes = blogs.data.map((post) => ({
        path: `/blog/${post.slug}`,
        description: post.description || `Blog post: ${post.title} - Insights from thynkWISE on B2B sales and CRM strategies.`,
    }));

    // Combine all routes, ensuring static and provided blog routes take precedence
    const allRoutes = [
        ...staticRoutes,
        ...blogRoutes,
        ...dynamicBlogRoutes.filter(
            (dynamic) => !blogRoutes.some((blog) => blog.path === dynamic.path)
        ),
    ];

    // Generate llms.txt content
    const llmsContent = `
thynkWISE | B2B Sales Automation & CRM Services
Accelerate B2B sales with thynkWISE! We offer CRM implementation, sales automation, and expert training for field & inside sales teams.

Company Information
${staticRoutes
            .filter((route) => route.path !== "/blog")
            .map(
                (route) =>
                    `- [${route.description.split(" - ")[0]}](${BASE_URL}${route.path}): ${route.description.split(" - ")[1] || route.description}`
            )
            .join("\n")}

Insights and Resources
### Blog and Articles
${[...blogRoutes, ...dynamicBlogRoutes]
            .map(
                (route) =>
                    `- [${route.description.split(" - ")[0]}](${BASE_URL}${route.path}): ${route.description.split(" - ")[1] || route.description}`
            )
            .join("\n")}

Additional Information
- For further inquiries, you can reach us at [partner@thynkwise.co.in](mailto:partner@thynkwise.co.in) or call us at [+91 9763 0088 00](tel:+919763008800).
  `.trim();

    return new Response(llmsContent, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}