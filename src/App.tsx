import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";
import { FaviritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { SharedLayout } from "./components/SharedLayout";

function App() {
  return (
    <BrowserRouter basename="/rental-car">
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FaviritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
