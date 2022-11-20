import "./App.css";
import Home from "./components/Home.js";
import React from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AlertState from "./context/AlertState";

function App() {
  return (
    <>
      <NoteState>
        <AlertState>
        <div>
          <BrowserRouter>
            <Navbar />
          <Alert alert={alert}/>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
