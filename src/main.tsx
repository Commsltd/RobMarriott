import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/grid.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

console.log('Main.tsx executing...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');

  console.log('Found root element, mounting React app...');
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
  console.log('React app mounted successfully');
} catch (error) {
  console.error('Fatal error preventing React mount:', error);
  document.body.innerHTML += '<div style="color:red; padding:20px;"><h1>Fatal Boot Error</h1><pre>' + error + '</pre></div>';
}
