import React from "react";
import EditorComponent from "../../Components/Editor/EditorComponent";
import LoginModal from "../../Components/LoginModal/LoginModal";
import styles from "./Home.module.css";

export default function Home() {
   return (
      <div className={styles.Container}>
         <div className={styles.BodyContainer}>
            <EditorComponent />
            <LoginModal />
         </div>
      </div>
   );
}
