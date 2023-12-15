import React from "react";
import { ItemDetailContainer } from "../Components";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import Spinner from "react-bootstrap/Spinner";

export const Item = () => {
  const { productId } = useParams();
  const { product, loading, error } = useSingleProduct(productId);

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <div>Error</div>
      ) : (
        <ItemDetailContainer product={product} />
      )}
    </div>
  );
};
