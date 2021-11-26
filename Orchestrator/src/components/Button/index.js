import React, { useState } from "react";
import "./styles.scss";
const Button = () => {
  const [btnText, setBtnText] = useState("Default");

  return (
    <button className="btn" onClick={() => setBtnText("Clicked")}>
      {btnText}
    </button>
  );
};

export default Button;
