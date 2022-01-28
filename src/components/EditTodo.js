import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { updateTodo } from "../features/todos/todosSlice";

const EditToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({});
    dispatch(
      updateTodo({
        title: data.get("title"),
        desc: data.get("description"),
        isComplete: Boolean(data.getAll("isComplete")),
      })
    );
    navigate("/");
  };

  return (
    <>
      <Container component="main">
        <Box
          component="form"
          margin={3}
          border={1}
          padding={5}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" marginBottom={3}>
            Edit To Do
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex" }}
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Grid item xs={12} sm={6}>
              <TextField
                size="medium"
                required
                id="title"
                label="Title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                type="text"
                value={title}
                name="title"
                inputProps={{ style: { paddingLeft: "10px" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="medium"
                required
                id="description"
                label="Description"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                type="text"
                value={description}
                name="description"
                inputProps={{ style: { paddingLeft: "10px" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="isComplete"
                    name="isComplete"
                    checked={checked}
                    onChange={(event) =>
                      setChecked(Boolean(event.target.checked))
                    }
                  />
                }
                label="Task Complete"
              />
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="medium"
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default EditToDo;
