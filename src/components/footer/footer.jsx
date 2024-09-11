import React from "react";
import "../footer/footer.css";

export function Footer() {
  return (
        <div>
                <footer className="d-flex flex-column  align-items-center">
            <span className="footer-title">Frequently Asked Questions</span>
            <div className="accordion w-100 my-5" id="accordionExample">
                <div className="accordion-item bg-white py-3">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefOne"
                    aria-expanded="true"
                    aria-controls="collapsefOne"
                    >
                    Which connected medical devices can I integrate into my Forward
                    app?
                    </button>
                </h2>
                <div
                    id="collapsefOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body ">
                    Some of the more popular connected medical devices we integrate
                    with are: Apple Watch, Garmin, Oura Ring, WHOOP, CGMs like Dexcom
                    G7, Eight Sleep, Withings Smart Scale, Omron Wireless Blood
                    Pressure Monitor, and more
                    <br />
                    <br />
                    We can actually help you aggregate and learn from any data source
                    that connects to the Apple Health Kit!
                    </div>
                </div>
                </div>

                <div className="accordion-item py-3">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefTwo"
                    aria-expanded="false"
                    aria-controls="collapsefTwo"
                    >
                    What is included in the personalized risk assessment and longevity
                    plan?
                    </button>
                </h2>
                <div
                    id="collapsefTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    Your personalized risk assessment will look at all of your
                    measured biomarkers, current lifestyle, individual health history,
                    and family health history to uncover specific risks across
                    cardiovascular health, metabolic health, neurological health,
                    cancer risks, and other health systems.
                    <br />
                    <br />
                    Your personalized longevity plan will include recommended actions
                    across exercise, nutrition, sleep, stress management, and
                    medications / supplements along with a recommended remeasurement
                    cadence for the key biomarkers that matter for you.
                    </div>
                </div>
                </div>

                <div className="accordion-item py-3">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefThree"
                    aria-expanded="false"
                    aria-controls="collapsefThree"
                    >
                    What privacy measures are in place?
                    </button>
                </h2>
                <div
                    id="collapsefThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    We’ve designed Forward to give you access to more information so
                    you can feel in control of your health. That approach extends to
                    include control over your personal health information.
                    <br />
                    <br />
                    We do not sell your health data, and we implement tools like
                    encryption to safeguard your privacy.
                    <br />
                    <br />
                    We employ physical, technical, and administrative controls to
                    protect your personal information. You can learn more about
                    Forward’s use and protection of personal information by reading
                    the <span className="text-primary" >Privacy Policy</span> and{" "}
                    <span className="text-primary">Notice of Privacy Practices</span>.
                    </div>
                </div>
                </div>
            </div>
            </footer>
            <div className="bg-white py-3 text-center">
                <p className="fs-5"style={{color:'#555'}}>California Privacy Notice·Do not sell or share my personal information.</p>
            </div>
        </div>
  );
}
