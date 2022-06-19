import { React, useState } from "react";
import styles from "./SignUp.module.css";
import ProgressBar from "../../Components/SignUp/ProgressBar";
import SignUpOne from "../../Components/SignUp/SignUpOne";
import Btn from "../../Components/SignUp/Btn";

export default function SignUp() {
   const [select, setSelect] = useState(); // 주니어 아마추어 시니어

   return (
      <div className={styles.Container}>
         <div className={styles.SignUpContainer}>
            <ProgressBar />
            <SignUpOne setSelect={setSelect} />
            <Btn select={select} />
         </div>
      </div>
   );
}
