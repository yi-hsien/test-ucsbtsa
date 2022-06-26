import React from "react";

function About () {
    let background = require("../../../img/about_us-2.jpg");
    return (
        <div className="about-us-container" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.527)),url(${background})`
            }}>
            <div className="about-us-description">
                <p>
                <br/><br/>
                    The Taiwanese Student Association (TSA) at UC Santa Barbara is a non-profit, non-political student-led organization that promotes and celebrates Taiwanese culture. Our mission is to enrich students’ social and cultural collegiate experience, who share a common interest in Taiwan.
                <br/><br/>
                    加州大學聖塔巴巴拉分校的台灣學生協會 (TSA) 是一個非營利、非政治性的學生組織，旨在推廣和連結台灣文化。我們的使命是對台灣有興趣的學生，豐富其社交和文化的大學體驗。
                </p>
            </div>
        </div>
    );
}

export default About