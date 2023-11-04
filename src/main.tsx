import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import './reset.css';
import App from './App';
import { Products, user } from './data';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App products={Products} user={user()} />
    </React.StrictMode>
);
