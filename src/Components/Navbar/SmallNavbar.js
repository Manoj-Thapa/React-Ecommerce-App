import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Store/cartContext";
import styles from "./SmallNavbar.module.css";

const SmallNavbar = () => {
  const { cart } = useContext(CartContext);

  const active = { color: "#ffffff" };
  const inActive = { color: "#13253A" };

  return (
    <>
      <NavLink
        className={styles.SmallNavbar}
        style={({ isActive }) => (isActive ? active : inActive)}
        to="/products"
      >
        <span>Products</span>
      </NavLink>
      <NavLink
        className={styles.SmallNavbar}
        style={({ isActive }) => (isActive ? active : inActive)}
        to="/carts"
      >
        <span
          className="iconify"
          data-icon="ant-design:shopping-cart-outlined"
        ></span>
        <span className={styles.CartTotal}>{cart.length}</span>
      </NavLink>
    </>
  );
};

export default SmallNavbar;
