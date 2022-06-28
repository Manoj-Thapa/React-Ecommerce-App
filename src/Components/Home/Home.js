import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <p className="fs-2">Welcome to TeeRex Store</p>
      <Link to="/products">
        <p className="btn btn-success m-2 fs-4">Shop Now</p>
      </Link>
    </div>
  );
};

export default Home;
