import React from "react";
import video from "../../../video/2021fall_bbq-mute.mp4";

export default function VideoContainer () {
    return (
        <div className="video-container">
            <div className="video-content">
                <div className="inner">
                    <h1>WELCOME to <em>UCSB TSA</em></h1>
                    <p>UCSB Taiwanese Student Association</p>
                </div>
            </div>
            <video autoPlay muted loop className="video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="video-overlay"></div>                
        </div>
    );

}
