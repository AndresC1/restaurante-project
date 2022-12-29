import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css'
import { ContextDataProvider } from './context/ContextData';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/HomePage';
import Template from './page/Template';
import MenuPage from './page/MenuPage';
import ContactPage from './page/ContactPage';

const rutas = createHashRouter([
  {
    path: '/',
    element: <Template/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/menu',
        element: <MenuPage/>
      },
      {
        path: '/contacto',
        element: <ContactPage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextDataProvider>
    <RouterProvider router={rutas}/>
  </ContextDataProvider>
);
