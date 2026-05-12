import ApolloCityPage, {
  getApolloCityMetadata,
} from "@/components/Main/ApolloSalesExecutionServices/ApolloCityPage";

export async function generateMetadata({ params }) {
  return getApolloCityMetadata(params.slug);
}

export default async function Page({ params }) {
  return <ApolloCityPage slug={params.slug} />;
}
