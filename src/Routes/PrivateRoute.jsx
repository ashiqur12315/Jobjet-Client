import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location)
    const {user, loading} = useContext(AuthContext)

    // useEffect(() => {
    //     if (!user && !loading) {
    //         toast.error("Please log in first to view details");
    //     }
    // }, [user, loading]);
    
    useEffect(() => {
        if (!user && !loading) {
            const currentPath = location.pathname;
            if (currentPath.startsWith("/viewDetails/")) {
                toast.error("You have to log in first to view details");
            } else {
                toast.error("Please log in to access this page");
            }
        }
    }, [user, loading, location.pathname]);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>;
    }
    
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;