import React, { useEffect, useState } from "react";
import { ItemListContainer } from "../Components";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/?limit=20")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <ItemListContainer products={products} />;
};
