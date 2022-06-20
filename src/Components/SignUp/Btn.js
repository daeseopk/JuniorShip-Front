import React from "react";
import styles from "./Btn.module.css";
import styled from "styled-components";
import { setStatus_plus, setStatus_minus } from "../../Redux/status";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Button = styled.div`
   display: flex;
   width: 120px;
   height: 50px;
   background-color: ${(prop) => prop.backgroundcolor};
   border-radius: 10px;
   margin-right: 20px;
   margin-left: 20px;
   align-items: center;
   justify-content: center;
   visibility: ${(prop) => prop.visibility};
   opacity: ${(prop) => prop.opacity};
   transform: ${(prop) => prop.transform};
   transition: 0.3s ease all;
`;

export default function Btn({ select, activeBtn, setActiveBtn }) {
   const status_redux = useSelector((state) => state.status.value.status);
   const a = false; // 2페이지 버튼 활성화 조건(테스트)
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
   useEffect(() => {
      var activeBtn_ = activeBtn;
      // if(status_redux===페이지 && (페이지별 버튼 활성화 조건)){
      //    activeBtn_=true;
      // }
      if (status_redux === 0 && select) {
         activeBtn_ = true;
      } else if (status_redux === 1 && a) {
         activeBtn_ = true;
      } else activeBtn_ = false;

      setActiveBtn(activeBtn_);
   }, [status_redux, select]); // 페이지와 페이지별 버튼 활성화 조건이 업데이트 될 떄마다 실행

   return (
      <div className={styles.BtnContainer}>
         <Button
            backgroundcolor="skyblue"
            visibility={status_redux === 0 ? "hidden" : "visible"}
            opacity={status_redux === 0 ? "0" : "1"}
            id="prev"
            onClick={onClickBtn}>
            이전
         </Button>
         <Button
            transform={status_redux === 0 ? "translate(-65%, 0)" : "none"}
            id="next"
            backgroundcolor={activeBtn ? "skyblue" : "gray"} // 버튼 활성화 조건에 따라 버튼 비활성화
            onClick={activeBtn ? onClickBtn : null}>
            다음
         </Button>
      </div>
   );
}
