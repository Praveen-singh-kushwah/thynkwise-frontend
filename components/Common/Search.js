"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
import style from "./search.module.css";
export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="edu-search-box-wrapper text-start text-md-end">
      <div className={style["edu-search-box"]}>
        <form action="#">
          <input
            type="search"
            className="form-control form-control-sm border-0  ps-4"
            name="search"
            id="search"
            defaultValue={searchParams.get("search")?.toString()}
            onInput={(e) => {
              handleSearch(e.target.value);
            }}
            placeholder="Search..."
          />
          <button className={style["search-button"]}>
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
