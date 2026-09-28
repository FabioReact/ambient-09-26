import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ES7+ React/Redux/React-Native snippets  v4.4.3
// 'react' -> Algo de diff
// 'react-native' -> Contexte mobile
// 'react-dom' -> Contexte web


createRoot(document.getElementById('racine')!).render(
  <StrictMode>
    <App />
    <h1 className='red'>React</h1>
  </StrictMode>,
)
