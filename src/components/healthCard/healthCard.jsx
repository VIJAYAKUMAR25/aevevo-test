import React from "react";
import "../healthCard/healthCard.css";
import logo from '../assets/logo.JPG';
import health1 from '../assets/health1.webp';
import health2 from '../assets/health2.webp';
import health3 from '../assets/health3.webp';
import health4 from '../assets/health4.webp';
export function HealthCard(){
    return(
        <section>
            <div className="Healthhead">
                <img src={logo} alt=""width={50} height={50} />
                <span>Introducing Forward</span>
                <span>Designed to Prevent and Reverse Health Conditions</span>
            </div>
            <div className="healthcard my-4">
                <div className="card-m d-flex flex-column">
                    <span className="cardheading">Step 1</span>
                    <span className="cardtitle">Gather 85+ Data Points - Effortlessly</span>
                    <p>Regularly monitor and measure a wide range of physiological and biochemical biomarkers</p>
                    <img src={health1} className="healthimg" alt="" />
                </div>
                <div className="card-m d-flex flex-column">
                    <span className="cardheading">Step 2</span>
                    <span className="cardtitle">Review Your Holistic Health Evaluation</span>
                    <p>Determine your personal health risks across all major health systems with the help of 100+ expert doctors</p>
                    <img src={health2} className="healthimg" alt="" />
                </div>
            </div>
            <div className="healthcard my-4">
                <div className="card-m d-flex flex-column">
                    <span className="cardheading">Step 3</span>
                    <span className="cardtitle">Build and Follow Your Personalized Health Improvement Plan</span>
                    <p>With the support of our clinical experts, build and continually refine medical and wellness
                         protocols </p>
                    <img src={health3} className="healthimg"  alt="" />
                </div>
                <div className="card-m d-flex flex-column">
                    <span className="cardheading">Step 4</span>
                    <span className="cardtitle">Receive Continuous Expert Clinical Support from Forward</span>
                    <p>With our expert care team available around the clock, access unparalleled support and guidance anytime</p>
                    <img src={health4} className="healthimg" alt="" />
                </div>
            </div>
            <div className="btn-container d-flex justify-content-center align-items-center my-5">
                <button className="learn">Learn More &nbsp;<span className="bi bi-chevron-right"></span></button>
            </div>
        </section>
    )
}