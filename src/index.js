import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/moviepage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
{
  path:"/:id",
  element:<MoviePage />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


