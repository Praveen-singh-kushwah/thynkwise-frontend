"use client";

import styles from "./NewPricing.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import MyModal from "@/components/Common/MyModal";
import PricingForm from "./PricingForm";
import { useState } from "react";
import Image from "next/image";

export default function PricingCard({
  plan,
  isPlatformOpen,
  isExecutionOpen,
  togglePlatform,
  toggleExecution,
  activeTab,
}) {
  const [showEditForm, setShowEditForm] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleApplyNowClick = (plan) => {
    setShowEditForm(plan);
    setShowModal(true);
  };

  const shouldShowApplyButton = () => {
    if (activeTab === "monthly" && plan.title === "Basic") return true;

    if (
      (activeTab === "quarterly" || activeTab === "half-yearly") &&
      (plan.title === "Smart" || plan.title === "Prime")
    )
      return true;

    if (
      activeTab === "annual" &&
      (plan.title === "Smart" || plan.title === "Prime")
    )
      return true;

    return false;
  };

  return (
    <>
      <div
        className={`${styles["pricing-card"]} ${
          plan.title === "Prime" ? styles["prime-card"] : ""
        }`}
      >
        {/* Badge */}
        {plan.badge && (
          <div className={styles["holiday-offer"]}>
            <span>{plan.badge}</span>
          </div>
        )}

        {/* Header */}
        <div className={styles["card-header"]}>{plan.title}</div>

        {/* Description */}
        {plan.description && (
          <p
            className={
              `text-center fs-14 ${styles.textWithBorder} ` +
              (plan.title === "Smart"
                ? styles["smart-description"]
                : "")
            }
          >
            {plan.description}
          </p>
        )}

        {/* Billing Label */}
        {plan.billingLabel && (
          <div className={"text-center fs-14 mb-3 " + styles.textWithBorder}>
            <p>
              <strong>{plan.billingLabel}</strong>
            </p>
          </div>
        )}

        {/* PLATFORM SECTION */}
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100 border-bottom pb-1">
            <button
              className={`btn border-0 ps-0 ${styles["btn-drop"]}`}
              onClick={() => {
                togglePlatform();
                if (isExecutionOpen) toggleExecution();
              }}
              aria-expanded={isPlatformOpen}
            >
              <strong>Platform</strong>
            </button>

            {isPlatformOpen ? (
              <FaChevronUp
                onClick={() => {
                  togglePlatform();
                  if (isExecutionOpen) toggleExecution();
                }}
                className={styles["cursor-pointer"]}
              />
            ) : (
              <FaChevronDown
                onClick={() => {
                  togglePlatform();
                  if (isExecutionOpen) toggleExecution();
                }}
                className={styles["cursor-pointer"]}
              />
            )}
          </div>

          {isPlatformOpen && plan.platformFeatures?.length > 0 && (
            <div className="mb-3 w-100">
              <ul className="list-unstyled mt-2">
                {plan.platformFeatures.map((feat) => (
                  <li
                    key={feat.id}
                    className={`d-flex align-items-center mb-2 gap-1 fs-14 ${
                      feat.included === false
                        ? styles["strike-through"]
                        : ""
                    }`}
                  >
                    {feat.included ? (
                      <Image
                        src={"/assets/images/thynkwise/checkmark.png"}
                        alt="check"
                        width={30}
                        height={30}
                        priority
                      />
                    ) : (
                      <Image
                        src={"/assets/images/thynkwise/cancel.png"}
                        alt="cancel"
                        width={30}
                        height={30}
                        priority
                      />
                    )}
                    {feat.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* EXECUTION SECTION */}
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100 border-bottom pb-1 pt-1">
            <button
              className={`btn border-0 ps-0 ${styles["btn-drop"]}`}
              onClick={() => {
                toggleExecution();
                if (isPlatformOpen) togglePlatform();
              }}
              aria-expanded={isExecutionOpen}
            >
              <strong>Execution</strong>
            </button>

            {isExecutionOpen ? (
              <FaChevronUp
                onClick={() => {
                  toggleExecution();
                  if (isPlatformOpen) togglePlatform();
                }}
                className={styles["cursor-pointer"]}
              />
            ) : (
              <FaChevronDown
                onClick={() => {
                  toggleExecution();
                  if (isPlatformOpen) togglePlatform();
                }}
                className={styles["cursor-pointer"]}
              />
            )}
          </div>

          {isExecutionOpen && plan.executionFeatures?.length > 0 && (
            <div className="mb-3 w-100">
              <ul className="list-unstyled mt-2">
                {plan.executionFeatures.map((feat) => (
                  <li
                    key={feat.id}
                    className={`d-flex align-items-center mb-2 gap-1 fs-14 ${
                      feat.included === false
                        ? styles["strike-through"]
                        : ""
                    }`}
                  >
                    {feat.included ? (
                      <Image
                        src={"/assets/images/thynkwise/checkmark.png"}
                        alt="check"
                        width={30}
                        height={30}
                        priority
                      />
                    ) : (
                      <Image
                        src={"/assets/images/thynkwise/cancel.png"}
                        alt="cancel"
                        width={30}
                        height={30}
                        priority
                      />
                    )}
                    {feat.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* INVESTMENT SECTION */}
        <div
          className={`${styles["always-visible-section"]} ${
            plan.title === "Prime" ? "mb-2" : ""
          }`}
        >
          <strong className={styles["plan-title"]}>Investment</strong>

          {/* License */}
          {plan.licenseText && (
            <div className="py-2">
              License -{" "}
              <span className={styles["plan-execution-fee"]}>
                {plan.licenseText}
              </span>
            </div>
          )}

          {/* One Time Setup */}
          {plan.One_time_setup_fee && (
            <div className="py-2">
              One time setup -{" "}
              <span className={styles["plan-execution-fee"]}>
                {plan.One_time_setup_fee}
              </span>
            </div>
          )}

          {/* Execution Fee */}
          {plan.executionFee && (
            <div className="align-items-center d-flex gap-1 py-2">
              <span className={styles["execution-label"]}>
                Execution Fee
              </span>{" "}
              -
              <div className="d-flex align-items-center gap-1">
                <span className={styles["execution-price"]}>
                  {plan.executionFee}
                </span>

                {plan.discountLabel && (
                  <div className={styles["execution-discount"]}>
                    {plan.discountLabel}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Special Quote */}
        {plan.specialQuote && (
          <p className="text-center py-2 fs-13">
            "{plan.specialQuote}"
          </p>
        )}

        {/* CTA Button */}
        {shouldShowApplyButton() && (
          <div className="d-flex justify-content-center">
            <button
              onClick={() => handleApplyNowClick(plan)}
              className={"w-75 " + styles["footer-button"]}
            >
              Contact Sales
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {showEditForm && (
        <MyModal
          Title={`Contact Sales`}
          show={showModal}
          onHide={() => {
            setShowModal(false);
            setShowEditForm(null);
          }}
        >
          <PricingForm
            data={showEditForm.title}
            onFormSubmitSuccess={() => {
              setShowModal(false);
            }}
          />
        </MyModal>
      )}
    </>
  );
}