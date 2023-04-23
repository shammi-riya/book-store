import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import Book from './Component/Book.jsx';
import About from './Component/About.jsx';
import Bookdetails from './Component/Bookdetails.jsx';
import LoadingSpeaner from './Component/LoadingSpeaner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book",
        element: <Book></Book>,
        loader:()=> fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "books/:id",
        element: <Bookdetails></Bookdetails>,
        loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      
      },

      {
        path: "/loader",
        element: <LoadingSpeaner></LoadingSpeaner>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
