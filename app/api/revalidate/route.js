import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    const model = body.model;

    // Home page updated
    if (model === "home-page") {
        revalidateTag("home-page");
        revalidatePath("/");
    }

    // privacy policy updated
    if (model === "privacy-policy-page") {
        revalidatePath("/privacy-policy");
        revalidateTag("privacy-policy");
    }

    // Services page updated
    if (model === "services-page") {
        revalidatePath("/service");
        revalidateTag("services-page");
    }

    // Pricing page updated
    if (model === "pricing-page") {
        revalidatePath("/pricing");
        revalidateTag("pricing-page");
    }

    // blog post updated
    if (body.model === "blog-post") {
        revalidateTag("blog-posts");
        revalidatePath("/blog");
    }

    // blog page updated
    if (body.model === "blog-page") {
        revalidateTag("blog-page");
        revalidatePath("/blog");
    }

    // testimonial updated
    if (body.model === "success-stories-page") {
        revalidateTag("success-stories");
        revalidatePath("/success-stories");
    }

    // partner updated
    if (body.model === "partner") {
        revalidateTag("partners");
        revalidatePath("/partners");
    }

    // About page updated
    if (model === "about-page") {
        revalidateTag("about-page");
        revalidatePath("/about-us");
    }

    // Contact page updated
    if (model === "contact-page") {
        revalidateTag("contact-page");
        revalidatePath("/contact-us");
    }

    // location updated
    if (model === "location") {
        revalidateTag("locations");
        revalidatePath("/contact-us");
    }

    return NextResponse.json({ revalidated: true });
}
