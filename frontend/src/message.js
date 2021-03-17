import React from "react";
import { StaticMathField } from "react-mathquill";

function Message({ message, left }) {
  return (
    <div
      style={{
        backgroundColor: left ? "#888BF4" : "#F573C3",
        borderRadius: "10px",
        paddingTop: "3px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "10px",
        display: "inline-block",
        visibility:
          (left && message.outter) || (!left && !message.outter)
            ? ""
            : "hidden",
        margin: "10px",
      }}
    >
      <p>{message.outter ? message.name : "Me"}</p>
      {message.latex ? (
        <StaticMathField>{message.data}</StaticMathField>
      ) : (
        <h5>{message.data}</h5>
      )}
    </div>
  );
}

export default Message;
