import React from "react";
import { ItemDetailContainer } from "../Components";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { LoadComponent } from "../Components";

export const Item = () => {
  const { productId } = useParams();
  const { product, loading, error } = useSingleProduct(productId);

  return (
    <div>
      {loading ? (
        <LoadComponent />
      ) : error ? (
        <div>Error</div>
      ) : (
        <ItemDetailContainer product={product} />
      )}
    </div>
  );
};
