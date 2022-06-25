import { React, useState } from "react";
import styles from "./Dropdown.module.css";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../Images/ArrowBtn.svg";

const DropValue = styled.div`
   display: block;
   position: relative;
   width: 140px;
   height: ${(prop) => prop.height}px;
   transition: 0.3s ease all;
   margin-top: 10px;
   opacity: ${(prop) => prop.opacity};
   border-radius: 10px;
   background-color: #f0f0f3;
   box-shadow: 3px 3px 8px 3px rgba(16, 16, 16, 0.1);
   overflow: scroll;
`;

export default function Dropdown({ address, setAddress }) {
   const [visibleMenu, setVisibleMenu] = useState(false);
   const address_ = [
      "직접 입력",
      "naver.com",
      "gmail.com",
      "daum.net",
      "hanmail.net",
      "outlook.com",
      "어쩌구.com",
      "저쩌구.com",
   ];
   const onClick_item = (address) => {
      if (address !== "직접 입력") {
         setAddress(address);
      } else {
         setAddress("");
      }

      setVisibleMenu(false);
   };
   return (
      <div className={styles.dropdownWrapper}>
         <div className={styles.InputWrapper}>
            <input
               placeholder="직접 입력"
               onChange={(e) => setAddress(e.target.value)}
               value={address}
               className={styles.Input}
               type="text"
            />
            <Arrow
               onClick={() => setVisibleMenu(!visibleMenu)}
               style={{
                  cursor: "pointer",
                  transition: "0.5s ease all",
                  position: "relative",
                  right: "30px",
                  transform: `rotate(90deg) rotateY(${
                     visibleMenu ? "180" : "0"
                  }deg)`,
               }}
               width={25}
               height={25}
            />
         </div>
         <DropValue
            height={visibleMenu ? 248 : 0}
            opacity={visibleMenu ? 1 : 0}>
            <ul className={styles.dropdownUl}>
               {address_.map((address, index) => (
                  <>
                     <li
                        onClick={() => onClick_item(address)}
                        className={styles.dropdownItem}>
                        {address}
                     </li>
                  </>
               ))}
            </ul>
         </DropValue>
      </div>
   );
}
