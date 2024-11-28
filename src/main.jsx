import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    //- sử dụng BrowserRouter để bọc lại thì bên trong sẽ dùng được
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
