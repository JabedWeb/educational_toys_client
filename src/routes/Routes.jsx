import { createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Toys from "../components/toys/Toys";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: "/",
            element: <h1>Home</h1>,
        },
        {
            path: "/toys",
            element: <Toys></Toys>,
            loader : (()=>fetch('http://localhost:5000/toys'))
        }
        ]
    },
  ]);
export default router;