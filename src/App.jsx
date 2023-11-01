import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos!!!" />
    </div>
  );
}

export default App;
