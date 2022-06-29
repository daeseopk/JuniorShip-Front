import { React, useState, useEffect } from "react";
import SignUpBodyContainer from "./SignUpBodyContainer";
import styles from "./SignUpBody.module.css";
import styled from "styled-components";
import SocialLogin from "../SocialLogin/SocialLogin";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

const Input = styled.input`
   font-size: 18px;
   padding-left: 10px;
   width: ${(prop) => prop.width}px;
   height: 49px;
   font-weight: 700;
   border: 2px solid ${(prop) => prop.border};
   outline: none;
   border-radius: 10px;
   background-color: #f0f0f3;
   box-shadow: 3px 3px 8px 3px rgba(16, 16, 16, 0.1);
   transition: 0.2s ease all;
`;

const WarnMsg = styled.p`
   margin-top: 5px;
   margin-bottom: 2px;
   width: 100%;
   font-family: NotoSansCJKKR;
   font-size: 13px;
   font-weight: 500;
   text-align: right;
   color: ${(prop) => prop.color};
   opacity: ${(prop) => prop.opacity};
`;

export default function SignUpTwo({
   nickname,
   setNickname,
   email,
   setEmail,
   address,
   setAddress,
   id,
   setId,
   password,
   setPassword,
   password_check,
   setPassword_check,
   confirm_id,
   setConfirm_id,
   confirm_nickname,
   setConfirm_nickname,
   confirm_email,
   setConfirm_email,
   confirm_password,
   setConfirm_password,
   LoginBodyContainer_Class,
}) {
   const status_redux = useSelector((state) => state.status.value.status);
   const [warnMsg_id, setWarnMsg_id] = useState("");
   const [warnMsg_Email, setWarnMsg_Email] = useState("");
   const [warnMsg_Pwd, setWarnMsg_Pwd] = useState("");

   var regExpId = /^[0-9a-zA-z]{5,11}$/;
   var regExpEmail =
      /(([^<>()[\].,;:\s@"]+\.)+[^<>!#-$%^&*()[\].,;:\s@"]{2,})$/;
   var regExpPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=−])(?=.*[0-9]).{8,25}$/;

   useEffect(() => {
      if (regExpId.test(id)) {
         // 아이디 유효성 및 중복 검사
         setConfirm_id(true);
         setWarnMsg_id("사용할 수 있는 아이디입니다.");
      } else {
         setConfirm_id(false);
         setWarnMsg_id("형식에 맞는 아이디를 입력해 주세요.");
      }
   }, [id]);
   useEffect(() => {
      if (email && regExpEmail.test(address)) {
         setConfirm_email(true);
         setWarnMsg_Email("사용할 수 있는 이메일 입니다.");
      } else {
         setConfirm_email(false);
         setWarnMsg_Email("올바른 이메일 형식을 입력해 주세요.");
      }
   }, [email, address]);
   useEffect(() => {
      if (regExpPwd.test(password)) {
         setConfirm_password(true);
         setWarnMsg_Pwd("");
      } else {
         setConfirm_password(false);
         setWarnMsg_Pwd("올바른 비밀번호 형식을 입력해 주세요.");
      }
   }, [password]);
   useEffect(() => {
      if (password === password_check) {
         setWarnMsg_Pwd("비밀번호가 일치합니다.");
      } else {
         setWarnMsg_Pwd("비밀번호가 일치하지 않습니다.");
      }
   }, [password_check]);
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
                        marginTop: "65px",
                        marginBottom: "25px",
                        fontSize: "40px",
                        fontWeight: "bold",
                        lineHeight: "0.6",
                        letterSpacing: "-2px",
                     }}>
                     또는
                  </p>
                  <div
                     className={
                        LoginBodyContainer_Class === "action"
                           ? styles.Login_BodyContainerAction
                           : styles.Login_BodyContainer
                     }>
                     <div className={styles.InputWrapper}>
                        <p className={styles.InputTitle}>닉네임</p>
                        <Input
                           width={334}
                           border="#f0f0f2"
                           onChange={(e) => setNickname(e.target.value)}
                           value={nickname}
                           type="text"
                           name="nickname"
                        />
                        <WarnMsg opacity={0}>
                           이미 사용중인 닉네임입니다.
                        </WarnMsg>
                     </div>
                     <div className={styles.InputWrapper}>
                        <p className={styles.InputTitle}>아이디</p>
                        <Input
                           width={334}
                           border={
                              id
                                 ? confirm_id
                                    ? "#6abce2"
                                    : "#f0f0f2"
                                 : "#f0f0f2"
                           }
                           onChange={(e) => setId(e.target.value)}
                           value={id}
                           placeholder="영문, 숫자 5-11자"
                           type="id"
                           name="id"
                        />
                        <WarnMsg
                           color={confirm_id ? "blue" : "#ff5a5a"}
                           opacity={id ? 1 : 0}>
                           {warnMsg_id}
                        </WarnMsg>
                     </div>
                     <div className={styles.InputWrapper}>
                        <p className={styles.InputTitle}>이메일</p>
                        <div className={styles.InputEmailWrapper}>
                           <Input
                              width={160}
                              border={confirm_email ? "#6abce2" : "#f0f0f2"}
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              type="text"
                              name="email"
                           />
                           <span
                              style={{
                                 fontSize: "30px",
                                 position: "relative",
                                 top: "60%",
                                 transform: "translate(0,-50%)",
                                 fontWeight: "bold",
                                 letterSpacing: "-1.5px",
                                 color: "#6abce2",
                                 marginLeft: "3px",
                                 marginRight: "3px",
                              }}>
                              @
                           </span>
                           <Dropdown
                              border={confirm_email ? "#6abce2" : "#f0f0f2"}
                              address={address}
                              setAddress={setAddress}
                           />
                        </div>
                        <WarnMsg
                           color={confirm_email ? "blue" : "#ff5a5a"}
                           opacity={address ? 1 : 0}>
                           {warnMsg_Email}
                        </WarnMsg>
                     </div>
                     <div className={styles.InputWrapper}>
                        <p className={styles.InputTitle}>패스워드</p>
                        <Input
                           width={334}
                           border={
                              password
                                 ? confirm_password
                                    ? "#6abce2"
                                    : "red"
                                 : "#f0f0f2"
                           }
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                           placeholder="숫자, 영문, 특수문자 최소 8자"
                           type="password"
                           name="password"
                        />
                        <Input
                           width={334}
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
                        <WarnMsg
                           color={
                              confirm_password
                                 ? password === password_check
                                    ? "blue"
                                    : "#ff5a5a"
                                 : "#ff5a5a"
                           }
                           opacity={password ? 1 : 0}>
                           {warnMsg_Pwd}
                        </WarnMsg>
                     </div>
                  </div>
               </div>
               <div className={styles.Logo}>LOGO</div>
            </div>
         </div>
      </SignUpBodyContainer>
   );
}
