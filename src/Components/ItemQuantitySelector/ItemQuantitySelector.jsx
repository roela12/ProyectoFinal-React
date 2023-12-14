import React from "react";
import { Button } from "react-bootstrap";

export const ItemQuantitySelector = () => {
  return (
    <div>
      <Button>-</Button>
      <input type="number" disabled />
      <Button>+</Button>
    </div>
  );
};
