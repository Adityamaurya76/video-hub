import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Upload from "./Components/Upload";
import Videos from "./Components/Videos";
function App() {
  return(
  <Router>
    <Header/>
  <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/videos" element ={<Videos/>}/>
    <Route path="/upload" element ={<Upload/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/signUp" element ={<SignUp/>}/>
  </Routes>
  <Footer/>
  </Router>
  );
}

export default App;
