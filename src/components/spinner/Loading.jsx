import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="text-center">
      <Spinner
        animation="border"
        className="spinner"
        style={{ height: "70px", width: "70px" }}
      />
    </div>
  );
};

export default Loading;
