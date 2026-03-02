"use client";

import styles from "./NewPricing.module.css";
import { FaChevronUp, FaChevronDown, FaCheck, FaTimes } from "react-icons/fa";
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
    // if (activeTab === "annual" && plan.title === "Prime") return true;
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
        {plan.title === "Smart" && (
          <div className={styles["holiday-offer"]}>
            <span>Most Popular</span>
          </div>
        )}

        <div className={styles["card-header"]}>{plan.title}</div>
        <p
          className={
            `text-center fs-14  ${styles.textWithBorder} ` +
            (plan.title === "Smart" ? styles["smart-description"] : "")
          }
        >
          {plan.description}
        </p>

        <div className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100 border-bottom pb-1">
            <button
              className={`btn border-0 ps-0 ${styles["btn-drop"]}`}
              onClick={() => {
                togglePlatform();
                if (isExecutionOpen) toggleExecution(); // Close execution if it's open
              }}
              aria-expanded={isPlatformOpen}
            >
              <strong>Platform</strong>
            </button>
            {isPlatformOpen ? (
              <FaChevronUp
                onClick={() => {
                  togglePlatform();
                  if (isExecutionOpen) toggleExecution(); // Close execution if it's open
                }}
                className={styles["cursor-pointer"]}
              />
            ) : (
              <FaChevronDown
                onClick={() => {
                  togglePlatform();
                  if (isExecutionOpen) toggleExecution(); // Close execution if it's open
                }}
                className={styles["cursor-pointer"]}
              />
            )}
          </div>

          {isPlatformOpen && (
            <div className="mb-3 w-100">
              <ul className="list-unstyled mt-2">
                {plan.platformFeatures.map((feat, idx) => {
                  const isStrikethrough =
                    feat.startsWith("<s>") && feat.endsWith("</s>");
                  const featureText = isStrikethrough
                    ? feat.replace(/<\/?s>/g, "")
                    : feat;

                  return (
                    <li
                      key={idx}
                      className={`d-flex align-items-center mb-2 gap-1 fs-14  ${
                        isStrikethrough ? styles["strike-through"] : ""
                      }`}
                    >
                      {isStrikethrough ? (
                        <Image
                          src={"/assets/images/thynkwise/cancel.png"}
                          alt="cancel"
                          width={30}
                          height={30}
                          priority
                        />
                      ) : (
                        <Image
                          src={"/assets/images/thynkwise/checkmark.png"}
                          alt="cancel"
                          width={30}
                          height={30}
                          priority
                        />
                      )}
                      {featureText}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100 border-bottom pb-1 pt-1">
            <button
              className={`btn border-0 ps-0 ${styles["btn-drop"]}`}
              onClick={() => {
                toggleExecution();
                if (isPlatformOpen) togglePlatform(); // Close platform if it's open
              }}
              aria-expanded={isExecutionOpen}
            >
              <strong>Execution</strong>
            </button>
            {isExecutionOpen ? (
              <FaChevronUp
                onClick={() => {
                  toggleExecution();
                  if (isPlatformOpen) togglePlatform(); // Close platform if it's open
                }}
                className={styles["cursor-pointer"]}
              />
            ) : (
              <FaChevronDown
                onClick={() => {
                  toggleExecution();
                  if (isPlatformOpen) togglePlatform(); // Close platform if it's open
                }}
                className={styles["cursor-pointer"]}
              />
            )}
          </div>
          {isExecutionOpen && (
            <div className="mb-3 w-100">
              <ul className="list-unstyled mt-2">
                {plan.executionFeatures.map((feat, idx) => {
                  const isStrikethrough =
                    feat.startsWith("<s>") && feat.endsWith("</s>");
                  const featureText = isStrikethrough
                    ? feat.replace(/<\/?s>/g, "")
                    : feat;

                  return (
                    <li
                      key={idx}
                      className={`d-flex align-items-center mb-2 gap-1 fs-14 ${
                        isStrikethrough ? styles["strike-through"] : ""
                      }`}
                    >
                      {isStrikethrough ? (
                        <Image
                          src={"/assets/images/thynkwise/cancel.png"}
                          alt="cancel"
                          width={30}
                          height={30}
                          priority
                        />
                      ) : (
                        <Image
                          src={"/assets/images/thynkwise/checkmark.png"}
                          alt="cancel"
                          width={30}
                          height={30}
                          priority
                        />
                      )}
                      {featureText}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className={`${styles["always-visible-section"]} ${plan.title === "Prime" ? "mb-2" : ""}`}>
          <strong className={styles["plan-title"]}>Investment</strong>
          <div className="py-2">
            License -{" "}
            <span className={styles["plan-execution-fee"]}>
              Based on Platform Selection
            </span>
          </div>
          {plan.title !== "Prime" && (
          <div className="py-2">
            One time setup -{" "}
            <span className={styles["plan-execution-fee"]}>{plan.ots}</span>
          </div>
          )}
          {plan.title !== "Prime" && (
            <div className="align-items-center d-flex gap-1 py-2">
              <span className={styles["execution-label"]}>Execution Fee</span> -
              <div className="d-flex align-items-center gap-1">
                <span className={styles["execution-price"]}>{plan.price}</span>
                <div className="d-flex flex-column">
                  {plan.discount && (
                    <div className={styles["execution-discount"]}>{plan.discount}</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {plan.title === "Prime" && (
          <p className="text-center py-2 fs-13">
            "How much revenue is being left on the table due to inconsistent lead generation, scattered processes, and deals that fail to close predictably?"
          </p>
        )}
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

      {showEditForm && (
        <MyModal
          Title={
            showEditForm.title === "Free"
              ? "Register for Free Plan"
              : `Apply for ${showEditForm.title} Plan`
          }
          show={showModal}
          onHide={() => {
            setShowModal(false);
            setShowEditForm(null);
          }}
        >
          <PricingForm
            data={showEditForm.title}
            onFormSubmitSuccess={() => {
              setShowModal(false); // Close the modal
            }}
          />
        </MyModal>
      )}
    </>
  );
}
