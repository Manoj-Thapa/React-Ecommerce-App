import React, { useContext } from "react";
import { CartContext } from "../../Store/cartContext";
import "./Search.css";

const Search = () => {
  const { setSearchTerm } = useContext(CartContext);

  // Debouncing Technique uses to reduce more calls to API, in our case it searches items in search box in the gap of 1 seconds, which means it does not search the items for each character.
  const debounceHandler = (searchCallBack) => {
    return (e) => {
      setTimeout(() => {
        searchCallBack(e);
      }, 1000);
    };
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchHandle = debounceHandler(searchHandler);

  return (
    <div className="Search">
      <input
        type="text"
        className="form-control SearchInput"
        placeholder="Search for the Products...."
        onChange={searchHandle}
      />
    </div>
  );
};

export default Search;
