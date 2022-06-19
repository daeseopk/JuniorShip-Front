import React from "react";
import styles from "./Btn.module.css";
import { setStatus_plus, setStatus_minus } from "../../Redux/status";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Btn({ select }) {
   const status_redux = useSelector((state) => state.status.value.status);

   const dispatch = useDispatch();
   const onClickBtn = (e) => {
      if (select) {
         // 주니어, 아마추어, 시니어가 선택됐을 때만 동작
         if (e.target.id === "prev") {
            if (status_redux === 0) return;
            else dispatch(setStatus_minus());
         } else if (e.target.id === "next") {
            if (status_redux === 4) return;
            else dispatch(setStatus_plus());
         }
      } else alert("단계를 먼저 선택해 주세요. (임시 팝업)");
   };
   return (
      <div className={styles.BtnContainer}>
         <div id="prev" onClick={onClickBtn} className={styles.Btn}>
            이전
         </div>
         <div id="next" onClick={onClickBtn} className={styles.Btn}>
            다음
         </div>
      </div>
   );
}
