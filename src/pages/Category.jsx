import React from "react";
import { ItemListContainer } from "../Components";
import { useParams } from "react-router-dom";
import { useAllProductsByFilter } from "../hooks/useProducts";

export const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProductsByFilter(
    "products",
    categoryId,
    "category"
  );

  return <ItemListContainer products={products} />;
};
