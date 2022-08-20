import "../App.css";
import LandingPage from "app/containers/LandingPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import PageNotFound from "app/containers/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<LandingPage />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
