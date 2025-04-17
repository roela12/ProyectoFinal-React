import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { spinnerStyles } from "./LoadComponent.styles.js";

export const LoadComponent = () => {
  return (
    <div style={spinnerStyles}>
      <Spinner animation="border" />
    </div>
  );
};
