import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import dotenv from 'dotenv';
dotenv.config();
import './shared/assets/app.less';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
