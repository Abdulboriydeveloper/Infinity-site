import React from "react";
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Ielts from "./components/Ielts/Ielts";
import Foundation from "./components/Foundation/Foundation";
import Frontend from "./components/Fronend/Frontend";
import Backend from "./components/Backend/Backend";
import Web from "./components/Web Dasturlash/Web"
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path='/' element = {< Home />} />
            <Route exact path='/Ielts' element = {< Ielts />} />
            <Route exact path='/Web' element = {< Web />} />
            <Route exact path='/Foundation' element = {< Foundation />} />
            <Route exact path='/Frontend' element = {< Frontend />} />
            <Route exact path='/Backend' element = {< Backend />} /> 
            <Route exact path='/About' element = {< About />} />
            <Route exact path='/Contact' element = {< Contact />} />
            <Route exact path='/Registration' element = {<Registration />} />
        </Routes>
        <Footer />
        </BrowserRouter>


    )
}

export default App;