import { React } from "react";
import styled from "styled-components";
import styles from "./SignUpBody.module.css";

const Card = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 200px;
   margin-right: ${(prop) => prop.marginRight};
   text-align: left;
   background-color: rgba(220, 220, 220, 0.2);
   border-radius: 20px;
   border: ${(prop) => prop.border};
   box-shadow: 4px 4px 10px 0 rgba(16, 16, 16, 0.4);
   cursor: pointer;
   transition: 0.4s ease all;
   &:hover {
      transform: scale(1.1);
      box-shadow: 15px 15px 20px 0 rgba(16, 16, 16, 0.4);
   }
`;

//TODO : onClick 시 transform : none line 37처럼 해야됌
export default function Cards({
   title,
   subtitle,
   id,
   setSelect,
   border,
   setBorder,
}) {
   var defaultBorder = [
      "2px solid rgba(220, 220, 220, 0.2)",
      "2px solid rgba(220, 220, 220, 0.2)",
      "2px solid rgba(220, 220, 220, 0.2)",
   ];

   const onClick_Card = (e) => {
      setSelect(e.target.id);
      var border_ = defaultBorder;
      border_[e.target.id] = "2px solid blue";
      setBorder(border_);
   };

   return (
      // TODO 이벤트 상속하는 방법 찾기
      <Card
         marginRight={parseInt(id) === 2 ? "0px" : "100px"}
         onClick={onClick_Card} // 주니어, 아마추어, 시니어 세팅
         id={id}
         border={border[id]}>
         <div id={id} className={styles.CardBodyWrapper}>
            <h1 id={id}>{title}</h1>
            <p id={id}>{subtitle[0]}</p>
            <p id={id}>{subtitle[1]}</p>
         </div>
      </Card>
   );
}
