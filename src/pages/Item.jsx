import React from "react";
import { ItemDetailContainer } from "../Components";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";

export const Item = () => {
  const { productId } = useParams();
  const { product } = useSingleProduct(productId);

  return <ItemDetailContainer product={product} />;
};
