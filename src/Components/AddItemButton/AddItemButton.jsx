import { Button } from "react-bootstrap";
import React from "react";
import { CartContext } from "../../context";

export const AddItemButton = ({
  label = "Agregar al carrito",
  quantity,
  handleResetQuantity,
}) => {
  const { itemCount, setItemCount } = React.useContext(CartContext);
  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleResetQuantity();
  };
  return <Button onClick={handleAddCart}>{label}</Button>;
};
