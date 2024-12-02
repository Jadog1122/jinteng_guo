import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";

const App = () => {
  return(
    <Router>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;