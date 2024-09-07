import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/defaults.css";
import Home from "./pages/Home";
import Note from "./pages/notes/pages/Note";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
