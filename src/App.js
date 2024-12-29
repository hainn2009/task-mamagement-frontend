import React from "react";
import { Routes, Route } from "react-router";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signin/" element={<SignInPage />} />
            <Route path="/signup/" element={<SignUpPage />} />
            <Route path="tasks" element={<ProtectedRoute />}>
                <Route component={TasksPage} />
                <Route path="create" component={CreateTaskPage} />
            </Route>
        </Routes>
    );
};

export default App;
