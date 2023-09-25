import {  createBrowserRouter } from "react-router-dom";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleDonation from "../Pages/SigleDonation/SingleDonation";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
     errorElement:<ErrorPage></ErrorPage>,
    

  
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/Donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {path:'/donation/:id',
      element:<SingleDonation></SingleDonation>,
      loader:()=>fetch('/Donation.json')

      }
    ],
  },
]);

export default myCreateRouter;
