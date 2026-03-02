

const DripifySection = () => {
  return (
    <section className="bg-white text-body">
      {/* Title / Intro */}
      <div className="container py-5">
        <h1 className="display-6 fw-bold mb-3">
          Dripify: Smarter LinkedIn Automation for Modern Sales Teams
        </h1>
        <p className="lead mb-0">
          Dripify solves this by offering smart LinkedIn automation: multi-step drip campaigns, team analytics, CRM integrations,
          and safety features that mimic human behavior. At <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span>, we help businesses use Dripify not just for automation,
          but as a scalable sales engine that drives revenue without risking LinkedIn account bans.
        </p>
      </div>

      {/* Why LinkedIn Prospecting Breaks at Scale */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">Why LinkedIn Prospecting Breaks at Scale</h2>
        <p className="mb-2">
          LinkedIn is the world’s largest professional network with 1B+ users. For SDRs, recruiters, and founders, it’s the top
          channel for B2B outreach. But here’s the challenge:
        </p>
        <ul className="mb-3">
          <li>SDRs spend hours sending connection requests manually.</li>
          <li>Follow-ups get forgotten.</li>
          <li>Team leads lack visibility into rep performance.</li>
          <li>LinkedIn’s built-in tools aren’t enough for structured campaigns.</li>
        </ul>
        <p className="mb-0">This creates missed opportunities and wasted time.</p>
      </div>

      <hr className="container my-5" />

      {/* Quick Benefits of Dripify */}
      <div className="container pb-4" id="benefits">
        <h2 className="h4 fw-semibold mb-3">Quick Benefits of Dripify</h2>
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-2">
            <thead>
              <tr>
                <th style={{ minWidth: 220 }}>Benefit</th>
                <th>What It Does</th>
                <th>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Smart Drip Campaigns</td>
                <td>Automate multi-step outreach (connect → follow-up → message)</td>
                <td>Ensures no lead slips through</td>
              </tr>
              <tr>
                <td>Safety Controls</td>
                <td>Mimics human behavior, random delays</td>
                <td>Reduces risk of LinkedIn bans</td>
              </tr>
              <tr>
                <td>Team Analytics</td>
                <td>Track SDR performance in real time</td>
                <td>Managers see what works</td>
              </tr>
              <tr>
                <td>CRM Integrations</td>
                <td>Connect with HubSpot, Salesforce, Zapier</td>
                <td>Leads flow seamlessly</td>
              </tr>
              <tr>
                <td>Lead Management</td>
                <td>Built-in CRM-like dashboard</td>
                <td>No need for spreadsheets</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-0">
          <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> ensures these features align with your ICP, messaging strategy, and sales workflows.
        </p>
      </div>

      <hr className="container my-5" />

      {/* What Teams Miss Without Dripify */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">What Teams Miss Without Dripify</h2>
        <p className="mb-2">Without automation, sales teams often:</p>
        <ul className="mb-3">
          <li>Waste 5–10 hours weekly on manual LinkedIn tasks.</li>
          <li>Fail to follow up consistently.</li>
          <li>Run broad, unpersonalized campaigns.</li>
          <li>Lack data to know what’s working.</li>
        </ul>
        <p className="mb-0">
          With Dripify, every step is automated yet personalized — but it requires careful planning. <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> creates playbooks
          for ICP targeting, message templates, and campaign structures.
        </p>
      </div>

      <hr className="container my-5" />

      {/* How Dripify Works */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">How Dripify Works</h2>
        <ol className="mb-3">
          <li className="mb-2">
            <strong>Campaign Builder:</strong> Drag-and-drop campaign sequences:
            <div className="mt-1">
              <ul className="mb-0">
                <li>Connection request → Wait 3 days → Message → Follow-up → If no reply, send alternate path.</li>
              </ul>
            </div>
          </li>
          <li className="mb-2">
            <strong>Team Management:</strong> Managers add SDRs, monitor daily activity, and optimize messaging across reps.
          </li>
          <li className="mb-2">
            <strong>Safety Layer:</strong> Dripify simulates natural human behaviour with random delays, respecting LinkedIn’s
            limits.
          </li>
          <li className="mb-2">
            <strong>CRM Integration:</strong> Sync leads directly with HubSpot, Salesforce, Pipedrive, or via Zapier.
          </li>
          <li className="mb-0">
            <strong>Analytics:</strong> Track campaign performance, reply rates, and conversions at both individual and team
            levels.
          </li>
        </ol>
        <p className="mb-0"><span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> ensures campaigns are optimized for ROI, not spam.</p>
      </div>

      <hr className="container my-5" />

      {/* Cost vs Worth */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">Cost vs Worth</h2>
        <p className="mb-2">Dripify pricing starts around $59–$99 per user per month.</p>
        <p>Compare this to manual outreach costs:</p>
        <div className="table-responsive">
          <table className="table table-bordered align-middle mb-2">
            <thead>
              <tr>
                <th style={{ minWidth: 220 }}>Option</th>
                <th>Monthly Cost</th>
                <th>Limitation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manual LinkedIn work</td>
                <td>$1,000+ SDR salary time</td>
                <td>Slow, error-prone</td>
              </tr>
              <tr>
                <td>Hiring more SDRs</td>
                <td>$3,000–5,000 per SDR/month</td>
                <td>Expensive scaling</td>
              </tr>
              <tr>
                <td>Generic tools</td>
                <td>$50–200</td>
                <td>Limited safety, poor analytics</td>
              </tr>
              <tr>
                <td>Dripify</td>
                <td>$59–99/user</td>
                <td>Automated, scalable, safe</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-0">
          ROI is clear: Dripify cuts manual effort while boosting campaign consistency. <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> ensures adoption is
          ROI-driven, not just “more automation.”
        </p>
      </div>

      <hr className="container my-5" />

      {/* Real Use Cases */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">Real Use Cases</h2>
        <ul className="mb-3">
          <li>Startups: Automate founder-led sales outreach.</li>
          <li>Agencies: Run multi-client LinkedIn campaigns with team analytics.</li>
          <li>Recruiters: Automate candidate sourcing and engagement.</li>
          <li>Enterprise SDR Teams: Standardize messaging across reps.</li>
        </ul>
        <p className="mb-0">
          <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> has helped clients using Dripify triple connection acceptance rates and boost replies by 40%.
        </p>
      </div>

      <hr className="container my-5" />

      {/* Why Teams Fail Without Guidance */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">Why Teams Fail Without Guidance</h2>
        <ol className="mb-3">
          <li className="mb-2">
            <strong>Spammy campaigns:</strong> Teams blast the same message → low response, account risk.
          </li>
          <li className="mb-2">
            <strong>No ICP targeting:</strong> Leads are too broad → wasted connections.
          </li>
          <li className="mb-0">
            <strong>Siloed workflows:</strong> LinkedIn leads stay in Dripify, not CRM.
          </li>
        </ol>
        <p className="mb-0">
          <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> avoids these traps by building precise ICP filters, humanized messaging frameworks, and CRM syncs.
        </p>
      </div>

      <hr className="container my-5" />

      {/* FAQs — Accordion */}
      <div className="container pb-4">
        <h2 className="h4 fw-semibold mb-3">FAQs About Dripify</h2>

        <div className="accordion" id="dripifyFaq">
          <div className="accordion-item mb-2">
            <h2 className="accordion-header" id="dfaq1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dfaq1c"
                aria-expanded="true"
                aria-controls="dfaq1c"
              >
                Is LinkedIn automation safe?
              </button>
            </h2>
            <div
              id="dfaq1c"
              className="accordion-collapse collapse show"
              aria-labelledby="dfaq1"
              data-bs-parent="#dripifyFaq"
            >
              <div className="accordion-body">
                Yes, if done correctly. Dripify mimics human behaviour. <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> ensures campaigns remain safe and effective.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header" id="dfaq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dfaq2c"
                aria-expanded="false"
                aria-controls="dfaq2c"
              >
                Can I personalize messages?
              </button>
            </h2>
            <div
              id="dfaq2c"
              className="accordion-collapse collapse"
              aria-labelledby="dfaq2"
              data-bs-parent="#dripifyFaq"
            >
              <div className="accordion-body">
                Yes, Dripify allows dynamic personalization. <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> helps craft copy that converts.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header" id="dfaq3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dfaq3c"
                aria-expanded="false"
                aria-controls="dfaq3c"
              >
                Do I need Sales Navigator?
              </button>
            </h2>
            <div
              id="dfaq3c"
              className="accordion-collapse collapse"
              aria-labelledby="dfaq3"
              data-bs-parent="#dripifyFaq"
            >
              <div className="accordion-body">
                Not mandatory, but highly recommended. <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> shows how to maximize Navigator + Dripify together.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2">
            <h2 className="accordion-header" id="dfaq4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dfaq4c"
                aria-expanded="false"
                aria-controls="dfaq4c"
              >
                Can teams collaborate?
              </button>
            </h2>
            <div
              id="dfaq4c"
              className="accordion-collapse collapse"
              aria-labelledby="dfaq4"
              data-bs-parent="#dripifyFaq"
            >
              <div className="accordion-body">
                Yes, Dripify has team management and performance dashboards.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="dfaq5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dfaq5c"
                aria-expanded="false"
                aria-controls="dfaq5c"
              >
                How is it different from Dux-Soup or Expandi?
              </button>
            </h2>
            <div
              id="dfaq5c"
              className="accordion-collapse collapse"
              aria-labelledby="dfaq5"
              data-bs-parent="#dripifyFaq"
            >
              <div className="accordion-body">
                Dripify offers better safety, campaign control, and analytics.
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="container my-5" />

      {/* Closing */}
      <div className="container pb-5">
        <h2 className="h4 fw-semibold mb-3">Turning LinkedIn Into a Sales Engine</h2>
        <p className="mb-2">
          LinkedIn prospecting doesn’t have to be manual and inconsistent. With Dripify, businesses automate outreach safely,
          manage teams at scale, and measure ROI.
        </p>
        <p className="mb-2">At <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span>, we:</p>
        <ul className="mb-3">
          <li>Build targeted campaigns.</li>
          <li>Train SDRs on safe automation.</li>
          <li>Integrate Dripify with CRMs.</li>
          <li>Deliver playbooks for continuous improvement.</li>
        </ul>
        <p className="mb-0">
          Ready to make LinkedIn your highest-converting sales channel? Contact <span style={{color:"#3959a7"}}>th</span><span style={{color:"#f6881f"}}>y</span><span style={{color:"#3959a7"}}>nk</span><span style={{color:"#f6881f"}}>WISE</span> today and let’s unlock Dripify’s
          potential for your team.
        </p>
         <div className="pt-4 text-center">
          <a
            href="https://try.dripify.com/faxqidvqq937"
            target="_blank"
            className="btn-custom"
          >
            Visit Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default DripifySection;
