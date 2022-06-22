import React from "react";
import { ReactComponent as ArrowItem } from "../../Images/Arrow.svg";

export default function Arrow({ status_redux, id }) {
   return (
      <ArrowItem
         style={{
            transition: "0.6s ease all",
            position: "relative",
            marginRight: id === 0 || id === 1 ? "140px" : "0px",
            transform: status_redux === id ? "rotate(90deg)" : "none",
         }}
         width="40px"
         height="40px"
         fill={status_redux >= id ? "#6abce2" : "#868686"}
      />
   );
}
