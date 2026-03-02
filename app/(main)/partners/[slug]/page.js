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

    return {
        title: seo?.metaTitle || partner.name,
        description: seo?.metaDescription || "",

        alternates: {
            canonical:
                seo?.canonicalUrl ||
                process.env.SITE_URL + "/partners/" + partner.slug,
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
