import { createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Toys from "../components/toys/Toys";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";
import SingleToyPage from "../pages/SingleToy/SingleToyPage";
import AddToy from "../pages/AddToy/AddToy";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/toys",
            element: <Toys></Toys>,
            loader : (()=>fetch('http://localhost:5000/toys'))
        },
        {
            path: "/toys/:id",
            element: <SingleToyPage></SingleToyPage>,
            loader : (({params})=>fetch(`http://localhost:5000/toys/${params.id}`))
        },
        {
            path: "/addtoy",
            element:<AddToy></AddToy>
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>
        }
        ]
    },{
        path: "*",
        element: <Error></Error>
    },
  ]);
export default router;