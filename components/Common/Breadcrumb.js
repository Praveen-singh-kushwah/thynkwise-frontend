import Link from "next/link";

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbs?.map((breadcrumb, index) => (
            <li
              key={index}
              className={`breadcrumb-item small ${
                index === breadcrumbs.length - 1 ? "active" : ""
              }`}
              aria-current={index === breadcrumbs.length - 1 ? "page" : null}
            >
              {index === breadcrumbs.length - 1 ? (
                <span>{breadcrumb.name}</span>
              ) : (
                <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
