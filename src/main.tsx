import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import './reset.css';
import App from './App';
import { PRODUCTS, user } from './data';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App products={PRODUCTS} user={user()} />
    </React.StrictMode>
);
