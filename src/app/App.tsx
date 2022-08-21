import "../App.css";
import LandingPage from "app/containers/LandingPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
