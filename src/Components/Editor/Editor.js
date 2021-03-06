import { React, useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import axios from "axios";

Quill.register("modules/imageResize", ImageResize);

const toolbarOptions = [
   ["bold", "italic", "underline", "strike"], // toggled buttons
   [{ list: "ordered" }, { list: "bullet" }],
   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
   [{ font: [] }],
   [{ align: [] }],
   ["image", "link", "video"],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
   "header",
   "font",
   "size",
   "bold",
   "italic",
   "underline",
   "strike",
   "align",
   "blockquote",
   "list",
   "bullet",
   "indent",
   "background",
   "color",
   "link",
   "image",
   "video",
   "width",
];

const modules = {
   toolbar: {
      container: toolbarOptions,
   },
};
const Editor = ({ placeholder, value, onChange, ...rest }) => {
   // quill 에디터 컴포넌트 ref
   const quillRef = useRef(null);

   useEffect(() => {
      const handleImage = () => {
         const { getEditor } = quillRef.current;
         const input = document.createElement("input");
         input.setAttribute("type", "file");
         input.setAttribute("accept", "image/*");
         input.click();
         input.onchange = async () => {
            const file = input.files[0];
            console.log(file);
            const range = getEditor().getSelection(true);
            try {
               const filePath = `username${Date.now()}`; // 파일 이름 지정
               const range = getEditor().getSelection(true);
               const url = await axios.post("https://", file, filePath); // 서버 요청 (이미지(BASE64형태), 파일 이름)
               getEditor().insertEmbed(range.index, "image", url); // 에디터에 이미지 삽입 url = 서버에서 반환받은 url
            } catch (e) {
               getEditor().deleteText(range.index, 1);
            }
         };
      };
      if (quillRef.current) {
         const toolbar = quillRef.current.getEditor().getModule("toolbar");
         toolbar.addHandler("image", handleImage);
      }
   }, []);

   return (
      <ReactQuill
         {...rest}
         style={{ height: "90%" }}
         ref={quillRef}
         value={value || ""}
         theme="snow"
         modules={{
            ...modules,
            imageResize: {
               parchment: Quill.import("parchment"),
               modules: ["Resize", "DisplaySize", "Toolbar"],
            },
         }}
         formats={formats}
         placeholder={placeholder}
         onChange={(content, delta, source, editor) =>
            onChange(editor.getHTML())
         }
         preserveWhitespace></ReactQuill>
   );
};

export default Editor;
