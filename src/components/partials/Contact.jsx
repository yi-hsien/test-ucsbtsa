import React from "react";
import Heading from "./Heading";

function Contact () {
    let igImage = require("../../img/ig.png");
    let fbImage = require("../../img/fb.png");
    return (
        <div className="contact">
            <Heading txt1="Contact" txt2="Us" />
            <div className="contact-us-container">
                <a className="contact-us-icon" href= "https://www.instagram.com/ucsb_tsa/" >
                    <img className= "ig" src ={igImage}  alt="" />
                </a>
                <a className="contact-us-icon" href= "https://www.facebook.com/groups/UCSBTSA" >
                    <img className= "fb" src = {fbImage} alt="" />
                </a>
            </div>
        </div>
    );
}

export default Contact;