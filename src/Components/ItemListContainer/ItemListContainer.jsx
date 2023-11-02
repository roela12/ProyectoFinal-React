import { greetingStyles } from "./ItemListContainer.styles";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={greetingStyles}>
      <h1>{greeting}</h1>
    </div>
  );
};
export default ItemListContainer;
