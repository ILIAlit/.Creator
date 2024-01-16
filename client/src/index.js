import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Store } from './store/store';

export const Context = createContext(Store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

