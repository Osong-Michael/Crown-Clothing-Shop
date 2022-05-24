import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/userContext';
import { CartProvider } from './Context/cartContext';
import { CollectionsProvider } from './Context/collectionsContext';

import './index.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <UserProvider>
      <CollectionsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CollectionsProvider>
    </UserProvider>
  </BrowserRouter>
);

