"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import style from "./pagination.module.css";
export default function Pagination({ itemsPerPage, totalCount }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageCount = Math.ceil(totalCount / itemsPerPage);
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageClick = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", event.selected + 1);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <ReactPaginate
        nextLabel=">"
        onPageChange={(event) => {
          handlePageClick(event);
        }}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName={"page-item  " + style["page-item"]}
        pageLinkClassName={"page-link d-flex justify-content-center  " + style["page-link"]}
        previousClassName={style["page-item"]}
        previousLinkClassName={"page-link d-flex justify-content-center  " + style["page-link"]}
        nextClassName={style["page-item"]}
        nextLinkClassName={"page-link d-flex justify-content-center " + style["page-link"]}
        breakLabel="..."
        breakClassName={"page-item " + style["page-item"]}
        breakLinkClassName={"page-link  " + style["page-link"]}
        containerClassName="pagination gap-2 justify-content-center"
        activeClassName={"border-0 " + style.active}
        renderOnZeroPageCount={null}
        forcePage={Math.abs(currentPage - 1)}
      />
    </>
  );
}
