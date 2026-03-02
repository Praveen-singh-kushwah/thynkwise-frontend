import Image from "next/image";
import { getMediaUrl } from "@/lib/media";

export default function Section1({ data }) {
  if (!data) return null;

  const img = getMediaUrl(data?.image?.url);

  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          {img && (
            <Image
              src={img}
              width={525}
              height={525}
              alt={data.heading}
              className="img-fluid"
            />
          )}
        </div>

        <div className="col-md-6">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
}
