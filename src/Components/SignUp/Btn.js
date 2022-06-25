import React from "react";
import styles from "./Btn.module.css";
import styled from "styled-components";
import { setStatus_plus, setStatus_minus } from "../../Redux/status";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ReactComponent as Arrow } from "../../Images/ArrowBtn.svg";

const Button = styled.div`
   display: flex;
   width: ${(prop) => prop.width};
   height: 60px;
   background-color: f0f0f3;
   border-radius: 15px;
   box-shadow: 10px 10px 24px 0 rgba(13, 39, 80, 0.16);
   margin-right: ${(prop) => prop.marginRight};
   margin-left: ${(prop) => prop.marginLeft};
   align-items: center;
   justify-content: center;
   visibility: ${(prop) => prop.visibility};
   opacity: ${(prop) => prop.opacity};
   transform: ${(prop) => prop.transform};
   transition: 0.5s ease all;
`;

export default function Btn({ activeBtn }) {
   const status_redux = useSelector((state) => state.status.value.status);
   const dispatch = useDispatch();
   const onClickBtn = (e) => {
      // 버튼 활성화 조건이 충족될 떄만 동작
      if (e.target.id === "prev") {
         if (status_redux === 0) return;
         else dispatch(setStatus_minus());
      } else if (e.target.id === "next") {
         if (status_redux === 4) return;
         else dispatch(setStatus_plus());
      }
   };

   return (
      <div className={styles.BtnContainer}>
         <Button
            marginLeft="20px"
            marginRight="20px"
            width="60px"
            style={{ cursor: "pointer" }}
            backgroundcolor="skyblue"
            visibility={status_redux === 0 ? "hidden" : "visible"}
            opacity={status_redux === 0 ? "0" : "1"}
            id="prev"
            onClick={onClickBtn}>
            <Arrow style={{ transform: "rotate(180deg)" }} id="prev" />
         </Button>
         <Button
            marginLeft={status_redux === 0 ? "85px" : "20px"}
            marginRight={status_redux === 0 ? "0px" : "20px"}
            width={status_redux === 0 ? "140px" : "60px"}
            style={{ cursor: "pointer" }}
            transform={status_redux === 0 ? "translate(-65%, 0)" : "none"}
            id="next"
            backgroundcolor={activeBtn ? "skyblue" : "gray"} // 버튼 활성화 조건에 따라 버튼 비활성화
            onClick={activeBtn ? onClickBtn : null}>
            <Arrow id="next" fill={activeBtn ? "black" : "#868686"} />
         </Button>
      </div>
   );
}
