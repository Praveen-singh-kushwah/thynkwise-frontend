"use server";
import he from "he";

/* -------------------------------------------------------
   Clean CKEditor HTML (decode escaped HTML properly)
------------------------------------------------------- */
function cleanEditorContent(html) {
  if (!html) return "";

  let decoded = he.decode(html);

  // Remove wrapping <p> around large blocks
  decoded = decoded.replace(/^<p>([\s\S]*)<\/p>$/i, "$1");

  // Remove unnecessary <br>
  decoded = decoded.replace(/<br\s*\/?>/gi, "");

  return decoded;
}

/* -------------------------------------------------------
   BLOG PAGE (Single Type)
------------------------------------------------------- */
export async function getBlogPage() {
  const res = await fetch(
    `${process.env.CMS_URL}/api/blog-page?populate[seo][populate]=*`,
    {
      next: { tags: ["blog-page"] },
    }
  );

  const json = await res.json();
  const data = json?.data;

  if (!data) return null;

  return {
    ...data,
    seo: data.seo || null,
  };
}

/* -------------------------------------------------------
   BLOG LIST (Paginated)
------------------------------------------------------- */
export async function getBlogs({ start = 0, limit = 6 } = {}) {
  const res = await fetch(
    `${process.env.CMS_URL}/api/blog-posts?populate=featuredImage&pagination[start]=${start}&pagination[limit]=${limit}&sort=publishedDate:desc`,
    {
      next: { tags: ["blog-posts"] },
    }
  );

  const json = await res.json();

  if (!json?.data) {
    return { data: [], total_count: 0 };
  }

  return {
    data: json.data.map((post) => ({
      title: post.title,
      slug: post.slug,
      banner_image: post.featuredImage?.url
        ? process.env.CMS_URL + post.featuredImage.url
        : null,
      date: post.publishedDate,
      post_by: post.author,
    })),
    total_count: json?.meta?.pagination?.total || 0,
  };
}

/* -------------------------------------------------------
   BLOG DETAILS PAGE
------------------------------------------------------- */
export async function getBlogDetails({ slug }) {
  if (!slug) return null;

  const encodedSlug = encodeURIComponent(slug);

  /* ---- Fetch all posts for previous/next ---- */
  const listRes = await fetch(
    `${process.env.CMS_URL}/api/blog-posts?fields=title,slug,publishedDate&sort=publishedDate:desc`,
    {
      next: { tags: ["blog-posts"] },
    }
  );

  const listJson = await listRes.json();
  const posts = listJson?.data || [];

  const currentIndex = posts.findIndex(
    (p) => p.slug === slug
  );

  if (currentIndex === -1) return null;

  const previousPost = posts[currentIndex + 1] || null;
  const nextPost = posts[currentIndex - 1] || null;

  /* ---- Fetch current blog post ---- */
  const res = await fetch(
    `${process.env.CMS_URL}/api/blog-posts?filters[slug][$eq]=${encodedSlug}&populate=*`,
    {
      next: { tags: ["blog-posts"] },
    }
  );

  const json = await res.json();

  if (!json?.data || json.data.length === 0) {
    return null;
  }

  const post = json.data[0];

  return {
    data: {
      title: post.title,
      content: cleanEditorContent(post.content),
      banner_image: post.featuredImage?.url
        ? process.env.CMS_URL + post.featuredImage.url
        : null,
      date: post.publishedDate,
      post_by: post.author,
      seo: post.seo || null,

      previous: previousPost
        ? {
            slug: previousPost.slug,
            title: previousPost.title,
          }
        : null,

      next: nextPost
        ? {
            slug: nextPost.slug,
            title: nextPost.title,
          }
        : null,
    },
  };
}

