import { React } from "react";
import styles from "./ProgressBar.module.css";
import { ReactComponent as Circle } from "../../Images/Circle.svg";
import { ReactComponent as Check } from "../../Images/check.svg";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProgressLine = styled.div`
   position: relative;
   width: ${(prop) => prop.width};
   height: 100%;
   background-color: skyblue;
   transition: 0.7s ease all;
   z-index: 1;
`;

export default function ProgressBar() {
   const Circles = [Circle, Circle, Circle];
   const status_redux = useSelector((state) => state.status.value.status);
   return (
      <div className={styles.ProgressBarContainer}>
         <div className={styles.ProgressLineWrapper}>
            <ProgressLine
               width={
                  status_redux === 0
                     ? "0%"
                     : status_redux === 1
                     ? "25%"
                     : status_redux === 2
                     ? "50%"
                     : status_redux === 3
                     ? "75%"
                     : "100%"
               }
            />
         </div>
         {Circles.map((Circle, index) => (
            <div className={styles.CircleWrapper}>
               <Circle
                  id={index}
                  style={{ transition: "0.7s ease all" }}
                  key={index}
                  width="50px"
                  height="50px"
                  fill={
                     status_redux > index * 2 ? "skyblue" : "rgb(220,220,220)"
                  }
               />
               <div className={styles.CheckWrapper}>
                  <Check
                     style={{ transition: "0.7s ease all" }}
                     id={index}
                     width="50px"
                     height="50px"
                     fill={status_redux > index * 2 ? "white" : "none"}
                  />
               </div>
            </div>
         ))}
      </div>
   );
}
