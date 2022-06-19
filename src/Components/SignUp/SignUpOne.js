import { React, useState } from "react";
import styled from "styled-components";
import styles from "./SignUpBody.module.css";
import Cards from "./Cards";

const SignUpContainer = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   top: 10%;
   left: ${(prop) => prop.left};
   width: 100%;
   height: 75%;
   transition: 0.8s ease all;
`;

export default function SignUpBody({ setSelect, status }) {
   const [border, setBorder] = useState([
      "2px solid rgba(220, 220, 220, 0.2)",
      "2px solid rgba(220, 220, 220, 0.2)",
      "2px solid rgba(220, 220, 220, 0.2)",
   ]);
   return (
      //페이지 전환 시 left -100%
      <SignUpContainer left={status === 0 ? "0%" : "-100%"}>
         <div className={styles.SignUpBodyWrapper}>
            <div className={styles.TitleWrapper}>
               <h1>자신에게 맞는 단계를 선택하여 주십시오</h1>
               <h2>단계에 따라 제공되는 추천 프로젝트가 달라집니다.</h2>
            </div>
            <div className={styles.CardContainer}>
               <Cards
                  border={border}
                  setBorder={setBorder}
                  setSelect={setSelect}
                  id="0"
                  title="주니어"
                  subtitle={["경력 1년 미만", "프로젝트 참여횟수 2회 이하"]}
               />
               <Cards
                  border={border}
                  setBorder={setBorder}
                  setSelect={setSelect}
                  id="1"
                  title="아마추어"
                  subtitle={[
                     "경력 1년 이상 5년 미만 ",
                     "프로젝트 참여횟수 3회 이상",
                  ]}
               />
               <Cards
                  border={border}
                  setBorder={setBorder}
                  setSelect={setSelect}
                  id="2"
                  title="시니어"
                  subtitle={["경력 5년 이상", " 5회 이상 프로젝트 참여"]}
               />
            </div>
         </div>
      </SignUpContainer>
   );
}
