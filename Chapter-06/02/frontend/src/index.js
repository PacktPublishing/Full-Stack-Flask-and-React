import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SpeakersPage from './pages/SpeakersPage/SpeakersPage'
import EventsPage from './pages/EventsPage/EventsPage'
import SponsorsPage from './pages/SponsorsPage/SponsorsPage'
import ContactPage from './pages/ContactPage/ContactPage';
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/speakers",
    element: <SpeakersPage/>,
  },

  {
    path: "/events",
    element: <EventsPage/>,
  },
 {
    path: "/sponsors",
    element: <SponsorsPage/>,
  },
 {
    path: "/contact",
    element: <ContactPage/>,
  },


    ],
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);