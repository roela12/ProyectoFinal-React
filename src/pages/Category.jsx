import React from "react";
import { ItemListContainer } from "../Components";
import { useParams } from "react-router-dom";
import { useAllProductsByFilter } from "../hooks/useProducts";
import Spinner from "react-bootstrap/Spinner";

export const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByFilter(
    "products",
    categoryId,
    "category"
  );
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
