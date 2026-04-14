import Pagebanner from "@/components/Common/Pagebanner";
import { getPartnerBySlug } from "@/lib/PartnerLib";

export const revalidate = 3600;

/* ---------------- SEO Metadata ---------------- */
export async function generateMetadata({ params }) {
    const partner = await getPartnerBySlug(params.slug);

    if (!partner) {
        return { title: "Partner Not Found" };
    }

    const seo = partner.seo;
    const siteUrl = (process.env.SITE_URL || "").replace(/\/$/, "");
    const canonicalUrl =
        seo?.canonicalUrl || `${siteUrl}/partners/${partner.slug}`;
    const ogImageUrl = seo?.ogImage?.url
        ? `${process.env.CMS_URL}${seo.ogImage.url}`
        : null;

    return {
        title: seo?.metaTitle || partner.name,
        description: seo?.metaDescription || "",
        keywords: seo?.keywords || "",

        openGraph: {
            title: seo?.ogTitle || seo?.metaTitle || partner.name,
            description: seo?.ogDescription || seo?.metaDescription || "",
            type: "website",
            images: ogImageUrl
                ? [
                    {
                        url: ogImageUrl,
                        alt: seo?.ogTitle || seo?.metaTitle || partner.name,
                    },
                ]
                : [],
        },

        alternates: {
            canonical: canonicalUrl,
        },
    };
}

/* ---------------- Page ---------------- */
export default async function PartnerDetail({ params }) {
    const partner = await getPartnerBySlug(params.slug);

    if (!partner) {
        return <div className="container py-5">Partner not found</div>;
    }

    return (
        <>
            <Pagebanner title={partner.name} />

            <section className="container py-5">
                <div
                    dangerouslySetInnerHTML={{ __html: partner.content }}
                />

                {partner.websiteUrl && (
                    <div className="text-center mt-4">
                        <a
                            href={partner.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-custom"
                        >
                            Visit Site
                        </a>
                    </div>
                )}
            </section>
        </>
    );
}
