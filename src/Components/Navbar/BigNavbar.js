import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Store/cartContext";
import styles from "./BigNavbar.module.css";

const BigNavbar = () => {
  const { cart } = useContext(CartContext);

  const active = { color: "#ffffff" };
  const inActive = { color: "#13253A" };

  return (
    <>
      <NavLink
        className={styles.ActiveProducts}
        style={({ isActive }) => (isActive ? active : inActive)}
        to="/products"
      >
        <span className={styles.Products}>Products</span>
      </NavLink>
      <NavLink
        className={styles.ActiveProducts}
        style={({ isActive }) => (isActive ? active : inActive)}
        to="/carts"
      >
        <span
          className={`iconify ${styles.Cart}`}
          data-icon="ant-design:shopping-cart-outlined"
        ></span>
        <span className={styles.CartTotal}>{cart.length}</span>
      </NavLink>
    </>
  );
};

export default BigNavbar;
