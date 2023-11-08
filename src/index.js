import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountProvider } from "./CountContext";
import { ProductCountsProvider } from "./ProductCountsProvider";
import { WishProvider } from "./WishContext";
import { CartProvider } from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <CartProvider>
  <WishProvider>
      <ProductCountsProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </ProductCountsProvider>
  </WishProvider>
  </CartProvider>
  </React.StrictMode>
);
