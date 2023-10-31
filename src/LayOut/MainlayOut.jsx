import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footerdonation from "../Pages/FOOter/Footerdonation";


const MainlayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
          <Navbar></Navbar>
           <div className="py-10">
           <Outlet></Outlet>
           <Footerdonation></Footerdonation>
           </div>
        </div>
    );
};

export default MainlayOut;