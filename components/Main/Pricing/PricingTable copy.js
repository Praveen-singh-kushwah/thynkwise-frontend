import style from "./PricingTable.module.css";
export default function PricingTable() {
  return (
    <>
      <section className={style["custom-table"]}>
      <div className="container table-responsive ">
        <table className=" table">
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <colgroup></colgroup>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>
                <h2>Free</h2>
              </th>
              <th>
                <h2>Basic</h2>
              </th>
              <th>
                <h2>Professional</h2>
                <p class="promo">Our most valuable package!</p>
              </th>
              <th>
                <h2>Performance</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Details</th>
              <td>Onboarding on benefits</td>
              <td>Platform with One time set up</td>
              <td>All that is in basic</td>
              <td>Everything in Basic & Professional</td>
            </tr>
            <tr>
              <th>Key Features</th>
              <td>Free session on why ?</td>
              <td>Platform set up</td>
              <td>Website Visitor integration with Seqeunce</td>
              <td>Sales process audit</td>
            </tr>
            <tr>
              <th></th>
              <td>30 mins of training mins O2O coaching</td>
              <td>Initial data migration</td>
              <td>Website Visitor integration with Seqeunce</td>
              <td>Sales process audit</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>Persona / Intent Keywords basis ICP</td>
              <td>Define business metrics</td>
              <td>Business planning & revenue projections</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>Customize business dispositions</td>
              <td>Building List and automate enrichment</td>
              <td>Dedicated execution consultant</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>90 Mins of Training / Onboarding time</td>
              <td>Refine workflows</td>
              <td>
                Team role definition, Job Descriptions, Top Grading interviews
              </td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>Deal Pipeline - Configuration</td>
              <td>Automate tasks</td>
              <td>
                Execution plan tailored based on business size, goals, and needs
              </td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>One external integration</td>
              <td>2 Check-ins per month for team upskilling</td>
              <td>&mdash;</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>Support by platform</td>
              <td>Remote Support in addition to platform support</td>
              <td>Lead & Deal Qualification Framework</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>60 Mins of Training credits</td>
              <td>Email set up & performance</td>
              <td>Performance Management</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>Training & Configuration of Intent, Power Ups</td>
              <td>Revenue Metrics Alignment</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>Scripts, Email templates</td>
              <td>Review metrics</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>Custom GPTs</td>
              <td>Leadership dashboard 5 by 5 metrics</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>120 mins of training credits</td>
              <td>&mdash;</td>
            </tr>
            <tr>
              <th>Best For</th>
              <td>For users on free licenses on Apollo.io</td>
              <td>
                Businesses needing a foundational digital platform without
                ongoing commitments (maximum value with 5+ user licenses).
              </td>
              <td>
                Businesses needing additional support during the initial
                postsetup phase.
              </td>
              <td>
                Organizations seeking a fully integrated solution with a partner
                dedicated to delivering measurable outcomes.
              </td>
            </tr>
            <tr>
              <th>Pricing</th>
              <td>Free</td>
              <td>License Cost: Based on platform selection</td>
              <td>License Cost: Based on platform selection</td>
              <td>Contact Thynkwise Team</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>One Time Execution Setup Fee: $999</td>
              <td>One Time Execution Setup Fee: $499</td>
              <td>
                Model: Retainer plus revenuesharing (Contact Sales Team for
                details)
              </td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>Monthly Fee with Support: $999 (minimum 6 months)</td>
              <td>&mdash;</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>Quarterly - $ 2699 USD</td>
              <td>&mdash;</td>
            </tr>
            <tr>
              <th></th>
              <td>&mdash;</td>
              <td>&mdash;</td>
              <td>Quarterly - $ 2699 USD</td>
              <td>Half Yearly - $ 4799 USD</td>
            </tr>
          </tbody>
          <tfoot>
              <tr>
                <th></th>
                <td>
                  <a href="/contact-us">Apply Now</a>
                </td>
                <td>
                  <a href="/contact-us">Apply Now</a>
                </td>
                <td>
                  <a href="/contact-us">Apply Now</a>
                </td>
                <td>
                  <a href="/contact-us">Apply Now</a>
                </td>
              </tr>
            </tfoot>
        </table>
      </div>
      </section>
   
    </>
  );
}
