import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainlayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
          <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainlayOut;