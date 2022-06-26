import React from "react";

function Heading(props){
    return(
        <div className="page-heading about-us-header">
            <div className="container">
                <div className="heading-content">
                    <h1> {props.txt1} <em> {props.txt2} </em></h1>
                </div>
            </div>
        </div>
    );
}

export default Heading