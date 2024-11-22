import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Ex" element={<Experience></Experience>} />    
      </Routes>
    </Router>
  );
};

export default App;