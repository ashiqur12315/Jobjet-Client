import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import PrivateRoutes from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails";
import AllJobs from "../Pages/AllJobs";
import AddAJob from "../Pages/AddAJob";
import MyJobs from "../Pages/MyJobs";
import Update1 from "../Pages/Update1";
import AppliedJobs from "../Pages/AppliedJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
            path: '/viewDetails/:id',
            element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
            // loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/singleJob/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/allJobs',
            element: <AllJobs></AllJobs>,
            // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
            path: '/add-a-job',
            element: <PrivateRoutes><AddAJob></AddAJob></PrivateRoutes>
        },
        {
            path: '/myJobs',
            element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
        },
        {
            path: '/update/:id',
            element: <Update1></Update1>
        },
        {
            path: '/appliedJobs',
            element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;