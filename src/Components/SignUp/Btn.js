import React from "react";
import styles from "./Btn.module.css";

export default function Btn({ setStatus, status, select }) {
   const onClickBtn = (e) => {
      if (select) {
         if (e.target.id === "prev") {
            if (status === 0) return;
            else setStatus(status - 1);
         } else if (e.target.id === "next") {
            if (status === 4) return;
            else setStatus(status + 1);
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
