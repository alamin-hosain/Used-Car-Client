import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllBuyers from "../Pages/AdminInfo/AllBuyers";
import AllSellers from "../Pages/AdminInfo/AllSellers";
import ReportedItems from "../Pages/AdminInfo/ReportedItems";
import Blog from "../Pages/Blog";
import AddAProduct from "../Pages/Dashboard/AddAProduct";
import Advertisement from "../Pages/Dashboard/Advertisement";
import AllOrders from "../Pages/Dashboard/AllOrder/AllOrders";
import Payment from "../Pages/Dashboard/AllOrder/Payment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProduct from "../Pages/Dashboard/MyProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/Shared/Errorpage";
import SignUp from "../Pages/SignUp";
import CategoryProducts from "../Pages/UsedProducts/CategoryProducts";
import SingleCategory from "../Pages/UsedProducts/SingleCategory";
import UsedProducts from "../Pages/UsedProducts/UsedProducts";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRouter";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


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
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/category/${params.id}`)
            }
        ],

    },
    {
        path: 'dashboard', element: <PrivateRoute> <DashboardLayout /></PrivateRoute>, children: [
            {
                path: '/dashboard', element: <Dashboard />
            },
            {
                path: '/dashboard/allorders', element: <BuyerRoute><AllOrders /></BuyerRoute>
            },
            {
                path: '/dashboard/allorders/:id', element: <BuyerRoute><Payment /></BuyerRoute>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/booking/${params.id}`)
            },
            {
                path: '/dashboard/addaproduct', element: <SellerRoute> <AddAProduct /></SellerRoute>
            },
            {
                path: '/dashboard/myproduct', element: <SellerRoute><MyProduct /></SellerRoute>
            },
            {
                path: '/dashboard/advertisement', element: <SellerRoute><Advertisement /></SellerRoute>
            },
            {
                path: '/dashboard/allsellers', element: <AdminRoute> <AllSellers /></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers', element: <AdminRoute> <AllBuyers /></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems', element: <AdminRoute> <ReportedItems /></AdminRoute>
            },

        ]
    }
])

export default router;