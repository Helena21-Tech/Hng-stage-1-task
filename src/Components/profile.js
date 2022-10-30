import React from "react";
import style from "./profile.module.css";
import ProfileImg from "../images/ProfileImg.jpg";

const Profile = () => {
  return (
    <div id={style.profileSection}>
      <div id={style.imgContainer}>
        <img id={style["profile-img"]} src={ProfileImg} alt="Profile" />
      </div>
      <span id={style.twitter}>Temi_Ogunyemi</span>
      <span id={style.slack}>Oluwakeshi</span>
    </div>
  );
};
export default Profile;
