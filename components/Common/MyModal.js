"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const MyModal = ({
  Title,
  children,
  show,
  onHide,
  id = "my_modal",
  size,
  scrollable,
  bodyColor,
  headerClass,
  contentClass,
  modalHeaderRadius,
  bodyClass,
  hideCloseButton = false,
  center,
  showHeader = true,
  buttonClass,
  titleClass,
}) => {
  const Size = "modal-" + size ?? "lg";
  const Scrollable = scrollable ? " modal-dialog-scrollable" : "";
  const Centered = center ? " modal-dialog-centered" : "";
  const TitleClass = titleClass ?? "";
  const ButtonClass = buttonClass ?? "";
  const ContentClass = contentClass ?? "";
  const HeaderClass = headerClass ?? "";
  const BodyClass = bodyClass ?? "";
  useEffect(() => {
    const Modal = $("#" + id);
    if (show) {
      Modal.modal("show");
    } else {
      Modal.modal("hide");
    }
    Modal.on("hide.bs.modal", onHide);
  }, [show]);

  return createPortal(
    <>
      <div
        className="modal fade"
        id={id}
        // data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby={"staticBackdropLabel" + id}
        aria-hidden="true"
      >
        <div
          className={"modal-dialog " + [Size, Scrollable, Centered].join(" ")}
        >
          <div className={"modal-content " + ContentClass}>
            <div className={"modal-header border-0 " + HeaderClass}>
              <h1
                className={"modal-title fs-5 " + TitleClass}
                id={"staticBackdropLabel" + id}
              >
                {Title}
              </h1>
              {!hideCloseButton && (
                <button
                  type="button"
                  className={"btn-close " + ButtonClass}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              )}
            </div>

            <div className={"modal-body " + BodyClass}>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default MyModal;
