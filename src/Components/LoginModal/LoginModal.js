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
   width: 400px;
   height: 550px;
   transition: 0.3s ease all;
   border-radius: 30px;
   opacity: ${(prop) => prop.opacity};
   visibility: ${(prop) => prop.visibility};
   z-index:${(prop) => prop.z_index}
   color: ${(prop) => prop.BackGroundColor};
   background-color: rgb(240, 240, 242);
   box-shadow: 7px 7px 15px 7px rgba(16, 16, 16, 0.2);
`;
const LoginBtn = styled.div`
   margin-top: 20px;
   display: flex;
   width: 100%;
   height: 45px;
   color: white;
   background-color: ${(prop) => prop.BackGroundColor};
   border-radius: 10px;
   justify-content: center;
   align-items: center;
   font-size: 18px;
   font-weight: 900;
   transition: 0.3s all ease;
   cursor: pointer;
`;

export default function LoginModal() {
   const [id, setId] = useState();
   const [password, setPassword] = useState();
   const CONCEPT_COLOR = "rgb(151,202,219)";
   const Btn_Hover_Color = "rgb(131,197,189)";
   const [BtnColor, setBtnColor] = useState(CONCEPT_COLOR);
   return (
      // TODO: z-index, visibility, opacity Redux로 관리하기(어떤 페이지, 컴포넌트에서도 로그인 모달창 접근 가능하도록)
      // Modal의 visiblity 변화 시 ModalBackGround의 background 값에 변화 주어야 함(배경 어둡게)
      <ModalBackGround background="none">
         <LoginContainer
            BackGroundColor={CONCEPT_COLOR}
            z_index="99"
            visibility="visible"
            opacity="1">
            <span className={styles.Icon}></span>
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
                  <p
                     style={{
                        textAlign: "right",
                        fontSize: "12px",
                        cursor: "pointer",
                     }}>
                     패스워드를 잊으셨습니까?
                  </p>
                  <LoginBtn
                     onMouseEnter={() => {
                        setBtnColor(Btn_Hover_Color);
                     }}
                     onMouseLeave={() => {
                        setBtnColor(CONCEPT_COLOR);
                     }}
                     BackGroundColor={BtnColor}>
                     로그인
                  </LoginBtn>
                  <p style={{ textAlign: "center", marginTop: "12px" }}>또는</p>
                  <SocialLogin/>
            </div>
         </LoginContainer>
      </ModalBackGround>
   );
}
