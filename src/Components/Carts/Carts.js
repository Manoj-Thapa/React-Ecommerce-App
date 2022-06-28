import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Store/cartContext";
import Cart from "../Cart/Cart";
import EmptyCart from "../Message/EmptyCart";
import "./Carts.css";

const Carts = () => {
  const {
    cart,
    totalPrice,
    setTotalPrice,
    itemOrdered,
    setFilteredData,
    setSearchTerm,
  } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    for (let k in itemOrdered) {
      total += itemOrdered[k].price * itemOrdered[k].quant;
    }
    setTotalPrice(total);
    setFilteredData({});
    setSearchTerm("");
  }, [itemOrdered, cart]);
  return (
    <>
      <p className="m-4 fs-3 fw-bold">Shopping Cart </p>
      <div className="CartContainer row fw-bolder">
        {cart.length !== 0 &&
          cart.map((cartitem) => (
            <Cart
              key={cartitem.id}
              id={cartitem.id}
              name={cartitem.name}
              imageURL={cartitem.imageURL}
              type={cartitem.type}
              price={cartitem.price}
              color={cartitem.color}
              gender={cartitem.gender}
              quantity={cartitem.quantity}
              orderQuant={cartitem.orderQuant}
            />
          ))}
        {cart.length === 0 && <EmptyCart />}
        {cart.length !== 0 && (
          <p className="fs-3">Total Price: Rs. {totalPrice}</p>
        )}
      </div>
    </>
  );
};

export default Carts;
