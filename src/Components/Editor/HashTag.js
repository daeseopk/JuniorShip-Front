import { React, useState } from "react";
import styles from "./Editor.module.css";

export default function HashTag() {
   const [text, setText] = useState();
   const [tags, setTags] = useState([]);

   const onKeyDown = (e) => {
      if (e.key === "Enter") {
         setText("");
         var tags_ = [...tags];
         tags_.push(text);
         setTags(tags_);
      }
   };
   const onClickTag = (e) => {
      var tags_ = [...tags];
      tags_.splice(e.target.id, 1);
      setTags(tags_);
   };
   return (
      <>
         {tags
            ? tags.map((tag, index) => {
                 return (
                    <div onClick={onClickTag} id={index} className={styles.Tag}>
                       {tag}
                    </div>
                 );
              })
            : null}
         <input
            onKeyDown={onKeyDown}
            onChange={(e) => setText(e.target.value)}
            placeholder="해시태그 입력"
            className={styles.HashInput}
            type="text"
         />
      </>
   );
}
