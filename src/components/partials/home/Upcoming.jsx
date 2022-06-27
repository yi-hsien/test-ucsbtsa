import React from "react";

function Upcoming () {
    let background = require("../../../img/about_us-2.jpg"); // change background
    return (
        <div className="event" style={{
            backgroundImage: `url(${background})`
            }} >
            <div className="container">
                <div className="col-md-5 col-md-offset-7">
                    <div className="content">
                        <p>coming up ...</p>
                        <h2>UCSB TSA FALL 2022 Orientation</h2>
                        <span>Sept 25, 2020</span>
                        <p> HELLO gauchos🌊🌊🌊:
                            Hope y’all enjoy the vibe out there while we count down to the start of our school year.
                            And prepare for our IN-PERSON welcome event at the end of the first week!!!✨✨✨
                            We will meet at
                            🏫HSSB (Humanities and Social Sciences Building)
                            🕙Saturday, September 25th 10:00 a.m. - 5:00 pm
                            We will show you around the Campus and the beautiful Goleta Beach🏖
                        </p> 
                        <div className="simple-btn">
                            <a href="#">RSVP NOW!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Upcoming