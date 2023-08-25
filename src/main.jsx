import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="flex items-center justify-center w-full h-auto min-h-screen font-sans scroll-smooth bg-slate-100 dark:bg-slate-900">
      <App />
    </div>
  </BrowserRouter>,
)
