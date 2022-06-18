import { React, useEffect, useState } from "react";
import styles from "./LoginModal.module.css";
import styled from "styled-components";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setVisible } from "../../Redux/visibility";

const CONCEPT_COLOR = "#6abce2";
const ModalBackGround = styled.div`
   transition: 0.3s ease all;
   position: fixed;
   display: flex;
   align-item: center;
   justify-content: center;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background: ${(prop) => prop.background};
   z-index: ${(prop) => prop.z_index};
`;
const LoginContainer = styled.div`
   position: fixed;
   top: 50%;
   transform: translate(0, -50%);
   width: 450px;
   height: 600px;
   transition: 0.3s ease all;
   border-radius: 39px;
   opacity: ${(prop) => prop.opacity};
   z-index:${(prop) => prop.z_index}
   color: #6ABCE2;
   background-color: rgb(240, 240, 242);
   box-shadow: 7px 7px 15px 7px rgba(16, 16, 16, 0.2);
`;
const LoginBtn = styled.div`
   margin-top: 20px;
   display: flex;
   width: 100%;
   height: 55px;
   color: white;
   background-color: ${(prop) => prop.backgroundColor};
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   font-size: 20px;
   font-weight: 900;
   transition: 0.3s all ease;
   cursor: pointer;
`;

export default function LoginModal() {
   const [id, setId] = useState();
   const [password, setPassword] = useState();
   const [LoginBtnColor, setLoginBtnColor] = useState(CONCEPT_COLOR);
   const [isChecked, setIsChecked] = useState(false);
   const visibility = useSelector((state) => state.visibility.value); // Modal visibility 상태 관리 default : false
   const dispatch = useDispatch();

   useEffect(() => {
      if (window.localStorage.getItem("Rememberid")) {
         setId(window.localStorage.getItem("Rememberid"));
         setIsChecked(true);
      }
   }, []);
   const onClick_Login = () => {
      //TODO 로그인 기능
      console.log(id, password);
      // 로그인 성공 시
      if (isChecked) {
         localStorage.setItem("Rememberid", id);
      } else {
         localStorage.removeItem("Rememberid");
      }
   };
   return (
      // ModalBackGround
      // LoginContainer
      // visibility.isVisible(Redux) 값이 true 면 Modal창 보이기 및 배경 색 어둡게 default : false
      <ModalBackGround
         z_index={visibility.isVisible ? "99" : "-1"}
         background={visibility.isVisible ? "rgba(0,0,0,0.4)" : "none"}>
         <LoginContainer opacity={visibility.isVisible ? "1" : "0"}>
            <img
               src={require("../../Images/Profile.png")}
               className={styles.Icon}
               alt="Profile"
            />
            <div
               onClick={() => dispatch(setVisible({ isVisible: false }))}
               className={styles.CloseBtn}>
               x
            </div>
            <div className={styles.Login_BodyContainer}>
               <p>아이디</p>
               <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className={styles.Login_Input}
                  type="id"
                  name="id"
               />
               <p>패스워드</p>
               <input
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
                  className={styles.Login_Input}
                  type="password"
                  name="password"
               />
               <div className={styles.ThinBlockWrapper}>
                  <input
                     checked={isChecked}
                     onChange={() => setIsChecked(!isChecked)}
                     style={{
                        position: "relative",
                        border: "solid 1.5px #6abce2",
                        backgroundColor: "#f0f0f3",
                        cursor: "pointer",
                     }}
                     type="checkbox"
                  />
                  <span
                     style={{
                        position: "relative",
                        color: "#6abce2",
                        fontWeight: "900",
                        fontSize: "13px",
                     }}>
                     아이디 저장
                  </span>
                  <span
                     style={{
                        position: "relative",
                        color: "#6abce2",
                        fontWeight: "900",
                        left: "40%",
                        fontSize: "13px",
                        cursor: "pointer",
                     }}>
                     패스워드를 잊으셨습니까?
                  </span>
               </div>
               <LoginBtn
                  onClick={onClick_Login}
                  onMouseEnter={() => setLoginBtnColor("#5496b4")}
                  onMouseLeave={() => setLoginBtnColor(CONCEPT_COLOR)}
                  onMouseDown={() => setLoginBtnColor("#3f7087")}
                  onMouseUp={() => setLoginBtnColor("#5496b4")}
                  backgroundColor={LoginBtnColor}>
                  로그인
               </LoginBtn>
               <p
                  style={{
                     textAlign: "center",
                     marginTop: "20px",
                     fontSize: "17px",
                  }}>
                  또는
               </p>
               <SocialLogin />
            </div>
         </LoginContainer>
      </ModalBackGround>
   );
}
