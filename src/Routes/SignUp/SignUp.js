import { React, useState } from "react";
import ProgressBar from "../../Components/SignUp/ProgressBar";
import SignUpBody from "../../Components/SignUp/SignUpBody";
import styles from "./SignUp.module.css";

export default function SignUp() {
   const [status, setStatus] = useState(0);
   const [select, setSelect] = useState(); // 주니어 아마추어 시니어
   return (
      <div className={styles.Container}>
         <div className={styles.SignUpContainer}>
            <ProgressBar status={status} setStatus={setStatus} />
            <SignUpBody setSelect={setSelect} />
         </div>
      </div>
   );
}
