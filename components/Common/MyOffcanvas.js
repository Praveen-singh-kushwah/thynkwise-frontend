"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
export default function MyOffcanvas({
  Title,
  children,
  show,
  onHide,
  className,
  headerClass,
  bodyClass,
  id = "my_offcanvas",
}) {
  useEffect(() => {
    const Offcanvas = $("#" + id);
    if (show) {
      Offcanvas.offcanvas("show");
    } else {
      Offcanvas.offcanvas("hide");
    }
    Offcanvas.on("hide.bs.offcanvas", onHide);
  }, [show]);

  // if(!data)return;
  return createPortal(
    <>
      <div
        className={"offcanvas offcanvas-end " + className}
        // data-bs-scroll="true"
        tabIndex={-1}
        id={"my_offcanvas"}
        aria-labelledby="rightOffcanvasLabel"
        style={{
          backgroundColor: "white !important",
          width: "490px !important",
        }}
        // data-bs-backdrop="false"
      >
        <div className={"offcanvas-header " + headerClass}>
          <h5 className="offcanvas-title" id="rightOffcanvasLabel">
            {Title}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className={"offcanvas-body " + bodyClass}>{children}</div>
      </div>
    </>,
    document.body
  );
}
