import { React, useState } from "react";
import styles from "./LoginModal.module.css";
import styled from "styled-components";
import SocialLogin from "../SocialLogin/SocialLogin";

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
   visibility: ${(prop) => prop.visibility};
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
   background-color: #6abce2;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   font-size: 20px;
   font-weight: 900;
   transition: 0.3s all ease;
   cursor: pointer;
   &:hover {
      background-color: #5496b4;
   }
`;

export default function LoginModal() {
   const [id, setId] = useState();
   const [password, setPassword] = useState();

   return (
      // TODO: z-index, opacity Redux로 관리하기(어떤 페이지, 컴포넌트에서도 로그인 모달창 접근 가능하도록)
      // Modal의 zindex, opacity변화 시 ModalBackGround의 background 값에 변화 주어야 함(배경 어둡게)
      <ModalBackGround background="rgba(0,0,0,0.4)">
         <LoginContainer z_index="99" opacity="1">
            <img
               src={require("../../Images/Profile.png")}
               className={styles.Icon}
               alt="Profile"
            />
            <div className={styles.Login_BodyContainer}>
               <p>아이디</p>
               <input
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

               <LoginBtn>로그인</LoginBtn>
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
