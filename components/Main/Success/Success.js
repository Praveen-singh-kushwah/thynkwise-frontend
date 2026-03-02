import Pagination from "@/components/Common/Pagination";
import Image from "next/image";

function getFileIcon(doc) {
  const type = doc.type || "";
  const fileName = doc.file || "";

  if (type.includes("pdf") || fileName.endsWith(".pdf")) {
    return "/assets/images/success/pdf.png";
  } else if (
    type.includes("msword") ||
    type.includes("wordprocessingml.document") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx")
  ) {
    return "/assets/images/success/doc.png";
  } else if (
    type.includes("ms-excel") ||
    type.includes("spreadsheetml.sheet") ||
    fileName.endsWith(".xls") ||
    fileName.endsWith(".xlsx")
  ) {
    return "/assets/images/success/xls.png";
  } else if (
    type.includes("ms-powerpoint") ||
    type.includes("presentationml.presentation") ||
    fileName.endsWith(".ppt") ||
    fileName.endsWith(".pptx")
  ) {
    return "/assets/images/success/ppt.png";
  } else if (type.includes("text/plain") || fileName.endsWith(".txt")) {
    return "/assets/images/success/txt.png";
  } else {
    return "/assets/images/success/open-folder.png";
  }
}

export default function Success({
  currentDocuments = [],
  totalCount = 0,
  itemsPerPage = 6,
}) {
  return (
    <div className="container py-5">
      {currentDocuments.length === 0 ? (
        <div className="text-center">
          <h4 className="text-muted">No data found</h4>
        </div>
      ) : (
        <>
          <div className="row justify-content-center gap-4">
            {currentDocuments.map((doc, index) => (
              <div
                key={index}
                className="col-md-3 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="card shadow rounded-4 border-0 w-100 h-100">
                  <div className="card-body text-center d-flex flex-column justify-content-center h-100">
                    <div className="d-flex justify-content-center">
                      <Image
                        src={getFileIcon(doc)}
                        alt="File Icon"
                        width={40}
                        height={40}
                        className="mb-3"
                      />
                    </div>
                    <h5 className="card-title fw-bold mb-3">{doc.title}</h5>
                    <a
                      href={doc.file}
                      className="btn btn-outline-primary mt-auto"
                      target="_blank"
                      download
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              totalCount={totalCount}
              itemsPerPage={itemsPerPage}
              hidePageNumbers={true}
              customBreakLabel={null}
            />
          </div>
        </>
      )}
    </div>
  );
}
