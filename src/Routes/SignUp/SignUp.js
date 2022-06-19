import { React, useState } from "react";
import styles from "./SignUp.module.css";
import ProgressBar from "../../Components/SignUp/ProgressBar";
import SignUpOne from "../../Components/SignUp/SignUpOne";
import Btn from "../../Components/SignUp/Btn";

export default function SignUp() {
   const [status, setStatus] = useState(0);
   const [select, setSelect] = useState(); // 주니어 아마추어 시니어

   return (
      <div className={styles.Container}>
         <div className={styles.SignUpContainer}>
            <ProgressBar status={status} setStatus={setStatus} />
            <SignUpOne setSelect={setSelect} status={status} />
            <Btn setStatus={setStatus} status={status} select={select} />
         </div>
      </div>
   );
}
