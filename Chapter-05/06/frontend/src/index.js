import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import AdminPage from "./pages/Admin/AdminPage/AdminPage";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Speakers from "./pages/Admin/Speakers/Speakers";
import Venues from "./pages/Admin/Venues/Venues";
import Schedules from "./pages/Admin/Schedules/Schedules";
import Sponsors from "./pages/Admin/Sponsors/Sponsors";
import Events from "./pages/Admin/Events/Events";
import HomePage from "./pages/HomePage/HomePage";
import SpeakersPage from "./pages/SpeakersPage/SpeakersPage";
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
  {
    path: "/admin",
    element: <AdminPage/>,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/speakers",
        element: <Speakers />,
      },
      {
        path: "/admin/venues",
        element: <Venues />,
      },
      {
        path: "/admin/events",
        element: <Events />,
      },
      {
        path: "/admin/schedules",
        element: <Schedules />,
      },
      {
        path: "/admin/sponsors",
        element: <Sponsors />,
      },

    ],


  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);