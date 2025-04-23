import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { Router } from './Routes/Router.jsx'
import Loader from './components/Loader/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={Router}></RouterProvider>
    </Suspense>
  </StrictMode>,
)
