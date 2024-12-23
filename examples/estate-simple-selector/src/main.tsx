import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import './UI.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);