import React from "react";
import "./spinner.css";

export default () => {
  return (
    <div className="mx-auto mt-5">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
