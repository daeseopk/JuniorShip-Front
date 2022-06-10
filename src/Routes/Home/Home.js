import React from "react";
import styles from "./Home.module.css";
import EditorComponent from "../../Components/Editor/EditorComponent";

export default function Home() {
   return (
      <div className={styles.Home_Container}>
         <EditorComponent />
      </div>
   );
}
