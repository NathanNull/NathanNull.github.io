import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ItemSignoutDemo from './demos/ItemSignoutDemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createHashRouter([
  {
    path: "/",
    element: <App error={false}/>,
    errorElement: <App error={true}/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "itemsignout",
        element: <ItemSignoutDemo />,
      }
    ]
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);