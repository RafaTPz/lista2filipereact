import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter
} from "react-router-dom";

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "lanches", 
        element: <Lanches />
      },
    ],
  },
]);
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <HashRouter>
    {/*<RouterProvider router={router} /> */}
    <Main />
    </HashRouter>
  </React.StrictMode>
);
