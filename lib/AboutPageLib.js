const CMS =
    process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL;

export async function getAboutPage() {
    const url = `${CMS}/api/about-page?populate[introSection][populate]=*&populate[imageTextSection][populate]=*&populate[approachSection][populate][approachItem][populate]=*&populate[valuesSection][populate][valueItem][populate]=*&populate[listWithImageSection][populate][listItem][populate]=*&populate[OurPromise][populate]=*&populate[seo][populate]=*`;

    const res = await fetch(url, {
        next: { tags: ["about-page"] },
    });

    const json = await res.json();

    return json?.data || null;
}
