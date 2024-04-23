import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Components/Auth/Routes/workspace";
import Home from "./Components/Home/home";
import WorkSpace from "./Components/Auth/Routes/workspace";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
