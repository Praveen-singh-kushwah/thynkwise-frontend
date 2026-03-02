export function getMediaUrl(path) {
  if (!path) return null;

  const CMS =
    process.env.NEXT_PUBLIC_CMS_URL ||
    process.env.CMS_URL ||
    "http://localhost:1337";

  return path.startsWith("http")
    ? path
    : `${CMS}${path}`;
}
