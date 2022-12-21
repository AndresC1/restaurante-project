import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css'
import { ContextDataProvider } from './context/ContextData';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/HomePage';

const rutas = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextDataProvider>
    <RouterProvider router={rutas}/>
  </ContextDataProvider>
);
