import React from "react";
import styles from "./ProgressBar.module.css";
import styled from "styled-components";
import Arrow from "./Arrow";
import { useSelector } from "react-redux";

const Line = styled.div`
   position: absolute;
   width: 130px;
   height: 3px;
   left: ${(prop) => prop.left};
   right: ${(prop) => prop.right};
   background-color: #868686;
   z-index: 1;
`;
const LineColor = styled.div`
   position: absolute;
   width: ${(prop) => prop.width};
   height: 3px;
   left: ${(prop) => prop.left};
   right: ${(prop) => prop.right};
   background-color: #6abce2;
   z-index: 2;
   transition: 0.6s ease all;
`;

export default function ProgressBar_Line() {
   const status_redux = useSelector((state) => state.status.value.status);

   return (
      <div className={styles.ProgressBarContainer}>
         <Arrow status_redux={status_redux} id={0} />
         <Line width={status_redux >= 1 ? "140px" : "0px"} left="45px" />
         <LineColor
            width={status_redux === 1 || status_redux === 2 ? "130px" : "0px"}
            left="45px"
         />
         <Arrow status_redux={status_redux} id={1} />
         <Line right="45px" />
         <LineColor width={status_redux >= 2 ? "140px" : "0px"} left="225px" />
         <Arrow status_redux={status_redux} id={2} />
      </div>
   );
}
