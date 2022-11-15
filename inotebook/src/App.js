import "./App.css";
import Home from "./components/Home.js";
import React from "react";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/NoteState";

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
            </Routes>
          </BrowserRouter>
        </div>
      </NoteState>
    </>
  );
}

export default App;
