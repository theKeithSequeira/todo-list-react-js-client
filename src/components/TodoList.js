import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  console.log(todos);

  return (
    <React.Fragment>
      <Container component="main">
        <Paper>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "column" }}
            spacing={2}
          >
            {todos
              ? todos.map((todo) => {
                  return (
                    <>
                      <Grid item>
                        <TodoItem todo={todo} />
                      </Grid>
                    </>
                  );
                })
              : null}
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default ToDoList;
