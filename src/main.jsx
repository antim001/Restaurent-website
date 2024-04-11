import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider';
  
import router from '../src/Routes/Routes'
import {

  RouterProvider
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>
    
    </AuthProvider>
  </React.StrictMode>,
)
