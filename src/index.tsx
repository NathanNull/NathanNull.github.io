import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, redirect, RouterProvider } from 'react-router-dom';
import Home from './Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: async () => redirect("home")
      },
      {
        path: "home",
        element: <Home />,
      }
    ]
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);