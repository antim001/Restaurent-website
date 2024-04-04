import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import router from '../src/Routes/Routes'
import {
  
  RouterProvider
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
