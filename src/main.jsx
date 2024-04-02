import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from '../src/Routes/Routes'
import {
  
  RouterProvider
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
