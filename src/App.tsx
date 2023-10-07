import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";
import { FaviritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter basename="/rental-car">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FaviritesPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
