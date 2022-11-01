import React from "react";
import { useState } from "react";
import style from "./profile.module.css";
import share from "../images/_Avatar share button.png";
import ProfileImg from "../images/ProfileImg.jpg";

const Profile = () => {
 const [slackName, setSlackName]=  useState(false);

 const showSlackHandler = ()=>{
  setSlackName(true);
 }

  return (
    <div id={style.profileSection} onClick={showSlackHandler}>
      <div id={style.imgContainer}>
        <img className={style.share} src={share} alt= "share" />
        <img id={style["profile-img"]} src={ProfileImg} alt="Profile" />
      </div>
      <span id={style.twitter}>Temi_Ogunyemi</span>
      {slackName && <span id={style.slack}>Oluwakeshi</span>}
    </div>
  );
};
export default Profile;
