import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Tooltip } from "react-tooltip";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* Outlet */}
            <div className="min-h-[calc(100vh-310px)]">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>

            <Tooltip id="my-tooltip" />
            <Toaster />

        </div>
    );
};

export default Root;