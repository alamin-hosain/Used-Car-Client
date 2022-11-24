import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/Shared/Errorpage";
import SignUp from "../Pages/SignUp";
import UsedProducts from "../Pages/UsedProducts/UsedProducts";


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
                path: '/category', element: <UsedProducts />
            },
            {
                path: '/category/:id', element: <UsedProducts />
            }
        ]
    }
])

export default router;