import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const CardContainer = styled.div`
    margin-bottom: 20px;
`;

const CardTitle = styled.h1`
    margin: 8px 0;
    font-size: 22px;
`;

class Task extends Component {
    deleteTask = () => {
        this.props.tasksStore.deleteTask(this.props.id);
    };

    handleStatusChange = (e) => {
        this.props.tasksStore.updateTaskStatus(this.props.id, e.target.value);
    };

    render() {
        const { title, description } = this.props;

        return (
            <CardContainer>
                <Card>
                    <CardContent>
                        <CardTitle>{title}</CardTitle>
                        {description}
                    </CardContent>
                    <CardActions style={{ padding: "14px" }} disableSpacing>
                        <Grid
                            justify="space-between" // Add it here :)
                            container
                        >
                            <Grid item>
                                <FormControl style={{ width: "140px" }}>
                                    <Select value={this.props.status} onChange={this.handleStatusChange} displayEmpty>
                                        <MenuItem value={"OPEN"}>Open</MenuItem>
                                        <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
                                        <MenuItem value={"DONE"}>Done</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item>
                                <IconButton onClick={this.deleteTask}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </CardContainer>
        );
    }
}

export default Task;
