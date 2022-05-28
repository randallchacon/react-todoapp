import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App saludo="Hola mundo"/> */}
    <App>      
      <h1>Randall Chacón</h1>
    </App>
  </React.StrictMode>
);

