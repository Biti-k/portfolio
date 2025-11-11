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
        <Route path="/portfolio" element={<App />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/system" element={<System />} />
        <Route path="/portfolio/about-me" element={<AboutMe />} />
        <Route path="/portfolio/experience" element={<Experience />} />
      </Routes>
  </BrowserRouter>
);