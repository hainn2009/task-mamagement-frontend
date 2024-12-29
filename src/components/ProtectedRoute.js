import React from "react";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/signin" />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
