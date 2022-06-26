import React from "react";
import VideoContainer  from "./partials/home/VideoContainer";
import Heading from "./partials/Heading";
import About from "./partials/home/About";

function Home(){

    return (
        <div className="home" id="home">
            <VideoContainer/>
            <Heading txt1="About" txt2="Us" />
            <About />

            
        </div>
    );
}
export default Home;