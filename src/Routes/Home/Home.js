import React from "react";
import EditorComponent from "../../Components/Editor/EditorComponent";
import LoginModal from "../../Components/LoginModal/LoginModal";
import styles from "./Home.module.css";
import { useDispatch } from "react-redux";
import { setVisible } from "../../Redux/visibility";

export default function Home() {
   const dispatch = useDispatch();
   return (
      <div className={styles.Container}>
         <div className={styles.BodyContainer}>
            <EditorComponent />
            <LoginModal />
            <button
               onClick={() => {
                  dispatch(setVisible({ isVisible: true }));
               }}
               style={{
                  position: "absolute",
                  width: "100px",
                  height: "50px",
                  zIndex: "1",
               }}>
               모달창 테스트
            </button>
         </div>
      </div>
   );
}
