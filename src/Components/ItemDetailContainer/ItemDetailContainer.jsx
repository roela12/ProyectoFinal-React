import React from "react";
import { Card } from "react-bootstrap";
import { cardStyles, imageStyles } from "./ItemDetailContainer.styles";
import { ItemQuantitySelector } from "../ItemQuantitySelector";

export const ItemDetailContainer = ({ product }) => {
  return (
    <div>
      <Card key={product.id} style={cardStyles}>
        <Card.Img src={product.thumbnail} style={imageStyles} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ItemQuantitySelector />
      </Card>
    </div>
  );
};
