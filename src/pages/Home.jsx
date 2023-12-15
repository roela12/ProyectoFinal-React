import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../Components";
import Spinner from "react-bootstrap/Spinner";

export const Home = () => {
  const { products, loading, error } = useAllProducts(15);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <div>Error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
