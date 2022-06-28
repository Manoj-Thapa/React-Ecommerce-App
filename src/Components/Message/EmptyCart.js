import React from "react";
import { Link } from "react-router-dom";
import "./Message.css";

const EmptyCart = () => {
  return (
    <div className="text-center CartEmpty">
      <span className="iconify" data-icon="bi:cart-x" data-width="80"></span>
      <p className="fs-2">Your Cart is Empty!</p>
      <p className="fs-5">Add items to it now</p>
      <Link to="/products">
        <p className="btn btn-success m-2">Add Items</p>
      </Link>
    </div>
  );
};

export default EmptyCart;
