import React from "react";
import Home from "./Home";
import Booking from "./Booking";
import Playing from "./Playing";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


class App extends React.Component{

  render(){
    return (
      <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/playing" element={<Playing />} />
      </Routes>
    
  
  </div>
    );
  }  
}

export default App;
