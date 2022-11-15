import "./App.css";
import Home from "./components/Home.js";
import React from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <div>
          <Alert msg="This is an amazing MERN project"/>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </NoteState>
    </>
  );
}

export default App;
