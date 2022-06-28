import React, { useContext, useState } from "react";
import { CartContext } from "../../Store/cartContext";
import "./Quantity.css";

const Quantity = ({ citem }) => {
  const { cart, setCart, itemOrdered, setItemOrdered } =
    useContext(CartContext);

  const [quant, setQuant] = useState(itemOrdered[citem.id].quant);
  const [error, setError] = useState(false);

  const increaseQuantity = (item) => {
    if (item.quantity > itemOrdered[item.id].quant) {
      setQuant((prevQuant) => prevQuant + 1);
      setItemOrdered((prevItemOrdered) => {
        return {
          ...prevItemOrdered,
          [item.id]: { quant: quant + 1, price: item.price },
        };
      });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const decreaseQuantity = (item) => {
    if (itemOrdered[item.id].quant > 1) {
      setQuant((prevQuant) => prevQuant - 1);
      setItemOrdered((prevItemOrdered) => {
        return {
          ...prevItemOrdered,
          [item.id]: { quant: quant - 1, price: item.price },
        };
      });
    } else {
      setCart(cart.filter((itm) => itm.id !== item.id));
      delete itemOrdered[item.id];
    }
  };

  return (
    <div className="Counter">
      <button className="ButtonCounter" onClick={() => decreaseQuantity(citem)}>
        -
      </button>
      <div className="Quantity">{itemOrdered[citem.id].quant}</div>
      <button className="ButtonCounter" onClick={() => increaseQuantity(citem)}>
        +
      </button>
      {error && (
        <p className="text-danger">
          <small>Max Quantity Reached</small>
        </p>
      )}
    </div>
  );
};

export default Quantity;
