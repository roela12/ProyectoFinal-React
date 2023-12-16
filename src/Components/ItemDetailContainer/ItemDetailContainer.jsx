import React from "react";
import { Card } from "react-bootstrap";
import { cardStyles, imageStyles } from "./ItemDetailContainer.styles";
import { ItemQuantitySelector } from "../../Components";

export const ItemDetailContainer = ({ product }) => {
  return (
    <div>
      <Card key={product.id} style={cardStyles}>
        <Card.Img src={product.thumbnail} style={imageStyles} />
        <Card.Body>
          <Card.Title>
            <h1>
              $
              {product.price.toLocaleString("es-ES", {
                style: "currency",
                currency: "ARS",
              })}
            </h1>
          </Card.Title>
          <Card.Text>STOCK: {product.stock}</Card.Text>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <ItemQuantitySelector />
        </Card.Body>
      </Card>
    </div>
  );
};
