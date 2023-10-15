import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CountProvider } from './CountContext';
import { ProductCountsProvider } from './ProductCountsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ProductCountsProvider>
  <CountProvider>
    <App />
   </CountProvider>
  </ProductCountsProvider>
  
   
  </React.StrictMode>
);

