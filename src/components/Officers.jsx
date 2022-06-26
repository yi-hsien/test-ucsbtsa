import React from "react";
import Heading from "./partials/Heading";
import Officer from "./partials/officers/Officer";


function Officers (){
    return(
        <div id="officers">
            <Heading txt1=" " txt2="Officers" />
            <div className="officers">
                <Officer img="Alec.jpg" txt1="Alec Chen / President" txt2="4th year / Stats &amp; Data Science"/>
                <Officer img="Ian.png" txt1="Ian Wu / President" txt2="4th year / Computer Engineering"/>
                <Officer img="Eric.jpg" txt1="Eric Hsieh / Secretary" txt2="3rd year / Computer Engineering"/>
                <Officer img="Ashley.png" txt1="Ashley Chou / Treasurer" txt2="3rd year / Economics &amp; Accountings"/>
                <Officer img="Jason.png" txt1="Jason Ko / Public Relation" txt2="3rd year / Economics"/>
                <Officer img="amy.png" txt1="Amy Wu / Treasurer" txt2="4th year / Economics and Accounting"/>
                <Officer img="evelyn.jpg" txt1="Evelyn Chen / Arts &amp; Designs" txt2="4th year / Communication, Film and media"/>
                <Officer img="ellie.jpg" txt1="Ellie Liu / Public Relations" txt2="3rd year / Economics and Accounting"/>
            </div>
        </div>
    );
}

export default Officers;