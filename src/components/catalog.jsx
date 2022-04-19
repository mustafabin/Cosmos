import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import "../styles/Catalog.css";
import { Link } from "react-router-dom";

//return product cards for X number of entries with props passing product info
function Catalog() {
  const [catalogState, setCatalogState] = useState([]);
  const [loaded, setLoaded] = useState("");

  //Query the DB for all products
  const queryDb = async () => {
    let response = await axios.get(
      "https://cosmos-shop.herokuapp.com/products/allProducts"
    );
    setCatalogState(response.data);
    setLoaded("catalog");
  };

  //Lifecycle method where dbQuery is called
  useEffect(() => {
    queryDb();
  }, []);

  return (
    <div className="catalog-background" id={loaded}>
      <div className="catalog">
        {catalogState.map((product, i) => (
          <Link to={`/products/${product._id}`}>
            <ProductCard key={i} product={product} index={i} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Catalog;
