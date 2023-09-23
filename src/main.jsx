import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 


import Root from './components/Root/Root';

import ErrorPage from './components/ErrorPage/ErrorPage';
import Jobs from './components/Jobs/Jobs';
import Home from './components/Home/Home';
import JobDetails from './components/Jobs/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs> 
      },
      { 
        path: "/job/:id", 
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../public/jobs.json") 
      },
      {
        path: "/applied/",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../public/jobs.json") 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
