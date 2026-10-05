import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Pages
import Home from "./pages/Home";
import  Navbar  from "./components/Navbar";
import Room from "./pages/Rooms";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";


function App() {

  return (
    <div className="App">

    <Navbar/>

      <Routes>

        < Route path="/" element={<Home />} />
         < Route path="/rooms" element={<Room />} />
        < Route path="/gallery" element={<Gallery />} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;