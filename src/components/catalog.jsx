import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import "../styles/Catalog.css";
//return product cards for X number of entries with props passing product info
function Catalog() {
  const [catalogState, setCatalogState] = useState([]);

  //Query the DB for all products
  const queryDb = async () => {
    let response = await axios.get(
      "https://cosmos-shop.herokuapp.com/products/allProducts"
    );
    setCatalogState(response.data);
  };

  //Lifecycle method where dbQuery is called
  useEffect(() => {
    queryDb();
  }, []);
  return (
    <div className="catalog-background">
      <h1 className="catalogTitle">Catalog</h1>
      <div className="catalog">
        {catalogState.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Catalog;
