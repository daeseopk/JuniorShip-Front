import { React, useRef } from "react";
import styles from "./SocialLogin.module.css";

export default function SocialLogin() {
   const Logo = useRef([]);
   const Icon = useRef([]);
   const GoogleIcon = require("../../Images/google.png");
   const AppleIcon = require("../../Images/apple.png");
   const NaverIcon = require("../../Images/naver.png");
   const Icons = [GoogleIcon, AppleIcon, NaverIcon];

   const onMouseEnter_icon = (e) => {
      if (parseInt(e.target.id) === 0) {
         // 구글
         Logo.current[e.target.id].style = "filter:none";
         Icon.current[e.target.id].style =
            "outline: 2px solid rgba(255,0,0,0.2);";
      } else if (parseInt(e.target.id) === 1) {
         // 애플
         Logo.current[e.target.id].style = "filter:none";
         Icon.current[e.target.id].style =
            "outline: 2px solid rgba(0,0,0,0.2);";
      } else {
         // 네이버
         Logo.current[e.target.id].style =
            "filter: invert(70%) sepia(94%) saturate(391%) hue-rotate(73deg) brightness(100%) contrast(105%);";
         Icon.current[e.target.id].style =
            "outline: 2px solid rgba(51, 255, 104,0.3);";
      }
   };
   const onMouseLeave_icon = (e) => {
      Logo.current[e.target.id].style =
         "filter: invert(75%) sepia(30%) saturate(2%) hue-rotate(102deg) brightness(94%) contrast(92%);";
      Icon.current[e.target.id].style = "outline: 2px solid #FFF;";
   };
   return (
      <div className={styles.SocialLoginWrapper}>
         {Icons.map((icon, index) => (
            <div
               ref={(elem) => (Icon.current[index] = elem)}
               className={styles.Icon}
               onMouseLeave={onMouseLeave_icon}
               onMouseEnter={onMouseEnter_icon}
               id={index}
               backgroundcolor="white">
               <img
                  alt="SocialIcon"
                  ref={(elem) => (Logo.current[index] = elem)}
                  className={styles.Logo}
                  width="25px"
                  height="25px"
                  src={icon}
               />
            </div>
         ))}
      </div>
   );
}
