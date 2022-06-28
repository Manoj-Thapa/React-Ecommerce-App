import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="mx-4 row">
      <div className="col-md-4">{children[0]}</div>
      <div className="col-md-8">{children[1]}</div>
    </div>
  );
};

export default Wrapper;
