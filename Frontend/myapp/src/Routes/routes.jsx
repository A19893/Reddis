import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
export const publicRoutes=[
{
    path:"/",
    element:<Login/>
},
{
    path:"/signup",
    element:<Signup/>
},
{
    path:"/*",
    element:<Login/>
}
]
export const privateRoutes=[
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/*",
        element:<Login/>
    }
]