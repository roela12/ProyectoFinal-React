import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productsStyles, cardStyles } from "./ItemListContainer.styles";

export const ItemListContainer = ({ products }) => {
  return (
    <div style={productsStyles}>
      {products.map((product) => {
        return (
          <Card key={product.id} style={cardStyles}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
