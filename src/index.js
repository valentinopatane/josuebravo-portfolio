import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChangeLanguage } from './Components/Context/langContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeLanguage>
      <App />
    </ChangeLanguage>

  </React.StrictMode>
);

