import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../JobApply/JobApply";
import MyApplications from "../MyApplications/MyApplications";
import PostJob from "../pages/PostJob/PostJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../pages/ViewApplications/ViewApplication";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <PrivateRoute>
            <PostJob></PostJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-job",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/view-application/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication></ViewApplication>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/application/job/${params.job_id}`),
      },
    ],
  },
]);
export default router;
