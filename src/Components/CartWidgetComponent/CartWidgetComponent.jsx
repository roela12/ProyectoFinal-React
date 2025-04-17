import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { iconStyles, numberStyles } from "./CartWidgetComponent.styles.js";
import { CartContext } from "../../context";

export const CartWidgetComponent = () => {
  const { itemCount } = React.useContext(CartContext);
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
      <span style={numberStyles}>{itemCount}</span>
    </div>
  );
};
