import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <>
      <Spinner
        animation="border"
        className="spinner"
        style={{ height: "70px", width: "70px" }}
      />
    </>
  );
};

export default Loading;
