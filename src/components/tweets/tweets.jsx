import React from "react";
import '../tweets/tweet.css';
import tp1 from '../assets/tprofile1.JPG';
import tp2 from '../assets/tprofile2.JPG';
import tp3 from '../assets/tprofile3.JPG';
import tp4 from '../assets/tprofile4.JPG';
import tp5 from '../assets/tprofile5.JPG';
import tp6 from '../assets/tprofile6.JPG';
export function Tweets(){
    return(
        <div className="tweet">
            <div className="tweet-heading d-flex flex-column justify-content-center align-items-center">
                <p className="tweet-h1">HEAR FROM OUR MEMBERS</p>
                <p className="tweet-h2">Real tweets from real people</p>
            </div>
            <div className="tweetcard-parent mt-5">
                <div className="tweet-card">
                    <a href="#" className=" d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={tp1} className="rounded rounded-circle me-4" width={50} height={50} alt="" />
                            <div className="d-flex flex-column">
                                <p className="tcard-t1">Mike Rea, IDEA Pharma</p>
                                <span className="text-secondary tcard-t2">@ideapharma</span>
                            </div>
                        </div>
                        <span className="bi bi-twitter fs-2"></span>
                    </a>
                    <p>I’m always fascinated by answers that go to ‘worried about my data’. Personalisation has some way to go in healthcare, positively rather than as a threat. I wish all primary care was as good as <font className="text-primary">@goforward</font>, and that is about data-based insights…</p>
                    <span className="bi bi-heart"> 5</span>
                </div>
                <div className="tweet-card">
                    <a href="#" className=" d-flex justify-content-between">
                        <div className="d-flex">
                        <img src={tp2} className="rounded rounded-circle me-4" width={50} height={50} alt="" />
                        <div className="d-flex flex-column">
                            <p className="tcard-t1">
                            Steve Sarner</p>
                            <span className="text-secondary tcard-t2">@stevestarner</span>
                        </div>
                        </div>
                        <span className="bi bi-twitter fs-2"></span>
                    </a>
                    <p>For the first time in years as a patient of <font className="text-primary fw-bold">@goforward</font> I’m in a reactive mode with an illness and as always, they simply exceed expectations in every way. Responsive, consultative, proactive, accomodating. Simply world class <font className="fw-light text-primary">#healthcare</font> . Now to kick this bug!</p>
                    <span className="bi bi-heart"> 12</span>
                </div>
                <div className="tweet-card">
                    <a href="#" className=" d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={tp3} className="rounded rounded-circle me-4" width={50} height={50} alt="" />
                            <div className="d-flex flex-column">
                                <p className="tcard-t1">
                                Kervins Valcourt</p>
                                <span className="text-secondary tcard-t2">@kervsvk</span>
                            </div>
                        </div>
                        <span className="bi bi-twitter fs-2"></span>
                    </a>
                    <p>last night I had my first anxiety attack apparently I was to excited to start this week cause it was going to be life change. But <font className="text-primary fw-bold">@goforward</font> saved my life. Awesome tech would love to invest if I could. They are the future of medical tech man. 🙏🏿 <font className="fw-light text-primary">#simplythebest</font> #THANK_YOU #blessed</p>
                    <span className="bi bi-heart"> 5</span>
                </div>
            </div>
            <div className="tweetcard-parent mt-5" id="second-card">
                <div className="tweet-card">
                    <a href="#" className=" d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={tp4} className="rounded rounded-circle me-4" width={50} height={50} alt="" />
                            <div className="d-flex flex-column">
                                <p className="tcard-t1">
                                Stephen Jones🧢☂️7️⃣💡 🍎🦉⬆️</p>
                                <span className="text-secondary tcard-t2">@Stephan_p_jones</span>
                            </div>
                        </div>
                        <span className="bi bi-twitter fs-2"></span>
                    </a>
                    <p>If you’re looking to get healthy or meet some health goals this year I will swear <font className="text-primary fw-bold">@goforward</font> as in personally vouch for as in the first person who says it was a dud I’ll refund you your first payment (limit 1).</p>
                    <span className="bi bi-heart"> 3</span>
                </div>
                <div className="tweet-card" style={{height:"150px"}}>
                    <a href="#" className=" d-flex justify-content-between">
                        <div className="d-flex">
                        <img src={tp5} className="rounded rounded-circle me-4" width={50} height={50} alt="" />
                        <div className="d-flex flex-column">
                            <p className="tcard-t1">
                            Jon Dishotsky</p>
                            <span className="text-secondary tcard-t2">@jon_dish</span>
                        </div>
                        </div>
                        <span className="bi bi-twitter fs-2"></span>
                    </a>
                    <p>Ummm, <font className="text-primary fw-bold">@goforward</font> is mindblowingly good. This is the future of healthcare.</p>
                    <span className="bi bi-heart"> 24</span>
                </div>
                <div className="tweet-card">
                    <a href="#" className=" d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={tp6} className="rounded rounded-circle me-4" width={50} height={50} alt="" />
                            <div className="d-flex flex-column">
                                <p className="tcard-t1">
                                Rajeev Viswanathan</p>
                                <span className="text-secondary tcard-t2">@queryisrajeev</span>
                            </div>
                        </div>
                        <span className="bi bi-twitter fs-2"></span>
                    </a>
                    <p>Starting to get a glimpse of how @goforward will be able to improve healthcare for all. I believe Forward will fundamentally change our lives, and thus what healthcare is. (traditional model of costs will be irrelevant)</p>
                    <span className="bi bi-heart"> 9</span>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-5">
                <button className="tweetbtn">See All Reviews &nbsp; <span className="bi bi-chevron-right"></span></button>
            </div>
        </div>
    )
}