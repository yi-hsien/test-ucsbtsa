import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Contact, Home, Events, Officers} from "./components";
import "./App.css"

function App(){
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/officers" element={<Officers/>}/>
        </Routes>
      </Router>
      <Contact/>
      <Footer/>
    </div>
  );

}
export default App