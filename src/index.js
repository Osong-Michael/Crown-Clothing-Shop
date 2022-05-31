import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Context/cartContext';
import { store } from './Store/store';

import './index.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
    </BrowserRouter>
  </Provider>
);

