import Pagebanner from "@/components/Common/Pagebanner";
import Success from "@/components/Main/Success/Success";
import { getResourceUser, getResources } from "@/lib/Resource";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }) {
  const key = searchParams?.k; // Token key
  const page = parseInt(searchParams?.page) || 1;
  const itemsPerPage = 9;

  if (!key) {
    notFound(); // If no key, show 404
  }

  const responseUser = await getResourceUser({ token: key });
  const userData = responseUser?.data;

  if (
    !responseUser?.status ||
    !userData ||
    (typeof userData === "object" && Object.keys(userData).length === 0)
  ) {
    notFound(); // If invalid or empty user
  }

  // Fetch actual resources
  const responseResources = await getResources({ token: key });
  const allDocuments = responseResources?.data || [];
  const total_count = parseInt(responseResources?.total_count) || 0;

  // Format the documents to match expected structure
  const formattedDocuments = allDocuments.map((doc) => ({
    title: doc.title,
    file: doc.document,
  }));

  // Pagination slicing
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = formattedDocuments.slice(startIndex, endIndex);

  return (
    <>
      <Pagebanner title={"Success"} />
      <Success
        currentDocuments={currentDocuments}
        totalCount={total_count}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
}
