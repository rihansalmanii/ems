import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { setLocalStorage } from './utils/localStorage.jsx'

// Initialize localStorage with default data if not already set
if (!localStorage.getItem('employee')) {
    setLocalStorage()
}

createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <App />
 </AuthProvider>
)
