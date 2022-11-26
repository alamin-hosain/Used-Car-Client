import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllBuyers from "../Pages/AdminInfo/AllBuyers";
import AllSellers from "../Pages/AdminInfo/AllSellers";
import Blog from "../Pages/Blog";
import AddAProduct from "../Pages/Dashboard/AddAProduct";
import AllOrders from "../Pages/Dashboard/AllOrder/AllOrders";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProduct from "../Pages/Dashboard/MyProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/Shared/Errorpage";
import SignUp from "../Pages/SignUp";
import CategoryProducts from "../Pages/UsedProducts/CategoryProducts";
import SingleCategory from "../Pages/UsedProducts/SingleCategory";
import UsedProducts from "../Pages/UsedProducts/UsedProducts";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage />, element: <Main />, children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/signup', element: <SignUp />
            },
            {
                path: '/blog', element: <Blog />
            },
            {
                path: '/category', element: <UsedProducts />
            },
            {
                path: '/category/:id', element: <PrivateRoute><SingleCategory />,</PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ],

    },
    {
        path: '/dashboard', element: <PrivateRoute> <DashboardLayout /></PrivateRoute>, children: [
            {
                path: '/dashboard', element: <AllOrders />
            },
            {
                path: '/dashboard/addaproduct', element: <AddAProduct />
            },
            {
                path: '/dashboard/myproduct', element: <MyProduct />
            },
            {
                path: '/dashboard/allsellers', element: <AllSellers />
            },
            {
                path: '/dashboard/allbuyers', element: <AllBuyers />
            }
        ]
    }
])

export default router;