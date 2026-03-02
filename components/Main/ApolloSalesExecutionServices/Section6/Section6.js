import style from "./Section6.module.css";
import Link from "next/link";

const Section6 = ({ ctaText, ctaLink, ctaButtonName }) => {
  if (!ctaText) return null;

  return (
    <section className="pb-5">
      <div className="container">

        {/* CTA TEXT */}
        <div className="mt-4 text-center">
          <p
            className={style["call-to-action"]}
            dangerouslySetInnerHTML={{ __html: ctaText }}
          />
        </div>

        {/* BUTTON */}
        <div className="text-center pb-24 pt-2">
          <Link
            href={ctaLink}
            className={`btn ${style["custom-button"]}`}
          >
            {ctaButtonName}
          </Link>
        </div>

        {/* Bottom small text */}
        <div className="mt-2 text-center text-sm text-gray-700">
          <p className="mb-2">
            Review your existing outreach and CRM
          </p>
          <p>
            <Link
              href={ctaLink}
              className="text-blue-600 underline"
            >
              contact us
            </Link>{" "}
            or Email us on{" "}
            <a
              href="mailto:partners@thynkwise.co.in"
              className="text-blue-600 underline"
            >
              partners@thynkwise.co.in
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section6;