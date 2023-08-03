import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { about } from './about/about'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {
          about()
      }
  </React.StrictMode>
);
