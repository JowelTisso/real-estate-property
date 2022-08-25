import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FavouriteProvider from "./context/Provider/FavouriteProvider";
import PropertyProvider from "./context/Provider/PropertyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavouriteProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </FavouriteProvider>
  </BrowserRouter>
);
