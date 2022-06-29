import { React, useState, useEffect, useRef } from "react";
import styles from "./SignUp.module.css";
import ProgressBar from "../../Components/SignUp/ProgressBar";
import ProgressBarLine from "../../Components/SignUp/ProgressBar_Line";
import SignUpOne from "../../Components/SignUp/SignUpOne";
import SignUpTwo from "../../Components/SignUp/SignUpTwo";
import Btn from "../../Components/SignUp/Btn";
import { useSelector } from "react-redux";

export default function SignUp() {
   const [activeBtn, setActiveBtn] = useState(false); // 버튼 활성화 조건
   //page 1
   const [select, setSelect] = useState(); // 주니어 아마추어 시니어
   //page 2
   const [nickname, setNickname] = useState(); // 닉네임
   const [confirm_nickname, setConfirm_nickname] = useState(false); // 닉네임 중복검사
   const [email, setEmail] = useState(); // 이메일 앞부분
   const [address, setAddress] = useState(); // 이메일 뒷부분
   const [confirm_email, setConfirm_email] = useState(false); // 이메일 중복, 직접입력 형식 검사
   const [id, setId] = useState(); // 아이디
   const [confirm_id, setConfirm_id] = useState(false); // 아이디 중복, 형식 검사
   const [password, setPassword] = useState(); // 비밀번호
   const [password_check, setPassword_check] = useState(); // 비밀번호 재입력 체크
   const [confirm_password, setConfirm_password] = useState(false); // 비밀번호 형식 검사

   const [LoginBodyContainer_Class, setLoginBodyContainer_Class] =
      useState("default"); // 클래스 이름 지정으로 회원가입창 애니메이션 구현 위함

   const status_redux = useSelector((state) => state.status.value.status);
   useEffect(() => {
      var activeBtn_ = activeBtn;
      // if(status_redux===페이지 && (페이지별 버튼 활성화 조건)){
      //    activeBtn_=true;
      // }
      if (status_redux === 0 && select) {
         activeBtn_ = true;
      } else if (
         status_redux === 1 &&
         confirm_email &&
         confirm_id &&
         // confirm_nickname &&
         confirm_password &&
         password === password_check
      ) {
         activeBtn_ = true;
      } else activeBtn_ = false;

      setActiveBtn(activeBtn_);
   }, [
      status_redux,
      select,
      confirm_email && confirm_id,
      confirm_nickname,
      confirm_password,
      password,
      password_check,
   ]); // 페이지와 페이지별 버튼 활성화 조건이 업데이트 될 떄마다 실행
   return (
      <div className={styles.Container}>
         <div className={styles.SignUpContainer}>
            {/* <ProgressBar /> 하늘색 게이지 버전 */}
            <ProgressBarLine />
            <div className={styles.SignUpBodyWrapper}>
               <SignUpOne setSelect={setSelect} />
               <SignUpTwo
                  nickname={nickname}
                  setNickname={setNickname}
                  email={email}
                  setEmail={setEmail}
                  address={address}
                  setAddress={setAddress}
                  id={id}
                  setId={setId}
                  password={password}
                  setPassword={setPassword}
                  password_check={password_check}
                  setPassword_check={setPassword_check}
                  confirm_id={confirm_id}
                  setConfirm_id={setConfirm_id}
                  confirm_nickname={confirm_nickname}
                  setConfirm_nickname={setConfirm_email}
                  confirm_email={confirm_email}
                  setConfirm_email={setConfirm_email}
                  confirm_password={confirm_password}
                  setConfirm_password={setConfirm_password}
                  LoginBodyContainer_Class={LoginBodyContainer_Class}
               />
            </div>
            <Btn
               activeBtn={activeBtn}
               setLoginBodyContainer_Class={setLoginBodyContainer_Class}
            />
         </div>
      </div>
   );
}
