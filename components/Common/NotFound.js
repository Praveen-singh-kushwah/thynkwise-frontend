import Link from "next/link";
import style from "./NotFound.module.css";
import { IoHome } from "react-icons/io5";
export default function NotFound() {
  return (
    <>
    <div className={style['error-area']}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className={style['error-thumb']}>
          <img src="/assets/images/resource/404.png" alt="404" />
        </div>
        <div className={style['error-content']}>
          <h2><span>Sorry!</span> Page Not Found</h2>
        </div>
        <div className={"text-center "+style['error-button']}>
          <Link href="/"><IoHome /> Back To Home</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
