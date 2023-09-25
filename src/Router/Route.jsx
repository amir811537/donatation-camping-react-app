import {  createBrowserRouter } from "react-router-dom";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
     
    

  
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/public/Donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ],
  },
]);

export default myCreateRouter;
