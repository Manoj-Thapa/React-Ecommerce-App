import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemOrdered, setItemOrdered] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        itemOrdered,
        setItemOrdered,
        totalPrice,
        setTotalPrice,
        filteredData,
        setFilteredData,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
