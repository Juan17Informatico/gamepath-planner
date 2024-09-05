import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import our custom CSS
import { GamePath } from './GamePath'
import './scss/styles.scss'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GamePath />
    </BrowserRouter>
  </StrictMode>,
)
