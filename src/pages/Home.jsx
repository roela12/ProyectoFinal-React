import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../Components";
import { LoadComponent } from "../Components";

export const Home = () => {
  const { products, loading, error } = useAllProducts(15);

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
