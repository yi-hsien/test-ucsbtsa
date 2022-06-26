import React from "react";

function PastEvent (props) {
    // try using spicr
    let background = require("../../../img/Events/02.05.21.jpg");
    return(
        <div>
            <div className="past-event" style={{
                backgroundImage: `url(${background})`
                }}>
                <div className="container ">
                    <div className="content">
                        <br/> <br/>
                        <h2>UCSB TSA FALL 2021 1st General Meeting</h2>
                        <span>Sept 25, 2020</span>
                        <p> HELLO gauchos🌊🌊🌊:
                            經歷了一年的zoom university 已經完全忘記學校長什麼樣子了怎麼辦？
                            又或是第一次來到學校，對於Campbell Hall 跟 Girvetz Hall傻傻分不清？
                            不用緊張！我們將在First General Meeting帶著大家一起熟悉校園📍
                            另外我們也準備了有趣的活動讓大家能認識新的朋友👯‍♀️☀️😎
                            這麼超值的行程還不快手刀報名起來🗓
                        </p> 
                        <p>
                            Hope y’all enjoy the vibe out there while we count down to the start of our school year.
                            And prepare for our IN-PERSON welcome event at the end of the first week!!!✨✨✨
                            We will meet at
                            🏫HSSB (Humanities and Social Sciences Building)
                            🕙Saturday, September 25th 10:00 a.m. - 5:00 pm
                            We will show you around the Campus and the beautiful Goleta Beach🏖
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastEvent;