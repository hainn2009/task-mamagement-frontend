import React from "react";
import { useNavigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        return navigate("/signin");
    }
    return <Outlet />;
};

export default ProtectedRoute;
