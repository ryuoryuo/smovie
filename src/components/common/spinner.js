import React from "react";
import "./spinner.css";

export default () => {
  return (
    <div className="row">
      <div className="mx-auto mt-5">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};
