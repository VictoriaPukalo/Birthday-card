import {createRoot} from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import './index.scss';

const element = document.querySelector('#root');

createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>
);