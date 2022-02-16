import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({user}) => {
    let auth = user;
    
    return auth ? <Outlet/> : <Navigate to="/" />;
};

export default PrivateRoute;