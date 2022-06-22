import { React, useState } from "react";
import SignUpBodyContainer from "./SignUpBodyContainer";
import styles from "./SignUpBody.module.css";
import styled from "styled-components";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSelector } from "react-redux";

const Input = styled.input`
   font-size: 18px;
   padding-left: 10px;
   width: 350px;
   height: 55px;
   font-weight: 700;
   border: 2px solid ${(prop) => prop.border};
   outline: none;
   border-radius: 10px;
   background-color: #f0f0f3;
   box-shadow: 3px 3px 8px 3px rgba(16, 16, 16, 0.1);
   transition: 0.2s ease all;
`;

export default function SignUpTwo() {
   const [id, setId] = useState();
   const [password, setPassword] = useState();
   const [password_check, setPassword_check] = useState();

   const status_redux = useSelector((state) => state.status.value.status);
   return (
      <SignUpBodyContainer
         z_index={status_redux === 1 ? "99" : "-1"}
         left={
            status_redux === 1 ? "0%" : status_redux === 0 ? "100%" : "-100%"
         }>
         <div className={styles.SignUpBodyWrapper}>
            <div className={styles.SignUpBodyWrapper_Grid}>
               <div className={styles.SignUpInputContainer}>
                  <SocialLogin />
                  <p
                     style={{
                        position: "relative",
                        marginTop: "10%",
                        fontSize: "40px",
                        fontWeight: "bold",
                        lineHeight: "0.6",
                        letterSpacing: "-2px",
                     }}>
                     또는
                  </p>
                  <div className={styles.Login_BodyContainer}>
                     <p>아이디</p>
                     <Input
                        border="#f0f0f2"
                        onChange={(e) => setId(e.target.value)}
                        value={id}
                        placeholder="영문, 숫자 5-11자"
                        style={{ marginBottom: "40px" }}
                        type="id"
                        name="id"
                     />

                     <p>패스워드</p>
                     <Input
                        border="#f0f0f2"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="숫자, 영문, 특수문자 최소 8자"
                        type="password"
                        name="password"
                     />
                     <img
                        className={styles.eye1}
                        src={require("../../Images/eyeX.png")}
                        alt="eye"
                     />
                     <Input
                        border={
                           !password_check
                              ? "#f0f0f2"
                              : password === password_check
                              ? "#6abce2"
                              : "red"
                        }
                        onChange={(e) => setPassword_check(e.target.value)}
                        value={password_check}
                        placeholder="패스워드 재입력"
                        style={{ marginTop: "20px" }}
                        type="password"
                        name="password"
                     />
                     <img
                        className={styles.eye2}
                        src={require("../../Images/eyeX.png")}
                        alt="eye"
                     />
                  </div>
               </div>
               <div className={styles.Logo}>LOGO?</div>
            </div>
         </div>
      </SignUpBodyContainer>
   );
}
