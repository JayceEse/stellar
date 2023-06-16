import { Home, Plan, Discover, Check, NoPage, Kitchen } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planatrip" element={<Plan />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/checkflights" element={<Check />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
