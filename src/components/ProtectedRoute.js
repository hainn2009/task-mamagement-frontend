import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const accessToken = useSelector((state) => state.auth.accessToken);
    if (!accessToken) {
        return navigate("/signin");
    }
    return <div>{children}</div>;
};

export default ProtectedRoute;
