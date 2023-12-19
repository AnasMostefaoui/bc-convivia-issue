import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home-page/index.jsx';
import ArticlePage from './pages/article-page/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/article",
    element: <ArticlePage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <RouterProvider router={router} />
  // </React.StrictMode>,
)
