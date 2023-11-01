const ItemListContainer = ({ greeting }) => {
  const greetingStyles = {
    color: "white",
    fontSize: "4rem",
    fontWeight: "800",
    textAlign: "center",
  };
  return (
    <div style={greetingStyles}>
      <h1>{greeting}</h1>
    </div>
  );
};
export default ItemListContainer;
