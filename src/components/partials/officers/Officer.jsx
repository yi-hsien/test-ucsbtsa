import React from "react";

function Officer (props) {

    let image = require("../../../img/Officers/" + props.img );
    let igImage = require("../../../img/ig.png");
    let linkedInImage = require("../../../img/linkedin.png");

    return(
        <div className="officer" >
            <div className="officer-item">
                <div className="icon">
                    <img src={image} alt="office-face" />
                </div>
                <div className="text">
                    <h4>{props.txt1}</h4>
                    <p>{props.txt2}</p>
                </div>
                <a href= "https://www.instagram.com/lec_chen/" >
                    <img className= "ig" src ={igImage} alt="" />
                </a>
                <a href= "https://www.linkedin.com/in/alec-chen-745368195/" >
                    <img className= "linkedIn" src = {linkedInImage} alt="" />
                </a>
                {/* {isShown && (
                    <div>
                    I'll appear when you hover over the button. 
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default Officer;