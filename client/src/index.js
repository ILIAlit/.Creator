import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Context } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Context.Provider>
);
