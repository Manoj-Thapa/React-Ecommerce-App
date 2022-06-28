import React, { useContext } from "react";
import { CartContext } from "../../Store/cartContext";
import "./Product.css";

const Product = (item) => {
  const { cart, setCart, itemOrdered, setItemOrdered } =
    useContext(CartContext);

  const addToCartHandler = (item) => {
    setCart((prevItem) => {
      return [...prevItem, item];
    });
    setItemOrdered((prevItemOrdered) => {
      return {
        ...prevItemOrdered,
        [item.id]: { quant: 1, price: item.price },
      };
    });
  };

  const removeFromCartHandler = (ritem) => {
    setCart(cart.filter((item) => item.id !== ritem.id));
    delete itemOrdered[ritem.id];
  };

  return (
    <>
      <div className="col-lg-6 col-xl-4">
        <div className="CardBody card card-design">
          <img
            className="card-img-top img-design p-2"
            src={item.imageURL}
            alt={item.name}
            height="180px"
          />

          <h3 className="card-title fs-5 m-2">{item.name}</h3>
          <span className="m-2">Rs. {item.price}</span>
          {cart.find((itm) => itm.id === item.id) ? (
            <span
              onClick={() => removeFromCartHandler(item)}
              className="DisplayPosition btn btn-success"
            >
              Remove from Cart
            </span>
          ) : (
            <span
              onClick={() => addToCartHandler(item)}
              className="DisplayPosition btn btn-success"
            >
              Add to Cart
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
