import React from "react";
import { useState } from "react";
import "../toggle.css";

const ToggleBackground = () => {
  const [Background, setBackground] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackground(Background == "white" ? "#1b1b1b" : "white");
    setTextColor(textColor == "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle == "white" ? "#1b1b1b" : "white");
  };
  console.log(Background);
  return (
    <div
      style={{ backgroundColor: Background, color: textColor }}
      className="conatiner"
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {Background === "#1b1b1b" ? "Black theme" : "White theme"}
      </button>

      <section className="content">
        <h1>welcome back 🫣🫣..</h1>
      </section>
    </div>
  );
};

export default ToggleBackground;
