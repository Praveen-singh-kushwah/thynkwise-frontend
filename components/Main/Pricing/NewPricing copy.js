// components/NewPricing.js
"use client";
import { useState } from "react";
import styles from "./NewPricing.module.css";
import PricingCard from "./PricingCard";

export default function NewPricing() {
  const tabs = ["monthly", "quarterly", "half-yearly", "lifetime"];

  const [activeTab, setActiveTab] = useState("monthly");

  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isExecutionOpen, setIsExecutionOpen] = useState(false);

  const togglePlatform = () => {
    setIsPlatformOpen((prev) => !prev);
    if (!isPlatformOpen) setIsExecutionOpen(false);
  };

  const toggleExecution = () => {
    setIsExecutionOpen((prev) => !prev);
    if (!isExecutionOpen) setIsPlatformOpen(false);
  };

  return (
    <>
      <section className={styles["custom-table"]}>
        <div className="container py-5">
          <div className="text-center">
            <ul
              className={`nav nav-pills ${styles["custom-tab-container"]} justify-content-center gap-2 align-items-center`}
              id="myTab"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li className="nav-item" role="presentation" key={tab}>
                  <button
                    className={`nav-link ${
                      activeTab === tab
                        ? styles["active-tab"] + " " + styles["nav-link"]
                        : styles["inactive-tab"] + " " + styles["nav-link"]
                    }`}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                    role="tab"
                    aria-controls={tab}
                    aria-selected={activeTab === tab}
                  >
                    {tab.toUpperCase()}
                    <span
                      className={`${styles["tab-sub-label"]} ${
                        tab === "lifetime"
                          ? styles["sub-orange"]
                          : /* Commented out conditions for other cases */
                            // tab === "quarterly"
                            // ? styles["sub-purple"]
                            // : tab === "monthly"
                            // ? styles["sub-gray"]
                            // : styles["sub-green"]
                            ""
                      }`}
                    >
                      {tab === "lifetime"
                        ? "Save 90%"
                        : /* Commented out conditions for other cases */
                          // tab === "quarterly"
                          // ? "Save 25%"
                          // : tab === "monthly"
                          // ? "Save 70%"
                          // : "Save 50%"
                          ""}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content" id="pricingTabsContent">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tab-pane fade ${
                  activeTab === tab ? "show active" : ""
                }`}
                id={tab}
                role="tabpanel"
              >
                <div className="row mt-4">
                  {getPricingData(tab).map((plan, index) => (
                    <div className="col-md-4" key={index}>
                      <PricingCard
                        plan={plan}
                        activeTab={activeTab}
                        isPlatformOpen={isPlatformOpen}
                        isExecutionOpen={isExecutionOpen}
                        togglePlatform={togglePlatform}
                        toggleExecution={toggleExecution}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function getPricingData(type) {
  const pricingData = {
    lifetime: [
      {
        title: "Basic",
        description:
          "Businesses hungry for a foundational digital platform without ongoing commitments (maximum value with 5+ user licenses)",
        price: "$1999",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "$ 1999",
        period: "/Monthly",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Smart",
        description:
          "Businesses wih need for extended support during the initial post setup phase.",
        price: "$2699",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Quarterly",
        discount: "(5% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Prime",
        description:
          "Organizations seeking a fully integrated solution with a partner dedicated to delivering measurable outcomes.",
        price: "$101990",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Yearly",
        discount: "(15% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "Business Goal Definition",
          "Process Roadmap ( Inbound, Outbound, Partnerships)",
          "Day in life of X",
          "Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)",
          "Sales Incentive Plan",
          "Deal Coaching",
          "Business Metrics",
          "Custom GPTs",
          "Leadership dashboard 5 by 5 metrics",
          "Huddles &  Reviews definition",
          "Top grading Hiring framework / Job Desrcription / Hiring Support*",
          "Business Execution Manager",
          "Behavioural & Technical Assessments Framework",
          "Check-ins ( 45 mins)",
          "Session ( Industry Expert Coaching)",
        ],
      },
    ],
    quarterly: [
      {
        title: "Basic",
        description:
          "Businesses hungry for a foundational digital platform without ongoing commitments (maximum value with 5+ user licenses)",
        price: "$1999",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "$ 1999",
        period: "/Monthly",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Smart",
        description:
          "Businesses wih need for extended support during the initial post setup phase.",
        price: "$2699",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Quarterly",
        discount: "(5% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Prime",
        description:
          "Organizations seeking a fully integrated solution with a partner dedicated to delivering measurable outcomes.",
        price: "$101990",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Yearly",
        discount: "(15% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "Business Goal Definition",
          "Process Roadmap ( Inbound, Outbound, Partnerships)",
          "Day in life of X",
          "Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)",
          "Sales Incentive Plan",
          "Deal Coaching",
          "Business Metrics",
          "Custom GPTs",
          "Leadership dashboard 5 by 5 metrics",
          "Huddles &  Reviews definition",
          "Top grading Hiring framework / Job Desrcription / Hiring Support*",
          "Business Execution Manager",
          "Behavioural & Technical Assessments Framework",
          "Check-ins ( 45 mins)",
          "Session ( Industry Expert Coaching)",
        ],
      },
    ],
    monthly: [
      {
        title: "Basic",
        description:
          "Businesses hungry for a foundational digital platform without ongoing commitments (maximum value with 5+ user licenses)",
        price: "$1999",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "$ 1999",
        period: "/Monthly",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Smart",
        description:
          "Businesses wih need for extended support during the initial post setup phase.",
        price: "$2699",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Quarterly",
        discount: "(5% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Prime",
        description:
          "Organizations seeking a fully integrated solution with a partner dedicated to delivering measurable outcomes.",
        price: "$101990",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Yearly",
        discount: "(15% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "Business Goal Definition",
          "Process Roadmap ( Inbound, Outbound, Partnerships)",
          "Day in life of X",
          "Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)",
          "Sales Incentive Plan",
          "Deal Coaching",
          "Business Metrics",
          "Custom GPTs",
          "Leadership dashboard 5 by 5 metrics",
          "Huddles &  Reviews definition",
          "Top grading Hiring framework / Job Desrcription / Hiring Support*",
          "Business Execution Manager",
          "Behavioural & Technical Assessments Framework",
          "Check-ins ( 45 mins)",
          "Session ( Industry Expert Coaching)",
        ],
      },
    ],
    "half-yearly": [
      {
        title: "Basic",
        description:
          "Businesses hungry for a foundational digital platform without ongoing commitments (maximum value with 5+ user licenses)",
        price: "$1999",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "$ 1999",
        period: "/Monthly",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Smart",
        description:
          "Businesses wih need for extended support during the initial post setup phase.",
        price: "$2699",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Quarterly",
        discount: "(5% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "<s>Business Goal Definition</s>",
          "<s>Process Roadmap ( Inbound, Outbound, Partnerships)</s>",
          "<s>Day in life of X</s>",
          "<s>Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)</s>",
          "<s>Sales Incentive Plan</s>",
          "<s>Deal Coaching</s>",
          "<s>Business Metrics</s>",
          "<s>Custom GPTs</s>",
          "<s>Leadership dashboard 5 by 5 metrics</s>",
          "<s>Huddles &  Reviews definition</s>",
          "<s>Top grading Hiring framework / Job Desrcription / Hiring Support*</s>",
          "<s>Business Execution Manager</s>",
          "<s>Behavioural & Technical Assessments Framework</s>",
          "<s>Check-ins ( 45 mins)</s>",
          "<s>Session ( Industry Expert Coaching)</s>",
        ],
      },
      {
        title: "Prime",
        description:
          "Organizations seeking a fully integrated solution with a partner dedicated to delivering measurable outcomes.",
        price: "$101990",
        type: "Monthly",
        subType: "Paid Monthly",
        ots: "NIL",
        period: "Yearly",
        discount: "(15% Discount)",
        platformFeatures: [
          "Onboarding & Setup",
          "Data Migration",
          "Define Ideal Customer Profile in system",
          "Setup Custom Dispositions",
          "Mailbox Configuration",
          "Hubspot Integration",
          "Website Visitor Intel",
          "Emails Campaigns Strategy ( Domains, Mailboxes , Warmup*)",
          "Seo Audit",
          "Automate Pipeline with workflows",
          "Platform Training & Certification (90 mins)",
        ],
        executionFeatures: [
          "Business Goal Definition",
          "Process Roadmap ( Inbound, Outbound, Partnerships)",
          "Day in life of X",
          "Sales Playbook (Process,Scripts, Rebuttals  and other Guidelines)",
          "Sales Incentive Plan",
          "Deal Coaching",
          "Business Metrics",
          "Custom GPTs",
          "Leadership dashboard 5 by 5 metrics",
          "Huddles &  Reviews definition",
          "Top grading Hiring framework / Job Desrcription / Hiring Support*",
          "Business Execution Manager",
          "Behavioural & Technical Assessments Framework",
          "Check-ins ( 45 mins)",
          "Session ( Industry Expert Coaching)",
        ],
      },
    ],
  };

  return pricingData[type];
}
