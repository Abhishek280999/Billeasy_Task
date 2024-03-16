import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./ProductComponents/ProductList";
import ProductDetail from "./ProductComponents/ProductDetails";
import Header from "./ProductComponents/Header";

function App() {
 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
