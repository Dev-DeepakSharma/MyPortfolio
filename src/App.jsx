import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./portfolio/pages/Home";
import PortfolioLayout from "./portfolio/components/other/PortfolioLayout";
import GoogleGravity from "./portfolio/pages/GoogleGravity";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PortfolioLayout>
              <Home />
            </PortfolioLayout>
          }
        />

        <Route path="/gravity" element={<GoogleGravity/>} />
      </Routes>
    </div>
  );
};

export default App;
