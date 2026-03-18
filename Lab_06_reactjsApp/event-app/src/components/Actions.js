import { useState } from "react";

function Actions() {
  const [message, setMessage] = useState("Click a button to perform an action.");
  const [bgColor, setBgColor] = useState("#f8fafc");
  const [hoverColor, setHoverColor] = useState("#111827");

  const changeBackground = () => {
    const colors = ["#fee2e2", "#dcfce7", "#dbeafe", "#fef3c7", "#ede9fe"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
    setMessage("Background color changed successfully.");
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="card">
        <h1>Interactive Buttons App</h1>
        <p
          className="message"
          style={{ color: hoverColor }}
          onMouseOver={() => setHoverColor("#2563eb")}
          onMouseOut={() => setHoverColor("#111827")}
        >
          {message}
        </p>

        <div className="button-group">
          <button onClick={() => setMessage("Hello! This is your message.")}>Show Message</button>
          <button onClick={changeBackground}>Change Background Color</button>
          <button onClick={() => alert("This is a React alert box.")}>Show Alert</button>
        </div>

        <p className="hint">Hover over the text above to change its color.</p>
      </div>
    </div>
  );
}

export default Actions;
