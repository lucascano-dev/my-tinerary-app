import React from "react";

const Buttons = ({ text, handleClick, color }) => {
  return (
    <div className="d-grid col-6 mx-auto">
      <button onClick={handleClick} className={color} type="button">
        {text}
      </button>
    </div>
  );
};

export default Buttons;
