import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
<div>
  <header>
    <h1>Guilherme Otavio Dos Santos</h1>
  </header>
</div>
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </StrictMode>,
)
