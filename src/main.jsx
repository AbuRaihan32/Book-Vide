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

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
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
        element: <PageRead></PageRead>
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
