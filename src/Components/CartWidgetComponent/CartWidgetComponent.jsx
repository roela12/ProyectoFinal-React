import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { iconStyles } from "./CartWidgetComponent.styles";
import { numberStyles } from "./CartWidgetComponent.styles";

const CartWidgetComponent = () => {
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
      <span style={numberStyles}>5</span>
    </div>
  );
};
export default CartWidgetComponent;
