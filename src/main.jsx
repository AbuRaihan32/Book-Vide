import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListBooks from './components/ListBooks/ListBooks.jsx';
import PageRead from './components/PageRead/PageRead.jsx';
import Root from './components/Root/Root.jsx';
import BookDetails from './components/BookDetails.jsx';
import ReadBooks from './components/ReadBooks.jsx';
import WishPage from './components/WishPage.jsx';
import FeedBack from './components/FeedBack.jsx';
import About from './components/About.jsx';
import ErrorPage from './components/ErrorPage.jsx';


const route = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/books',
        element: <ListBooks></ListBooks>,
        children: [
          {
            path: 'read',
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json')
          },
          {
            path: 'wishPage',
            element: <WishPage></WishPage>,
            loader: () => fetch('/books.json')
          }
        ]
      },
      {
        path: '/page',
        element: <PageRead></PageRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/feedBack',
        element: <FeedBack></FeedBack>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
