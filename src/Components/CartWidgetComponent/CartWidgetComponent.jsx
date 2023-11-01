import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const iconStyles = {
    fontSize: "1.5rem",
    paddingRight: "5px",
    color: "gray",
  };
  const numberStyle = {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#3498db",
  };
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
      <span style={numberStyle}>5</span>
    </div>
  );
};
export default CartWidgetComponent;
