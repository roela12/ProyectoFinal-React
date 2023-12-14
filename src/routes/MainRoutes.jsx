import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBarComponent } from "../Components";
import { Home } from "../pages";
import { Category } from "../pages";
import { Item } from "../pages";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};
