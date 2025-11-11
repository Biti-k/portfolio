import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Projects from "./Projects.jsx";
import System from "./System.jsx";
import AboutMe from "./about-me.jsx";
import Experience from "./Experience.jsx";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/system" element={<System />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
  </BrowserRouter>
);