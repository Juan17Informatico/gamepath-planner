import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import our custom CSS
import './scss/styles.scss'
import { GamePath } from './GamePath'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GamePath />
  </StrictMode>,
)
