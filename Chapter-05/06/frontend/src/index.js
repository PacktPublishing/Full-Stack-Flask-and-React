import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import SpeakersPage from './pages/SpeakersPage/SpeakersPage'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

 {
  path: "/speakers",
  element: <SpeakersPage/>,
},

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>);
