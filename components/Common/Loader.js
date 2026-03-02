import style from "./loading.module.css";

export default function Loader() {
  return (
    <>
      <div className={style["loader-wrapper"]}>
        <div className={style["loader"]}></div>
        <div className={style["loder-section"] + " " + style["left-section"]}></div>
        <div
          className={style["loder-section"] + " " + style["right-section"]}
        ></div>
      </div>
    </>
  );
}
