export function getMediaUrl(path) {
  if (!path) return null;

  const CMS = (
    process.env.NEXT_PUBLIC_CMS_URL ||
    process.env.CMS_URL ||
    "https://cms.thynkwise.co.in"
  ).replace(/\/$/, "");

  return path.startsWith("http")
    ? path
    : `${CMS}${path}`;
}
