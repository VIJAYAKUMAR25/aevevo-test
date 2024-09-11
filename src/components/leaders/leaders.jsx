import React from "react";
import '../leaders/leaders.css';
import leader1 from '../assets/docp1.JPG';
import leader2 from '../assets/docp2.JPG';
import leader3 from '../assets/docp3.JPG';
export function Leaders(){
    return(
        <div className="leaders d-flex flex-column">
            <div className="d-flex flex-column  align-items-start gap-4">
                <span className="leaders-t1">Advised by top healthcare leaders</span>
                <p className="leaders-t2">We’ve sought out the brightest in the medical community for our Medical Advisory Board—to ensure we’re building a quality, valuable and state-of-the-art healthcare service for our members</p>
            </div>
            <div className="leaders-container">
                <div className="leaders-card gap-2 d-flex flex-column justify-content-center align-items-center">
                    <img src={leader1} className="rounded rounded-circle" width={100} height={100} alt="" />
                    <span className="fs-3 fw-bold ">Robert Wachter, MD</span>
                    <p className="leadercard-p text-secondary">Chair of the Department of Medicine
                    University of California, San Francisco</p>
                </div>
                <div className="leaders-card gap-2 d-flex flex-column justify-content-center align-items-center">
                    <img src={leader2} className="rounded rounded-circle" width={100} height={100} alt="" />
                    <span className="fs-3 fw-bold ">Regina Benjamin, MD</span>
                    <p className="leadercard-p text-secondary">Former U.S. Surgeon General</p>
                </div>
                <div className="leaders-card gap-2 d-flex flex-column justify-content-center align-items-center">
                    <img src={leader3} className="rounded rounded-circle" width={100} height={100} alt="" />
                    <span className="fs-3 fw-bold ">Rick Lanman, MD</span>
                    <p className="leadercard-p text-secondary text-center">Former Chief Medical Officer
                    Guardant Health</p>
                </div>
            </div>
        </div>
    )
}