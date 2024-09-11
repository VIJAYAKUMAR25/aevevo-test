import React from "react";
import '../healthTracking/healthtrackings.css';
import HP1 from '../assets/hp1.JPG';
import HP2 from '../assets/hp2.JPG';
import HP3 from '../assets/hp3.JPG';
import HP4 from '../assets/hp4.JPG';
import HP5 from '../assets/hp5.JPG';
import HP6 from '../assets/hp6.JPG';
import HP7 from '../assets/hp7.JPG';
import HP8 from '../assets/hp8.JPG';
export function Healthtrackings(){
    return(
        <div className="container-fluid">
            <div className="hp-main">
                <div className="hp-text d-flex flex-column">
                    <span className="hp-t1">HAND-PICKED BIOMARKERS</span>
                    <p className="hp-t2">Analysis Across 8 Key Domains</p>
                    <p className="hp-t3">Evaluate your health and reveal your personal risk factors, unexplained symptoms, and conditions across major health domains</p>
                </div>
                <div className="hp-img">
                    
                </div>
            </div>
            <div className="healthpcard px-5">
                    <div className="cardmain d-flex flex-column">
                        <img src={HP1} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Heart Health</p>
                        <p className="fs-3 fw-light">15 Biomarkers</p>
                    </div>
                    <div className="cardmain d-flex flex-column">
                        <img src={HP2} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Liver Health</p>
                        <p className="fs-3 fw-light">5 Biomarkers</p>
                    </div>
                    <div className="cardmain d-flex flex-column">
                        <img src={HP3} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Energy & Performance</p>
                        <p className="fs-3 fw-light">36 Biomarkers</p>
                    </div>
                    <div className="cardmain d-flex flex-column">
                        <img src={HP4} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Male & Female Hormones</p>
                        <p className="fs-3 fw-light">10 Biomarkers</p>
                    </div>
            </div>
            <div className="healthpcard my-5 px-5">
            <div className="cardmain d-flex flex-column">
                        <img src={HP5} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Metabolism</p>
                        <p className="fs-3 fw-light">5 Biomarkers</p>
                    </div>
                    <div className="cardmain d-flex flex-column">
                        <img src={HP6} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Kidney Health</p>
                        <p className="fs-3 fw-light">5 Biomarkers</p>
                    </div>
                    <div className="cardmain d-flex flex-column">
                        <img src={HP7} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Electrolytes & Nutrients</p>
                        <p className="fs-3 fw-light">10 Biomarkers</p>
                    </div>
                    <div className="cardmain d-flex flex-column">
                        <img src={HP8} alt="" width={55} height={50}/>
                        <p className="fw-bold fs-3">Cancer Risk</p>
                        <p className="fs-3 fw-light">Screen common cancers
                        </p>
                    </div>
            </div>
            <div className="healthbtn-container d-flex justify-content-center align-items-center my-5">
                <button className="healthbtn my-5">
                Biomarkers & Conditions&nbsp;<span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    )
}