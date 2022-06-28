import React from "react";
import Filter from "../Filter/Filter";
import Products from "../Products/Products";
import Search from "../Search/Search";
import Wrapper from "../Wrapper/Wrapper";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Filter />
        <>
          <Search />
          <Products />
        </>
      </Wrapper>
    </>
  );
};

export default Header;
