import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";

export const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };
  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleResetQuantity = () => {
    setQuantity(1);
  };
  return (
    <div>
      <Button
        variant="dark"
        style={{ margin: 5 }}
        onClick={handleSubstractProduct}
      >
        -
      </Button>
      <input type="number" value={quantity} disabled />
      <Button variant="dark" style={{ margin: 5 }} onClick={handleAddProduct}>
        +
      </Button>
      <AddItemButton
        handleResetQuantity={handleResetQuantity}
        quantity={quantity}
      />
    </div>
  );
};
