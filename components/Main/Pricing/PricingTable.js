"use client";
import MyModal from "@/components/Common/MyModal";
import { useState } from "react";
import PricingForm from "./PricingForm";
import style from "./PricingTable.module.css";

const pricingData = {
  sections: [
    {
      title: "Plans",
      columns: ["Free", "Basic", "Smart", "Prime"],
      data: [
        {
          category: "Best for",
          values: [
            "Users on free licenses on Apollo.io",
            "Businesses needing a foundational digital platform without ongoing commitments (maximum value with 5+ user licenses).",
            "Businesses needing additional support during the initial postsetup phase.",
            "Organizations seeking a fully integrated solution with a partner dedicated to delivering measurable outcomes.",
          ],
        },
        {
          category: "Onboarding & Setup",
          values: [
            "Onboarding Benefits & Free Session on 'Why?'",
            "Platform with One-time Setup",
            "Platform with One-time Setup + Support",
            "Setup Platform + Process + People",
          ],
        },
        {
          category: "Training & Coaching",
          values: [
            "30 mins of training with O2O coaching",
            "90 Mins of Training/Onboarding time",
            "120 Mins of Training/Onboarding time",
            "180 Mins of Training/Onboarding time",
          ],
        },
        {
          category: "Consultant",
          values: ["", "", "", "Dedicated execution consultant"],
        },
        {
          category: "Execution Plan",
          values: [
            "",
            "",
            "",
            "Execution plan tailored based on business size, goals, and needs.",
          ],
        },
        {
          category: "External Integrations",
          values: [
            "",
            "",
            "One external integration",
            "All Required external Integrations  (Basis Compatiobilty)",
          ],
        },
        {
          category: "Check-ins",
          values: [
            "",
            "",
            "2 Checkins per month for team upskilling",
            "8 Check Ins per month for team upskilling",
          ],
        },
        {
          category: "Support",
          values: [
            "",
            "Support by platform",
            "Remote Support in addition to platform support",
            "Remote Support in addition to platform support",
          ],
        },
        {
          category: "Data Migration",
          values: [
            "",
            "Initial data migration",
            "Data migration (Basis Compatibility)",
            "Data migration (Basis Compatibility)",
          ],
        },
        {
          category: "Website Integration",
          values: [
            "",
            "",
            "Website Visitor integration with Sequence",
            "Website Visitor integration with Sequence",
          ],
        },
        {
          category: "Marketing Integration",
          values: [
            "",
            "",
            "HubSpot integration for inbound",
            "HubSpot integration for inbound",
          ],
        },
        {
          category: "Persona/Intent Keywords",
          values: [
            "",
            "",
            "Define Persona/Intent Keywords basis ICP",
            "Define Persona/Intent Keywords basis ICP",
          ],
        },
        {
          category: "Business Metrics",
          values: [
            "",
            "",
            "Define business metrics",
            "Define business metrics",
          ],
        },
        {
          category: "Business Planning",
          values: [
            "",
            "",
            "Business planning & revenue projections",
            "Business planning & revenue projections",
          ],
        },
        {
          category: "Business Dispositions",
          values: [
            "",
            "",
            "Customize business dispositions",
            "Customize business dispositions",
          ],
        },
        {
          category: "Data Enrichment",
          values: [
            "",
            "",
            "Building List and automate enrichment",
            "Building List and automate enrichment",
          ],
        },
        {
          category: "Workflows",
          values: ["", "", "Refine workflows", "Refine workflows"],
        },
        {
          category: "Team",
          values: [
            "",
            "",
            "Team role definition, Job Descriptions, Top Grading interviews",
            "Team role definition, Job Descriptions, Top Grading interviews",
          ],
        },
        {
          category: "Deals",
          values: [
            "",
            "",
            "Setup Deal Pipieline Configuration",
            "Setup Deal Pipieline Configuration",
          ],
        },
        {
          category: "Tasks",
          values: ["", "", "Setup Task Automations", "Setup Task Automations"],
        },
        {
          category: "Emails Campaigns",
          values: [
            "",
            "",
            "Email set up & performance",
            "Email set up & performance",
          ],
        },
        {
          category: "Scripts & Templates",
          values: [
            "",
            "",
            "Design Call Scripts, Email templates",
            "Design Call Scripts, Email templates",
          ],
        },
        {
          category: "Dialer",
          values: [
            "",
            "",
            "Setup Dialer with dispositions",
            "Setup Dialer with dispositions",
          ],
        },
        {
          category: "Custom GPTs",
          values: [
            "",
            "One Time Execution Setup Fee: $999",
            "Setup Dialer with dispositions",
            "Setup Dialer with dispositions",
          ],
        },
        {
          category: "Metrics",
          values: ["", "", "", "Revenue Metrics Alignment with sales"],
        },
        {
          category: "Leadership Dashboard",
          values: [
            "",
            "",
            "Leadership dashboard 5 by 5 metrics",
            "Leadership dashboard 5 by 5 metrics",
          ],
        },
        {
          category: "License cost",
          values: [
            "",
            "Based on platform selection",
            "Based on platform selection",
            "Based on platform selection",
          ],
        },
        {
          category: "Consulting Fee",
          values: [
            "<del>$49</del> <strong>FREE</strong>",
            "OneTime Execution Setup Fee: <del>$1999</del> $999",
            "OneTime Execution Setup Fee: <del>$1999</del> $499",
            "Contact thynkWISE Team",
          ],
        },
        {
          category: "",
          values: [
            "",
            "",
            "Monthly Fee with Support: $999*  (minimum 6 months)",
            "",
          ],
        },
        {
          category: "",
          values: ["", "", "Quarterly  - $ 2699 USD", ""],
        },
        {
          category: "",
          values: ["", "", "Half Yearly - $ 4799 USD", ""],
        },
      ],
    },
  ],
};

export default function PricingTable() {
  const [showEditForm, setShowEditForm] = useState(null); // State for showing the form
  const [showModal, setShowModal] = useState(false); // State for managing modal visibility

  const handleApplyNowClick = (plan) => {
    setShowEditForm(plan); // Set the plan as data for the form
    setShowModal(true); // Show the modal
  };

  const section = pricingData.sections[0];

  return (
    <>
      <section className={style["custom-table"]}>
        <div className="container table-responsive">
          <table className="table">
            <colgroup></colgroup>
            <colgroup></colgroup>
            <colgroup></colgroup>
            <colgroup></colgroup>
            <colgroup></colgroup>

            <thead>
              <tr>
                <th>&nbsp;</th>
                {section.columns.map((col, idx) => (
                  <th key={idx}>
                    <h2>{col}</h2>
                    {col === "Smart" && (
                      <p className="promo d-lg-block d-none">
                        Our most valuable package!
                      </p>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.data.map((row, idx) => (
                <tr key={idx}>
                  <th>{row.category}</th>
                  {row.values.map((value, i) => (
                    <td key={i} dangerouslySetInnerHTML={{ __html: value }} />
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                {section.columns.map((col, idx) => (
                  <td key={idx}>
                    {col === "Free" ? (
                      <button
                        onClick={() => handleApplyNowClick(col)}
                        className={style["footer-button"]}
                      >
                        Register
                      </button>
                    ) : (
                      <button
                        onClick={() => handleApplyNowClick(col)}
                        className={style["footer-button"]}
                      >
                        Apply
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Conditional rendering of the modal component */}
      {showEditForm && (
        <MyModal
          Title={
            showEditForm === "Free"
              ? "Register for Free Plan"
              : `Apply for ${showEditForm} Plan`
          }
          show={showModal}
          onHide={() => {
            setShowModal(false);
            setShowEditForm(null);
          }}
        >
          <PricingForm
            data={showEditForm}
            onFormSubmitSuccess={() => {
              setShowModal(false);
              // setShowEditForm(null);
            }}
          />
        </MyModal>
      )}
    </>
  );
}
