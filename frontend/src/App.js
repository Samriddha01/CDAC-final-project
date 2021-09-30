import React from "react";
import logo from './logo.svg';
import './App.css';
import BasicRouting from "./BasicRouting";
import Navbar from "./Navbar";
import Footer from "./Footer";


//app funtion main function
function App() {
  return (
    // <div style={{ backgroundImage: `url(/Images/bg.jpeg)`,
    // backgroundRepeat: 'no-repeat'}}>
    <div>
      <div className="App">
        <Navbar></Navbar>
        <BasicRouting></BasicRouting>
        <Footer></Footer>
       
      </div>
    </div>
    //  </div>
  );

}


export default App;


