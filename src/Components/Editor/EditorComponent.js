import { React, useState } from "react";
import Editor from "./Editor";
import styles from "./Editor.module.css";
import HashTag from "./HashTag";

export default function EditorComponent() {
   const [Title, setTitle] = useState();
   const [desc, setDesc] = useState();
   const onEditorChange = (value) => {
      setDesc(value);
   };

   return (
      <div className={styles.Editor_Container}>
         <div className={styles.TitleWrapper}>
            <input
               onChange={(e) => setTitle(e.target.value)}
               placeholder="제목을 입력하세요"
               className={styles.Title}
               type="text"
            />
         </div>
         <div className={styles.EditorWrapper}>
            <Editor
               value={desc}
               onChange={onEditorChange}
               placeholder="내용을 입력하세요"
            />
         </div>
         <div className={styles.HashtagWrapper}>
            <HashTag />
         </div>
      </div>
   );
}
