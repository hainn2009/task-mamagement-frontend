import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import styled from "styled-components";
import ErrorMessage from "../../components/ErrorMessage";
import { useCreateTaskMutation } from "../../services/new-tasks.service";
import { useNavigate } from "react-router";

const FormWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    max-width: 480px;
    width: 100%;
    background-color: #edf4ff;
    padding: 30px;
    border-radius: 5px;
`;

const CreateTaskPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const [createTask] = useCreateTaskMutation();
    const navigate = useNavigate();

    const handleSubmitTask = async () => {
        try {
            await createTask({ title, description });
            navigate("/tasks");
        } catch (error) {
            const errorMessage = error.data.message;
            setErrorMessage(errorMessage);
        }
    };

    return (
        <FormWrapper>
            <FormContainer>
                <h1>Create a new task</h1>
                <p>Provide information about the task you wish to complete.</p>

                {errorMessage && <ErrorMessage message={errorMessage} />}

                <FormControl fullWidth>
                    <TextField label="Title" placeholder="Title" margin="normal" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label="Description"
                        placeholder="Description"
                        multiline
                        rows="8"
                        margin="normal"
                        variant="outlined"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>

                <Button style={{ marginTop: "10px" }} fullWidth variant="contained" color="primary" onClick={handleSubmitTask}>
                    CREATE TASK
                </Button>
            </FormContainer>
        </FormWrapper>
    );
};

export default CreateTaskPage;
