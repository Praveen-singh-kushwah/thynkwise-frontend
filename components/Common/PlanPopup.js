"use client";

import { useState, useEffect } from "react";
import styles from "./PlanPopup.module.css"; // Import CSS Module
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PricingForm from "../Main/Pricing/PricingForm";
import MyModal from "./MyModal";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

export default function PlanPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    if (!pathname) return;

    const lastShown = localStorage.getItem("planPopupLastShown");
    const today = new Date().toDateString(); // Just the date (no time)

    if (lastShown === today) {
      return; // Already shown today
    }

    const timer = setTimeout(() => {
      setShowPopup(true);
      localStorage.setItem("planPopupLastShown", today);
    }, 15000); // 15 seconds delay

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleOpenFormModal = () => {
    setIsFormModalOpen(true);
    setShowPopup(false);
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup && !isFormModalOpen) return null; // Don't render the popup if not shown

  return (
    <>
      {showPopup && (
        <div className={styles.overlay} onClick={handleClosePopup}>
          <div
            className={`${styles.container} container bg-white rounded shadow`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            {/* Close Button */}
            <button
              className={`${styles.closeButton}`}
              onClick={handleClosePopup}
              aria-label="Close"
            >
              ×
            </button>

            <div className="row g-0">
              {/* Left-hand side */}
              <div className="col-lg-8 col-md-12 p-4">
                <p className={`${styles.title}`}>
                  <span className={styles.price}>$99</span> Crash Course{" "}
                  <span className={`${styles.offer}`}>
                    - FREE For a Limited Time!{" "}
                  </span>
                </p>

                <hr />
                <ul className={styles.features}>
                  <p>
                    Here's the truth:
                    <br />
                    Most business leaders fail because they don't have the right
                    systems.
                    <br />
                  </p>
                  <p>
                    With this $99 crash course (yours FREE today), you'll
                    discover:
                  </p>

                  <li>
                    <span className={styles.checkmark}>✔</span> The ONE platform
                    that automates your business and saves you hundreds of
                    hours.
                  </li>
                  <li>
                    <span className={styles.checkmark}>✔</span> The SECRET
                    formula for attracting high-quality leads every day.
                  </li>
                  <li>
                    <span className={styles.checkmark}>✔</span> How to maximize
                    your tools to scale profits faster than ever before.
                  </li>
                </ul>
                <p>
                  🔥 Join the 500+ business leaders already transforming their
                  companies.
                </p>
                <p>⏳ Hurry! Free spots are limited.</p>

                <div className="d-flex ps-4">
                  <img
                    src="/assets/images/kk.png"
                    alt="Krisshna Nair"
                    className={`${styles.profilePic} rounded-circle`}
                  />
                  <div>
                    <p className={`${styles.quote}`}>
                      "This crash course changed the way I think about scaling.
                      Tools that once confused me now drive my business
                      forward!” - <strong>Krishna Kumar Nair</strong>, Founder &
                      CEO - Ksoft Technologies"
                    </p>
                  </div>
                </div>
                <div className="align-items-center d-flex flex-column">
                  <div className="mt-2">
                    <button
                      className={`${styles.ctaButton} btn btn-danger btn-lg`}
                      onClick={handleOpenFormModal}
                    >
                      <FaArrowRight /> Claim Your Free Spot Now !
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-center text-muted">
                      $99 value — yours FREE!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right-hand side */}
              <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center position-relative p-3">
                <div className={`${styles.offerBadge}`}>
                  <CountdownTimer
                    endTime={Date.now() + 30 * 24 * 60 * 60 * 1000}
                  />
                </div>
                <Image
                  src="/assets/images/about/vipinsharma-top.png"
                  width={482}
                  height={468}
                  quality={100}
                  alt="Coach Image"
                  className={"mobile-image " + styles["margin"]}
                  style={{ maxWidth: "350px" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Form Modal */}
      <MyModal show={isFormModalOpen} onClose={handleCloseFormModal}>
        <PricingForm data="Free" onFormSubmitSuccess={handleCloseFormModal} />
      </MyModal>
    </>
  );
}
