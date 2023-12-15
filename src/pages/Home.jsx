import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../Components";

export const Home = () => {
  const { products, error } = useAllProducts(15);

  return (
    <div>
      {error ? <div>Error</div> : <ItemListContainer products={products} />}
    </div>
  );
};
