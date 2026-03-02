"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PricingForm from "../Main/Pricing/PricingForm";
import styles from "./PlanPopup.module.css";
import CountdownTimer from "../Main/Pricing/CountdownTimer";

const PlanPopup = ({ number }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility
  const pathname = usePathname(); // Detect route changes

  useEffect(() => {
    // Show popup on route change
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
    const timer = setTimeout(() => {
      setShowPopup(true);
      document.body.classList.add("no-scroll");
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll");
    };
  }, [pathname]); // Trigger effect on pathname change

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {/* Plan Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContainer}>
            <div
              className={"btn " + styles.closeButton}
              onClick={handleClosePopup}
            >
              &times;
            </div>
            <div className="row align-items-center">
              <div className="col-md-4 order-2 ">
                <Image
                  src={"/assets/images/about/vipinsharma-top.png"}
                  width={482}
                  height={468}
                  quality={100}
                  alt="shape1"
                  className="mobile-image w-100 h-auto " 
                  style={{ maxWidth: "300px" }}
                />
              </div>
              <div className="col-md-8  order-1 ">
                <h4 className="mb-4 text-start">
                  🎯 $99 Crash Course - FREE for a Limited Time! 🎯
                </h4>

                <p className={styles.h5}>
                  Want to master the tools 7-figure businesses use?<br></br>For
                  a limited time, grab this <b>$99 crash course</b> at{" "}
                  <b>no cost</b> and learn:<br></br>
                  <ul>
                    <li>The one platform to automate and scale.</li>
                    <li>How to generate leads on autopilot.</li>
                    <li>Strategies to dominate your market.</li>
                  </ul>
                  💡 <b>⏳ Hurry! Free spots are limited.</b>
                </p>

                <div className="text-start">
                  <p
                    className={styles.ctaText}
                    onClick={() => {
                      setShowForm(true); // Show the form
                      setShowPopup(false); // Hide the popup
                    }}
                  >
                    💼 Claim Your{" "}
                    <span className={styles.highlight}>Free Spot Now!</span>
                  </p>
                  <div>
                    <CountdownTimer
                      
                    />
                  </div>
                  <div className="price-container">
                    <div className="price">
                      <span className="number">$99</span>
                      <span className="label">Free</span>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <Image
                    src={process.env.SITE_LOGO}
                    alt="Site Logo"
                    width={180}
                    height={50}
                    priority
                    quality={100}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Form */}
      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContainer}>
            <div
              className={"btn " + styles.closeButton}
              onClick={handleCloseForm}
            >
              &times;
            </div>
            <PricingForm
              data="Free Plan" // Pass any necessary data to the PricingForm
              onFormSubmitSuccess={handleCloseForm} // Close the form on success
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PlanPopup;
