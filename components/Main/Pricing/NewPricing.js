"use client";

import { useState, useMemo } from "react";
import styles from "./NewPricing.module.css";
import PricingCard from "./PricingCard";

export default function NewPricing({ data }) {
  const tabsFromCMS = data?.tab || [];

  const normalizedTabs = useMemo(() => {
    return tabsFromCMS.map((tab) => ({
      ...tab,
      normalizedLabel: tab.label?.toLowerCase(),
    }));
  }, [tabsFromCMS]);

  const [activeTab, setActiveTab] = useState(
    normalizedTabs[0]?.normalizedLabel || ""
  );

  const [openStates, setOpenStates] = useState({});

  const toggleSectionForTab = (tab, section) => {
    setOpenStates((prev) => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [section]: !prev[tab]?.[section],
      },
    }));
  };

  const isSectionOpenForTab = (tab, section) => {
    return openStates[tab]?.[section] || false;
  };

  const getPlansForTab = (tabLabel) => {
    const tab = normalizedTabs.find(
      (t) => t.normalizedLabel === tabLabel
    );
    return tab?.plan || [];
  };

  // Keep original color logic
  const getSubLabelClass = (label) => {
    const lower = label.toLowerCase();
    if (lower === "annual") return styles["sub-orange"];
    if (lower === "quarterly") return styles["sub-purple"];
    if (lower === "half-yearly") return styles["sub-green"];
    return "";
  };

  return (
    <section className={styles["custom-table"]}>
      <div className="container py-5">

        {/* Main Description */}
        {data?.mainDescription && (
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mb-40">
              <div
                className={styles["main-description"]}
                dangerouslySetInnerHTML={{
                  __html: data.mainDescription,
                }}
              />
            </div>
          </div>
        )}

        {/* Tabs — EXACT ORIGINAL STRUCTURE */}
        <div className="text-center">
          <ul
            className={`nav nav-pills ${styles["custom-tab-container"]} justify-content-center gap-2 align-items-center`}
            id="myTab"
            role="tablist"
          >
            {normalizedTabs.map((tab) => (
              <li
                className="nav-item"
                role="presentation"
                key={tab.id}
              >
                <button
                  className={`nav-link ${
                    activeTab === tab.normalizedLabel
                      ? styles["active-tab"] +
                        " " +
                        styles["nav-link"]
                      : styles["inactive-tab"] +
                        " " +
                        styles["nav-link"]
                  }`}
                  onClick={() =>
                    setActiveTab(tab.normalizedLabel)
                  }
                  type="button"
                  role="tab"
                  aria-controls={tab.normalizedLabel}
                  aria-selected={
                    activeTab === tab.normalizedLabel
                  }
                >
                  {tab.label}

                  {tab.saveLabel && (
                    <span
                      className={`${styles["tab-sub-label"]} ${getSubLabelClass(
                        tab.label
                      )}`}
                    >
                      {tab.saveLabel}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div
          className="tab-content"
          id="pricingTabsContent"
        >
          {normalizedTabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.normalizedLabel
                  ? "show active"
                  : ""
              }`}
              id={tab.normalizedLabel}
              role="tabpanel"
            >
              <div className="row mt-4 justify-content-center">
                {getPlansForTab(tab.normalizedLabel).map(
                  (plan) => (
                    <div
                      className="col-md-4"
                      key={plan.id}
                    >
                      <PricingCard
                        plan={plan}
                        activeTab={activeTab}
                        isPlatformOpen={isSectionOpenForTab(
                          tab.normalizedLabel,
                          "platform"
                        )}
                        isExecutionOpen={isSectionOpenForTab(
                          tab.normalizedLabel,
                          "execution"
                        )}
                        togglePlatform={() =>
                          toggleSectionForTab(
                            tab.normalizedLabel,
                            "platform"
                          )
                        }
                        toggleExecution={() =>
                          toggleSectionForTab(
                            tab.normalizedLabel,
                            "execution"
                          )
                        }
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}