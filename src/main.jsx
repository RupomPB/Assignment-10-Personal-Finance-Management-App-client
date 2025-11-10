import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Routes/Router.jsx';
import { AuthContext } from './Context/AuthContext.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import { RouterProvider } from 'react-router';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router ={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
