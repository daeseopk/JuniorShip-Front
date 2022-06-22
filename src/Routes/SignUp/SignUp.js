import { React, useState } from "react";
import styles from "./SignUp.module.css";
import ProgressBar from "../../Components/SignUp/ProgressBar";
import ProgressBarLine from "../../Components/SignUp/ProgressBar_Line";
import SignUpOne from "../../Components/SignUp/SignUpOne";
import SignUpTwo from "../../Components/SignUp/SignUpTwo";
import Btn from "../../Components/SignUp/Btn";

export default function SignUp() {
   const [activeBtn, setActiveBtn] = useState(false); // 버튼 활성화 조건
   const [select, setSelect] = useState(); // 주니어 아마추어 시니어

   return (
      <div className={styles.Container}>
         <div className={styles.SignUpContainer}>
            {/* <ProgressBar /> 하늘색 게이지 버전 */}
            <ProgressBarLine />
            <div className={styles.SignUpBodyWrapper}>
               <SignUpOne setSelect={setSelect} />
               <SignUpTwo />
            </div>
            <Btn
               select={select}
               activeBtn={activeBtn}
               setActiveBtn={setActiveBtn}
            />
         </div>
      </div>
   );
}
