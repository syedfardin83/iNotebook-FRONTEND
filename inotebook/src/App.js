import "./App.css";
import Home from "./components/Home.js";
import React,{useContext} from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import toast, { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <NoteState>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </NoteState>
      <Toaster/>
    </>
  );
}

export default App;
