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
import Blog from "../Pages/Blog";
import Payment from "../Pages/Payment";
import PaymentFail from "../Pages/PaymentFail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            
        },
        {
            path: '/viewDetails/:id',
            element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
            
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
        },
        {
            path: '/blogs',
            element: <Blog></Blog>
        },
        {
            path: '/payment/success/:tranId',
            element: <Payment></Payment>
        },
        {
            path: '/payment/fail/:tranId',
            element: <PaymentFail></PaymentFail>
        }
      ]
    },
  ]);

  export default router;