import { MainRoutes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
