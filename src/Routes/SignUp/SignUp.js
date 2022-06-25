import { React, useState, useEffect } from "react";
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
   const [confirm_email, setConfirm_email] = useState(false); // 이메일 중복검사
   const [address, setAddress] = useState(); // 이메일 뒷부분
   const [id, setId] = useState(); // 아이디
   const [confirm_id, setConfirm_id] = useState(false); // 아이디 중복검사
   const [password, setPassword] = useState(); // 비밀번호

   const status_redux = useSelector((state) => state.status.value.status);
   var a = false;
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
         confirm_nickname
      ) {
         activeBtn_ = true;
      } else activeBtn_ = false;

      setActiveBtn(activeBtn_);
   }, [status_redux, select]); // 페이지와 페이지별 버튼 활성화 조건이 업데이트 될 떄마다 실행
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
               />
            </div>
            <Btn
               select={select}
               activeBtn={activeBtn}
               setActiveBtn={setActiveBtn}
            />
         </div>
      </div>
   );
}
