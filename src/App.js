import React from "react";
import Profile from "./Components/profile";
import LinkSection from "./Components/LinkSection";
import zuri from "./images/Zuri.Internship_Logo.png";
import I4G from "./images/I4G.png";
import "./App.css";

const App =()=>{
  return (
    <main className="main">
      <Profile></Profile>
      <LinkSection></LinkSection>
      <footer className="footer">
        <img src={zuri} alt="zuri"/>
        <p className="text">HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G" />
      </footer>
    </main>
  );
}

export default App;