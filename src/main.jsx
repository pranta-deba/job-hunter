import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ApplyJobs from "./pages/ApplyJobs";
import Statistics from "./pages/Statistics";
import ErrorPage from "./components/ErrorPage";
import JobDetails from "./pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        loader: ()=> fetch('../jobs.json'),
        element: <Statistics />,
      },
      {
        path: "/jobs",
        loader: ()=> fetch('../jobs.json'),
        element: <ApplyJobs />,
      },
      {
        path: "/job/:id",
        loader: ()=> fetch('../jobs.json'),
        element: <JobDetails/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
