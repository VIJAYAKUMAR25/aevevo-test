import React from "react";
import "../nextgen/nextgen.css";
import GENIMG from "../assets/nextgen.webp";
import Ngcard01 from "../assets/ngcard1.webp";
import Ngcard02 from "../assets/ngcard2.webp";
import Ngcard03 from "../assets/ngcard3.webp";
import Ngcard04 from "../assets/ngcard4.webp";
export function Nextgen() {
  return (
    <article className="nextgen-parent">
      <div className="d-flex flex-column gap-4">
        <span className="nextgen-t1">
          Powered by Next Generation Medical Insights
        </span>
        <span className="nextgen-t2 mb-3">
          Introducing Forward CarePod™ micro-clinics. Revolutionary access to
          advanced diagnostics, on your schedule
        </span>
        <img src={GENIMG} className="genimg" alt="" />
      </div>
      <div className="ngcard-parent mt-5">
        <div className="ng-card d-flex flex-column gap-5">
          <p className="ngcard-t1 ">Advanced Bloodwork, On Your Schedule</p>
          <img src={Ngcard01} className="ngimg" alt="" />
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng1"
                  aria-expanded="true"
                  aria-controls="collapseng1"
                >
                  85+ Blood Biomarkers
                </button>
              </h2>
              <div
                id="collapseng1"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Personalized care starts by deeply understanding the state of
                  your current health. We can test for the most important
                  clinical markers and then determine your re-testing cadence
                  based on your initial results, health goals, and health
                  history.
                </div>
              </div>
            </div>

            <div className="accordion-item py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng2"
                  aria-expanded="false"
                  aria-controls="collapseng2"
                >
                  Testing At Your Convenience
                </button>
              </h2>
              <div
                id="collapseng2"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Book ahead and forget about the long wait times. Schedule your
                  visit to the CarePod at a time that suits you. At your
                  schedule time, simply log in on the external check-in screen
                  to begin your visit!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng3"
                  aria-expanded="false"
                  aria-controls="collapseng3"
                >
                  Painless Blood Draw
                </button>
              </h2>
              <div
                id="collapseng3"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="fw-bold text-primary">
                    This feature is coming soon:
                  </p>
                  <br />
                  Forward uses the Tasso+ blood collection device to get your
                  sample in under 5 minutes. The Tasso+ sticks to the skin with
                  a light adhesive. When the button is pressed, a vacuum forms
                  and a lancet pricks the surface of the skin. The vacuum draws
                  blood out of the capillaries and into a compatible container
                  attached to the bottom of the Tasso Button.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ng-card d-flex flex-column gap-5">
          <span className="ngcard-t1">Full Body Scans with CarePod™</span>
          <img src={Ngcard02} className="ngimg" alt="" />
          <div className="accordion " id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng4"
                  aria-expanded="true"
                  aria-controls="collapseng4"
                >
                  Heart Health Scan
                </button>
              </h2>
              <div
                id="collapseng4"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Within minutes, our non-invasive scan captures comprehensive
                  data about your heart's health, including arrhythmia and
                  murmur detection, and uses AI to screen for valvular disease
                  and heart failure. With this information, your clinical team
                  facilitates prompt intervention and management.
                </div>
              </div>
            </div>

            <div className="accordion-item py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng5"
                  aria-expanded="false"
                  aria-controls="collapseng5"
                >
                  Millimeter Precision 3D Body Modeling
                </button>
              </h2>
              <div
                id="collapseng5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  See yourself like never before by capturing your custom 3D
                  body model via hundreds of sensors in seconds and track
                  changes to your body over time.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng6"
                  aria-expanded="false"
                  aria-controls="collapseng6"
                >
                  Dermatologic Skin Scan
                </button>
              </h2>
              <div
                id="collapseng6"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The dermatoscope offers a detailed analysis of your skin's
                  condition. Within moments, capture high-resolution images to
                  identify a wide range of skin concerns, from moles and lesions
                  to signs of sun damage and early detection of skin cancer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ngcard-parent mt-5">
        <div className="ng-card d-flex flex-column gap-5">
          <p className="ngcard-t1 ">Integrated Wearables and Sensor Data</p>
          <img src={Ngcard03} className="ngimg" alt="" />
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng7"
                  aria-expanded="true"
                  aria-controls="collapseng7"
                >
                  Centralized Health Data
                </button>
              </h2>
              <div
                id="collapseng7"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your health management by consolidating all your
                  health data—from wearable devices like the Apple Watch, CGM,
                  Oura Ring, and remote blood pressure monitors—directly into
                  the Forward app. We’ll aggregate all of your data by body
                  system to give you a clearer understanding of how each of your
                  major health systems are functioning. We'll use your
                  contextual data to draw insights into the impact of daily
                  activities and habits on your health, and create more
                  personalized and effective management strategies.
                </div>
              </div>
            </div>

            <div className="accordion-item py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng8"
                  aria-expanded="false"
                  aria-controls="collapseng8"
                >
                  Data-Driven Insights
                </button>
              </h2>
              <div
                id="collapseng8"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Forward can help you understand the data that matters most for
                  your health. Forward will review your data and reach out to
                  you if any of your metrics flag as suboptimal. Your app
                  contains care protocols, presenting you with daily action
                  items that prompt you to record your habits track how your
                  levels evolve over time.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng9"
                  aria-expanded="false"
                  aria-controls="collapseng9"
                >
                  Custom Health Plans
                </button>
              </h2>
              <div
                id="collapseng9"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Your health journey should be as dynamic as you are. Using all
                  of your health data - from wearables to repeated biomarker
                  measurements - and the health goals you have, we co-create
                  personalized care protocols, tailored to your unique needs.
                  Our team of doctors will ensure your plan stays aligned with
                  your evolving health journey.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ng-card d-flex flex-column gap-5">
          <span className="ngcard-t1">
            Clinical Plans, Synced to Your Phone
          </span>
          <img src={Ngcard04} className="ngimg" alt="" />
          <div className="accordion " id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng10"
                  aria-expanded="true"
                  aria-controls="collapseng10"
                >
                  Personalized nutrition
                </button>
              </h2>
              <div
                id="collapseng10"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Your journey is unique. It’s personal. Your plan should be
                  personalized too, right? No more one-size-fits-all diets.
                  Whatever your weight loss goals are and whatever your
                  situation is, we're here to help with a program crafted by you
                  and your Forward doctor - for you.
                </div>
              </div>
            </div>

            <div className="accordion-item py-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng11"
                  aria-expanded="false"
                  aria-controls="collapseng11"
                >
                  Prescription medication
                </button>
              </h2>
              <div
                id="collapseng11"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="accordian-list">
                    <li>
                      Access effective GLP-1 weekly injections like Wegovy®*,
                      Zepbound®*, Ozempic®* and Mounjaro®*
                    </li>
                    <li>
                      Assess need for medications purpose-built to reduce
                      cravings like Contrave®*
                    </li>
                    <li>
                      Medically boost your metabolism with medications
                      specifically crafted to improve calorie burn
                    </li>
                    <br />
                    *Where clinically appropriate Please review necessary safety
                    information for medications. Wegovy® (semaglutide),
                    Zepbound® (tirzepatide), and Contrave® (naltrexone HCI &
                    bupropion HCI) are specifically FDA-approved for weight
                    loss. Ozempic® (semaglutide) and Mounjaro® (tirzepatide) are
                    FDA-approved for type 2 diabetes treatment, but may be
                    prescribed off-label for weight loss at a healthcare
                    provider’s discretion. Prior to use, it's crucial to fully
                    understand the potential risks associated with semaglutides
                    and tirzepatide, including serious side effects like the
                    risk of thyroid C-cell tumors. Individuals with a personal
                    or family history of medullary thyroid carcinoma (MTC) or
                    multiple endocrine neoplasia syndrome type 2 (MEN 2) should
                    avoid semaglutide and tirzepatide medications. Risks
                    associated with naltrexone HCI & bupropion HCI include
                    increased risk of suicidal thinking; monitor for worsening
                    and emergence of suicidal thoughts and behaviors. Always
                    consult the necessary safety information for these
                    medications.
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseng12"
                  aria-expanded="false"
                  aria-controls="collapseng12"
                >
                  24/7 clinician messaging
                </button>
              </h2>
              <div
                id="collapseng12"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                    Support and professional guidance for your weight loss journey are always just a message away. Whether you have questions about your weight loss plan, need to refine your goals, or are considering different options, a clinician is readily available to chat whenever you need.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center align-items-center my-5">
                        <button className="ngbtn">
                            About CarePod &nbsp;<span className="bi bi-chevron-right"></span>
                        </button>
      </div>
    </article>
  );
}
