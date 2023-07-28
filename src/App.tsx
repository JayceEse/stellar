import React, { lazy } from "react";
import { StandardLayout } from "./layouts/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./Pages/Home/home"));
const Plan = lazy(() => import("./Pages/Plan/plan"));
const Discover = lazy(() => import("./Pages/Discover/discover"));
const Check = lazy(() => import("./Pages/Check/check"));
const NoPage = lazy(() => import("./Pages/nopage/noPage"));
const Kitchen = lazy(() => import("./Pages/Kitchen_sink/KitchenSink"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<StandardLayout page={<Home />} />} />
          <Route path="/home" element={<StandardLayout page={<Home />} />} />
          <Route
            path="/planatrip"
            element={<StandardLayout page={<Plan />} />}
          />
          <Route
            path="/discover"
            element={<StandardLayout page={<Discover />} />}
          />
          <Route
            path="/checkflights"
            element={<StandardLayout page={<Check />} />}
          />
          <Route path="*" element={<StandardLayout page={<NoPage />} />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
