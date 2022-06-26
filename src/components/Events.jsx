import React from "react";
import Heading from "./partials/Heading";
import PastEvent from "./partials/events/PastEvent";
import Slider from "./partials/Slider";
import Images1 from "../js/event1";
import Images2 from "../js/event2";
import Images3 from "../js/event3";

function Events () {
    return(
      <div className="events-page" id="events">
          <Heading txt1="Past" txt2="Events" />
          {/* <PastEvent/> */}
          <Slider images={Images1} height={600}/>
          <Slider images={Images2} height={600}/>
          <Slider images={Images3} height={500}/>
      </div>  
    );
}

export default Events