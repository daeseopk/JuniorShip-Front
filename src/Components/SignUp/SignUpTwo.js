import React from "react";
import SignUpBodyContainer from "./SignUpBodyContainer";
import styles from "./SignUpBody.module.css";
import { useSelector } from "react-redux";

export default function SignUpTwo() {
   const status_redux = useSelector((state) => state.status.value.status);
   return (
      <SignUpBodyContainer
         z_index={status_redux === 1 ? "99" : "-1"}
         left={
            status_redux === 1 ? "0%" : status_redux === 0 ? "100%" : "-100%"
         }>
         <div className={styles.SignUpBodyWrapper}></div>
      </SignUpBodyContainer>
   );
}
