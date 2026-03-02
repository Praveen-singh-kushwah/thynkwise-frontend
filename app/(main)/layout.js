import Footer from "@/components/Main/Layout/Footer/Footer";
import Header from "@/components/Main/Layout/Header/Header";

export default function layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <Header/>
      {children}
      <Footer />
    </>
  );
}
