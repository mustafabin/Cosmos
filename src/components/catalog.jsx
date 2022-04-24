import React from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import "../styles/Catalog.css";
import { Link } from "react-router-dom";
import gif from "../media/loading.gif";
//return product cards for X number of entries with props passing product info
function Catalog() {
  const [catalogState, setCatalogState] = useState([]);
  const [loaded, setLoaded] = useState(null);
  //Query the DB for all products
  const queryDb = async () => {
    let response = await axios.get(
      "https://comos-backend.herokuapp.com/products/allProducts"
    );

    setCatalogState(response.data);
    setLoaded("catalog");
  };

  //Lifecycle method where dbQuery is called
  useEffect(() => {
    queryDb();
  }, []);
  let loadingGif = <img src={gif} alt="Loading screen" />;
  return (
    <div className="catalog-background" id={loaded}>
      <div className="catalog">
        {!loaded
          ? loadingGif
          : catalogState.map((product, i) => (
              <Link key={i} to={`/products/${product._id}`}>
                <ProductCard key={i} product={product} />
              </Link>
            ))}
      </div>
    </div>
  );
}
export default Catalog;
