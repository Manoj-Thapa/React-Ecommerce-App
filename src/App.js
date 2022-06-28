import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Carts from "./Components/Carts/Carts";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Header />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </>
  );
}

export default App;
