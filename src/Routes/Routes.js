import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/Shared/Errorpage";
import SignUp from "../Pages/SignUp";


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
            }
        ]
    }
])

export default router;