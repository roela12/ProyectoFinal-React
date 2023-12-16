import React from "react";
import { ItemListContainer } from "../Components";
import { useParams } from "react-router-dom";
import { useAllProductsByFilter } from "../hooks/useProducts";
import { LoadComponent } from "../Components";

export const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useAllProductsByFilter(
    "products",
    categoryId,
    "category"
  );
  return (
    <div>
      {loading ? (
        <LoadComponent />
      ) : error ? (
        <div>Error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
