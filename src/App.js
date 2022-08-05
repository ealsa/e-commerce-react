import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/e-commerce-react" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
