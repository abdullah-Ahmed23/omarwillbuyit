import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const savedTheme = localStorage.getItem('theme')
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
    document.documentElement.classList.add('light')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
