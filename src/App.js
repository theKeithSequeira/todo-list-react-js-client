import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { fetchTodos } from "./api";
import ToDoList from "./components/TodoList";
import EditToDo from "./components/EditTodo";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Router>
          <Container component="header">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Link to="/">
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Link>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    To Do List
                  </Typography>

                  <Link to="/edit">
                    <Button
                      sx={{ color: "secondary" }}
                      variant="contained"
                      color="secondary"
                    >
                      Edit To Do List
                    </Button>
                  </Link>
                </Toolbar>
              </AppBar>
            </Box>
          </Container>
          <Routes>
            <Route path="/edit" element={<EditToDo />} />
            <Route path="/" element={<ToDoList />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
