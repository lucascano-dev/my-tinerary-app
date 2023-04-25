import React from "react";

import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cities");
  };

  return (
    <div className="d-grid col-6 mx-auto">
      <button
        onClick={handleClick}
        className="btn btn-outline-warning"
        type="button"
      >
        Explore Cities
      </button>
    </div>
  );
};

export default Buttons;
