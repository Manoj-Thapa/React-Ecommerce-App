import React from "react";

const SearchNotFound = () => {
  return (
    <div className="text-center CartEmpty">
      <span
        className="iconify"
        data-icon="iconoir:file-not-found"
        data-width="70"
      ></span>
      <p className="fs-2">Nothing Found</p>
      <p className="fs-5">Please Search Again</p>
    </div>
  );
};

export default SearchNotFound;
