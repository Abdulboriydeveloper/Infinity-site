import React from "react";
import './Home.css';
import Header from "../Header/Header";
import AsosiyYunalishlar from "../AsosiyYunalish/AsosiyYunalishlar";
import NegaAynanBiz from "../NegaAynanBiz/NegaAynanBiz";
import Gallereya from "../Gallereya/Gallereya";

function App() {
    return (
      <>
      <div>
        <Header/>
        <AsosiyYunalishlar/>
        <NegaAynanBiz/>
        <Gallereya/>
      </div>
      </>
    )
}

export default App;