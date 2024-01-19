import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import WorkSample from "../pages/WorkSample";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Layout from "../Layout/Layout";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [{
      path: "/",
      element: <Home/>,
    },
    {
      path: "home",
      element: <Home/>,
    },
    {
      path: "About",
      element: <About/>,
    },
    {
      path: "Work Sample",
      element: <WorkSample />,
    },
    {
      path: "Contact",
      element:<Contact/>,
    },
    
    // {
    //   path: "profileDetails",
    //   element: <Profile/>,
    // },
    {
      path: "profileDetails/:id",
      element: <Profile/>,
    },
    {
      path: "*",
      element:<Notfound/>
    }
  ]
  } 
]);
