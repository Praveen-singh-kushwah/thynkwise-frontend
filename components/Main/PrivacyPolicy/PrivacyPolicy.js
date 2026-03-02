import style from "./PrivacyPolicy.module.css";
import { getPrivacyPolicy } from "./strapi/PrivacyPolicy";

export default async function PrivacyPolicy({ data }) {
  const pageData = data

  if (!pageData) {
    return <div>No privacy policy found.</div>;
  }

  const { title, content } = data;

  return (
    <section className={style["privacy-sec"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">{title}</h4>

            {/* CKEditor HTML */}
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
