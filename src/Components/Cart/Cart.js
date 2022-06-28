import React, { useContext } from "react";
import { CartContext } from "../../Store/cartContext";
import Quantity from "../Quantity/Quantity";

const Cart = (cartitem) => {
  const { cart, setCart, itemOrdered } = useContext(CartContext);

  const removeFromCartHandler = (ritem) => {
    setCart(cart.filter((item) => item.id !== ritem.id));
    delete itemOrdered[ritem.id];
  };

  return (
    <>
      <div className="col-md-2 my-2">
        <img src={cartitem.imageURL} alt={cartitem.name} height="80px" />
      </div>
      <div className="col-md-3 px-3 my-2">
        {cartitem.name}
        <br />
        Rs. {itemOrdered[cartitem.id].quant * cartitem.price}
      </div>
      <div className="col-md-4 px-4 my-2">
        <Quantity citem={cartitem} />
      </div>
      <span
        className="col-md-3 my-2 btn btn-success h-50 CartButton"
        onClick={() => removeFromCartHandler(cartitem)}
      >
        Remove from Cart
      </span>
      <hr />
    </>
  );
};

export default Cart;
