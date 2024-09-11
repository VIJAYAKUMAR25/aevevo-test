import React from "react";
import '../hero/hero.css';
import brand1 from '../assets/brand-1.webp';
import brand2 from '../assets/brand-2.webp';
import brand3 from '../assets/brand-3.webp';
import brand4 from '../assets/brand-4.webp';
export function Hero(){
    return(
        <div>
            <main>
            <h1>Measure What Matters <br />Improve Your Health</h1>
            <p className="herop">Powered by CarePod™</p>
            <button className="heroBtn">Am I a Candidate? &nbsp; <span className="bi bi-chevron-right"></span></button>
        </main>
        <div className="brand">
            <div className="d-flex">
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
            </div>
            <div className="d-flex">
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
            </div>
        </div>
        </div>
        
    )
}