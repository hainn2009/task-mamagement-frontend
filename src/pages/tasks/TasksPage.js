import React from "react";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import SignOutIcon from "@mui/icons-material/ExitToApp";
import styled from "styled-components";
import Task from "../../components/Task";
import TasksFilters from "../../components/TasksFilters";
import { useGetTasksQuery } from "../../services/new-tasks.service";
import { setAccessToken } from "../../services/token-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const TasksWrapper = styled.div`
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;

const TasksHeader = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 3px solid #757c87;
`;

const Title = styled.h1`
    width: 100%;
    color: #edf4ff;
`;

const CreateButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const TasksContainer = styled.div`
    padding-top: 20px;
`;

const EmptyTasksPlaceholder = styled.p`
    color: #edf4ff;
    text-align: center;
    font-size: 22px;
`;

const SignOutIconContainer = styled.div`
    margin-left: 10px;

    .signOutIcon {
        fill: #edf4ff;
    }
`;

const TasksPage = () => {
    const { search, status } = useSelector((state) => state.filters);
    const { data: tasks, error, isLoading } = useGetTasksQuery({ search, status });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(setAccessToken(null));
        navigate("/signin");
    };

    const renderTasks = () => {
        if (tasks.length === 0) {
            return <EmptyTasksPlaceholder>No tasks available. Create one?</EmptyTasksPlaceholder>;
        }

        return tasks.map((task) => <Task key={task.id} id={task.id} title={task.title} description={task.description} status={task.status} />);
    };

    return (
        <TasksWrapper>
            <TasksHeader>
                <Title>Get things done.</Title>

                <CreateButtonContainer>
                    <Fab variant="extended" onClick={() => navigate("/tasks/create")}>
                        <AddIcon />
                        Create Task
                    </Fab>

                    <SignOutIconContainer>
                        <IconButton onClick={handleSignOut}>
                            <SignOutIcon className="signOutIcon" />
                        </IconButton>
                    </SignOutIconContainer>
                </CreateButtonContainer>
            </TasksHeader>

            <TasksFilters />

            {error && <h2>Something went wrong...</h2>}
            {isLoading ? <h2>Loading...</h2> : <TasksContainer>{renderTasks()}</TasksContainer>}
        </TasksWrapper>
    );
};

export default TasksPage;
