import React from "react";
import "../accordian/accordian.css";
import Logoaccordian from "../assets/web-icon.JPG";
import Capture from '../assets/Capture.JPG'
export function Accordian() {
  return (
    <div>
        <section className="main">
      <div className="">
        <img src={Logoaccordian} width={60} height={60} alt="" />
        <h2 className="a-heading">
          Healthcare that’s available whenever you want it — with or without
          insurance
        </h2>
      </div>
      <div className="accordianmain">
        <div className="accordiancard d-flex flex-column gap-4">
          <h3>$49 monthly</h3>
          <p>Pay with FSA/HSA</p>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Test 85+ biomarkers
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Personalized
            longevity health assessment
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Personalized care
            plans using tailored medical protocols
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Routine blood work
            in the CarePod
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Routine physical
            evaluations in the CarePod
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Integrated wearable
            and sensor data
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Access to ALL of
            your health data in an easy to use dashboard
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>24/7 access to your
            expert clinical team
          </span>
          <span className="payment-text">
            <span className="bi bi-check2 pe-3 fs-2"></span>Prescriptions
            delivered to your home
          </span>
        </div>
        <div className="accordiancard">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item my-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What if I have insurance?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Our membership simplifies healthcare and empowers you with information to seamlessly provide care - a level of convenience that's hard to find in traditional healthcare systems.

                If a member needs additional tests or procedures that are not included in their Forward membership, then Forward will try to identify a non-Forward option that fits their needs. For members with insurance, that typically means Forward will coordinate with the insurance company to obtain prior authorizations for coverage, identify in-network providers, and facilitate specialist referrals. Forward does not bill insurance.

                Forward is not health insurance and is not a substitute for comprehensive health insurance. While Forward does not require that its members have insurance, we encourage our members who can afford it to obtain comprehensive health insurance coverage.
                </div>
              </div>
            </div>

            <div className="accordion-item my-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What if I don't have insurance?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Without insurance, healthcare costs can accumulate quickly when paying out of pocket. Each doctor's visit, lab order, and all the costs associated with lab draws or physical diagnostics can add up to a significant amount, especially when you consider the frequency with which you might need these services to maintain or monitor your health.

                Forward’s membership includes primary care services and basic lab work at a cost that is much lower than the average monthly insurance premium.

                Forward is not health insurance and is not a substitute for comprehensive health insurance. While Forward does not require that its members have insurance, we encourage our members to obtain comprehensive health insurance coverage.
                </div>
              </div>
            </div>

            <div className="accordion-item my-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can I use my HSA/FSA funds to pay for Forward?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Eligible HSA and FSA plans may be used to pay for Forward membership. Ultimately, it's up to your FSA or HSA provider to determine whether Forward's membership fee can be paid with your FSA/HSA funds. We're happy to provide documentation for you to submit to your FSA or HSA provider. Please reach out via chat or call us at 833-33-GOFWD for assistance.
                </div>
              </div>
            </div>
            <div className="accordion-item my-3">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseFour" 
                        aria-expanded="true" 
                        aria-controls="collapseFour"
                    >
                        How often can I get my biomarkers measured?
                    </button>
                </h2>
                <div 
                    id="collapseFour" 
                    className="accordion-collapse collapse show" 
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    With Forward, you have access to the CarePod 7 days a week to get blood work and other physical diagnostics as often as you want.* Your personalized longevity plan will also recommend a retesting cadence for specific biomarkers based on your personal risks.

                    *The same type of blood based lab test cannot be performed more than once in a seven day period. California members may be subject to limits on CarePod visits per year, see Forward’s Membership Agreement for details.
                    </div>
                </div>
            </div>
            <div className="accordion-item my-3">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseFive" 
                        aria-expanded="true" 
                        aria-controls="collapseFive"
                    >
                        How are labs paid for?
                    </button>
                </h2>
                <div 
                    id="collapseFive" 
                    className="accordion-collapse collapse show" 
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    Forward provides and covers the cost of the following point-of-care lab tests, performed at the CarePod: Comprehensive Metabolic Panel, Lipid Panel, Rapid Urine Pregnancy Test, Rapid Strep A Test, Rapid Mono Test, Rapid HIV Test, POC Urinalysis, and POC Glucose.

                    For insured members who seek lab testing that is not covered by the cost of membership, Forward can help facilitate labs through your insurance provider, or find the lowest out-of-pocket cost for you.

                    For those without insurance, Forward can negotiate to secure the favorable out-of-pocket prices for lab tests to ensure  you pay less.

                    Our goal is to make healthcare accessible and affordable, providing you with cost-effective options without compromising on quality or convenience.



                    </div>
                </div>
            </div>
            <div className="accordion-item my-3">
                <h2 className="accordion-header">
                    <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseSix" 
                        aria-expanded="true" 
                        aria-controls="collapseSix"
                    >
                        How does billing work?
                    </button>
                </h2>
                <div 
                    id="collapseSix" 
                    className="accordion-collapse collapse show" 
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    You will be charged for your first month of Forward on the day you sign up for your membership. You will then be charged monthly for your membership, on a go forward basis, on the same day each subsequent month. The monthly fee includes all services outlined under <font className="fw-bold text-primary">your monthly membership</font>.


                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="quote">
       <div className="quote-main text-center d-flex flex-column align-items-center gap-5">
        <img src={Capture} width={70} height={70} alt="" />
       <p className="quote-text">My weight, cholesterol, and blood pressure make me feel as if <font className="fw-bold">my health is 10x better than it was 10 years ago</font></p>
       <p className="david">DAVID, FORWARD MEMBER</p>
       </div>
    </div>
    </div>
  );
}
