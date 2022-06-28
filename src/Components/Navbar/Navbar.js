import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SmallNavbar from "./SmallNavbar";
import BigNavbar from "./BigNavbar";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.NavbarDesign}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.Active : styles.Inactive
        }
        to="/"
      >
        <span>TeeRex Store</span>
      </NavLink>

      {/* Toggle => show Navbar Content */}
      {!show && (
        <div
          className={styles.NavBarShow}
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          <span className="iconify" data-icon="octicon:three-bars-16"></span>
        </div>
      )}
      {show && (
        <div
          className={styles.NavBarShow}
          onClick={() => setShow((prevShow) => !prevShow)}
        >
          <span className="iconify" data-icon="akar-icons:cross"></span>
        </div>
      )}

      {/* Actual Big Screen Navbar Design */}
      <BigNavbar />

      {/* Responsive Navbar Design */}
      {show && <SmallNavbar />}
    </div>
  );
};

export default Navbar;
