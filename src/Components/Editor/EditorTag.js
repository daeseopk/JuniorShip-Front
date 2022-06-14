import { React, useState } from "react";
import styles from "./Editor.module.css";

function EditorTag({ Tags, setTags }) {
   const [input, setInput] = useState();
   // input창 enter
   const Submit = () => {
      var Tags_ = [...Tags];
      Tags_.push(input);
      setInput("");
      setTags(Tags_);
   };
   const onKeyEnter = (e) => {
      if (e.key === "Enter") {
         Submit();
      }
   };
   // 태그 삭제
   const onClickTag = (e) => {
      var Tags_ = [...Tags];
      Tags_.splice(e.target.id, 1);
      setTags(Tags_);
   };
   return (
      <>
         <div className={styles.TagInputWrapper}>
            <input
               onKeyDown={onKeyEnter}
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className={styles.TagInput}
               placeholder="태그 입력"
               type="text"
               name="Tag"
            />
            <button onClick={Submit} className={styles.TagButton}>
               등록
            </button>
         </div>
         <div className={styles.TagShowWrapper}>
            {Tags.map((tag, index) => {
               return (
                  <span onClick={onClickTag} id={index} className={styles.Tag}>
                     {tag}
                  </span>
               );
            })}
         </div>
      </>
   );
}
export default EditorTag;
