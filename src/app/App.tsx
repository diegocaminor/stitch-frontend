import "../App.css";
import LandingPage from "app/containers/LandingPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Player from "./containers/Player";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/player" element={<Player />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
